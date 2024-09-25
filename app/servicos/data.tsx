export const textServices: { title: string; child: JSX.Element }[] = [
  {
    title: "PCMSO - Programa de Controle Médico de Saúde Ocupacional",
    child: (
      <div className="space-y-4">
        <p>
          O PCMSO é um documento elaborado por médico do trabalho, obrigatório
          para empresas com 1 ou mais funcionários, com o objetivo de proteger e
          preservar a saúde de seus empregados.
        </p>
        <p>Conforme NR 7, são diretrizes do PCMSO:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Rastrear e detectar precocemente os agravos à saúde relacionados ao
            trabalho;
          </li>
          <li>
            Detectar possíveis exposições excessivas a agentes nocivos
            ocupacionais;
          </li>
          <li>
            Definir a aptidão de cada empregado para exercer suas funções ou
            tarefas determinadas;
          </li>
          <li>
            Subsidiar a implantação e o monitoramento da eficácia das medidas de
            prevenção adotadas na organização;
          </li>
          <li>
            Subsidiar análises epidemiológicas e estatísticas sobre os agravos à
            saúde e sua relação com os riscos ocupacionais;
          </li>
          <li>
            Subsidiar decisões sobre o afastamento de empregados de situações de
            trabalho que possam comprometer sua saúde;
          </li>
          <li>
            Subsidiar a emissão de notificações de agravos relacionados ao
            trabalho, de acordo com a regulamentação pertinente;
          </li>
          <li>
            Subsidiar o encaminhamento de empregados à Previdência Social;
          </li>
          <li>
            Acompanhar de forma diferenciada o empregado cujo estado de saúde
            possa ser especialmente afetado pelos riscos ocupacionais;
          </li>
          <li>
            Subsidiar a Previdência Social nas ações de reabilitação
            profissional;
          </li>
          <li>Subsidiar ações de readaptação profissional;</li>
          <li>
            Controlar a imunização ativa dos empregados, relacionada a riscos
            ocupacionais, sempre que houver recomendação do Ministério da Saúde.
          </li>
        </ul>
        <p>
          A <strong>P2P</strong> elabora seu PCMSO contemplando todos os itens
          acima e te orienta em como executá-lo.
        </p>
      </div>
    ),
  },
  {
    title: "PGR - Programa de Gerenciamento de Riscos",
    child: (
      <div className="space-y-4">
        <p>
          O PGR é um documento obrigatório para toda empresa com 1 ou mais
          funcionários, devendo ser revisado bienalmente e mantido arquivado por
          no mínimo 20 anos.
        </p>
        <p>Conforme NR 1, a organização deve:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Evitar os riscos ocupacionais que possam ser originados no trabalho;
          </li>
          <li>Identificar os perigos e possíveis lesões ou agravos à saúde;</li>
          <li>Avaliar os riscos ocupacionais indicando o nível de risco;</li>
          <li>
            Classificar os riscos ocupacionais para determinar a necessidade de
            adoção de medidas de prevenção;
          </li>
          <li>Implementar medidas de prevenção;</li>
          <li>Acompanhar o controle dos riscos ocupacionais.</li>
        </ul>
        <p>
          A <strong>P2P</strong> elabora seu PGR contemplando todos os itens
          acima e te orienta em como executá-lo.
        </p>
      </div>
    ),
  },
  {
    title: "Levantamento Preliminar de Riscos Ocupacionais",
    child: (
      <div className="space-y-4">
        <p>
          Indicado para as microempresas e empresas de pequeno porte, graus de
          risco 1 e 2, trata-se de uma versão simplificada do PGR, onde
          realizamos o levantamento preliminar de perigos a que os trabalhadores
          estão expostos no ambiente de trabalho.
        </p>
        <p>
          Caso não identifiquemos exposições ocupacionais a agentes físicos,
          químicos e biológicos, a empresa fica dispensada da elaboração do PGR.
        </p>
        <p>
          A <strong>P2P</strong> elabora seu Levantamento Preliminar de Riscos
          Ocupacionais para a sua Declaração de Ausência de Riscos ou, se
          necessário, continua a análise para o PGR.
        </p>
      </div>
    ),
  },
  {
    title: "AEP - Análise Ergonômica Preliminar",
    child: (
      <div className="space-y-4">
        <p>
          A empresa deve realizar a AEP para identificar as situações de
          trabalho que, em decorrência da natureza e conteúdo das atividades
          requeridas, demandam adaptação às características psicofisiológicas
          dos trabalhadores, a fim de subsidiar a implementação das medidas de
          prevenção e adequações necessárias.
        </p>
        <p>
          A <strong>P2P</strong> elabora sua AEP. Entre em contato conosco.
        </p>
      </div>
    ),
  },
  {
    title: "AET - Análise Ergonômica do Trabalho",
    child: (
      <div className="space-y-4">
        <p>
          Quando a AEP identifica riscos ergonômicos, se faz necessário
          aprofundar a análise com a AET. Deve abordar as condições de trabalho,
          conforme estabelecido nesta NR, incluindo as seguintes etapas:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Análise da demanda;</li>
          <li>
            Análise do funcionamento da organização, dos processos, das
            situações de trabalho e da atividade;
          </li>
          <li>
            Descrição e justificativa para definição de métodos, técnicas e
            ferramentas adequados para a análise e sua aplicação;
          </li>
          <li>Estabelecimento de diagnóstico;</li>
          <li>Recomendações para as situações de trabalho analisadas;</li>
          <li>
            Restituição dos resultados, validação e revisão das intervenções
            efetuadas, quando necessária, com a participação dos trabalhadores.
          </li>
        </ul>
        <p>
          A <strong>P2P</strong> elabora sua AET contemplando todos os itens
          acima e te orienta em como executá-lo.
        </p>
      </div>
    ),
  },
  {
    title: "LTCAT - Laudo Técnico das Condições Ambientais do Trabalho",
    child: (
      <div className="space-y-4">
        <p>
          O LTCAT é um documento estabelecido pelo INSS (Instituto Nacional do
          Seguro Social), com o objetivo de avaliar se o trabalhador tem direito
          a aposentadoria especial por ter exposição a agentes nocivos à saúde.
        </p>
        <p>
          Ele é obrigatório para todas as empresas que têm 1 ou mais
          funcionários, e é utilizado para o preenchimento do PPP (Perfil
          Profissiográfico Previdenciário), que a partir de janeiro/23 será
          eletrônico, enviado pelo eSocial.
        </p>
        <p>
          Deve ser expedido por médico do trabalho ou engenheiro de segurança do
          trabalho nos termos da legislação trabalhista.
        </p>
      </div>
    ),
  },
  {
    title: "Envio de Eventos ao eSocial",
    child: (
      <div className="space-y-4">
        <p>
          Todas as empresas precisam informar ao governo os eventos de saúde e
          segurança dos seus trabalhadores: <strong>S-2210</strong>,{" "}
          <strong>S-2220</strong> e <strong>S-2240</strong>.
        </p>
        <p>
          Nós preenchemos e enviamos para o eSocial todos esses eventos,
          seguindo as tabelas e layouts definidos pelo governo.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            No <strong>S-2210</strong>, enviaremos as informações das
            comunicações de acidente de trabalho.
          </li>
          <li>
            No <strong>S-2220</strong>, enviaremos as informações dos atestados
            de saúde ocupacional, sejam eles admissional, demissional,
            periódico, mudança de função ou retorno ao trabalho.
          </li>
          <li>
            No <strong>S-2240</strong>, enviaremos as informações de agentes
            nocivos que os trabalhadores estão expostos, com base na avaliação
            do LTCAT.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Consultoria e Assessoria em Saúde e Segurança do Trabalho",
    child: (
      <div className="space-y-4">
        <p>
          Fazemos acompanhamento de validades dos programas da empresa e dos
          atestados de saúde ocupacional dos trabalhadores, além de assessoria
          para cumprimento do plano de ações, relatório analítico dos
          indicadores de saúde, apoio na escolha das clínicas de saúde
          ocupacional, entre outros.
        </p>
      </div>
    ),
  },
  {
    title: "Gestão de FAP, Afastamentos e Absenteísmo Médico",
    child: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>
            Fazemos a análise do FAP (Fator Acidentário Previdenciário) da sua
            empresa e contestação dos elementos inconsistentes;
          </li>
          <li>
            Gestão dos afastamentos previdenciários a fim de reduzir os
            afastamentos e contestar benefícios acidentários concedidos
            indevidamente;
          </li>
          <li>
            Gestão do absenteísmo médico, a fim de reduzir as ausências dos
            trabalhadores por motivo de doença, através da análise das
            principais causas de falta e de ações de saúde para reduzir o
            adoecimento dos colaboradores e encaminhamento ao INSS dos
            colaboradores que faltarem ao trabalho por mais de 15 dias pela
            mesma doença.
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Treinamentos Diversos",
    child: (
      <div className="space-y-4">
        <p>Oferecemos treinamentos em:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>NR-6 (Equipamentos de Proteção Individual);</li>
          <li>NR-12 (Trabalho com Máquinas e Equipamentos);</li>
          <li>NR-17 (Ergonomia);</li>
          <li>NR-20 (Inflamáveis e Combustíveis);</li>
          <li>NR-33 (Trabalho em Espaço Confinado);</li>
          <li>NR-35 (Trabalho em Altura);</li>
          <li>Outros temas de saúde, segurança e meio ambiente.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Outros Serviços",
    child: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>Laudo de Insalubridade;</li>
          <li>Laudo de Periculosidade;</li>
          <li>Ordem de Serviço;</li>
          <li>PCA - Programa de Conservação Auditiva;</li>
          <li>PGRS - Programa de Gerenciamento de Resíduos Sólidos;</li>
          <li>Plano de Emergência;</li>
          <li>PPR - Programa de Proteção Respiratória;</li>
          <li>Procedimentos Operacionais.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Serviços Adicionais",
    child: (
      <div className="space-y-4">
        <ul className="list-disc list-inside space-y-2">
          <li>Assistência Técnica Judicial;</li>
          <li>Monitoramentos Ambientais;</li>
          <li>Formação e Treinamento de Brigada de Incêndio;</li>
          <li>Formação e Treinamento de CIPA.</li>
        </ul>
      </div>
    ),
  },
];
