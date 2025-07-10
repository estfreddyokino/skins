import {useState} from 'react';

export function meta() {
  return [{title: 'Genskins | Sobre'}, {icon: '/image/favicon.png'}];
}

function Accordion({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 py-1 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center text-left text-white text-[16px] sm:text-[18px] md:text-[24px]"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
          fontFamily: 'ReservationWide, sans-serif',
          letterSpacing: '0.08em',
          fontSize: '18px',
        }}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 text-[24px] sm:text-[32px] md:text-[40px] ${
            isOpen ? 'rotate-45 text-blue-300' : 'text-white'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`text-[14px] sm:text-[16px] md:text-[16px] mt-2 text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 max-h-[999px]' : 'opacity-0 max-h-0'
        }`}
        style={{
          fontWeight: 'normal',
          fontFamily: 'ReservationWide, sans-serif',
          letterSpacing: '0.05em',
          paddingLeft: '10px',
          paddingRight: '10px',
          fontSize: '14px',
        }}
      >
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <div className="bg-image-white  p-2 sm:p-6">
      {/* Primeira Seção */}
      <section
        className="w-full py-8 sm:py-16 px-2 sm:px-8 flex flex-col lg:flex-row items-center justify-center gap-y-4 sm:gap-y-8 lg:gap-12"
        style={{marginTop: '40px', paddingLeft: '20px', paddingRight: '20px'}}
      >
        {/* Imagem */}
        <div className="max-w-[1000px] lg:w-auto">
          <img
            src="/image/sobreImage11.png"
            alt="Modelo com adesivos no rosto"
            className="rounded-[20px] sm:rounded-[30px] w-full object-cover"
            style={{
              borderRadius: '24px',
              minWidth: '300px',
              height: 'auto',
              maxHeight: '1000px', // para mobile
            }}
          />
        </div>

        {/* Texto */}
        <div
          className="w-full lg:w-1/3 p-4 sm:p-8 rounded-[20px] sm:rounded-[30px] text-blue-700 max-w-[800px] flex flex-col justify-center border-0 sm:border-2 sm:border-blue-600 sm:min-h-[750px]"
          style={{
            height: 'auto',
            maxHeight: '756px',
            padding: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          <div
            className="flex items-center mt-0 sm:mt-48"
            style={{marginTop: '10px', marginBottom: '24px'}}
          >
            <img
              src="/image/estrenha.png"
              alt=""
              className="w-5 sm:w-[6%] mb-2 sm:mb-4"
            />

            <span
              className="text-base sm:text-[20px]"
              style={{
                fontSize: '20px',
                marginLeft: '10px',
                fontFamily: 'ReservationWide',
                fontWeight: 'bold',
              }}
            >
              NOSSA FILOSOFIA
            </span>
          </div>

          {/* MOBILE TEXT (mostra só em telas pequenas) */}
          <p
            className="block sm:hidden mb-4 text-base"
            style={{
              fontFamily: 'ReservationWide, sans-serif',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Na GENSKINS, acreditamos que autoestima é essencial para o sucesso.
            Saber lidar com os vieses da vida também faz parte do processo.
          </p>
          <p
            className="block sm:hidden mb-4 text-base"
            style={{
              fontFamily: 'ReservationWide, sans-serif',
              fontWeight: 'bold',
              fontSize: '14px',
            }}
          >
            Por isso, criamos adesivos secativos com tecnologia hifrocolóide.
            Eles tratam a acne de forma eficaz e transformam o incômodo das
            espinhas em um momento de cuidado e expressão pessoal.
          </p>
          {/* DESKTOP TEXT (some no mobile) */}
          <p className="hidden sm:block mb-4 text-base sm:text-[16px]">
            Na GENSKINS, acreditamos que cuidar da pele deve ser simples, eficaz
            e divertido. Criamos nossos adesivos secativos para transformar o
            incômodo das espinhas em algo leve, sem pressões ou padrões. Sabemos
            que a acne surge sem avisar, mas isso não precisa afetar sua
            confiança.
          </p>
          <p
            className="hidden sm:block mb-4 text-base sm:text-[16px]"
            style={{marginTop: '10px', marginBottom: '10px'}}
          >
            Nossa missão é ajudar você a se sentir bem com sua pele, oferecendo
            soluções descoladas que combinam estilo, autenticidade e resultados.
            Porque, no fim, a verdadeira beleza está em se aceitar como você é –
            e, com GENSKINS, cuidar de si mesmo nunca foi tão fácil e divertido.
          </p>

          <button
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-[24px] font-medium bg-transparent hover:bg-[rgba(0,26,255,0.1)] transition mt-10 sm:mt-8 text-base sm:text-[20px]"
            onClick={() => (window.location.href = '/collections/all')}
            style={{
              border: '2px solid #1A73E8',
              color: '#1A73E8',
              fontWeight: 'bold',
            }}
          >
            Radical self-esteem
          </button>
        </div>
      </section>

      {/* Estrelinhas - Corrigido para manter fundo contínuo */}
      <div className="-mx-2 sm:-mx-6 px-2 sm:px-6 overflow-hidden border-y-2 border-blue-600 mt-[20px] sm:mb-[60px]">
        <div className="marquee flex gap-2 py-2 sm:py-4">
          {Array.from({length: 40}).map((_, i) => (
            <img
              key={i}
              src="/image/estrelinhaMovimentando.png"
              alt="estrela"
              className="w-10 h-10 sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]"
            />
          ))}
        </div>
      </div>

      {/* Segunda Seção */}
      <section
        className="mt-[10px] sm:mt-[60px] mb-[1px] py-8 sm:py-16 px-2 sm:px-4 flex flex-col lg:flex-row items-stretch justify-center gap-8 lg:gap-18"
        style={{
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        {/* Imagem vem primeiro no mobile */}

        <div className="w-full lg:w-5/12 mt-8 lg:mt-0 flex items-stretch order-1 lg:order-2">
          <img
            src="/image/sobreImage2.png"
            alt="Fórmula Vegana"
            className="rounded-[20px] sm:rounded-[30px] w-full object-cover"
            style={{
              borderRadius: '24px',
            }}
          />
        </div>

        {/* Accordion vem depois no mobile, mas antes no desktop */}
        <div
          className="bg-transparent rounded-[20px] sm:rounded-[30px] p-4 sm:p-10 text-white w-full max-w-[689px] flex flex-col justify-between border-0 sm:border sm:border-white order-2 lg:order-1"
          style={{
            height: 'auto',
            paddingLeft: '30px',
            paddingRight: '30px',
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              .accordion-box {
                min-height: 220px !important;
                max-height: 750px;
                margin-top: 80px !important;
              }
            }
            @media (max-width: 640px) {
              .accordion-box h3 {
                font-size: 16px !important;
              }
            }
          `}</style>

          <div className="accordion-box">
            <p
              className="text-white font-semibold !text-[16px] sm:!text-[30px] mb-6 border-b border-gray-400 pb-3"
              style={{
                fontFamily: 'ReservationWide, sans-serif',
                fontWeight: 'bold',
                paddingBottom: '10px',
                paddingRight: '80px',
              }}
            >
              Como funcionam os adesivos secativos?
            </p>

            <Accordion
              title="Absorção de exsudato"
              content="Quando aplicado sobre a acne, o hidrocoloide absorve a secreção (exsudato) da lesão, formando um gel que ajuda a reduzir a inflamação e o inchaço."
            />
            <Accordion
              title="Cicatrização"
              content="A matriz do hidrocoloide cria um ambiente úmido que favorece a cicatrização rápida e eficiente, evitando a formação de crostas e cicatrizes."
            />
            <Accordion
              title="Proteção Física"
              content="O adesivo atua como uma barreira física que protege a área tratada de bactérias, poeira e outros contaminantes, prevenindo infecções e permitindo uma cicatrização segura."
            />
          </div>
        </div>
      </section>

      {/* Terceira Seção */}
      <section
        className="py-8 sm:py-16 px-2 sm:px-4 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12"
        style={{paddingLeft: '20px', paddingRight: '20px'}}
      >
        {/* Imagem */}
        <div className="">
          <img
            src="/image/sobreImage33.png"
            alt="Fórmula Vegana"
            className="rounded-[20px] sm:rounded-[30px] w-full object-cover"
            style={{
              borderRadius: '20px',
              width: '100%',
              maxWidth: '679px',
              height: 'auto',
              maxHeight: '702px',
            }}
          />
        </div>

        {/* Accordion */}
        <div
          className="bg-transparent rounded-[20px] sm:rounded-[30px] p-4 sm:p-10 text-white w-full max-w-[689px] flex flex-col justify-between border-0 sm:border sm:border-white"
          style={{
            minHeight: '220px',
            height: 'auto',
            paddingLeft: '30px',
            paddingRight: '30px',
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              .accordion-box {
                min-height: 220px !important;
                max-height: 750px;
                margin-top: 100px !important;
              }
            }
            @media (max-width: 640px) {
              .accordion-box h3 {
                font-size: 16px !important;
              }
            }
          `}</style>
          <div className="accordion-box">
            <h3
              className="text-white font-semibold text-[22px] sm:text-[30px] mb-6 border-b border-gray-400 pb-3"
              style={{marginBottom: '0px', fontFamily: 'ReservationWide, sans-serif',
                fontWeight: 'bold',
                paddingBottom: '10px',
                paddingRight: '80px',}}
            >
              Modo de uso:
            </h3>
            <Accordion
              title="1-Lave"
              content="Lave a área afetada com sabonete suave e seque bem."
            />
            <Accordion
              title="2-Retire"
              content="Retire o adesivo da embalagem e aplique diretamente sobre a acne."
            />
            <Accordion
              title="3-Deixe agir"
              content="Deixe o adesivo agir por pelo menos 6 horas, ou durante a noite."
            />
            <Accordion
              title="4-Remova"
              content="Remova o adesivo e descarte-o após o uso."
            />
          </div>
        </div>
      </section>

      {/* Estrelinhas - Corrigido para manter fundo contínuo */}
      <div className="-mx-2 sm:-mx-6 px-2 sm:px-6 overflow-hidden border-y-2 border-blue-600 mt-[20px] sm:mb-[60px]">
        <div className="marquee flex gap-2 py-2 sm:py-4">
          {Array.from({length: 40}).map((_, i) => (
            <img
              key={i}
              src="/image/estrelinhaMovimentando.png"
              alt="estrela"
              className="w-10 h-10 sm:w-[30px] sm:h-[30px] lg:w-[100px] lg:h-[100px]"
            />
          ))}
        </div>
      </div>

      {/* Última Seção */}
      <div
        className="relative min-h-[300px] sm:min-h-screen flex flex-col items-center text-white px-2 sm:px-4"
        style={{marginBottom: '50px'}}
      >
        {/* Texto superior - vem primeiro */}
        <div
          className="w-full px-2 sm:px-20 py-2 sm:py-6 flex flex-col sm:flex-row items-center"
          style={{marginTop: '40px'}}
        >
          <p className="uppercase tracking-wider font-semibold text-white text-center text-[12px] sm:text-left sm:text-[20px] md:!text-[30px]"
           style={{marginBottom: '0px', fontFamily: 'ReservationWide, sans-serif'
               
                }}
            >
            ELEVE SEU CUIDADO COM A PELE USANDO GENSKINS
          </p>
          <div className="flex-1 h-px bg-white mx-0  sm:mx-2 sm:my-0" />
        </div>

        {/* Imagem e botão */}
        <div
          className="w-full max-w-full sm:max-w-8xl relative rounded-[20px] sm:rounded-[30px] overflow-hidden mt-4 sm:mt-10"
          style={{
            width: '100%',
            maxWidth: '1712px',
            height: 'auto',
            minHeight: '200px',
          }}
        >
          <img
            style={{
              objectFit: 'cover',
              borderRadius: '20px',
              width: '100%',
              maxWidth: '1712px',
              height: 'auto',
              marginTop: '10px',
            }}
            src="/image/sobreImage44.png"
            alt="Pessoas com adesivos"
            className="object-cover rounded-[20px] sm:rounded-[50px]"
          />

          {/* Botão centralizado */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              className="border-2 border-white text-white bg-white/40 hover:bg-white/60 
             px-4 sm:px-8 lg:px-14 py-2 sm:py-4 lg:py-5 
             rounded-full transition-all text-sm sm:text-[18px] lg:text-[22px] font-bold"
              onClick={() => (window.location.href = '/collections/all')}
              style={{
                width: 'fit-content',
                maxWidth: '90vw',
                minWidth: '220px',
                height: '44px',
                minHeight: '44px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '35px',
              }}
            >
              SHOP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
