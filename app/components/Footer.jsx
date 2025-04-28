import 'app/styles/Footer.css';

export function Footer() {
  return (
    <footer
      className="bg-[#F1F3F5] text-[#1A1A1A] px-0 py-6 text-[12px]"
      style={{paddingTop: '0px', paddingBottom: '20px'}}
    >
      <div className="mx-5 md:mx-20 grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-22 text-left md:text-center">
        {/* Bloco 1 */}
        <div className="mt-2 md:mt-8">
          <h1 className="text-4xl font-light text-[#0047FF]">
            <img src="/image/footerLogo.png" alt="Logo" />
          </h1>
          <div>
            <p style={{ fontSize: '20px', color: '#0047FF', fontWeight: '600' }}>
              CADASTRE SEU EMAIL
            </p>
            <p style={{ fontSize: '20px', color: '#8b8c8d', fontWeight: '600' }}>
              Cadastre seu e-mail e seja o primeiro
              <br />
              a saber das novidades da GENSKINS!
            </p>
            <form className="mt-4 flex items-center gap-2">
              <input
                type="email"
                placeholder="email"
                className="focus:outline-none"
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  borderColor: '#ccc',
                  height: '50px',
                  width: '250px',
                  padding: '0 16px',
                  fontSize: '16px',
                  border: '1px solid #ccc',
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
                }}
              >
                Enviar
              </button>
            </form>
          </div>
        </div>

        {/* Bloco 2 */}
        <div className="mt-4 md:mt-16" style={{ marginLeft: '50px' }}>
          <p
            style={{
              fontSize: '20px',
              color: '#0047FF',
              fontWeight: '600',
              marginBottom: '24px',
            }}
          >
            PRECISA DE AJUDA?
          </p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '16px' }}>
              <a
                href="/politica-de-frete"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',
                  fontSize: '20px',
                  textDecoration: 'none',
                }}
              >
                Políticas de frete
              </a>
            </li>
            <li style={{ marginBottom: '16px' }}>
              <a
                href="/trocas-e-devolucoes"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',
                  fontSize: '20px',
                  textDecoration: 'none',
                }}
              >
                Trocas &amp; Devoluções
              </a>
            </li>
            <li>
              <a
                href="/termos-de-uso"
                style={{
                  color: '#8b8c8d',
                  fontWeight: '600',
                  fontSize: '20px',
                  textDecoration: 'none',
                }}
              >
                Termos de uso
              </a>
            </li>
          </ul>
        </div>

        {/* Bloco 3 */}
        <div className="mt-4 md:mt-16" style={{ marginLeft: '50px' }}>
          <p
            style={{
              fontSize: '20px',
              color: '#0047FF',
              fontWeight: '600',
              marginBottom: '8px',
            }}
          >
            NOSSO CONTATO
          </p>
          <a
            href="mailto:mygenskins@gmail.com.br"
            style={{
              fontSize: '20px',
              color: '#8b8c8d',
              fontWeight: '700',
              textDecoration: 'none',
            }}
          >
            mygenskins@gmail.com.br
          </a>
        </div>

        {/* Bloco 4 */}
        <div className="mt-4 md:mt-16" style={{ marginLeft: '50px' }}>
          <p
            style={{
              fontSize: '20px',
              color: '#0047FF',
              fontWeight: '600',
              marginBottom: '12px',
            }}
          >
            SEGUE A GENTE
          </p>
          <div className="flex gap-4 items-center text-[#0047FF] text-xl mt-4">
            <img src="/image/face.png" alt="Facebook" className="h-[24px]" />
            <img src="/image/insta.png" alt="Instagram" className="h-[24px]" />
            <img src="/image/x.png" alt="X (Twitter)" className="h-[24px]" />
          </div>
        </div>
      </div>

      <div className="mt-12 px-5 md:px-20 text-left md:text-center space-y-1">
        <p
          style={{
            fontSize: '16px',
            fontWeight: '700',
            color: '#8b8c8d',
          }}
        >
          GENSKINS COMERCIAL IMPORTADORA LTDA
        </p>
        <p
          style={{
            fontSize: '16px',
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
