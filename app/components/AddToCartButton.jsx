import {CartForm} from '@shopify/hydrogen';

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 * }}
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            style={{
              fontSize: '25px',
              fontWeight: 'bold',
              color: 'white',
              textDecoration: 'none',
              backgroundColor: 'blue',
              borderRadius: '35px',
             
              
              margin: '0 auto',
              display: 'block',
              cursor: 'pointer',
              border: 'none',
              // Responsive width for mobile
              maxWidth: '100%',
                marginTop: '20px',
              height: '50px',
            }}
          >
            {children}
          </button>
          <style>{`
            @media (max-width: 760px) {
              button[type="submit"] {
                width: 300px ;
                marginTop: 20px !important;
              }
            }
          `}</style>
        </>
      )}
    </CartForm>
  );
}

/** @typedef {import('@remix-run/react').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */
