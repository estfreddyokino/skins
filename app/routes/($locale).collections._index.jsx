import {useLoaderData, Link} from '@remix-run/react';
import {getPaginationVariables, Image} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {useNavigate} from '@remix-run/react';
/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 * @param {LoaderFunctionArgs}
 */
async function loadCriticalData({context, request}) {
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 4,
  });

  const [{collections}] = await Promise.all([
    context.storefront.query(COLLECTIONS_QUERY, {
      variables: paginationVariables,
    }),
    // Add other queries here, so that they are loaded in parallel
  ]);

  return {collections};
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 * @param {LoaderFunctionArgs}
 */
function loadDeferredData({context}) {
  return {};
}

export default function Collections() {
  /** @type {LoaderReturnData} */
  const {collections} = useLoaderData();

  return (
    <div className="collections">
      
      <PaginatedResourceSection
        connection={collections}
        
      >
        {({node: collection, index}) => (
          <CollectionItem
            key={collection.id}
            collection={collection}
            index={index}
            sty
          />
        )}
      </PaginatedResourceSection>
    </div>
  );
}

/**
 * @param {{
*   collection: CollectionFragment;
*   index: number;
* }}
*/
function CollectionItem({collection, index}) {
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
      margin: '10px 5px', // <- aqui
      
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

const COLLECTIONS_QUERY = `#graphql
  fragment Collection on Collection {
    id
    title
    handle
    image {
      id
      url
      altText
      width
      height
    }
  }
  query StoreCollections(
    $country: CountryCode
    $endCursor: String
    $first: Int
    $language: LanguageCode
    $last: Int
    $startCursor: String
  ) @inContext(country: $country, language: $language) {
    collections(
      first: $first,
      last: $last,
      before: $startCursor,
      after: $endCursor
    ) {
      nodes {
        ...Collection
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @typedef {import('storefrontapi.generated').CollectionFragment} CollectionFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
