import {redirect} from '@shopify/remix-oxygen';
import {useLoaderData, Link} from '@remix-run/react';
import {
  getPaginationVariables,
  Image,
  Money,
  Analytics,
} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {CollectionButton} from '~/components/CollectionButton';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';
import {useState, useEffect} from 'react';

/**
 * @type {MetaFunction<typeof loader>}
 */
export const meta = ({data}) => {
  return [{title: `Genskins | ${data?.collection.title ?? ''} Collection`}];
};

/**
 * @param {LoaderFunctionArgs} args
 */
export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, params, request}) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {pageBy: 8});

  if (!handle) {
    throw redirect('/collections');
  }

  const [{collection}, {collections}] = await Promise.all([
    storefront.query(COLLECTION_QUERY, {
      variables: {handle, ...paginationVariables},
    }),
    storefront.query(COLLECTIONS_QUERY, {
      variables: {first: 2},
    }),
  ]);

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {status: 404});
  }

  return {
    collection,
    otherCollections: collections.nodes,
  };
}

function loadDeferredData({context}) {
  return {};
}

export default function Collection() {
  const {collection, otherCollections} = useLoaderData();

  return (
    <div className="collection">
      <p className="collection-description">{collection.description}</p>

      {/* <div className="my-8 flex justify-center">
        <div className="inline-flex flex-wrap justify-center">
          {otherCollections.map((collection, index) => (
            <CollectionButton
              key={collection.id}
              collection={collection}
              index={index}
            />
          ))}
        </div>
      </div> */}

      <PaginatedResourceSection
        connection={collection.products}
        resourcesClassName="products-grid"
      >
        {({node: product, index}) => (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        )}
      </PaginatedResourceSection>

      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </div>
  );
}

