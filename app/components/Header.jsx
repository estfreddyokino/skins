import {Suspense, useState, useEffect} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import 'app/styles/Header.css';

/**
 * Hook para detectar se é mobile ou desktop
 */
function useViewport() {
  const [viewport, setViewport] = useState('desktop');

  useEffect(() => {
    function determineViewport() {
      if (typeof window !== 'undefined') {
        setViewport(window.innerWidth <= 768 ? 'mobile' : 'desktop');
      }
    }

    determineViewport();

    window.addEventListener('resize', determineViewport);
    return () => window.removeEventListener('resize', determineViewport);
  }, []);

  return viewport;
}

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;
  const viewport = useViewport();

  return (
    <header
      className="header-wrapper"
    >
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} className={"header-menu-img-logo"}end>
        <img src="/image/headerLogo.png" alt="Logo"/>
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport={viewport}
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} viewport={viewport} />
    </header>
  );
}

/**
 * @param {{
 *   menu: HeaderProps['header']['menu'];
 *   primaryDomainUrl: HeaderProps['header']['shop']['primaryDomain']['url'];
 *   viewport: Viewport;
 *   publicStoreDomain: HeaderProps['publicStoreDomain'];
 * }}
 */
export function HeaderMenu({
  menu,
  primaryDomainUrl,
  viewport,
  publicStoreDomain,
}) {
  const className = `header-menu-${viewport}`;
  const {close} = useAside();

  return (
    <nav
      className={'header-item-menu-wrapper'}
      role="navigation"
    >
      {[
        {title: 'HOME', url: '/'},
        {title: 'SHOP', url: '/collections/frontpage'},
        {title: 'SOBRE', url: '/sobre'},
      ].map(({title, url}) => (
        <NavLink
          className="header-item-menu"
          end
          key={url}
          onClick={close}
          prefetch="intent"
          to={url}
        >
          {title}
          <span></span>
        </NavLink>
      ))}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'> & {viewport: Viewport}}
 */
function HeaderCtas({isLoggedIn, cart, viewport}) {
  return (
    <nav className="header-car" role="navigation">
      <HeaderMenuMobileToggle />
      <CartToggle cart={cart} viewport={viewport} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
  return null;
}

/**
 * @param {{count: number | null, viewport: Viewport}}
 */
function CartBadge({count, viewport}) {
  const {open} = useAside();
  const {publish, shop, cart, prevCart} = useAnalytics();

  return (
    <a
      href="/cart"
      onClick={(e) => {
        e.preventDefault();
        open('cart');
        publish('cart_viewed', {
          cart,
          prevCart,
          shop,
          url: window.location.href || '',
        });
      }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '5px',
      }}
    >
      <img
        src="/image/carrinho.png"
        alt="Cart"
        style={{
          width: viewport === 'mobile' ? '20px' : '30px',
          height: viewport === 'mobile' ? '20px' : '30px',
          objectFit: 'contain',
        }}
      />
      {count > 0 && (
        <span
          style={{
            color: 'blue',
            fontSize: '10px',
            fontWeight: 'bolder',
          }}
        >
          {count}
        </span>
      )}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'> & {viewport: Viewport}}
 */
function CartToggle({cart, viewport}) {
  return (
    <Suspense fallback={<CartBadge count={null} viewport={viewport} />}>
      <Await resolve={cart}>
        <CartBanner viewport={viewport} />
      </Await>
    </Suspense>
  );
}

function CartBanner({viewport}) {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} viewport={viewport} />;
}

const FALLBACK_HEADER_MENU = {
  id: 'gid://shopify/Menu/199655587896',
  items: [
    {
      id: 'gid://shopify/MenuItem/SHOP',
      resourceId: null,
      tags: [],
      title: 'SHOP',
      type: 'HTTP',
      url: '/collections/all',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/BLOG',
      resourceId: null,
      tags: [],
      title: 'Blog',
      type: 'HTTP',
      url: '/blogs/journal',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/POLICIES',
      resourceId: null,
      tags: [],
      title: 'Policies',
      type: 'HTTP',
      url: '/policies',
      items: [],
    },
    {
      id: 'gid://shopify/MenuItem/SOBRE',
      resourceId: null,
      tags: [],
      title: 'SOBRE',
      type: 'PAGE',
      url: '/teste',
      items: [],
    },
  ],
};

/**
 * @param {{
 *   isActive: boolean;
 *   isPending: boolean;
 * }}
 */
function activeLinkStyle({isActive, isPending}) {
  return {
    fontWeight: isActive ? 'bold' : undefined,
    color: isPending ? 'grey' : 'black',
  };
}

/** @typedef {'desktop' | 'mobile'} Viewport */
/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('@shopify/hydrogen').CartViewPayload} CartViewPayload */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
