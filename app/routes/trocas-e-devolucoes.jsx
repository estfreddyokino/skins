export function meta() {
  return [
    { title: 'Genskins | Política de Troca e Devolução' },
    { icon: '/app/image/favicon.png' },
  ];
}

export default function PoliticaTrocaDevolucao() {
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
        Política de Troca e Devolução
      </h1>

      <div className="border-b-2 border-[#0047FF] mb-6 w-full"></div>

      <div className="pl-5 space-y-10 text-[#0047FF]">
        <section>
          <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
            Condições Gerais
          </h2>
          <p className="!text-[20px] text-justify sm:text-left">
            Nosso compromisso é garantir sua satisfação! Você tem até 7 dias corridos após o recebimento do produto para solicitar trocas ou devoluções, conforme o artigo 49 do Código de Defesa do Consumidor.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
            Motivos de Troca ou Devolução
          </h2>
          <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left space-y-4">
            <li>
              <strong>Produto com Defeito ou Danificado</strong>
              <ul className="list-disc pl-5">
                <li>Caso o produto apresente algum defeito ou avaria, a troca será realizada sem custos adicionais.</li>
                <li>O cliente deve entrar em contato dentro de 7 dias corridos após o recebimento, enviando fotos que comprovem o defeito ou a avaria.</li>
              </ul>
            </li>
            <li>
              <strong>Insatisfação com o Produto</strong>
              <ul className="list-disc pl-5">
                <li>O cliente pode solicitar devolução se estiver insatisfeito ou se o produto não atender às expectativas, contanto que:</li>
                <ul className="list-disc pl-5">
                  <li>O produto esteja em perfeito estado, sem sinais de uso.</li>
                  <li>A embalagem original e todos os acessórios sejam retornados juntos.</li>
                </ul>
              </ul>
            </li>
            <li>
              <strong>Erro no Pedido</strong>
              <ul className="list-disc pl-5">
                <li>Se o produto recebido for diferente do solicitado (modelo, cor, tamanho, etc.), entre em contato conosco para regularizar a situação.</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
            Procedimento para Troca ou Devolução
          </h2>
          <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left space-y-2">
            <li>
              Envie um e-mail para <strong>suporte@genskins.com.br</strong> com:
              <ul className="list-disc pl-5">
                <li>Número do pedido.</li>
                <li>Motivo da troca/devolução (anexando fotos, se necessário).</li>
              </ul>
            </li>
            <li>Nossa equipe responderá em até 2 dias úteis com instruções para devolução.</li>
            <li>O produto devolvido será avaliado em até 5 dias úteis após o recebimento em nossa central.</li>
            <li>
              Após a análise, o cliente poderá optar por:
              <ul className="list-disc pl-5">
                <li>Restituição do valor pago (incluindo o frete, se aplicável).</li>
                <li>Crédito no site para novas compras.</li>
                <li>Reenvio do produto corrigido (sem custos adicionais).</li>
              </ul>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold" style={{ fontSize: '30px' }}>
            Custos de Envio
          </h2>
          <ul className="list-disc text-[20px] pl-5 text-justify sm:text-left space-y-2">
            <li>Caso a devolução seja por defeito, avaria ou erro do pedido, os custos do frete serão arcados por nós.</li>
            <li>Para devoluções por arrependimento ou escolha errada, o custo do envio ficará sob responsabilidade do cliente.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
