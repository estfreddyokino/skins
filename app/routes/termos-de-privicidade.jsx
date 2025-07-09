export function meta() {
    return [
        { title: 'Genskins | Política de Privacidade' },
        { icon: '/app/image/favicon.png' },
    ];
}

export default function PoliticaPrivacidade() {
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
                Política de Privacidade
            </h1>

            <div className="border-b-2 border-[#0047FF] mb-6 w-full"></div>

            <div className="pl-5 space-y-10 text-[#0047FF]">
                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Coleta de Dados
                    </h2>
                    <p className="!text-[20px] text-justify sm:text-left">
                        Coletamos apenas informações essenciais para o processamento de suas compras, como:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Nome completo.</li>
                        <li>Endereço de entrega.</li>
                        <li>Dados de contato (e-mail e telefone).</li>
                        <li>Informações de pagamento (processadas por empresas parceiras certificadas).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Uso dos Dados
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Seus dados são utilizados para:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Processamento e envio de pedidos.</li>
                        <li>Comunicação sobre promoções, novidades e atualizações do site (caso autorizado).</li>
                        <li>Melhorias na experiência de navegação e personalização de ofertas.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Proteção de Dados
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Adotamos medidas de segurança robustas para proteger suas informações. Entre elas:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Criptografia SSL para transações no site.</li>
                        <li>Restrição de acesso às informações pessoais.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Compartilhamento de Dados
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Seus dados pessoais <strong>NÃO</strong> serão vendidos ou compartilhados com terceiros, exceto:
                    </p>
                    <ul className="list-disc pl-5 text-[20px] text-justify sm:text-left space-y-1 mt-2">
                        <li>Empresas de logística para entrega de produtos.</li>
                        <li>Sistemas de pagamento para processamento das compras.</li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
