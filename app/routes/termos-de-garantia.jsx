export function meta() {
    return [
        { title: 'Genskins | Política de Garantia' },
        { icon: '/app/image/favicon.png' },
    ];
}

export default function PoliticaGarantia() {
    return (
        <div className="max-w-6xl mx-4 sm:mx-8 md:mx-16 lg:mx-20 py-20 px-6 text-[#0047FF]">
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
                    fontFamily: 'custom_114584, Inter, sans-serif',
                    fontWeight: '900',
                    fontSize: '40px',
                }}
            >
                Política de Garantia
            </h1>

            <div className="border-b-2 border-[#0047FF] mb-6 w-full"></div>

            <div className="pl-5 space-y-10 text-[#0047FF]">
                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Cobertura
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        A genskins.com.br oferece garantia de 90 dias para todos os produtos, conforme o Código de Defesa do Consumidor. Durante este período, cobrimos:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Defeitos de fabricação.</li>
                        <li>Problemas estruturais que apareçam dentro do uso adequado do produto.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Exclusões de Garantia
                    </h2>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1">
                        <li>Danos causados por mau uso, quedas, armazenamento inadequado ou negligência.</li>
                        <li>Desgaste natural devido ao uso ou pela lavagem inadequada.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Processo para Acionar a Garantia
                    </h2>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-2">
                        <li>
                            Entre em contato com o <strong>suporte@genskins.com.br</strong>, descrevendo o problema e anexando:
                            <ul className="list-disc pl-5 mt-1">
                                <li>Prova de compra (número do pedido ou nota fiscal).</li>
                                <li>Fotos evidenciando o defeito.</li>
                            </ul>
                        </li>
                        <li>Nossa equipe retornará com uma solução em até 5 dias úteis.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
