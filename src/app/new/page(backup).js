import SliderDesktop from './SliderDesktop';

export default function NewPage() {
  const benefits = [
    "Começa com pouco",
    "Faz em casa, sem máquina nem loja",
    "Receitas testadas, prontas pra vender",
    "Suporte e lista de fornecedores inclusos",
  ];

  return (
    <>
      <main className="clone-page">
        <section className="hero-section">
          <h1 className="hero-title">
            Tem mulher que nunca trabalhou fora e tá fazendo R$10.000 por mês
            com vela — só derrete, mistura e coloca no potinho
          </h1>

          <div className="hero-subtext">
            <p>Não precisa saber vender, nem aparecer.</p>
            <p>
              <strong>
                O curso ensina tudo: da primeira vela até as vendas.
              </strong>
            </p>
          </div>

          <div className="video-placeholder">
            <div className="video-overlay" />
            <div className="play-icon" />
          </div>

          <p className="description">
            Esse método já ajudou milhares de alunas a criarem velas perfeitas
            em casa — e agora você tem a chance de aprender também.{" "}
            <strong>Mas atenção:</strong> essa oportunidade não fica disponível o
            tempo todo!
          </p>

          <div className="benefits">
            {benefits.map((item) => (
              <div key={item} className="benefit-item">
                <span className="benefit-check">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ── SEÇÃO 2 ── */}
      <section className="purple-section">
        <h2 className="purple-title">
          Eu era igual a você: sem saber o que fazer,{" "}
          <strong>com medo de gastar o pouco que tinha</strong>
        </h2>

        <img
          src="/paginanovavelas.webp"
          alt="Collage de fotos"
          className="collage-img"
        />

        <div className="purple-text">
          <p>
            Quando a pandemia bateu,{" "}
            <u>eu fiquei sem renda nenhuma.</u>
            <br />
            Tentei vender bolo, tentei revender roupa... nada dava certo.
            <br />
            <strong>
              Até que um dia fiz uma vela com o que tinha em casa —{" "}
              <span className="orange">e vendi no mesmo dia.</span>
            </strong>
          </p>
          <p>
            <u>Não tinha experiência.</u> Só a vontade de parar de depender dos outros.
            <br />
            Hoje, <strong>eu ensino o mesmo caminho que me tirou do sufoco.</strong>
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 3 ── */}
      <section className="problems-section">
        <h2 className="problems-title">
          O que te vendem por aí...{" "}
          <strong>não funciona pra quem tá começando de verdade</strong>
        </h2>

        <div className="problems-list">
          <div className="problem-item">
            <p className="problem-heading">
              <span>🧍</span> <span className="problem-red">Precisa aparecer</span>
            </p>
            <p className="problem-desc">
              Te mandam gravar vídeo, fazer story, virar blogueira. Nem todo mundo quer ou consegue.
            </p>
          </div>

          <div className="problem-item">
            <p className="problem-heading">
              <span>💸</span> <span className="problem-red">Custa caro pra começar</span>
            </p>
            <p className="problem-desc">
              Curso caro, material difícil de achar, lista enorme de coisas que você nem sabe usar.
            </p>
          </div>

          <div className="problem-item">
            <p className="problem-heading">
              <span>🌀</span> <span className="problem-red">Faz você se sentir burra</span>
            </p>
            <p className="problem-desc">
              Falam difícil, ensinam rápido demais... você assiste e continua sem saber por onde começar.
            </p>
          </div>

          <div className="problem-item">
            <p className="problem-heading">
              <span>🚫</span> <span className="problem-red">Não ensinam a vender de verdade</span>
            </p>
            <p className="problem-desc">
              Dizem que "é só postar" e pronto. Mas ninguém explica o que realmente funciona pra vender no grupo da família.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4 ── */}
      <section className="solution-section">
        <h2 className="solution-title">
          Existe um jeito simples e barato de ganhar dinheiro com velas aromáticas....{" "}
          <strong>mesmo sem experiência</strong>
        </h2>

        <div className="solution-img-wrap">
          <img
            src="/paginavelas2.webp"
            alt="Aula de velas"
            className="solution-img"
          />
          <span className="solution-img-caption">*Imagem oficial de Laura Martins</span>
        </div>

        <div className="solution-text">
          <p>
            O curso <strong>Velas Perfeitas</strong> ensina tudo o que você precisa pra começar do zero.
            Você aprende a fazer velas lindas e que vendem rápido, usando utensílios que já tem em casa.
            <br />
            <strong>Sem precisar vender no Instagram, sem loja, sem enrolação.</strong>
          </p>
          <p className="solution-subtitle">É o método que funciona pra quem:</p>
          <ul className="solution-list">
            <li>nunca trabalhou fora</li>
            <li>tem medo de vender</li>
            <li>tem pouco dinheiro</li>
            <li>não tem diploma</li>
            <li>e quer ver dinheiro entrando de verdade</li>
          </ul>
        </div>
      </section>

      {/* ── SEÇÃO 5 ── */}
      <section className="life-section">
        <h2 className="life-title">
          Não é só fazer vela...{" "}
          <strong>é mudar de vida com algo seu</strong>
        </h2>

        <div className="life-img-wrap">
          <img
            src="/velasperfeitas.webp"
            alt="Teresa dos Santos"
            className="life-img"
          />
        </div>

        <ul className="life-list">
          <li>Você aprende uma habilidade que dá dinheiro e prazer</li>
          <li>Vê pessoas elogiando o que você criou</li>
          <li>Vende kits pra presente, casamento, datas especiais</li>
          <li>Ganha uma renda que não depende de patrão, marido ou sorte</li>
          <li>Constrói algo que pode crescer mês após mês</li>
          <li>Tudo isso com baixo custo e risco quase zero</li>
        </ul>
      </section>

      {/* ── SEÇÃO 6 ── */}
      <section className="testimonials-section">
        <h2 className="testimonials-title">
          VEJA ALGUNS RESULTADOS<br />
          DE <strong>PESSOAS REAIS!</strong>
        </h2>

        {/* MOBILE: carrossel infinito automático */}
        <div className="carousel-mobile">
          <div className="carousel-track">
            <img src="/depoimento1.webp" alt="Depoimento 1" className="carousel-img" />
            <img src="/depoimento2.webp" alt="Depoimento 2" className="carousel-img" />
            <img src="/depoimento3.webp" alt="Depoimento 3" className="carousel-img" />
            <img src="/depoimento4.webp" alt="Depoimento 4" className="carousel-img" />
            {/* duplicados pra loop infinito */}
            <img src="/depoimento1.webp" alt="Depoimento 1" className="carousel-img" aria-hidden="true" />
            <img src="/depoimento2.webp" alt="Depoimento 2" className="carousel-img" aria-hidden="true" />
            <img src="/depoimento3.webp" alt="Depoimento 3" className="carousel-img" aria-hidden="true" />
            <img src="/depoimento4.webp" alt="Depoimento 4" className="carousel-img" aria-hidden="true" />
          </div>
        </div>

        {/* DESKTOP: slider client component */}
        <SliderDesktop />
      </section>

      {/* ── SEÇÃO 7 ── */}
      <section className="modules-section">
        <h2 className="modules-title">Mais de 30 Velas Aromáticas Decoradas para fazer em casa:</h2>

        <div className="modules-grid">

          <div className="module-card">
            <img src="/vis1.webp" alt="Velas Aromáticas" className="module-img" />
            <p className="module-name"><strong>Velas Aromáticas: Perfume que Encanta e Transforma o Ambiente</strong></p>
            <ul className="module-list">
              <li>Vela aromática de cera de soja para iniciantes</li>
              <li>Vela aromática de óleo de coco</li>
              <li>Vela aromática de Natal</li>
              <li>Velas Coloridas de Soja</li>
            </ul>
          </div>

          <div className="module-card">
            <img src="/vis2.webp" alt="Velas Gourmet" className="module-img" />
            <p className="module-name"><strong>Velas Gourmet e Comestíveis: O Aroma Que Dá Água na Boca</strong></p>
            <ul className="module-list">
              <li>Vela bolo assado</li>
              <li>Vela comestível de chocolate</li>
              <li>Vela Drink ao leite</li>
              <li>Vela comestível de manteiga</li>
              <li>Vela Chantilly com Flores Secas</li>
            </ul>
          </div>

          <div className="module-card">
            <img src="/vis3.webp" alt="Velas Naturais" className="module-img" />
            <p className="module-name"><strong>Velas Naturais e Terapêuticas: O Poder da Natureza em Cada Chama</strong></p>
            <ul className="module-list">
              <li>Vela com flores secas e cristais</li>
              <li>Vela Botânica</li>
              <li>Vela com base em pedras</li>
              <li>Velas Florais em Pilar</li>
              <li>Vela repelente de insetos</li>
            </ul>
          </div>

          <div className="module-card">
            <img src="/vis4.webp" alt="Velas Artísticas" className="module-img" />
            <p className="module-name"><strong>Velas Artísticas e Personalizadas: Designs Únicos Que Encantam</strong></p>
            <ul className="module-list">
              <li>Vela Geodo (central)</li>
              <li>Vela Geodo Simples</li>
              <li>Vela Geodo 100% de Cera</li>
              <li>Vela Oceano</li>
              <li>Vela concreto</li>
              <li>Vela de Gel Decorativa</li>
              <li>Vela de Gel para o Natal</li>
            </ul>
          </div>

          <div className="module-card">
            <img src="/vis5.webp" alt="Velas Criativas" className="module-img" />
            <p className="module-name"><strong>Velas Criativas e Inovadoras: Surpreenda Com Efeitos Inesperados</strong></p>
            <ul className="module-list">
              <li>Vela com mensagem secreta</li>
              <li>Vela que Muda de Cor</li>
              <li>Vela Infinita</li>
              <li>Vela Globo</li>
              <li>Vela Granulada</li>
              <li>Vela em Pó Vegetal</li>
            </ul>
          </div>

          <div className="module-card">
            <img src="/vis6.webp" alt="Velas Relaxantes" className="module-img" />
            <p className="module-name"><strong>Velas Relaxantes e Hidratantes: Beleza e Autocuidado em um Só Produto</strong></p>
            <ul className="module-list">
              <li>Velas de massagens e hidratantes</li>
              <li>E muito mais!</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── SEÇÃO 8 — BÔNUS ── */}
      <section className="bonus-section">
        <h2 className="bonus-header">AINDA GANHE 12 BÔNUS EXCLUSIVOS</h2>

        <div className="bonus-list">

          {/* BÔNUS 1 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus1.webp" alt="Bônus 1" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 1: Curso de Sabonetes com Bases 100% Naturais</strong></p>
              <p className="bonus-desc">Aprenda a fazer sabonetes naturais para expandir seu negócio, oferecendo produtos sustentáveis que complementam suas velas e aumentam o lucro.</p>
            </div>
          </div>

          {/* BÔNUS 2 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus2.webp" alt="Bônus 2" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 2: Lista de Fornecedores e Marcas Indicadas</strong></p>
              <p className="bonus-desc">Tenha acesso aos melhores fornecedores e reduza seus custos de produção, aumentando seu lucro e garantindo materiais de qualidade.</p>
            </div>
          </div>

          {/* BÔNUS 3 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus3.webp" alt="Bônus 3" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 3: Método Primeira Vela Perfeita</strong></p>
              <p className="bonus-desc">Aprenda o passo a passo infalível para criar velas impecáveis, sem rachaduras, afundamentos ou desperdício de material.</p>
            </div>
          </div>

          {/* BÔNUS 4 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus4.webp" alt="Bônus 4" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 4: Guia Prático: Como Usar Óleos Essenciais nas Velas</strong></p>
              <p className="bonus-desc">Descubra como escolher e combinar aromas de forma profissional para criar velas com fragrâncias intensas e duradouras.</p>
            </div>
          </div>

          {/* BÔNUS 5 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus5.webp" alt="Bônus 5" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 5: Como Criar Cores Exclusivas</strong></p>
              <p className="bonus-desc">Aprenda as técnicas secretas para misturar corantes e obter tonalidades únicas, sem desbotamento ou manchas.</p>
            </div>
          </div>

          {/* BÔNUS 6 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus6.webp" alt="Bônus 6" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 6: Como Cuidar das Suas Velas Artesanais</strong></p>
              <p className="bonus-desc">Mantenha suas velas sempre perfeitas! Descubra como armazená-las corretamente e prolongar sua durabilidade sem perder aroma ou beleza.</p>
            </div>
          </div>

          {/* BÔNUS 7 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus7.webp" alt="Bônus 7" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 7: Lista de Materiais para Começar</strong></p>
              <p className="bonus-desc">Tudo o que você precisa para fazer suas primeiras velas, com materiais acessíveis e fáceis de encontrar.</p>
            </div>
          </div>

          {/* BÔNUS 8 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus8.webp" alt="Bônus 8" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 8: Robô de Precificação</strong></p>
              <p className="bonus-desc">Use o robô de precificação para definir preços justos, cobrindo seus custos e garantindo lucro, sem adivinhar ou errar nos cálculos.</p>
            </div>
          </div>

          {/* BÔNUS 9 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus9.webp" alt="Bônus 9" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 9: 50 Etiquetas e Rótulos</strong></p>
              <p className="bonus-desc">Personalize suas velas com etiquetas profissionais que dão um toque especial e aumentam o valor percebido, facilitando a venda como presente.</p>
            </div>
          </div>

          {/* BÔNUS 10 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus10.webp" alt="Bônus 10" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 10: 90 Conteúdos do Instagram e Cronograma Infalível para Crescer o Perfil</strong></p>
              <p className="bonus-desc">Siga um cronograma de postagens pronto para atrair seguidores e criar autoridade no Instagram, gerando vendas contínuas e clientes leais.</p>
            </div>
          </div>

          {/* BÔNUS 11 */}
          <div className="bonus-card">
            <div className="bonus-img-wrap">
              <img src="/bonus11.webp" alt="Bônus 11" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 11: Blend de Ceras</strong></p>
              <p className="bonus-desc">Descubra como misturar diferentes tipos de cera para criar velas com melhor fixação de aroma, queima mais longa e acabamento profissional.</p>
            </div>
          </div>

          {/* BÔNUS 12 */}
          <div className="bonus-card bonus-card-reverse">
            <div className="bonus-img-wrap">
              <img src="/bonus12.webp" alt="Bônus 12" className="bonus-img" />
            </div>
            <div className="bonus-text">
              <p className="bonus-title"><strong>Bônus 12: Fotografia Perfeita</strong></p>
              <p className="bonus-desc">Aprenda truques de fotografia para capturar a beleza das suas velas e conquistar clientes online com imagens que mostram cada detalhe.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ── SEÇÃO 9 — DEPOIMENTO SÍLVIA ── */}
      <section className="silvia-section">
        <h2 className="silvia-title">
          Sílvia, 40 anos – Rio Grande do Sul...{" "}
          <strong>Perdeu tudo na enxente mas recuperou apenas fazendo Velas em casa</strong>
        </h2>

        <img src="/depoimentosilvia.webp" alt="Sílvia" className="silvia-img" />

        <p className="silvia-label">Depoimento <strong>da Sílvia:</strong></p>

        <div className="silvia-quote">
          <p>"A enchente levou tudo: minha casa, minhas coisas, minha força.</p>
          <p><strong>Eu e minhas filhas, a Rafaela e a Manu, dormíamos no chão e vivíamos de doação.</strong></p>
          <p>Comecei o curso com medo, usando panela emprestada e pote de azeitona.</p>
          <p><u><strong>Hoje pago o aluguel com o dinheiro das velas, comprei cama nova pras meninas e até voltei a me cuidar</strong></u> — comprei um perfume caro que sempre sonhei.</p>
          <p>Foi aí que conheci o Leandro. Ele me tratou com respeito desde o primeiro dia.</p>
          <p>Disse que nunca viu mulher tão guerreira. Hoje ele ama a mim e às minhas filhas como se fossem dele.</p>
          <p><strong>Tudo isso começou com uma vela."</strong></p>
        </div>
      </section>

      {/* ── SEÇÃO 10 — CERTIFICADOS ── */}
      <section className="cert-section">
        <h2 className="cert-title">INCLUI 5 CERTIFICADOS RECONHECIDOS NACIONALMENTE</h2>
        <img src="/certificados.webp" alt="Certificados Velas Perfeitas" className="cert-img" />
      </section>

      {/* ── SEÇÃO 11 — PROFESSORA / PALESTRA ── */}
      <section className="professor-section">
        <h2 className="professor-title">
          Professora Reconhecida pela{" "}
          <strong>Hotmart</strong>
        </h2>

        <img src="/palestra.webp" alt="Laura Martins na palestra" className="professor-img" />

        <div className="professor-text">
          <p>
            A criadora do Método Vela Perfeita,{" "}
            <strong>Laura Martins, é uma referência no mundo das velas aromáticas.</strong>
          </p>
          <p>
            Com anos de experiência, já ensinou milhares de alunas a dominarem a arte das velas,
            participando de eventos renomados e recebendo prêmios pelo seu trabalho no setor artesanal.
          </p>
          <p>
            <strong>Seus métodos foram destacados em palestras e workshops, mostrando como
            é possível transformar a paixão por velas em um negócio lucrativo</strong>{" "}
            – sem precisar de um grande investimento inicial.
          </p>
        </div>
      </section>

      {/* ── SEÇÃO 12 — OFERTA / CTA ── */}
      <section className="offer-section">

        {/* TÍTULO */}
        <h2 className="offer-title">Acesso Vitalício Só Para Quem Garantir Agora</h2>

        <p className="offer-subtitle">
          Diferente de outros cursos que cobram mensalidades, o <strong>Método Vela Perfeita</strong> oferece acesso
          vitalício. Mas essa condição especial só está disponível até:{" "}
          <strong className="offer-date">31/03/2026</strong>
        </p>

        <p className="offer-urgency">
          Depois disso, as inscrições <strong>serão encerradas</strong> ou poderão{" "}
          <strong>ter um valor maior.</strong>
        </p>

        {/* IMAGEM DO PRODUTO */}
        <img src="/acesso.webp" alt="Acesso ao curso" className="offer-img" />

        {/* PREÇO */}
        <div className="offer-price-block">
          <p className="offer-price-installment">por apenas <strong>8x de</strong></p>
          <p className="offer-price-value">R$8.08</p>
          <p className="offer-price-or">ou <strong className="offer-price-cash">R$57,00 à vista</strong></p>
        </div>

        {/* CHECKLIST */}
        <div className="offer-checklist-wrap">
          <h3 className="offer-checklist-title">Método Velas Perfeitas (completo)</h3>
          <ul className="offer-checklist">
            {[
              "Acesso Imediato ao Curso em Video Velas Perfeitas 2.0",
              "Apostilas de aprendizado",
              "Grupo de Avisos no WhatsApp",
              "Bônus 1: Curso de Sabonetes com Bases 100% Naturais",
              "Bônus 2: Lista de Fornecedores",
              "Bônus 3: Método Primeira Vela Perfeita",
              "Bônus 4: Guia Prático: Como Usar Óleos Essenciais nas Velas",
              "Bônus 5: Como Criar Cores Exclusivas",
              "Bônus 6: Como Cuidar das Suas Velas Artesanais",
              "Bônus 7: Lista de Materiais para Começar",
              "Bônus 8: Robô de Precificação",
              "Bônus 9: 50 Etiquetas e Rótulos",
              "Bônus 10: 90 Conteúdos do Instagram e Cronograma Infalível para Crescer o Perfil",
              "Bônus 11: Blend de Ceras",
              "Bônus 12: Fotografia Perfeita",
              "Bônus 13: Método CAV de Vendas",
              "Garantia de 7 Dias",
            ].map((item) => (
              <li key={item} className="offer-check-item">
                <span className="offer-check-icon">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="20" height="20" rx="4" stroke="#3a2a6e" strokeWidth="2"/>
                    <path d="M5.5 11.5L9 15L16.5 7.5" stroke="#3a2a6e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <p className="offer-cta-hint">Aperte no botão verde para fazer sua inscrição</p>
        <a href="#" className="offer-btn">
          SIM, quero fazer Velas Aromáticas!
        </a>

        {/* SELOS */}
        <img src="/dadosprotegidos.webp" alt="Compra segura - Hotmart" className="offer-seals" />

      </section>

      {/* ── SEÇÃO 13 — GARANTIA ── */}
      <section className="guarantee-section">

        <img src="/garantia.webp" alt="Garantia 7 dias" className="guarantee-badge" />

        <h2 className="guarantee-title">GARANTIA INCONDICIONAL DE 7 DIAS</h2>

        <div className="guarantee-text">
          <p>
            Temos total confiança no <strong>Método Vela Perfeita</strong> e nos resultados que ele pode trazer
            para você. <strong>Por isso, oferecemos uma garantia incondicional de 7 dias.</strong>
          </p>
          <p>
            Se dentro desse período você sentir que o método não é para você,{" "}
            <strong>basta um simples e-mail e devolvemos 100% do seu investimento,
            sem perguntas e sem burocracia.</strong>
          </p>
          <p>
            📌 <strong>Ou você aprende a fazer velas perfeitas gastando pouco, ou devolvemos seu dinheiro.</strong>{" "}
            Simples assim!
          </p>
          <p>É simples e seguro, garantindo total tranquilidade para você!</p>
        </div>

        <a href="#" className="guarantee-btn">
          SIM, quero fazer Velas Aromáticas!
        </a>

      </section>

      {/* ── SEÇÃO 14 — COMPRA SEGURA / SUPORTE ── */}
      <section className="support-section">
        <h2 className="support-title">
          Compra Segura e Suporte Completo Para Você!
        </h2>

        <img src="/paginacomplo.webp" alt="Suporte completo" className="support-img" />

        <div className="support-text">
          <p>
            Sabemos como é importante ter confiança na hora de investir no seu aprendizado.{" "}
            <strong>Por isso, o Método Vela Perfeita está hospedado na{" "}
            <span className="support-hotmart">Hotmart</span>, a maior e mais segura plataforma de cursos do Brasil.</strong>
          </p>
          <p>📌 <strong>Além disso, você terá:</strong></p>
          <ul className="support-list">
            <li>✅ <strong>Suporte técnico no WhatsApp</strong> para tirar dúvidas e garantir que você consiga acompanhar tudo.</li>
            <li>✅ <strong>Grupo exclusivo de avisos e atualizações</strong>, para sempre estar por dentro das novidades e aprimorar suas velas.</li>
            <li>✅ <strong>Acesso imediato e vitalício</strong>, para aprender no seu tempo e rever as aulas sempre que quiser.</li>
          </ul>
          <p>🔥 <strong>Você compra com segurança, aprende com suporte e nunca fica sozinha na jornada!</strong></p>
        </div>

        <a href="#" className="support-btn">SIM, quero fazer Velas Aromáticas!</a>
      </section>

      {/* ── SEÇÃO 15 — CRIAR VELAS NUNCA FOI TÃO SIMPLES ── */}
      <section className="simple-section">
        <h2 className="simple-title">
          Criar Velas Lindas e Perfumadas{" "}
          <strong>Nunca Foi Tão Simples!</strong>
        </h2>

        <img src="/velasperfeitastas.webp" alt="Velas perfumadas" className="simple-img" />

        <div className="simple-text">
          <p>
            Se você acha que fazer velas perfeitas exige experiência ou materiais caros, está enganada.
          </p>
          <p>
            <strong>Com a técnica certa, você pode criar velas aromáticas incríveis usando o que já tem em casa – e ainda transformar isso em uma renda extra sem sair de casa!</strong>
          </p>
        </div>

        <a href="#" className="simple-btn">SIM, quero fazer Velas Aromáticas!</a>
      </section>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body {
          margin: 0;
          padding: 0;
        }

        .clone-page {
          width: 100%;
          background: #f3f3f3;
          padding: 12px 14px 20px;
          font-family: Arial, Helvetica, sans-serif;
          color: #222;
        }

        .hero-section {
          max-width: 430px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-title {
          margin: 0 0 24px;
          color: #2f2a70;
          font-size: 26px;
          line-height: 1.1;
          font-weight: 800;
          letter-spacing: -0.8px;
        }

        .hero-subtext {
          margin-bottom: 26px;
          color: #1f1f1f;
        }

        .hero-subtext p {
          margin: 0;
          font-size: 17px;
          line-height: 1.35;
        }

        .hero-subtext p + p {
          margin-top: 2px;
        }

        .video-placeholder {
          position: relative;
          width: 100%;
          max-width: 322px;
          aspect-ratio: 322 / 402;
          margin: 0 auto 30px;
          background: #d9d9d9;
          overflow: hidden;
          box-shadow: inset 0 0 0 1px rgba(0,0,0,0.04);
        }

        .video-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255,255,255,0.55) 0%,
            rgba(220,220,220,0.9) 100%
          );
        }

        .play-icon {
          position: absolute;
          left: 14px;
          bottom: 14px;
          width: 0;
          height: 0;
          border-top: 6px solid transparent;
          border-bottom: 6px solid transparent;
          border-left: 10px solid #ffffff;
          opacity: 0.95;
        }

        .description {
          max-width: 420px;
          margin: 0 auto 28px;
          color: #242424;
          font-size: 19px;
          line-height: 1.15;
          letter-spacing: -0.3px;
        }

        .benefits {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 6px 16px;
          padding-bottom: 2px;
          color: #6c6296;
          font-size: 12px;
          line-height: 1.25;
        }

        .benefit-item {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          white-space: nowrap;
        }

        .benefit-check {
          color: #8b67d9;
          font-size: 16px;
          line-height: 1;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .clone-page {
            padding-top: 8px;
            padding-bottom: 18px;
          }

          .hero-section {
            max-width: 820px;
          }

          .hero-title {
            max-width: 780px;
            margin: 0 auto 30px;
            font-size: 44px;
            line-height: 1.04;
            letter-spacing: -1.3px;
          }

          .hero-subtext {
            margin-bottom: 34px;
          }

          .hero-subtext p {
            font-size: 20px;
            line-height: 1.3;
          }

          .video-placeholder {
            margin-bottom: 34px;
          }

          .description {
            max-width: 600px;
            margin-bottom: 34px;
            font-size: 20px;
            line-height: 1.12;
          }

          .benefits {
            gap: 4px 18px;
            font-size: 14px;
          }
        }

        /* ── SEÇÃO 2 ── */
        .purple-section {
          width: 100%;
          background: linear-gradient(160deg, #7b2fbe 0%, #5a189a 45%, #3a0ca3 100%);
          color: #ffffff;
          padding: 32px 18px 40px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .purple-title {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
          color: #ffffff;
          letter-spacing: -0.3px;
          max-width: 360px;
          margin: 0;
        }

        .purple-title strong {
          font-weight: 800;
          display: block;
          margin-top: 2px;
        }

        .collage-img {
          width: 100%;
          max-width: 340px;
          height: auto;
          display: block;
          border-radius: 4px;
        }

        .purple-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 15px;
          line-height: 1.55;
          color: #f0e6ff;
          max-width: 390px;
        }

        .purple-text u {
          text-underline-offset: 2px;
        }

        .purple-text strong {
          font-weight: 700;
          color: #ffffff;
        }

        .orange {
          color: #f5a623;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .purple-section {
            padding: 60px 24px;
            gap: 32px;
          }

          .purple-title {
            font-size: 36px;
            max-width: 700px;
          }

          .collage-img {
            max-width: 520px;
          }

          .purple-text {
            font-size: 17px;
            max-width: 620px;
          }
        }
        /* ── SEÇÃO 3 ── */
        .problems-section {
          width: 100%;
          background: #f9f9f9;
          padding: 36px 22px 44px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .problems-title {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
          color: #3a2a6e;
          max-width: 360px;
          margin: 0 0 32px;
          letter-spacing: -0.3px;
        }

        .problems-title strong {
          font-weight: 800;
          display: block;
          margin-top: 2px;
          color: #3a2a6e;
        }

        .problems-list {
          display: flex;
          flex-direction: column;
          gap: 28px;
          width: 100%;
          max-width: 380px;
        }

        .problem-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .problem-heading {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }

        .problem-red {
          color: #e8192c;
          font-weight: 700;
        }

        .problem-desc {
          margin: 0;
          font-size: 15px;
          line-height: 1.55;
          color: #2a2a2a;
          font-weight: 400;
        }

        @media (min-width: 768px) {
          .problems-section {
            padding: 60px 24px 70px;
          }

          .problems-title {
            font-size: 34px;
            max-width: 680px;
            margin-bottom: 44px;
          }

          .problems-list {
            max-width: 660px;
            gap: 36px;
          }

          .problem-heading {
            font-size: 18px;
          }

          .problem-desc {
            font-size: 17px;
            max-width: 580px;
            margin: 0 auto;
          }
        }
        /* ── SEÇÃO 4 ── */
        .solution-section {
          width: 100%;
          background: #f5ece8;
          padding: 32px 18px 44px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 22px;
        }

        .solution-title {
          font-size: 22px;
          font-weight: 400;
          line-height: 1.25;
          color: #3a2a6e;
          max-width: 370px;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .solution-title strong {
          font-weight: 800;
          display: block;
          margin-top: 2px;
          color: #3a2a6e;
        }

        .solution-img-wrap {
          position: relative;
          width: 100%;
          max-width: 370px;
        }

        .solution-img {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 3px;
        }

        .solution-img-caption {
          display: block;
          font-size: 10px;
          color: #888;
          text-align: right;
          margin-top: 4px;
          font-style: italic;
        }

        .solution-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 370px;
          font-size: 15px;
          line-height: 1.55;
          color: #2a2a2a;
        }

        .solution-text p {
          margin: 0;
        }

        .solution-subtitle {
          font-size: 15px;
          color: #2a2a2a;
        }

        .solution-list {
          list-style: disc;
          padding-left: 22px;
          text-align: left;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 15px;
          color: #2a2a2a;
        }

        @media (min-width: 768px) {
          .solution-section {
            padding: 60px 24px 70px;
            gap: 32px;
          }

          .solution-title {
            font-size: 34px;
            max-width: 680px;
          }

          .solution-img-wrap {
            max-width: 520px;
          }

          .solution-text {
            max-width: 620px;
            font-size: 17px;
          }

          .solution-list {
            font-size: 17px;
          }
        }
        /* ── SEÇÃO 5 ── */
        .life-section {
          width: 100%;
          background: linear-gradient(160deg, #7b2fbe 0%, #5a189a 45%, #3a0ca3 100%);
          color: #ffffff;
          padding: 32px 18px 40px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          text-align: center;
        }

        .life-title {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.2;
          color: #ffffff;
          max-width: 340px;
          margin: 0;
          letter-spacing: -0.3px;
        }

        .life-title strong {
          font-weight: 800;
          display: block;
          margin-top: 2px;
        }

        .life-img-wrap {
          position: relative;
          width: 100%;
          max-width: 340px;
          border-radius: 10px;
          overflow: hidden;
        }

        .life-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .life-img-caption {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(80, 30, 160, 0.82);
          color: #ffffff;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
          padding: 10px 12px;
          line-height: 1.4;
        }

        .life-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 340px;
          text-align: left;
        }

        .life-list li {
          font-size: 15px;
          line-height: 1.45;
          color: #ffffff;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }

        .life-list li::before {
          content: "✔";
          color: #c084fc;
          font-size: 15px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        @media (min-width: 768px) {
          .life-section {
            padding: 60px 24px 70px;
            gap: 32px;
          }

          .life-title {
            font-size: 36px;
            max-width: 600px;
          }

          .life-img-wrap {
            max-width: 480px;
          }

          .life-list {
            max-width: 480px;
          }

          .life-list li {
            font-size: 17px;
          }
        }
        /* ── SEÇÃO 6 ── */
        .testimonials-section {
          width: 100%;
          background: #f9f9f9;
          padding: 36px 0 40px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          overflow: hidden;
        }

        .testimonials-title {
          font-size: 24px;
          font-weight: 400;
          line-height: 1.2;
          color: #3a2a6e;
          text-align: center;
          margin: 0;
          padding: 0 18px;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        .testimonials-title strong {
          font-weight: 900;
          color: #3a2a6e;
        }

        /* MOBILE carrossel infinito */
        .carousel-mobile {
          width: 100%;
          overflow: hidden;
          display: block;
        }

        .carousel-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: scrollCarousel 18s linear infinite;
          padding: 0 18px;
        }

        .carousel-track:hover {
          animation-play-state: paused;
        }

        .carousel-img {
          width: 240px;
          height: auto;
          border-radius: 10px;
          flex-shrink: 0;
          display: block;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }

        @keyframes scrollCarousel {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* DESKTOP slider */
        .slider-desktop {
          display: none;
        }

        @media (min-width: 768px) {
          .testimonials-section {
            padding: 60px 0 70px;
          }

          .testimonials-title {
            font-size: 36px;
          }

          .carousel-mobile {
            display: none;
          }

          .slider-desktop {
            display: flex;
            align-items: center;
            gap: 12px;
            width: 100%;
            max-width: 860px;
            padding: 0 24px;
          }

          .slider-viewport {
            flex: 1;
            overflow: hidden;
            border-radius: 10px;
          }

          .slider-track {
            display: flex;
            gap: 16px;
            transition: transform 0.4s ease;
          }

          .slider-img {
            width: calc(50% - 8px);
            flex-shrink: 0;
            height: auto;
            border-radius: 10px;
            display: block;
            box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          }

          .slider-btn {
            background: #5a189a;
            color: white;
            border: none;
            border-radius: 50%;
            width: 42px;
            height: 42px;
            font-size: 26px;
            cursor: pointer;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: opacity 0.2s;
            line-height: 1;
          }

          .slider-btn:hover {
            background: #3a0ca3;
          }
        }
        /* ── SEÇÃO 7 ── */
        .modules-section {
          width: 100%;
          background: #fdf6f0;
          padding: 36px 18px 44px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .modules-title {
          font-size: 20px;
          font-weight: 700;
          color: #3a2a6e;
          text-align: center;
          margin: 0;
          max-width: 360px;
          line-height: 1.3;
        }

        .modules-grid {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          max-width: 400px;
        }

        .module-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .module-img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }

        .module-name {
          margin: 0;
          font-size: 14px;
          color: #3a2a6e;
          text-align: left;
          line-height: 1.4;
        }

        .module-list {
          margin: 0;
          padding-left: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 13px;
          color: #2a2a2a;
          line-height: 1.5;
        }

        @media (min-width: 768px) {
          .modules-section {
            padding: 60px 24px 70px;
          }

          .modules-title {
            font-size: 28px;
            max-width: 700px;
          }

          .modules-grid {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 24px;
            max-width: 960px;
          }

          .module-name {
            font-size: 15px;
          }

          .module-list {
            font-size: 14px;
          }
        }
        /* ── SEÇÃO 8 BÔNUS ── */
        .bonus-section {
          width: 100%;
          background: #fdf6f0;
          padding: 40px 18px 50px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
        }

        .bonus-header {
          font-size: 22px;
          font-weight: 900;
          color: #3a2a6e;
          text-align: center;
          text-transform: uppercase;
          margin: 0;
          line-height: 1.2;
          letter-spacing: 0.3px;
        }

        .bonus-list {
          display: flex;
          flex-direction: column;
          gap: 32px;
          width: 100%;
          max-width: 400px;
        }

        .bonus-card {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: center;
        }

        .bonus-img-wrap {
          width: 100%;
          border: 2px solid #7c3aed;
          border-radius: 12px;
          overflow: hidden;
        }

        .bonus-img {
          width: 100%;
          height: auto;
          display: block;
        }

        .bonus-text {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }

        .bonus-title {
          margin: 0;
          font-size: 17px;
          color: #2a2a2a;
          line-height: 1.35;
        }

        .bonus-desc {
          margin: 0;
          font-size: 14px;
          color: #444;
          line-height: 1.6;
          text-align: justify;
        }

        /* ── SEÇÃO 9 DEPOIMENTO SÍLVIA ── */
        .silvia-section {
          width: 100%;
          background: linear-gradient(160deg, #7b2fbe 0%, #5a189a 45%, #3a0ca3 100%);
          padding: 40px 18px 50px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .silvia-title {
          font-size: 20px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.3;
          margin: 0;
          max-width: 380px;
        }

        .silvia-title strong {
          font-weight: 800;
          display: block;
          margin-top: 2px;
        }

        .silvia-img {
          width: 100%;
          max-width: 340px;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .silvia-label {
          margin: 0;
          font-size: 18px;
          color: #f5c542;
          font-weight: 400;
        }

        .silvia-label strong {
          font-weight: 800;
          color: #f5c542;
        }

        .silvia-quote {
          display: flex;
          flex-direction: column;
          gap: 10px;
          max-width: 380px;
          font-size: 15px;
          line-height: 1.6;
          color: #ffffff;
        }

        .silvia-quote p {
          margin: 0;
        }

        .silvia-quote u {
          text-underline-offset: 2px;
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .bonus-section {
            padding: 60px 24px 70px;
            gap: 40px;
          }

          .bonus-header {
            font-size: 34px;
          }

          .bonus-list {
            max-width: 860px;
            gap: 40px;
          }

          .bonus-card {
            flex-direction: row;
            align-items: flex-start;
            gap: 40px;
          }

          .bonus-card-reverse {
            flex-direction: row-reverse;
          }

          .bonus-img-wrap {
            width: 340px;
            flex-shrink: 0;
          }

          .bonus-text {
            justify-content: center;
            padding-top: 8px;
          }

          .bonus-title {
            font-size: 20px;
          }

          .bonus-desc {
            font-size: 16px;
          }

          .silvia-section {
            padding: 60px 24px 70px;
            gap: 28px;
          }

          .silvia-title {
            font-size: 32px;
            max-width: 700px;
          }

          .silvia-img {
            max-width: 460px;
          }

          .silvia-quote {
            max-width: 620px;
            font-size: 17px;
          }
        }
        /* ── SEÇÃO 10 CERTIFICADOS ── */
        .cert-section {
          width: 100%;
          background: #fdf6f0;
          padding: 36px 18px 44px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          text-align: center;
        }

        .cert-title {
          font-size: 24px;
          font-weight: 900;
          color: #3a2a6e;
          text-transform: uppercase;
          line-height: 1.2;
          margin: 0;
          max-width: 360px;
          letter-spacing: 0.3px;
        }

        .cert-img {
          width: 100%;
          max-width: 380px;
          height: auto;
          display: block;
          border-radius: 10px;
        }

        /* ── SEÇÃO 11 PROFESSORA ── */
        .professor-section {
          width: 100%;
          background: linear-gradient(160deg, #7b2fbe 0%, #5a189a 45%, #3a0ca3 100%);
          padding: 40px 18px 50px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          text-align: center;
        }

        .professor-title {
          font-size: 26px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
          max-width: 340px;
        }

        .professor-title strong {
          font-weight: 900;
          display: block;
        }

        .professor-img {
          width: 100%;
          max-width: 360px;
          height: auto;
          display: block;
          border-radius: 8px;
        }

        .professor-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 380px;
          font-size: 15px;
          line-height: 1.6;
          color: #f0e6ff;
        }

        .professor-text p {
          margin: 0;
        }

        .professor-text strong {
          color: #ffffff;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .cert-section {
            padding: 60px 24px 70px;
          }

          .cert-title {
            font-size: 34px;
            max-width: 680px;
          }

          .cert-img {
            max-width: 600px;
          }

          .professor-section {
            padding: 60px 24px 70px;
            gap: 32px;
          }

          .professor-title {
            font-size: 40px;
            max-width: 600px;
          }

          .professor-img {
            max-width: 400px;
          }

          .professor-text {
            max-width: 660px;
            font-size: 17px;
          }
        }
        /* ── SEÇÃO 12 OFERTA ── */
        .offer-section {
          width: 100%;
          background: #ffffff;
          padding: 44px 20px 56px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          text-align: center;
        }

        .offer-title {
          font-size: 24px;
          font-weight: 800;
          color: #3a2a6e;
          line-height: 1.2;
          margin: 0;
          max-width: 360px;
        }

        .offer-subtitle {
          font-size: 15px;
          color: #333;
          line-height: 1.6;
          margin: 0;
          max-width: 380px;
        }

        .offer-date {
          color: #e8192c;
          font-weight: 800;
        }

        .offer-urgency {
          font-size: 16px;
          color: #222;
          margin: 0;
          max-width: 360px;
          line-height: 1.5;
        }

        .offer-img {
          width: 100%;
          max-width: 380px;
          height: auto;
          display: block;
        }

        .offer-price-block {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .offer-price-installment {
          font-size: 28px;
          color: #22c55e;
          margin: 0;
          font-weight: 400;
        }

        .offer-price-installment strong {
          font-weight: 700;
        }

        .offer-price-value {
          font-size: 60px;
          font-weight: 900;
          color: #22c55e;
          margin: 0;
          line-height: 1;
        }

        .offer-price-or {
          font-size: 20px;
          color: #333;
          margin: 4px 0 0;
        }

        .offer-price-cash {
          color: #22c55e;
          font-weight: 800;
        }

        .offer-checklist-wrap {
          width: 100%;
          max-width: 420px;
          text-align: left;
        }

        .offer-checklist-title {
          font-size: 20px;
          font-weight: 400;
          color: #3a2a6e;
          margin: 0 0 18px;
          text-align: center;
        }

        .offer-checklist {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .offer-check-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid #f0eaf8;
          font-size: 14px;
          color: #2a2a2a;
          line-height: 1.4;
        }

        .offer-check-icon {
          flex-shrink: 0;
          display: flex;
          align-items: center;
        }

        .offer-cta-hint {
          font-size: 14px;
          color: #555;
          margin: 8px 0 0;
        }

        .offer-btn {
          display: block;
          width: 100%;
          max-width: 380px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          padding: 18px 24px;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
          box-shadow: 0 4px 20px rgba(34,197,94,0.35);
          letter-spacing: 0.2px;
        }

        .offer-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 32px rgba(34,197,94,0.55);
          filter: brightness(1.08);
        }

        .offer-btn:active {
          transform: translateY(0) scale(0.99);
          filter: brightness(0.97);
        }

        .offer-seals {
          width: 100%;
          max-width: 180px;
          height: auto;
          display: block;
          margin-top: 4px;
        }

        @media (min-width: 768px) {
          .offer-section {
            padding: 60px 24px 80px;
            gap: 24px;
          }

          .offer-title {
            font-size: 36px;
            max-width: 640px;
          }

          .offer-subtitle {
            font-size: 17px;
            max-width: 640px;
          }

          .offer-urgency {
            font-size: 20px;
            max-width: 620px;
          }

          .offer-img {
            max-width: 560px;
          }

          .offer-price-value {
            font-size: 80px;
          }

          .offer-checklist-wrap {
            max-width: 640px;
          }

          .offer-checklist-title {
            font-size: 26px;
          }

          .offer-check-item {
            font-size: 16px;
            padding: 12px 0;
          }

          .offer-btn {
            max-width: 480px;
            font-size: 20px;
            padding: 20px 32px;
          }

          .offer-seals {
            max-width: 220px;
          }
        }
        /* ── SEÇÃO 13 GARANTIA ── */
        .guarantee-section {
          width: 100%;
          background: linear-gradient(160deg, #6b21a8 0%, #5b21b6 40%, #4c1d95 100%);
          padding: 44px 22px 50px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          text-align: center;
        }

        .guarantee-badge {
          width: 180px;
          height: auto;
          display: block;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,0.4));
        }

        .guarantee-title {
          font-size: 26px;
          font-weight: 900;
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.15;
          margin: 0;
          max-width: 360px;
          letter-spacing: 0.5px;
        }

        .guarantee-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 380px;
          font-size: 15px;
          line-height: 1.65;
          color: #e9d8fd;
        }

        .guarantee-text p {
          margin: 0;
        }

        .guarantee-text strong {
          color: #ffffff;
          font-weight: 700;
        }

        .guarantee-btn {
          display: block;
          width: 100%;
          max-width: 360px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          padding: 18px 24px;
          border-radius: 50px;
          cursor: pointer;
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
          box-shadow: 0 4px 24px rgba(34,197,94,0.45), 0 0 0 0 rgba(34,197,94,0);
          letter-spacing: 0.2px;
          margin-top: 6px;
        }

        .guarantee-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 36px rgba(34,197,94,0.65), 0 0 18px rgba(34,197,94,0.3);
          filter: brightness(1.08);
        }

        .guarantee-btn:active {
          transform: translateY(0) scale(0.99);
          filter: brightness(0.97);
        }

        @media (min-width: 768px) {
          .guarantee-section {
            padding: 70px 24px 80px;
            gap: 28px;
          }

          .guarantee-badge {
            width: 220px;
          }

          .guarantee-title {
            font-size: 38px;
            max-width: 700px;
          }

          .guarantee-text {
            max-width: 660px;
            font-size: 17px;
            gap: 18px;
          }

          .guarantee-btn {
            max-width: 460px;
            font-size: 20px;
            padding: 20px 32px;
          }
        }
        /* ── SEÇÃO 14 SUPORTE ── */
        .support-section {
          width: 100%;
          background: #ffffff;
          padding: 44px 20px 52px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          text-align: center;
        }

        .support-title {
          font-size: 24px;
          font-weight: 800;
          color: #3a2a6e;
          line-height: 1.2;
          margin: 0;
          max-width: 360px;
        }

        .support-img {
          width: 100%;
          max-width: 360px;
          height: auto;
          display: block;
        }

        .support-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 380px;
          font-size: 15px;
          line-height: 1.65;
          color: #2a2a2a;
          text-align: center;
        }

        .support-text p { margin: 0; }

        .support-text strong { font-weight: 700; color: #1a1a1a; }

        .support-hotmart { color: #f97316; font-weight: 800; }

        .support-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          text-align: left;
        }

        .support-list li {
          font-size: 15px;
          line-height: 1.5;
          color: #2a2a2a;
        }

        .support-btn {
          display: block;
          width: 100%;
          max-width: 360px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          padding: 18px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(34,197,94,0.35);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        .support-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 32px rgba(34,197,94,0.55);
          filter: brightness(1.08);
        }

        /* ── SEÇÃO 15 SIMPLES ── */
        .simple-section {
          width: 100%;
          background: linear-gradient(160deg, #7b2fbe 0%, #5a189a 45%, #3a0ca3 100%);
          padding: 44px 20px 52px;
          font-family: Arial, Helvetica, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 22px;
          text-align: center;
        }

        .simple-title {
          font-size: 24px;
          font-weight: 400;
          color: #ffffff;
          line-height: 1.2;
          margin: 0;
          max-width: 360px;
        }

        .simple-title strong {
          font-weight: 900;
          display: block;
          margin-top: 2px;
        }

        .simple-img {
          width: 100%;
          max-width: 360px;
          height: auto;
          display: block;
          border-radius: 10px;
        }

        .simple-text {
          display: flex;
          flex-direction: column;
          gap: 14px;
          max-width: 380px;
          font-size: 15px;
          line-height: 1.65;
          color: #e9d8fd;
        }

        .simple-text p { margin: 0; }

        .simple-text strong { color: #ffffff; font-weight: 700; }

        .simple-btn {
          display: block;
          width: 100%;
          max-width: 360px;
          background: linear-gradient(135deg, #22c55e, #16a34a);
          color: #ffffff;
          font-size: 18px;
          font-weight: 800;
          text-align: center;
          text-decoration: none;
          padding: 18px 24px;
          border-radius: 50px;
          box-shadow: 0 4px 24px rgba(34,197,94,0.45);
          transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        }

        .simple-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 36px rgba(34,197,94,0.65);
          filter: brightness(1.08);
        }

        @media (min-width: 768px) {
          .support-section {
            padding: 60px 24px 70px;
            gap: 28px;
          }

          .support-title {
            font-size: 36px;
            max-width: 660px;
          }

          .support-img {
            max-width: 560px;
          }

          .support-text {
            max-width: 660px;
            font-size: 17px;
          }

          .support-list li {
            font-size: 17px;
          }

          .support-btn {
            max-width: 460px;
            font-size: 20px;
          }

          .simple-section {
            padding: 60px 24px 70px;
            gap: 28px;
          }

          .simple-title {
            font-size: 38px;
            max-width: 700px;
          }

          .simple-img {
            max-width: 520px;
          }

          .simple-text {
            max-width: 660px;
            font-size: 17px;
          }

          .simple-btn {
            max-width: 460px;
            font-size: 20px;
          }
        }
      `}</style>
    </>
  );
}
