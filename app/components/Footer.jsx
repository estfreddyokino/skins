import 'app/styles/Footer.css';
import React from 'react';

export function Footer() {
  return (
    <footer
      className="bg-[#F1F3F5] text-[#1A1A1A] px-0 py-6 text-[12px]"
      style={{paddingTop: '10px', paddingBottom: '20px'}}
    >
      <div className="mx-5 md:mx-20 grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-22 text-left md:text-center">
        {/* Bloco 1 */}
        <div className=" md:mt-8" style={{marginLeft: '10px'}}>
          <img src="/image/footerLogo.png" alt="Logo" className="footer-logo" />

          <div className="footer-100 footer-font">
            <p
              className="footer-font tracking-wider"
              style={{color: '#0047FF', fontWeight: '600'}}
            >
              CADASTRE SEU EMAIL
            </p>
            <p
              className="footer-font-letras tracking-wider"
              style={{color: '#8b8c8d',fontWeight: '600'}}
            >
              Cadastre seu e-mail e seja o primeiro
              <br />a saber das novidades da GENSKINS!
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="email"
                className="focus:outline-none"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  borderColor: 'transparent',
                  height: '50px',
                  width: '250px',
                  padding: '0 16px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
                  fontWeight: '600',
                }}
              />
              <button
                style={{
                  height: '50px',
                  backgroundColor: '#0047FF',
                  color: '#fff',
                  borderRadius: '25px',
                  padding: '0 30px',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Poppins, sans-serif',
                  fontWeight: '600',
                }}
              >
                enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="md:mt-16" style={{marginLeft: '10px'}}>
          <p
            className="footer-font tracking-wider"
            style={{
              color: '#0047FF',
              fontWeight: '600',
            }}
          >
            PRECISA DE AJUDA?
          </p>
          <ul
            className="footer-font-letras tracking-wider"
            style={{listStyle: 'none', padding: 0, margin: 0}}
          >
            <li>
              <a
                href="/frete-entrega"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',

                  textDecoration: 'none',
                }}
              >
                Políticas de frete
              </a>
            </li>
            <li>
              <a
                href="/trocas-e-devolucoes"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',

                  textDecoration: 'none',
                }}
              >
                Trocas &amp; Devoluções
              </a>
            </li>
            <li>
              <a
                href="/termos-de-garantia"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',

                  textDecoration: 'none',
                }}
              >
                Política de Garantia
              </a>
            </li>
            <li>
              <a
                href="/termos-de-privicidade"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',

                  textDecoration: 'none',
                }}
              >
                Política de Privacidade
              </a>
            </li>
            <li>
              <a
                href="/termos-de-pagamento"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',

                  textDecoration: 'none',
                }}
              >
                Política de Pagamentos
              </a>
            </li>
          </ul>
        </div>

        {/* Bloco 3 */}
        <div className=" md:mt-16" style={{marginLeft: '10px'}}>
          <p
            className="footer-font tracking-wider"
            style={{
              color: '#0047FF',
              fontWeight: '600',
              marginBottom: '8px',
            }}
          >
            NOSSO CONTATO
          </p>
          <a
            className="footer-font-letras tracking-wider"
            href="mailto:mygenskins@gmail.com.br"
            style={{
              color: '#8b8c8d',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            contato@genskins.com.br
          </a>
        </div>

        {/* Bloco 4 */}
        <div className="md:mt-16 ml-4 md:ml-12" style={{marginLeft: '10px'}}>
          <p
            className="footer-font tracking-wider"
            style={{
              color: '#0047FF',
              fontWeight: '600',
              marginBottom: '12px',
            }}
          >
            SEGUE A GENTE
          </p>
          <div className="flex gap-4 items-center text-[#0047FF] text-xl mt-4 ml-6 md:ml-24">
            <a
              href="https://www.instagram.com/genskinsbr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/insta.png" alt="Instagram" className="h-[24px]" />
            </a>
         
          </div>
        </div>
      </div>

      <div className="mt-12 px-5 md:px-20 w-full flex flex-col items-center space-y-1 text-center">
        <p
          className="footer-font-letras tracking-wider"
          style={{
            fontSize: '10px',
            fontWeight: '700',
            color: '#8b8c8d',
          }}
        >
          GENSKINS COMERCIAL IMPORTADORA LTDA
        </p>
        <p
          className="footer-font-letras tracking-wider"
          style={{
            fontSize: '10px',
            fontWeight: '700',
            color: '#8b8c8d',
          }}
        >
          Direitos reservados. 57728715000182 - R. ALMIRANTE TAMANDARÉ, 20,
          CENTRO - ITAJAÍ, SC.
        </p>
      </div>
    </footer>
  );
}
