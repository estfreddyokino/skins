import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
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
import {useState, useEffect, useRef} from 'react';
import { isMethodSignature } from 'typescript';

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

function HoverImageCard({image1, image2, alt, title, title2, title3}) {
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
      className="w-[400px] sm:w-[450px] lg:w-[500px] cursor-pointer transition-transform  overflow-hidden rounded-3xl shadow-xl bg-white relative"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      onClick={handleToggle}
      style={{margin: '20px',backgroundColor: 'rgba(244, 247, 255, 0.9)' }}
    >
      {/* Container da imagem com relative para posicionar os textos */}
      <div
        className="relative aspect-[3/4] w-full h-full"
        style={{width: '80%', margin: 'auto', minHeight: '400px',
          
        }}
      >
        <div style={{width: isMobile ? '70%' :  '100%', height: '80%', margin: 'auto'}}>
          <img
            src={isHovered ? image2 : image1}
            alt={alt}
            className="w-full h-full object-cover rounded-3xl"
            style={{minHeight: '320px',}}
          />
        </div>

        {/* Textos sobrepostos */}
        <div
          className="bottom-20 left-4 right-4 flex justify-between items-center text-blue-700 font-semibold"
          style={{  color: '#001AFF',
                lineHeight: '16px',
                fontFamily: 'Reservation Bold, sans-serif', 
              fontSize: isMobile ?'14px': '30px'}}
        >
          <div>{title}</div>
          <div>{title2}</div>
        </div>

        <div
          className=" bottom-12 right-4 text-blue-700 text-2xl font-semibold"
          style={{  color: '#001AFF',
                lineHeight: '16px',
                fontFamily: 'Reservation Bold, sans-serif',
              fontSize: isMobile ?'14px': '30px',
            marginTop: isMobile ? '0px' : '20px'}}
        >
          {title3}
        </div>

        <div
          className="bottom-4 left-4 text-blue-700 text-2xl font-semibold"
          style={{fontSize: '30px'}}
        ></div>
      </div>
    </div>
  );
}

