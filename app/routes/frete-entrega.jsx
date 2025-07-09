export function meta() {
    return [
        { title: 'Genskins | Política de Frete e Entrega' },
        { icon: '/app/image/favicon.png' },
    ];
}

export default function PoliticaFreteEntrega() {
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
                Política de Frete e Entrega
            </h1>

            <div className="border-b-2 border-[#0047FF] mb-6 w-full"></div>

            <div className="pl-5 space-y-10 text-[#0047FF]">
                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Prazos e Valores do Frete
                    </h2>
                    <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left">
                        <li>
                            O frete será calculado automaticamente no momento da compra, considerando o endereço de entrega informado e o peso/dimensões dos produtos adquiridos.
                        </li>
                        <li>
                            O prazo de entrega pode variar conforme a modalidade escolhida no momento do checkout e a localidade de destino.
                            <ul className="list-disc pl-5">
                                <li>Frete Expresso: Entregas em até 5 dias úteis para capitais e regiões metropolitanas.</li>
                                <li>Frete Econômico: Entregas em até 12 dias úteis, disponível para todo o Brasil.</li>
                            </ul>
                        </li>
                        <li>Oferecemos frete grátis para compras acima de R$300,00 (válido para a modalidade econômica e somente para regiões específicas).</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Processamento do Pedido
                    </h2>
                    <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left">
                        <li>O processamento do pedido ocorre em até 2 dias úteis após a confirmação do pagamento.</li>
                        <li>Em caso de imprevistos no envio, como falta de estoque ou problemas logísticos, o cliente será informado imediatamente.</li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Rastreamento
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Todos os pedidos possuem código de rastreio. Você receberá o código por e-mail após o envio e poderá acompanhar diretamente no site dos nossos parceiros logísticos.
                    </p>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Condições de Entrega
                    </h2>
                    <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left">
                        <li>As entregas são realizadas de segunda a sexta-feira, das 8h às 18h, exceto feriados.</li>
                        <li>Certifique-se de que haverá alguém para receber a mercadoria no endereço informado.</li>
                        <li>
                            Após três tentativas sem sucesso, o pedido será devolvido ao centro de distribuição e nova taxa de envio poderá ser cobrada.
                        </li>
                    </ul>
                </section>

                <section style={{ marginBottom: '0px' }}>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Atrasos na Entrega
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        Trabalhamos com parceiros logísticos confiáveis, mas em casos de atrasos por fatores externos (greves, eventos climáticos etc.), daremos todo o suporte necessário.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
                        Endereço Incorreto ou Incompleto
                    </h2>
                    <p className="text-[20px] text-justify sm:text-left">
                        É de responsabilidade do cliente preencher corretamente os dados de entrega. Se o pedido retornar por erro de endereço, entraremos em contato para reenvio, podendo haver nova taxa de frete.
                    </p>
                </section>
            </div>
        </div>
    );
}
