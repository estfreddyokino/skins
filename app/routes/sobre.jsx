import '../styles/background2.css';
import {useState} from 'react';

export function meta() {
  return [{title: 'Genskins | Sobre'}, {icon: '/image/favicon.png'}];
}

function Accordion({title, content}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-400 py-3 transition-all duration-300">
      <button
        className="w-full flex justify-between items-center text-left text-white text-[24px]"
        onClick={() => setIsOpen(!isOpen)}
        style={{fontFamily: 'ReservationWide, sans-serif', fontWeight: 'bold'}}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-300 text-[40px] ${
            isOpen ? 'rotate-45 text-blue-300' : 'text-white'
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`text-[18px] mt-2 text-white overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'opacity-100 max-h-[999px]' : 'opacity-0 max-h-0'
        }`}
        style={{fontFamily: 'sans-serif', fontWeight: 'normal'}}
      >
        <p className="leading-relaxed">{content}</p>
      </div>
    </div>
  );
}

export default function Sobre() {
  return (
    <div className="bg-image-full p-6">
      {/* Primeira Seção */}
      <section
        className="w-full py-16 px-8 flex flex-col lg:flex-row items-center justify-center gap-8"
        style={{marginTop: '100px'}}
      >
        {/* Imagem */}
        <div>
          <img
            src="/image/sobreImage11.png"
            alt="Modelo com adesivos no rosto"
            className="rounded-[30px] w-full object-cover"
            style={{borderRadius: '40px', width: '1007px', height: '756px'}}
          />
        </div>

        {/* Texto */}
        <div
          className="w-full lg:w-1/3 border-2 border-blue-600 p-8 rounded-[30px] text-blue-700 max-w-[700px] "
          style={{height: '756px', padding: '40px'}}
        >
          <div className="flex items-center" style={{marginTop: '200px'}}>
            <img
              src="/image/estrenha.png"
              alt=""
              style={{width: '6%', marginBottom: '20px'}}
            />
            <h2
              className="text-lg font-bold uppercase mb-4"
              style={{fontSize: '20px', marginLeft: '20px'}}
            >
              Nossa Filosofia
            </h2>
          </div>
          <p className="mb-4" style={{fontSize: '16px', marginLeft: '0px'}}>
            Na GENSKINS, acreditamos que cuidar da pele deve ser simples, eficaz
            e divertido. Criamos nossos adesivos secativos para transformar o
            incômodo das espinhas em algo leve, sem pressões ou padrões. Sabemos
            que a acne surge sem avisar, mas isso não precisa afetar sua
            confiança.
          </p>
          <p
            className="mb-4"
            style={{fontSize: '16px', marginTop: '10px', marginBottom: '10px'}}
          >
            Nossa missão é ajudar você a se sentir bem com sua pele, oferecendo
            soluções descoladas que combinam estilo, autenticidade e resultados.
            Porque, no fim, a verdadeira beleza está em se aceitar como você é –
            e, com GENSKINS, cuidar de si mesmo nunca foi tão fácil e divertido.
          </p>
          <button
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-[rgba(0,26,255,0.35)] transition"
            onClick={() => (window.location.href = '/collections/frontpage')}
            style={{marginTop: '30px', fontSize: '20px'}}
          >
            Radical self-esteem
          </button>
        </div>
      </section>

      {/* Estrelinhas - Corrigido para manter fundo contínuo */}
      <div
        className="-mx-6 px-6 overflow-hidden border-y-2 border-blue-600"
        style={{marginTop: '100px', marginBottom: '100px'}}
      >
        <div className="marquee flex gap-2 py-4">
          {Array.from({length: 80}).map((_, i) => (
            <img
              key={i}
              src="/image/estrelinhaMovimentando.png"
              alt="estrela"
              className="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px]"
            />
          ))}
        </div>
      </div>

      {/* Segunda Seção */}
      <section
        className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-18"
        style={{marginTop: '100px', marginBottom: '100px'}}
      >
        {/* Accordion */}
        <div
          className="bg-transparent border border-white rounded-[30px] p-20  text-white"
          style={{width: '689px', height: '702px'}}
        >
          <h3
            className="text-white font-semibold text-[30px] mb-6 border-b border-gray-400 pb-3"
            style={{marginTop: '80px', marginBottom: '0px'}}
          >
            Como funcionam os adesivos secativos?
          </h3>

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

        {/* Imagem */}
        <div className="w-full lg:w-5/12">
          <img
            src="/image/sobreImage2.png"
            alt="Fórmula Vegana"
            className="rounded-[30px] w-full object-cover"
            style={{
              borderRadius: '30px',
              width: '689px',
              height: '702px',
              marginLeft: '60px',
            }}
          />
        </div>
      </section>

      {/* Terceira Seção */}
      <section className="py-16 px-4 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Imagem */}
        <div className="w-full lg:w-5/12">
          <img
            src="/image/sobreImage33.png"
            alt="Fórmula Vegana"
            className="rounded-[30px] w-full object-cover"
            style={{borderRadius: '30px', width: '689px', height: '702px'}}
          />
        </div>

        {/* Accordion */}
        <div
          className="bg-transparent border border-white rounded-[30px] p-20 text-white"
          style={{width: '689px', height: '702px'}}
        >
          {' '}
          <h3
            className="text-white font-semibold text-[30px] mb-6 border-b border-gray-400 pb-3"
            style={{marginTop: '80px', marginBottom: '0px'}}
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
      </section>

      {/* Estrelinhas Novamente */}
      <div
        className="-mx-6 px-6 overflow-hidden border-y-2 border-blue-600"
        style={{marginTop: '100px', marginBottom: '100px'}}
      >
        <div className="marquee flex gap-2 py-4">
          {Array.from({length: 80}).map((_, i) => (
            <img
              key={i}
              src="/image/estrelinhaMovimentando.png"
              alt="estrela"
              className="w-[30px] h-[30px] lg:w-[100px] lg:h-[100px]"
            />
          ))}
        </div>
      </div>
      {/* Última Seção */}
      <div className="relative min-h-screen flex items-center justify-center flex-col text-white px-4">
        {/* Texto superior */}
        <div className="absolute top-4 left-0 right-0 flex px-20 items-center">
          <h1 className="text-sm md:text-base uppercase tracking-wider font-semibold text-white">
            ELEVE SEU CUIDADO COM A PELE USANDO GENSKINS
          </h1>
          <div className="flex-1 h-px bg-white mx-8" />
        </div>

        {/* Imagem e botão */}
        <div
          className="w-full max-w-8xl relative rounded-[30px] overflow-hidden mt-20"
          style={{width: '1712px', height: '959px', marginBottom: '100px'}}
        >
          <img
            style={{maxHeight: '80vh', objectFit: 'cover'}}
            src="/image/sobreImage44.png"
            alt="Pessoas com adesivos"
            className="w-full h-full object-cover rounded-[30px]"
            style={{
              borderRadius: '50px',
              width: '1712px',
              height: '959px',
              marginTop: '100px',
              marginBottom: '150px',
            }}
          />

          {/* Botão centralizado */}
          <div className="absolute inset-0 flex justify-center items-center">
            <button
              className="border-2 border-white text-white px-20 py-8 rounded-full bg-white/10 hover:bg-white/30 transition-all"
              onClick={() => (window.location.href = '/collections/all')}
              style={{
                width: '400px',
                height: '60px',
                fontSize: '24px',
                alignContent: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '30px',
                fontWeight: 'bold',
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