export default function Homepage() {
  const data = useLoaderData();
  const phrase = useScrollTyping('Para todos os tipos de pele', 50);
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-image-full" style={{padding:"100px 20px 20px 20px"}} >
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: rotate(0deg) scale(1); offset-distance: 0px; }
            50% { transform: rotate(-10deg) scale(.8); offset-distance: 30px; }
          }
          @keyframes float2 {
            0%, 100% { transform: rotate(0deg) scale(1); offset-distance: 0px; }
            50% { transform: rotate(15deg) scale(.7); offset-distance: 40px; }
          }
          @keyframes float3 {
            0%, 100% { transform: rotate(0deg) scale(1); offset-distance: 0px; }
            50% { transform: rotate(-60deg) scale(1.5); offset-distance: 60px; }
          }
          .float { animation: float 7s ease-in-out infinite; }
          .float2 { animation: float2 10s ease-in-out infinite; }
          .float3 { animation: float3 12s ease-in-out infinite; }
        `}
      </style>
      <section className="relative w-full min-h-[80vh] md:min-h-screen">
        {/* Texto central */}
        <section className="w-full py-20 px-4 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-8">
          <div className="w-full lg:w-8/12">
            <img
              src="/image/homeGenskins.png"
              alt="Modelo com adesivos"
              className="rounded-[30px] w-full object-cover mt-40 sm:mt-40"
            />
          </div>
        </section>

        <div className="block md:hidden">
          {/* BLOCO 1 - MOBILE */}
          <img
            src="/image/estrelaamarela.png"
            className="absolute top-25 right-4 w-12 float"
          />
          <img
            src="/image/estrelaazul.png"
            className="absolute top-10 left-10 w-10 float2"
          />
          <img
            src="/image/rotoFelizAzul.png"
            className="absolute top-24 left-1/4 w-14 float3"
          />
          <img
            src="/image/peixeAzulDereita.png"
            className="absolute top-2 right-1/3 w-12 float"
          />
          <img
            src="/image/solAmarelo.png"
            className="absolute top-2 right-1/2 w-20 float2"
          />

          {/* BLOCO 2 - MOBILE */}
          <img
            src="/image/estrelaamarela.png"
            className="absolute top-[50vh] left-4 w-12 float2"
          />
          <img
            src="/image/estrelaazul.png"
            className="absolute top-[54vh] right-[50px] w-10 float3"
          />
          <img
            src="/image/rotoFelizAzul.png"
            className="absolute top-[42vh] left-52 w-14 float"
          />
          <img
            src="/image/peixeAzulDereita.png"
            className="absolute top-[54vh] right-2/3 w-12 float2"
          />
          <img
            src="/image/solAmarelo.png"
            className="absolute top-[56vh] right-1/3 w-20 float3"
          />
        </div>

        {/* ==== ELEMENTOS VISUAIS DESKTOP ==== */}
        <div className="hidden md:block">
          {/* BLOCO 1 - DESKTOP */}
          <div
            className="absolute top-25 right-52 w-28"
            style={{
              transform: `translate(${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 1000})`,
            }}
          >
            <img src="/image/estrelaamarela.png" className="w-100 float2" />
          </div>
          <div
            className="absolute top-30 left-50 w-24"
            style={{
              transform: `translate(0, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 1000})`,
            }}
          >
            <img src="/image/estrelaazul.png" className="w-100 float2" />
          </div>
          <div
            className="absolute top-14 left-1/4 w-36"
            style={{
              transform: `translate(-${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 1000})`,
            }}
          >
            <img src="/image/rotoFelizAzul.png" className="w-100 float" />
          </div>
          <div
            className="absolute top-2 right-1/3 w-32"
            style={{
              transform: `translate(-${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 1000})`,
            }}
          >
            <img src="/image/peixeAzulDereita.png" className="w-100 float" />
          </div>
          <div
            className="absolute top-22 right-80 w-12"
            style={{
              transform: `translate(-${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 1000})`,
            }}
          >
            <img
              src="/image/peixeAzulDereita.png"
              className="w-100 scale-x-[-1] float3"
            />
          </div>
          <div
            className="absolute top-2 right-1/2 w-48"
            style={{
              transform: `translate(0, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img src="/image/solAmarelo.png" className="w-100 float" />
          </div>

          {/* BLOCO 2 - DESKTOP */}
          <div
            className="absolute top-[440px] left-30 w-28"
            style={{
              transform: `translate(-${scrollPosition}px, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/estrelaamarela.png"
              className="w-100 float2 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-124 left-230 w-12"
            style={{
              transform: `translate(0, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img src="/image/estrelaamarela.png" className="w-100 float3" />
          </div>
          <div
            className="absolute top-[480px] right-60 w-24"
            style={{
              transform: `translate(${scrollPosition}px, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img src="/image/estrelaazul.png" className="w-100 float2" />
          </div>
          <div
            className="absolute top-40 right-120 w-12"
            style={{
              transform: `translate(${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/estrelaazul.png"
              className="w-100 float3 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-140 right-260 w-12"
            style={{
              transform: `translate(${scrollPosition}px, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/estrelaazul.png"
              className="w-100 float3 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-[640px] left-50 w-36"
            style={{
              transform: `translate(-${scrollPosition}px, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/rotoFelizAzul.png"
              className="w-100 float2 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-120 right-20 w-16"
            style={{
              transform: `translate(${scrollPosition}px, 0) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img src="/image/rotoFelizAzul.png" className="w-100 float3" />
          </div>
          <div
            className="absolute top-[480px] right-2/3 w-32"
            style={{
              transform: `translate(-${scrollPosition}px, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img src="/image/peixeAzulDereita.png" className="w-100 float2" />
          </div>
          <div
            className="absolute top-50 left-200 w-12"
            style={{
              transform: `translate(-${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/peixeAzulDereita.png"
              className="w-100 float3 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-[500px] right-1/3 w-48"
            style={{
              transform: `translate(0, ${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/solAmarelo.png"
              className="w-100 float2 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-70 right-40 w-10"
            style={{
              transform: `translate(${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/solAmarelo.png"
              className="w-100 float3 scale-x-[-1]"
            />
          </div>
          <div
            className="absolute top-70 left-40 w-10 "
            style={{
              transform: `translate(${scrollPosition}px, -${scrollPosition * 2.5}px) scale(${1 + scrollPosition / 100})`,
            }}
          >
            <img
              src="/image/solAmarelo.png"
              className="w-100 float2 scale-x-[-1]"
            />
          </div>
        </div>
      </section>

      <div className="w-full flex items-center justify-center min-h-[200px] sm:min-h-[300px] lg:min-h-[300px] relative">
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
            title="Gen-stars"
            title2="R$ 39"
            title3="23 adesivos"
          />
          <HoverImageCard
            image1="/image/imagemHome2-1.png"
            image2="/image/imagemHome2-2.png"
            alt="Card 2"
            title="Gen-sea"
            title2="R$ 39"
             title3="23 adesivos"
          />
          <HoverImageCard
            image1="/image/imagemHome3-1.png"
            image2="/image/imagemHome3-2.png"
            alt="Card 3"
            title="Happy-Gen"
            title2="R$ 39"
             title3="23 adesivos"
          />
        </div>
        <button
          className="bg-blue-600 border border-blue-600 mt-8 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition"
          onClick={() => (window.location.href = '/collections/frontpage')}
        >
          SHOP
        </button>
      </div>

      {/* Seção de Apresentação */}
      <section className="w-full flex flex-col items-center justify-center text-center py-16 px-4 mb-0">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[blue] mb-4"
          style={{fontSize: '50px'}}
        >
          CUIDADO COM A PELE, DO SEU JEITO
        </h2>
        <p
          className="text-md sm:text-lg md:text-xl text-[blue] max-w-2xl text-center leading-relaxed mb-6"
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

      <div className="relative flex items-center justify-center flex-col text-white px-10 pt-0 mb-20">
        <div className="w-full max-w-8xl relative rounded-[30px] overflow-hidden mt-0 sm:mt-16">
          <img
            src="/image/home2.png"
            alt="Pessoas com adesivos"
            className="w-full h-auto object-cover rounded-[30px]"
          />
        </div>
      </div>
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
