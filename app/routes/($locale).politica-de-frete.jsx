export function meta() {
  return [
    { title: 'Genskins | Políticas de Frete' },
    { icon: '/app/image/favicon.png' }
  ];
}

export default function PoliticaDeFrete() {
  return (
    <div className="max-w-6xl px-25 py-20  text-[#0047FF]">
      {/* Definindo a fonte personalizada com @font-face */}
      <style>
        {`
          @font-face {
            font-weight: 700;
            font-family: 'custom_114584';
            font-style: normal;
            src: url("https://c-p.rmcdn1.net/custom-fonts/font-c49e977d-a711-4f49-b2a1-beca235fa87c.ttf") format('truetype');
          }
        `}
      </style>

      <h1
        className="text-4xl font-bold mb-4"
        style={{
          marginTop: '50px',
         
          marginBottom: '10px',
          fontFamily: 'custom_114584, Inter, sans-serif', // Aplicando a fonte personalizada
          fontWeight: '900',
          fontSize: '40px',
        }}
      >
        Políticas de frete
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna 1 */}
        <div>
          <div className="border-b-2 border-[#0047FF] mb-6 w-full" style={{ marginBottom: '10px' }}></div>
          <h2 className=" font-semibold mb-4"  style={{ marginBottom: '10px', fontSize:"30px" }}>Para onde enviamos</h2>
          <p className="text-base "  style={{marginBottom: '10px', fontSize:"20px", fontWeight: '500'}}> 
            Atualmente, enviamos para mais de 10 países. <br />
            Entre em contato pelo e-mail contato@genskins.com.br <br />
            para verificar se seu país está na lista.
          </p>
        </div>

        {/* Coluna 2 */}
        <div>
          <div className="border-b-2 border-[#0047FF] mb-6 w-full "style={{ marginBottom: '10px', }}></div>
          <h2 className=" font-semibold mb-4" style={{fontSize:"30px"}}>Custos de envio</h2>
          <p className="text-base font-medium"style={{fontSize:"20px"}}>
            O frete é gratuito no Brasil. Os custos para outros países são calculados sob demanda.
          </p>
        </div>
      </div>
    </div>
  );
}
