export function meta() {
    return [
        { title: 'Genskins | Política de Pagamentos' },
        { icon: '/app/image/favicon.png' },
    ];
}

export default function PoliticaPagamentos() {
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
                Política de Pagamentos
            </h1>

            <div className="border-b-2 border-[#0047FF] mb-6 w-full"></div>

            <div className="pl-5 space-y-10 text-[#0047FF]">
                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Métodos de Pagamento
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Aceitamos:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Cartões de crédito (Visa, MasterCard, Elo, entre outros).</li>
                        <li>Boleto bancário.</li>
                        <li>Pix.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Parcelamentos
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Compras no cartão de crédito podem ser parceladas em até 6x sem juros, com parcela mínima de R$50,00.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Confirmação de Pagamento
                    </h2>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1">
                        <li>Transações via Pix e cartão de crédito têm confirmação imediata.</li>
                        <li>Para boletos bancários, o prazo de compensação pode levar até 3 dias úteis.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