function ProductItem({product, loading}) {
  const {open} = useAside();
  const handleAddToCart = () => open('cart');
  const variantUrl = useVariantUrl(product.handle);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = product.images?.nodes || [];
  const currentImage = images[currentImageIndex];

  const [descriptionParts, setDescriptionParts] = useState({
    descIntro: '',
    li1: '',
    li2: '',
    li3: '',
    descFinal: '',
  });
  const [titleImage, setTitleImage] = useState(null);

  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const parseDescription = (descriptionHtml) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = descriptionHtml;
    const firstParagraph = tempDiv.querySelector('p');
    const listItems = tempDiv.querySelectorAll('ul li');
    const lastParagraph = tempDiv.querySelectorAll('p')[1];
    return {
      descIntro: firstParagraph?.textContent || '',
      li1: listItems[0]?.textContent || '',
      li2: listItems[1]?.textContent || '',
      li3: listItems[2]?.textContent || '',
      descFinal: lastParagraph?.textContent || '',
    };
  };

  useEffect(() => {
    if (product.descriptionHtml) {
      setDescriptionParts(parseDescription(product.descriptionHtml));
    }
  }, [product.descriptionHtml]);

  useEffect(() => {
    if (product.title) {
      const titleLower = product.title.toLowerCase();
      if (titleLower === 'gen-sea') {
        setTitleImage('/image/gen-sea.png');
      } else if (titleLower === 'gen-stars') {
        setTitleImage('/image/gen-starts.png');
      } else if (titleLower === 'happy-gen') {
        setTitleImage('/image/happy-gen.png');
      } else if (titleLower === 'bag') {
        setTitleImage('/image/Bag1.png');
      } else if (titleLower === 'genzinho') {
        setTitleImage('/image/genzinho.png');
      } else {
        setTitleImage(null);
      }
    }
  }, [product.title]);

  // Helper classes for responsive font sizes
  // You can adjust these Tailwind classes as needed
  const titleClass =
    'text-[36px] md:text-[60px] font-bold text-blue-800 mb-6';
  const descIntroClass =
    'text-lg md:text-2xl mb-4 text-justify text-[#948BDC] font-bold';
  const ulClass =
    'list-inside pl-6 space-y-2 mb-4 text-base md:text-[19px] font-bold';
  const descFinalClass =
    'text-lg md:text-[25px] font-bold mb-6 text-[#949BDC]';

  return (
    <div className="flex flex-col md:flex-row bg-[#f5f6f8] rounded-3xl shadow-lg relative overflow-hidden mx-2 md:mx-40 my-10">
      <div className="flex flex-col items-center justify-center relative w-full md:w-[50%]">
        <div className="flex items-center justify-center relative">
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute right-80 top-1/2 transform -translate-y-1/2 bg-[#f5f6f8] p-2 rounded-full text-blue-600 hover:bg-gray-200 z-10"
              style={{fontSize: '30px'}}
            >
              ❮
            </button>
          )}

          <div className="w-full max-w-[300px] md:max-w-[400px] h-[350px] md:h-[500px] flex items-center justify-center">
            {currentImage && (
              <Image
                key={currentImage.id}
                alt={currentImage.altText || product.title}
                aspectRatio="1/2"
                data={currentImage}
                loading={loading}
                className="object-contain h-full"
              />
            )}
          </div>

          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute left-80 top-1/2 transform -translate-y-1/2 bg-[#f5f6f8] p-2 rounded-full text-blue-600 hover:bg-gray-200 z-10"
              style={{fontSize: '30px'}}
            >
              ❯
            </button>
          )}
        </div>
      </div>

      <div className="w-full md:w-[100%] mt-10 md:mt-0 md:ml-12 flex flex-col justify-start text-blue-600">
        <div className="flex justify-start" style={{marginLeft: '20px'}}>
          {titleImage ? (
            <img
              src={titleImage}
              alt={product.title}
              className="h-10 md:h-12 object-contain mb-2"
            />
          ) : (
            <h2 className={titleClass}>
              {product.title}
            </h2>
          )}
        </div>

        <p
          className={descIntroClass}
          style={{
            lineHeight: '1.5',
            marginTop: '20px',
            marginBottom: '20px',
            marginLeft: '25px',
            marginRight: '25px',
            fontFamily: 'ReservationWide, sans-serif',
            fontStyle: 'normal',
          }}
        >
          {descriptionParts.descIntro}
        </p>

        <div
          style={{
            width: '50%',
            borderTop: '2px solid rgb(0,64,255)',
            marginLeft: '25px',
          }}
        />

        <ul
          className={ulClass}
          style={{
            listStyleType: 'disc',
            marginLeft: '45px',
            marginTop: '20px',
            marginBottom: '20px',
            fontFamily: 'ReservationWide, sans-serif',
            fontStyle: 'normal',
          }}
        >
          {descriptionParts.li1 && (
            <li className="marker:text-[1.5em]">{descriptionParts.li1}</li>
          )}
          {descriptionParts.li2 && (
            <li className="marker:text-[1.5em]">{descriptionParts.li2}</li>
          )}
          {descriptionParts.li3 && (
            <li className="marker:text-[1.5em]">{descriptionParts.li3}</li>
          )}
        </ul>

        <div
          style={{
            width: '50%',
            borderTop: '2px solid rgb(0,64,255)',
            marginLeft: '25px',
          }}
        />

        <p
          className={descFinalClass}
          style={{
            lineHeight: '1.5',
            marginTop: '40px',
            marginLeft: '25px',
            fontFamily: 'ReservationWide, sans-serif',
            fontStyle: 'normal',
          }}
        >
          {descriptionParts.descFinal}
        </p>

        <div
          className="flex flex-col md:flex-row justify-between items-center"
          style={{marginTop: '50px', marginLeft: '25px', marginRight: '25px', marginBottom: '20px'}}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
            <Money data={product.priceRange.minVariantPrice} />
          </h3>

          <AddToCartButton
            lines={[
              {
                merchandiseId: product.variants?.nodes?.[0]?.id,
                quantity: 1,
              },
            ]}
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 md:px-10 py-3 rounded-full hover:bg-blue-700 transition text-center w-max text-lg md:text-[20px] font-bold"
          >
            SHOP
          </AddToCartButton>
        </div>
      </div>
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
    $language: LanguageCode
    $first: Int
  ) @inContext(country: $country, language: $language) {
    collections(first: $first) {
      nodes {
        ...Collection
      }
    }
  }
`;

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    descriptionHtml
    featuredImage {
      id
      altText
      url
      width
      height
    }
    images(first: 5) {
      nodes {
        id
        altText
        url
        width
        height
      }
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
    variants(first: 1) {
      nodes {
        id
      }
    }
  }
`;

const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first
        last: $last
        before: $startCursor
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
