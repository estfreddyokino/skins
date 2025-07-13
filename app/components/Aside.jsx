import {createContext, useContext, useEffect, useState} from 'react';

/**
 * A side bar component with Overlay
 * @example
 * ```jsx
 * <Aside type="search" heading="SEARCH">
 *  <input type="search" />
 *  ...
 * </Aside>
 * ```
 * @param {{
 *   children?: React.ReactNode;
 *   type: AsideType;
 *   heading: React.ReactNode;
 * }}
 */
export function Aside({children, heading, type}) {
  const {type: activeType, close} = useAside();
  const expanded = type === activeType;

  useEffect(() => {
    const abortController = new AbortController();

    if (expanded) {
      document.addEventListener(
        'keydown',
        function handler(event) {
          if (event.key === 'Escape') {
            close();
          }
        },
        {signal: abortController.signal},
      );
    }
    return () => abortController.abort();
  }, [close, expanded]);

  return (
    <div
      aria-modal
      className={`overlay ${expanded ? 'expanded' : ''}`}
      role="dialog"
    >
      <button
        style={{color: 'blue'}}
        className="close-outside"
        onClick={close}
      />
      <aside>
        <header style={{position: 'relative'}}>
          <h1 style={{color: 'blue'}}>
            {type === 'cart' ? 'Carrinho' : heading}
          </h1>

          <button
            style={{
              textDecoration: 'none',
              color: 'blue',
              fontSize: '2rem',
              padding: '1rem',
              width: '3.5rem',
              height: '3.5rem',
              position: 'absolute',
              top: '20px',
              left: '-80px', 
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '50%', 
              backgroundColor: '#808080F5',
              color: 'white', 
            }}
            className="close reset"
            onClick={close}
            aria-label="Close"
          >
            x
          </button>
        </header>

        <main>{children}</main>
      </aside>
    </div>
  );
}

const AsideContext = createContext(null);

Aside.Provider = function AsideProvider({children}) {
  const [type, setType] = useState('closed');

  return (
    <AsideContext.Provider
      value={{
        type,
        open: setType,
        close: () => setType('closed'),
      }}
    >
      {children}
    </AsideContext.Provider>
  );
};

export function useAside() {
  const aside = useContext(AsideContext);
  if (!aside) {
    throw new Error('useAside must be used within an AsideProvider');
  }
  return aside;
}

/** @typedef {'search' | 'cart' | 'mobile' | 'closed'} AsideType */
/**
 * @typedef {{
 *   type: AsideType;
 *   open: (mode: AsideType) => void;
 *   close: () => void;
 * }} AsideContextValue
 */

/** @typedef {import('react').ReactNode} ReactNode */
