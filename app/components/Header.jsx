import {Suspense} from 'react';
import {Await, NavLink, useAsyncValue} from '@remix-run/react';
import {useAnalytics, useOptimisticCart} from '@shopify/hydrogen';
import {useAside} from '~/components/Aside';
import 'app/styles/Header.css';

/**
 * @param {HeaderProps}
 */
export function Header({header, isLoggedIn, cart, publicStoreDomain}) {
  const {shop, menu} = header;
  return (
    <header className="header">
      <NavLink prefetch="intent" to="/" style={activeLinkStyle} end>
        <img
          src="/image/headerLogo.png"
          alt="Logo"
          style={{height: '100%', width: '100%'}}
        />
      </NavLink>
      <HeaderMenu
        menu={menu}
        viewport="desktop"
        primaryDomainUrl={header.shop.primaryDomain.url}
        publicStoreDomain={publicStoreDomain}
      />
      <HeaderCtas isLoggedIn={isLoggedIn} cart={cart} />
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

  if (viewport === 'mobile') {
    return null; // Do not render anything for mobile
  }

  return (
    <nav
      className={className}
      role="navigation"
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the items horizontally
        alignItems: 'center', // Center the items vertically
        marginLeft: viewport === 'desktop' ? '30%' : '0',
      }}
    >
      {[
        { title: 'HOME', url: '/' },
        { title: 'SHOP', url: '/collections/all' },
        { title: 'SOBRE', url: '/sobre' },
      ].map(({ title, url }) => {
        const isHome = url === '/';
        const isShop = url === '/collections/all';
        const isSobre = url === '/sobre';

        const highlightStyle = isHome || isShop || isSobre;

        return (
          <NavLink
            className="header-menu-item"
            end
            key={url}
            onClick={close}
            prefetch="intent"
            style={({ isActive, isPending }) => ({
              fontWeight: highlightStyle ? 'bold' : undefined,
              color: highlightStyle ? 'blue' : isPending ? 'grey' : 'black',
              textTransform: highlightStyle ? 'uppercase' : undefined,
              textDecoration: 'none',
              fontSize: highlightStyle ? '25px' : undefined,
              marginLeft: highlightStyle ? '10px' : undefined,
            })}
            to={url}
          >
            {title}
          </NavLink>
        );
      })}
    </nav>
  );
}

/**
 * @param {Pick<HeaderProps, 'isLoggedIn' | 'cart'>}
 */
function HeaderCtas({isLoggedIn, cart}) {
  return (
    <nav className="header-ctas" role="navigation">
      <HeaderMenuMobileToggle />
      <CartToggle cart={cart} />
    </nav>
  );
}

function HeaderMenuMobileToggle() {
 
}

/* function SearchToggle() {
  const {open} = useAside();
  return (
    <button className="reset" onClick={() => open('search')}>
      Search
    </button>
  );
} */

/**
 * @param {{count: number | null}}
 */
function CartBadge({count}) {
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
      style={{display: 'flex', alignItems: 'center', gap: '5px'}}
    >
      <img
        src="/image/carrinho.png"
        alt="Cart"
        style={{width: '100%', height: '100'}}
      />
      {count > 0 && (
        <span style={{color: 'blue', fontSize: '10px', fontWeight: 'bolder'}}>
          {count}
        </span>
      )}
    </a>
  );
}

/**
 * @param {Pick<HeaderProps, 'cart'>}
 */
function CartToggle({cart}) {
  return (
    <Suspense fallback={<CartBadge count={null} />}>
      <Await resolve={cart}>
        <CartBanner />
      </Await>
    </Suspense>
  );
}

function CartBanner() {
  const originalCart = useAsyncValue();
  const cart = useOptimisticCart(originalCart);
  return <CartBadge count={cart?.totalQuantity ?? 0} />;
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
