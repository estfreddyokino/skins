import {Image} from '@shopify/hydrogen';

/**
 * @param {{
 *   collection: CollectionFragment;
 *   index?: number;
 * }}
 */
export function CollectionButton({collection, index = 0}) {
  return (
    <div style={{padding: '10px', display: 'inline-block'}}>
      <button
        type="button"
        onClick={() => (window.location.href = `/collections/${collection.handle}`)}
        className="p-2 bg-blue-500 text-white text-sm hover:bg-blue-600 mt-10"
        style={{
          fontSize: '25px',
          display: 'inline-block',
          width: '200px',
          height: '60px',
          borderRadius: '25px',
          overflow: 'hidden',
          textAlign: 'center',
          verticalAlign: 'top',
          margin: '10px 5px',
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
