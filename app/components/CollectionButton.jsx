import {Image} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';

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
 * @param {{
 *   collection: CollectionFragment;
 *   index?: number;
 * }}
 */
export function CollectionButton({collection, index = 0}) {
  const viewport = useViewport();  // Hook para verificar se é mobile ou desktop

  return (
    <div style={{padding: '10px', display: 'inline-block'}}>
      <button
        type="button"
        onClick={() => (window.location.href = `/collections/${collection.handle}`)}
        className="p-2 bg-blue-500 text-white text-sm hover:bg-blue-600 mt-10"
        style={{
          fontSize: '25px',
          display: 'inline-block',
          width: viewport === 'mobile' ? '150px' : '200px',  // Altera a largura conforme a viewport
          height: '60px',
          borderRadius: '25px',
          overflow: 'hidden',
          textAlign: 'center',
          verticalAlign: 'top',
          margin: '10px 15px', // <- aqui
        }}
      >
        {collection?.image && (
          <Image
            alt={collection.image.altText || collection.title}
            aspectRatio="1/1"
            data={collection.image}
            loading={index < 3 ? 'eager' : undefined}
            sizes="(min-width: 45em) 400px, 100vw"
          />
        )}
        <h5 className="mt-2">{collection.title}</h5>
      </button>
    </div>
  );
}
