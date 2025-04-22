import {useOptimisticCart} from '@shopify/hydrogen';
import {Link} from '@remix-run/react';
import {useAside} from '~/components/Aside';
import {CartLineItem} from '~/components/CartLineItem';
import {CartSummary} from './CartSummary';

/**
 * The main cart component that displays the cart items and summary.
 * It is used by both the /cart route and the cart aside dialog.
 * @param {CartMainProps}
 */
export function CartMain({layout, cart: originalCart}) {
  // The useOptimisticCart hook applies pending actions to the cart
  // so the user immediately sees feedback when they modify the cart.
  const cart = useOptimisticCart(originalCart);

  const linesCount = Boolean(cart?.lines?.nodes?.length || 0);
  const withDiscount =
    cart &&
    Boolean(cart?.discountCodes?.filter((code) => code.applicable)?.length);
  const className = `cart-main ${withDiscount ? 'with-discount' : ''}`;
  const cartHasItems = cart?.totalQuantity && cart?.totalQuantity > 0;

  return (
    <div className={className}>
      <CartEmpty hidden={linesCount} layout={layout} />
      <div className="cart-details">
        <div aria-labelledby="cart-lines">
          <ul style={{padding: 0, margin: 0}}>
            {(cart?.lines?.nodes ?? []).map((line) => (
              <li key={line.id} style={{listStyle: 'none'}}>
                <div
                  className="cart-line-item-card"
                  style={{
                    transition: 'background-color 0.3s ease',
                    padding: '10px',
                    borderRadius: '8px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#C5CAFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <CartLineItem line={line} layout={layout} />
                </div>
              </li>
            ))}
          </ul>

          {cartHasItems && <CartSummary cart={cart} layout={layout} />}
        </div>
      </div>
    </div>
  );
}

/**
 * @param {{
 *   hidden: boolean;
 *   layout?: CartMainProps['layout'];
 * }}
 */
function CartEmpty({hidden = false}) {
  const {close} = useAside();
  return (
    <div
      hidden={hidden}
      style={{
        marginTop: '80%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'blue',
        textAlign: 'center', // Centraliza horizontalmente o texto
        fontWeight: 'bold', // Deixa a letra mais grossa
        fontSize: '50px', // Aumenta o tamanho da letra
      }}
    >
      <br />
      <p style={{fontSize: '40px'}}>Car is empty</p>
      <br />
    </div>
  );
}

/** @typedef {'page' | 'aside'} CartLayout */
/**
 * @typedef {{
 *   cart: CartApiQueryFragment | null;
 *   layout: CartLayout;
 * }} CartMainProps
 */

/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
