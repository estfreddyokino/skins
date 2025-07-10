import {useLoaderData, Link} from '@remix-run/react';
import {getPaginationVariables, Image, Money} from '@shopify/hydrogen';
import {useVariantUrl} from '~/lib/variants';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {useState, useEffect} from 'react';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

export const meta = () => {
  return [{title: `Genskins | Shop`}];
};

export async function loader(args) {
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

async function loadCriticalData({context, request}) {
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {pageBy: 8});

  const [{products}] = await Promise.all([
    storefront.query(CATALOG_QUERY, {variables: {...paginationVariables}}),
  ]);

  return {products};
}

function loadDeferredData({context}) {
  return {};
}

export default function Collection() {
  const {products} = useLoaderData();

  // Inverte a ordem dos produtos
  const reversedProducts = {
    ...products,
    nodes: products.nodes.slice().reverse(),
  };

  return (
    <div className="collection">
      <PaginatedResourceSection
        connection={reversedProducts}
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
      } else {
        setTitleImage(null);
      }
    }
  }, [product.title]);
  const ulClass =
    'list-inside   text-base md:text-[19px] font-bold';
  return (
    <div className="flex flex-col md:flex-row bg-[#f5f6f8] rounded-3xl p-2 shadow-lg relative overflow-hidden max-w-7xl mx-[30px] my-10">
      {/* Imagem + Navegação */}
      <div className="flex flex-col items-center justify-center relative w-full md:w-[50%]">
        <div className="flex items-center justify-center relative">
          {images.length > 1 && (
            <button
              onClick={prevImage}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-200 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  d="M23.5 11.5 L15.5 19.5 L23.5 27.5"
                  stroke="rgb(0, 64, 255)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          <div className="w-full  flex items-center justify-center">
            {currentImage && (
              <Image
                key={currentImage.id}
                alt={currentImage.altText || product.title}
                aspectRatio="1/1"
                data={currentImage}
                loading={loading}
                sizes="(min-width: 45em) 600px, 200vw"
                style={{borderRadius: '15px'}}
              />
            )}
          </div>

          {images.length > 1 && (
            <button
              onClick={nextImage}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full hover:bg-gray-200 z-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                fill="none"
                viewBox="0 0 40 40"
              >
                <path
                  d="M16.5 11.5 L24.5 19.5 L16.5 27.5"
                  stroke="rgb(0, 64, 255)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Conteúdo */}
      <div className="w-full md:w-[50%] mt-10 md:mt-0 md:ml-10 text-blue-600 px-[20px]">
        <div className="flex flex-col justify-center">
          {/* 1. Título */}
          <div className="order-1 md:order-none flex justify-start">
            {titleImage ? (
              <img
                src={titleImage}
                alt={product.title}
                className="h-12 object-contain mb-2"
              />
            ) : (
              <h2 className="text-[40px] font-bold text-blue-800 mb-6">
                {product.title}
              </h2>
            )}
          </div>

          {/* 2. Descrição final */}
          <p className="order-2 md:order-6 text-[20px] font-bold mb-6 text-[#949BDC]">
            {descriptionParts.descFinal}
          </p>

          {/* 3. Preço */}
          <h3 className="order-3 md:order-7 text-3xl font-bold text-blue-800 mb-6">
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            }).format(Number(product.priceRange.minVariantPrice.amount))}
          </h3>

          {/* 4. Descrição de introdução */}
          <p
            className="order-4 md:order-2 text-[20px] font-bold mb-4 text-justify"
            style={{color: '#001AFF'}}
          >
            {descriptionParts.descIntro}
          </p>

          {/* 5. Linha divisória */}
          <div
            className="order-5"
            style={{
              width: '100%',
              borderTop: '2px solid rgb(0,64,255)',
            }}
          />

          {/* 6. Lista */}
          <div class="order-6">
            <ul
              className={ulClass}
              style={{
                listStyleType: 'disc',
                marginLeft: '45px',

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
          </div>

          {/* 7. Segunda linha divisória */}
          <div
            className="order-7"
            style={{
              width: '100%',
              borderTop: '2px solid rgb(0,64,255)',
            }}
          />

          {/* 8. Botão e preço juntos (para alinhar bem) */}
          <div className="order-8 md:order-8 flex justify-between items-center">
            {/* já tem o preço lá em cima, aqui não precisa repetir */}
            <div className="md:hidden">
              {/* Escondido no desktop, visível no mobile */}
              <AddToCartButton
                lines={[
                  {
                    merchandiseId: product.variants?.nodes?.[0]?.id,
                    quantity: 1,
                  },
                ]}
                onClick={handleAddToCart}
                className="text-[25px] font-bold text-white bg-blue-600 rounded-[35px] px-5 py-2.5 w-[180px] mx-auto block cursor-pointer border-0 hover:bg-blue-700 transition"
                style={{width: '180px', height: '50px'}}
              >
                SHOP
              </AddToCartButton>
            </div>

            <div className="hidden md:block" style={{margin: 'auto'}}>
              {/* Escondido no mobile, visível no desktop */}
              <AddToCartButton
                lines={[
                  {
                    merchandiseId: product.variants?.nodes?.[0]?.id,
                    quantity: 1,
                  },
                ]}
                onClick={handleAddToCart}
                className="text-[25px] font-bold text-white bg-blue-600 rounded-[35px] px-5 py-2.5 w-[180px] mx-auto block cursor-pointer border-0 hover:bg-blue-700 transition"
              >
                SHOP
              </AddToCartButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

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
    images(first: 6) {
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

const CATALOG_QUERY = `#graphql
  query Catalog(
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    products(first: $first, last: $last, before: $startCursor, after: $endCursor) {
      nodes {
        ...ProductItem
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
  ${PRODUCT_ITEM_FRAGMENT}
`;

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').ProductItemFragment} ProductItemFragment */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
