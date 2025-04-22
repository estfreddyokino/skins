export function meta() {
  return [
    {title: 'Genskins | Trocas & devoluções'},
    {icon: '/app/image/favicon.png'},
  ];
}

export default function TrocasEDevolucoes() {
  return (
    <div className="max-w-6xl px-25  py-20 px-6 text-[#0047FF]">
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
        Trocas & Devoluções
      </h1>

      <div className="grid grid-cols-1">
        {/* Coluna 1 */}
        <div>
          <div
            className="border-b-2 border-[#0047FF] mb-6 w-full"
            style={{ marginBottom: '20px',fontSize: '30px' }}
          ></div>
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ marginBottom: '20px',fontSize: '30px' }}
          >
            Políticas de trocas e devoluções
          </h2>
          <p
            className="text-base font-medium"
            style={{marginBottom: '20px',fontSize: '25px' }}
          >
            Aceitamos devoluções dentro de 30 dias a partir da <br /> data da
            sua compra.
          </p>
        </div>
      </div>
    </div>
  );
}
