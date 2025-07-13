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
                 backgroundColor:'#C1D2FF',
                    padding: '10px',
                    borderRadius: '8px',
                    marginTop: '20px',
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
      
        
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'ReservationWide',
        color: 'blue',
        textAlign: 'center', // Centraliza horizontalmente o texto
        fontWeight: 'bold', // Deixa a letra mais grossa
        fontSize: '50px', // Aumenta o tamanho da letra
      }}
    >
      <br />
      <p className='empty-cart-text'>Carrinho está vazio</p>
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
