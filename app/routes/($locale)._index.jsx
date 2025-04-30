import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense, useState, useEffect} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import '../styles/background.css';

export const meta = () => {
  return [{title: 'Genskins | Home'}, {icon: '/image/favicon.png'}];
};

export async function loader({context}) {
  const deferredData = loadDeferredData(context);
  const criticalData = await loadCriticalData(context);

  return {...deferredData, ...criticalData};
}

async function loadCriticalData(context) {
  const [{collections}] = await Promise.all([
    context.storefront.query(FEATURED_COLLECTION_QUERY),
  ]);
  return {
    featuredCollection: collections.nodes[0],
  };
}

function loadDeferredData(context) {
  const recommendedProducts = context.storefront
    .query(RECOMMENDED_PRODUCTS_QUERY)
    .catch((error) => {
      console.error(error);
      return null;
    });

  return {
    recommendedProducts,
  };
}

function Accordion({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-t border-white py-3 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center text-left text-white text-xl sm:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-blue-300' : ''}`}
        >
          +
        </span>
      </button>
      <div
        className={`text-base sm:text-lg mt-2 text-white transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

function useScrollTyping(text, triggerPoint = 100) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('forward');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > triggerPoint) {
        setDirection('forward');
      } else {
        setDirection('backward');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [triggerPoint]);

  useEffect(() => {
    let timeout;
    if (direction === 'forward' && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 100);
    } else if (direction === 'backward' && index > 0) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      }, 50);
    }
    return () => clearTimeout(timeout);
  }, [index, direction, text]);

  return displayedText;
}

function HoverImageCard({ image1, image2, alt, title, title2, title3 }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setIsHovered((prev) => !prev);
    }
  };

  return (
    <div
      className="w-[400px] sm:w-[450px] lg:w-[500px] cursor-pointer transition-transform hover:scale-105 overflow-hidden rounded-3xl shadow-xl bg-white relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggle}
    >
      {/* Imagem */}
      <div className="aspect-[3/4] w-full h-full">
        <img
          src={isHovered ? image2 : image1}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto sobreposto */}
      <div
        className="absolute bottom-0 w-full text-blue text-xl text-left py-4 px-4 font-semibold"
        style={{ color: 'blue', fontSize: '30px' }}
      >
        {title}
      </div>
      <div
        className="absolute bottom-0 w-full text-blue text-xl text-right py-4 px-4 font-semibold"
        style={{ color: 'blue', fontSize: '30px' }}
      >
        {title2}
      </div>
      <div
        className="absolute bottom-0 w-full text-blue text-xl text-left py-4 px-4 font-semibold"
        style={{ color: 'blue', fontSize: '30px' }}
      >
        {title3}
      </div>
    </div>
  );
}

export default function Homepage() {
  const data = useLoaderData();
  const phrase = useScrollTyping('Para todos os tipos de pele', 50);

  return (
    <div className="bg-image-full">
      <section className="relative w-full min-h-screen overflow-hidden">
        {/* Texto central */}
        <section className="w-full py-20 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-8/12">
            <img
              src="/image/homeGenskins.png"
              alt="Modelo com adesivos"
              className="rounded-[30px] w-full object-cover mt-20 sm:mt-40"
            />
          </div>
        </section>

        {/* Elementos visuais - responsivos */}
        <img
          src="/image/estrelaamarela.png"
          className="absolute top-8 right-4 w-20 sm:w-32"
        />
        <img
          src="/image/estrelaazul.png"
          className="absolute top-10 left-10 w-16 sm:w-24"
        />
        <img
          src="/image/rotoFelizAzul.png"
          className="absolute top-14 left-1/4 w-20 sm:w-36"
        />
        <img
          src="/image/peixeAzulDereita.png"
          className="absolute top-[600px] right-1/3 w-16 sm:w-32"
        />
        <img
          src="/image/solAmarelo.png"
          className="absolute top-2 right-1/2 w-32 sm:w-52"
        />
      </section>

      <div className="w-full flex items-center justify-center min-h-[400px] sm:min-h-[500px] lg:min-h-[500px] relative">
        {/* Texto real com digitação */}
        <div className="absolute text-white text-4xl sm:text-6xl md:text-8xl lg:text-[400px] text-center font-light px-4 leading-none">
          {phrase}
        </div>

        {/* Texto "fantasma" para manter altura já alocada */}
        <div className="invisible text-white text-4xl sm:text-6xl md:text-8xl lg:text-[400px] text-center font-light px-4 leading-none">
          Para todos os tipos de pele
        </div>
      </div>

      {/* Seção de cards */}
      <div className="w-full flex flex-col items-center py-6 px-4 sm:px-8">
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-6 w-full">
          <HoverImageCard
            image1="/image/imagemHome1-1.png"
            image2="/image/imagemHome1-2.png"
            alt="Card 1"
            title="Gen-starts"
            title2="R$ 49,00"
          />
          <HoverImageCard
            image1="/image/imagemHome2-1.png"
            image2="/image/imagemHome2-2.png"
            alt="Card 2"
            title="Gen-sea"
            title2="R$ 49,00"
          />
          <HoverImageCard
            image1="/image/imagemHome3-1.png"
            image2="/image/imagemHome3-2.png"
            alt="Card 3"
            title="Happy-Gen"
            title2="R$ 49,00"
          />
        </div>
      </div>

      {/* Seção de Apresentação */}
      <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[blue] mb-6 "
          style={{fontSize: '50px'}}
        >
          CUIDADO COM A PELE, DO SEU JEITO
        </h2>
        <p
          className="text-md sm:text-lg md:text-xl text-[blue] max-w-2xl text-center leading-relaxed mb-8"
          style={{fontSize: '20px'}}
        >
          A GENSKINS veio para transformar o cuidado com a pele em algo leve,
          divertido e zero complicação. Nossos adesivos secativos são práticos,
          estilosos e pensados para acompanhar sua rotina real – seja em casa,
          na rua ou onde quiser.
        </p>
        <button
          className="border border-[blue] text-[blue] px-6 py-2 rounded-full hover:bg-[#5B00E4] mt-4 hover:text-white transition"
          onClick={() => (window.location.href = '/sobre')}
        >
          SOBRE A GENSKINS
        </button>
      </section>
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
