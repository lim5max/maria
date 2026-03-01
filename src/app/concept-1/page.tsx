"use client";

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Send, Handshake, Scale, Shield, Globe, TrendingUp, FileText, Award, Copyright, Menu, X, Phone } from 'lucide-react';

type ServiceItem = {
  title: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
  cases: string[];
};

const ServiceCard = ({
  item,
  index,
  onOpen,
}: {
  item: ServiceItem;
  index: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      onClick={onOpen}
      className="group relative border-b border-r border-white/10 p-5 md:p-6 hover:bg-[#C15950] transition-all duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col min-h-[9rem] md:min-h-[10rem] lg:min-h-[11rem] justify-between cursor-pointer"
    >
      <div className="flex justify-between items-start">
        <span className="font-sans-custom text-sm text-stone-600 font-medium group-hover:text-white transition-colors duration-300">0{index + 1}</span>
        <div className="text-stone-600 group-hover:text-white transition-colors duration-300">
           {item.icon}
        </div>
      </div>

      <div>
        <div className="inline-flex flex-col items-start gap-2 pr-2">
          <h4 className="font-serif-custom text-lg md:text-xl lg:text-2xl text-stone-100 font-medium tracking-[0.01em] group-hover:text-white transition-colors duration-300 leading-snug">
            {item.title}
          </h4>
          <div className="w-0 group-hover:w-full h-[1px] bg-[#C15950] group-hover:bg-white transition-all duration-500 ease-out"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Concept1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locale, setLocale] = useState<"ru" | "en">("ru");
  const [activeService, setActiveService] = useState<number | null>(null);
  const [showFullExperience, setShowFullExperience] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services: ServiceItem[] = [
    {
      title: "M&A · Купля-продажа бизнеса · Инвестиции",
      icon: <TrendingUp className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Помогаю структурировать и совершать корпоративные и инвестиционные сделки от подготовки предварительной документации до закрытия сделки и последующей реструктуризации бизнеса",
      bullets: [
        "Продажа и покупка бизнеса и активов в России и за рубежом, сделки M&A и прямых инвестиций",
        "Разработка структуры сделки с учетом корпоративных, антимонопольных, налоговых, санкционных и иных регуляторных аспектов",
        "Проведение юридической проверки (due diligence), согласование транзакционной документации, сопровождение переговоров",
        "Подготовка документации: term sheet, LOI, SHA, опционы, indemnity, гарантии и заверения, disclosure letters",
        "Сопровождение финансовых сделок и обеспечительной документации: займы, цессия/перевод долга, поручительства, залоги, эскроу и аккредитивы",
      ],
      cases: [
        "Сопровождала объединение активов для создания крупного производителя цветных металлов",
        "Сопровождала объединение промышленных активов в области добычи и переработки угля",
        "Помогла иностранному инвестору приобрести контрольную долю в собственнике офисной недвижимости класса А в Москве",
        "Помогла основателю продать 50% доли в заводе по производству химического сырья стратегическому инвестору",
        "Помогла инвестиционному холдингу поэтапно продать доли в операторах портовой инфраструктуры в России",
        "Помогла мажоритарному участнику поэтапно продать долю в бизнесе автокомпонентов с привлечением кредитного финансирования",
        "Помогла основателю поэтапно продать медицинский бизнес венчурному инвестору",
        "Помогла инвестору продать компанию с лицензией на разработку месторождения полезных ископаемых в Иркутской области",
        "Помогла инвесторам приобрести активы в агробизнесе, газодобыче, рыбодобыче и коммерческой недвижимости",
      ],
    },
    {
      title: "Совместные предприятия (JV)",
      icon: <Handshake className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Помогаю создавать, реструктурировать и развивать совместные предприятия, партнерства и товарищества, в том числе с участием иностранных лиц",
      bullets: [
        "Разработка правовой структуры участия в совместном проекте и модели корпоративного управления",
        "Согласование условий сотрудничества и механик принятия решений между участниками",
        "Подготовка основной документации: рамочные соглашения, SHA, корпоративные договоры, соглашения о партнерстве, опционы",
        "Подготовка сопутствующей документации: ключевые коммерческие контракты, IP-документы и иные соглашения",
        "Сопровождение выхода из тупиковых и кризисных ситуаций, изменения условий сотрудничества и выхода участников из проекта",
      ],
      cases: [
        "Помогла создать JV иностранного инвестора и регионального партнера по производству аккумуляторных батарей",
        "Сопровождала создание JV финской судостроительной компании и российской корпорации по производству судовых двигателей",
        "Помогла частным российским и иностранным инвесторам создать партнерство для трейдингового бизнеса сырьевых товаров за рубежом",
        "Помогла российскому и иностранному инвестору создать JV для строительства и управления торговым центром за рубежом",
        "Помогла российскому и иностранному инвестору структурировать проект по развитию бизнеса химчистки спецодежды за рубежом",
        "Помогла российскому и японскому партнерам оформить совместный проект по производству кристаллических осцилляторов",
        "Сопровождала создание партнерства российского инвестора и института развития по лесопереработке и строительству ЦБК в регионе",
      ],
    },
    {
      title: "Корпоративная практика & реструктуризация",
      icon: <FileText className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Оказываю правовую поддержку по вопросам корпоративного права, корпоративного управления и многоэтапных корпоративных реструктуризаций",
      bullets: [
        "Корпоративные реструктуризации и реорганизации, включая деоффшоризацию и редомициляцию",
        "Разработка оптимальной структуры владения активами и участия в инвестиционных проектах",
        "Разработка структуры корпоративного управления и подготовка внутренних документов (положений, политик и т.д.)",
        "Подготовка договоров на передачу функций единоличного исполнительного органа управляющей организации",
        "Консультирование по вопросам ответственности директоров и должностных лиц",
      ],
      cases: [
        "Помогла российской инвестиционной группе выполнить многоэтапную мультиюрисдикционную реструктуризацию в связи с деоффшоризацией активов",
        "Сопровождала редомициляцию и согласование новых соглашений акционеров в рамках трансформации группы",
        "Помогла транспортно-логистической группе провести реструктуризацию с преобразованием холдинговой компании из ООО в АО",
        "Консультировала крупнейшего акционера производителя цветных металлов по вопросам корпоративной реструктуризации и долговых обязательств",
        "Помогла нефтехимической компании выполнить многоступенчатую реструктуризацию при подготовке к продаже акций стратегическому инвестору и инвестиционному фонду",
        "Сопровождала реструктуризацию вертикально-интегрированного горнодобывающего холдинга",
        "Помогла банку в реструктуризации обязательств горнодобывающего холдинга с частичной конвертацией долга в долю в проекте освоения месторождения",
      ],
    },
    {
      title: "Венчурные проекты",
      icon: <Award className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Помогаю основателям привлекать венчурные инвестиции, а инвесторам и портфельным компаниям инвестировать в проекты на всех этапах сделки",
      bullets: [
        "Проведение юридической проверки перед инвестициями и структурирование сделки по привлечению капитала",
        "Подготовка и согласование документации: договоры подписки, соглашения акционеров, опционные механики",
        "Работа с гибридными инструментами: конвертируемые займы, CLAs, SAFE, KISS",
        "Сопровождение структурирования корпоративных прав инвестора и выхода из проекта",
      ],
      cases: [
        "Помогла инвесторам структурировать вход в биотехнологический стартап по генетическим исследованиям",
        "Сопровождала инвестиции в стартап ранней диагностики заболеваний на базе анализов крови",
        "Сопровождала сделку в медицинском insurtech-проекте корпоративного медобслуживания на базе ДМС",
        "Сопровождала инвестиции в стартап по интернет-торговле фермерскими продуктами",
        "Сопровождала инвестиции в foodtech-проект сервиса доставки наборов для приготовления блюд",
      ],
    },
    {
      title: "Международные сделки",
      icon: <Globe className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Веду сделки с иностранным участием на английском языке, включая приобретение и отчуждение активов, инвестиции и создание совместных предприятий",
      bullets: [
        "Сопровождение сделок в России и за рубежом с подключением локальных консультантов в иностранных юрисдикциях",
        "Структурирование инвестиций и сделок по приобретению/продаже долей, акций и активов",
        "Разработка и согласование англоязычной документации и координация мультиюрисдикционной команды",
        "Сопровождение совместных предприятий и трансграничных проектов в СНГ, ОАЭ, Великобритании и иных юрисдикциях",
      ],
      cases: [
        "Помогла инвестиционному холдингу приобрести 25% акций международной буровой компании, ведущей бизнес в странах СНГ",
        "Помогла российскому инвестору инвестировать в английскую компанию по разработке финтех-решений",
        "Помогла российскому инвестору приобрести долю в совместном предприятии в ОАЭ по разработке ПО для автобизнеса",
        "Сопровождала выкуп миноритарной доли у иностранного акционера телекоммуникационной компании",
        "Сопровождала продажу доли в нефтехимической компании китайскому стратегическому инвестору и инвестиционному фонду",
        "Помогла иностранному инвестору приобрести бизнес по предоставлению услуг дата-центров в Москве",
        "Помогла российскому инвестору создать JV по логистике нефтепродуктов в одной из стран СНГ",
        "Помогла структурировать JV с иностранным партнером по развитию винодельческого бизнеса в России и за рубежом",
      ],
    },
    {
      title: "Коммерческая практика",
      icon: <Scale className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Разрабатываю, согласовываю и аудирую коммерческие договоры как в рамках отдельных задач, так и в составе комплексных сделок и проектов",
      bullets: [
        "Договоры аренды, лизинга, поставки, оказания услуг, подряда, дистрибуции и коммерческой концессии",
        "Агентские договоры, договоры мерчендайзинга, лицензионные договоры и договоры передачи ноу-хау",
        "Подготовка и согласование сложных отраслевых договоров, включая take-or-pay и структуры с международными операторами",
        "Аудит договорного документооборота доверителя на соответствие законодательству и лучшим рыночным практикам",
      ],
      cases: [
        "Разрабатывала договоры поставки автокомпонентов, компонентов для морских судов и товаров FMCG для иностранных поставщиков",
        "Подготовила дистрибуторские, агентские договоры и договоры на оказание услуг мерчендайзинга",
        "Разрабатывала договоры поставки нефтепродуктов, включая модели «бери или плати» (take or pay)",
        "Подготовила договоры франчайзинга, лицензионные договоры, договоры передачи ноу-хау и договоры услуг эскроу-агента",
        "Сопровождала договор управления бизнес-центром в России с оператором международного класса",
        "Сопровождала договор управления отелем за рубежом с международным оператором",
        "Подготовила договоры купли-продажи новых и неновых самолетов и договоры с коммерческим оператором самолетов",
        "Сопровождала договоры купли-продажи морских судов и связанные коммерческие соглашения",
      ],
    },
    {
      title: "Личное благосостояние",
      icon: <Shield className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Помогаю собственникам и бенефициарам бизнеса по вопросам личного благосостояния в России и за рубежом",
      bullets: [
        "Структурирование владения и распоряжения личными и бизнес-активами",
        "Вопросы наследственного планирования и структурирования передачи активов родным и близким",
        "Трасты, личные фонды, брачные договоры и соглашения о разделе имущества",
        "Координация структуры с привлечением налоговых экспертов в России и локальных консультантов за рубежом",
      ],
      cases: [
        "Помогла доверителю передать в управление международному оператору дорогостоящую недвижимость для частного использования",
        "Сопровождала подготовку и заключение договора по управлению отелем за рубежом с международным оператором",
        "Помогла доверителю приобрести несколько новых бизнес-джетов у иностранного производителя",
        "Помогла доверителю купить и продать неновый бизнес-джет",
        "Сопровождала подготовку и заключение договора с коммерческим оператором (эксплуатантом) самолетов",
        "Помогла доверителям продать жилую и нежилую недвижимость (квартиры, загородные дома, офисные помещения)",
        "Помогла доверителю подготовить и заключить брачный договор при заключении брака",
      ],
    },
    {
      title: "Интеллектуальная собственность (IP)",
      icon: <Copyright className="w-5 h-5 lg:w-7 lg:h-7" />,
      description:
        "Сопровождаю сделки, в которых ключевым активом является интеллектуальная собственность. Провожу правовой аудит интеллектуальной собственности при совершении сделок и реализации инвестиционных проектов",
      bullets: [
        "Разработка правовых схем коммерциализации разработок в области программного обеспечения",
        "Подготовка всей необходимой документации: лицензионные договоры, договоры аренды, договоры удаленного доступа к ПО, SLA и иные соглашения",
        "Подготовка документов для эффективной правовой охраны ноу-хау и последующего оборота прав",
        "Разработка правовых моделей продвижения бренда, товаров и услуг с учетом требований IP и рекламного законодательства",
        "Подготовка договоров коммерческой концессии и документов для продвижения через соцсети, платформы, мессенджеры и иные digital-каналы",
        "Оформление прав и распоряжение правами на творческий контент: онлайн-трансляции, видеозаписи, вебинары, фото- и видеопубликации",
      ],
      cases: [
        "Помогла одной из лидирующих скандинавских IT-компаний купить бизнес по предоставлению услуг дата-центров в Москве у российских основателей",
        "Помогла собственнику продать спортивный клуб в одной из скандинавских стран",
        "Разработала для медицинской компании договор коммерческой концессии и пакет документов для развития сети медицинских офисов по модели франчайзинга",
        "Помогла защитить права лицензиата в суде при взыскании неустойки правообладателем: суд полностью отказал в исковых требованиях",
        "Проконсультировала российский производственный холдинг по внутригрупповой реструктуризации прав на изобретения и полезные модели, включая лицензионные передачи",
        "Консультировала крупного российского разработчика ПО по регистрации и продлению товарных знаков в России и США, лицензированию ПО иностранным заказчикам и депонированию кода у эскроу-агента",
        "Помогла студии документальных фильмов оформить права на фильмы, заключить договоры с творческой командой и получить государственную финансовую поддержку",
        "Помогла частной студии художественных фильмов оформить права на кинофильмы и договоры с авторами кинофильмов и их составных частей",
        "Помогла производителю программного обеспечения оспорить отказ в регистрации товарного знака в Палате по патентным спорам Роспатента",
        "Проконсультировала производителя стройматериалов по вопросам защиты цвета в качестве товарного знака",
        "Помогла инвестору принять участие в международном инвестиционно-архитектурном конкурсе на право развития территории вплоть до подписания инвестиционного договора",
        "Помогла инвестиционному холдингу приобрести 100% одной из крупнейших проектных и научно-исследовательских организаций в области инфраструктурного строительства",
      ],
    },
  ];

  const recognitions = [
    {
      title: "Best Lawyers (с 2013)",
      text: "Mergers and Acquisitions Law (2020-2022), Competition/Antitrust Law (2021, 2022) и Trade Law (2013-2022)",
    },
    {
      title: "Chambers Europe",
      text: "Corporate/M&A (2010, 2015-2021): Mid-Market - Band 1 (2021)",
    },
    {
      title: "The Legal 500",
      text: "Commercial, corporate and M&A (2018-2021), Energy and natural resources (2018-2021) и Real Estate and construction (2018-2021)",
    },
    {
      title: "Право.ру-300",
      text: "Природные ресурсы/Энергетика - группа I (2019), группа II (2020-2022), Корпоративное право/Слияния и поглощения (High Market) - группа II (2019-2022)",
    },
  ];

  React.useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveService(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    setShowFullExperience(false);
  }, [activeService]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 selection:bg-[#C15950] selection:text-black overflow-x-hidden font-sans-custom">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap&subset=cyrillic');

        .font-serif-custom { font-family: 'Playfair Display', serif; }
        .font-sans-custom { font-family: 'Manrope', sans-serif; }

        .writing-vertical-lr {
          writing-mode: vertical-lr;
        }
      `}</style>

      <main className="relative z-10 max-w-[1600px] mx-auto border-l border-r border-white/10 overflow-hidden">

        {/* --- BLOCK 1: HERO & BIO --- */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 min-h-screen border-b border-white/10">

          {/* Brand Vertical Text (Desktop) - Left Sidebar */}
          <div className="hidden lg:flex col-span-1 border-r border-white/10 items-center justify-center py-10 sticky top-0 h-screen">
            <span className="writing-vertical-lr rotate-180 text-[#C15950] tracking-[0.3em] text-[10px] font-sans-custom uppercase opacity-80">
              Миралигал
            </span>
          </div>

          {/* Center Content */}
          <div className="col-span-1 lg:col-span-6 flex flex-col relative pt-[73px] lg:pt-0">

            {/* Top Navigation Bar */}
            <header className="fixed top-0 left-0 right-0 z-40 flex justify-between items-center p-6 border-b border-white/10 bg-[#0a0a0a]/95 backdrop-blur-sm lg:static lg:px-16 lg:py-10 lg:bg-transparent lg:backdrop-blur-0 lg:border-none">
               <div className="flex items-center gap-4">
                  <span className="text-[#C15950] uppercase tracking-[0.3em] text-xs font-sans-custom font-semibold">
                    Миралигал
                  </span>
               </div>

               {/* Desktop Menu */}
               <div className="hidden lg:flex items-center gap-8">
               <nav className="hidden lg:flex gap-8 font-medium">
                 {['Обо мне', 'Практика', 'Контакты'].map((item) => (
                   <button
                     key={item}
                     onClick={() => scrollToSection(item === 'Практика' ? 'services' : 'footer')}
                     className="text-xs uppercase tracking-widest text-stone-400 hover:text-[#C15950] transition-colors duration-300 font-semibold"
                   >
                     {item}
                   </button>
                 ))}
               </nav>
                <div className="flex items-center border border-white/10 bg-[#0d0d0e]">
                  <button
                    onClick={() => setLocale("ru")}
                    aria-pressed={locale === "ru"}
                    className={`px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      locale === "ru" ? "bg-[#C15950] text-white" : "text-stone-400 hover:text-white"
                    }`}
                  >
                    Ru
                  </button>
                  <button
                    onClick={() => setLocale("en")}
                    aria-pressed={locale === "en"}
                    className={`px-3 py-1.5 text-[11px] tracking-[0.2em] uppercase transition-colors ${
                      locale === "en" ? "bg-[#C15950] text-white" : "text-stone-400 hover:text-white"
                    }`}
                  >
                    En
                  </button>
                </div>
               </div>

               {/* Mobile Menu Icon */}
               <div className="lg:hidden flex items-center gap-3">
                 <div className="flex items-center border border-white/10 bg-[#0d0d0e]">
                   <button
                     onClick={() => setLocale("ru")}
                     aria-pressed={locale === "ru"}
                     className={`px-2.5 py-1.5 text-[10px] tracking-[0.18em] uppercase transition-colors ${
                       locale === "ru" ? "bg-[#C15950] text-white" : "text-stone-400 hover:text-white"
                     }`}
                   >
                     Ru
                   </button>
                   <button
                     onClick={() => setLocale("en")}
                     aria-pressed={locale === "en"}
                     className={`px-2.5 py-1.5 text-[10px] tracking-[0.18em] uppercase transition-colors ${
                       locale === "en" ? "bg-[#C15950] text-white" : "text-stone-400 hover:text-white"
                     }`}
                   >
                     En
                   </button>
                 </div>
                 <button className="text-stone-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                   {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                 </button>
               </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed top-[73px] left-0 right-0 bg-[#0f0f0f] border-b border-white/10 z-50 p-6 flex flex-col gap-5 lg:hidden"
              >
                 {['Обо мне', 'Практика', 'Контакты'].map((item) => (
                   <button
                     key={item}
                     onClick={() => scrollToSection(item === 'Практика' ? 'services' : 'footer')}
                     className="text-left text-base uppercase tracking-widest text-stone-300 font-semibold"
                   >
                     {item}
                   </button>
                 ))}
              </motion.div>
            )}

            {/* Hero Content */}
            <div className="flex-grow flex flex-col justify-center p-6 lg:p-16 lg:pt-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="font-serif-custom text-4xl sm:text-5xl lg:text-7xl leading-[1.08] lg:leading-[1.1] tracking-[0.01em] mb-7 lg:mb-8 text-white font-medium">
                  Юридическая практика <br/>
                  <span className="italic text-stone-400">адвоката</span> Марии Мирошниковой
                </h1>

                <div className="mt-10 lg:mt-[3.75rem] mb-12 lg:mb-16 h-[2px] w-32 lg:w-40 bg-gradient-to-r from-[#C15950] via-[#d46a61] to-transparent"></div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-auto max-w-lg"
              >
                <p className="font-sans-custom font-normal text-stone-200 text-base lg:text-lg leading-relaxed mb-7 lg:mb-8">
                  Мария — надежный юридический советник с{" "}
                  <span className="text-[#C15950]">25-летним</span> опытом в вопросах создания и развития бизнеса,
                  инвестиций, покупки и продажи активов
                </p>
                <div className="flex flex-col gap-4 py-3 pl-4 lg:pl-5 border-l border-[#C15950]/60 bg-[#111111] rounded-sm">
                  <p className="font-sans-custom text-sm lg:text-base font-normal text-stone-400 leading-relaxed">
                    Помогаю найти <span className="text-stone-200">оптимальное решение</span> в нестандартной ситуации,
                    опираясь на лучшие международные практики
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Photo Section - Right Sidebar */}
          <div className="col-span-1 lg:col-span-5 relative h-[50vh] lg:h-auto border-l border-white/10 overflow-hidden">
            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              src="/maria.jpg"
              alt="Мария Мирошникова"
              className="w-full h-full object-cover"
            />

            <a
              href="https://t.me/miroshnikova_maria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Написать в Telegram"
              className="absolute bottom-0 right-0 p-5 lg:p-8 z-40 bg-[#0a0a0a]/92 border-t border-l border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-[#C15950] hover:border-[#C15950] group pointer-events-auto"
            >
              <Send
                className="text-white w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1 group-hover:translate-x-1 drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]"
                strokeWidth={2.2}
              />
            </a>
          </div>
        </section>

        {/* --- STATS --- */}
        <section className="relative bg-[#0a0a0a]">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="hidden lg:block col-span-1 border-r border-white/10"></div>
            <div className="col-span-11 grid grid-cols-1 md:grid-cols-3">
              {[
                { value: "25+", label: "Лет опыта" },
                { value: "80+", label: "Проектов" },
                { value: "$100M+", label: "Объём сделок" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="p-7 sm:p-8 lg:p-14 border-b border-r border-white/10 flex flex-col gap-3"
                >
                  <span className="font-serif-custom text-4xl sm:text-5xl lg:text-[4rem] text-white font-normal leading-none">{stat.value}</span>
                  <span className="font-sans-custom text-[11px] sm:text-xs tracking-[0.22em] sm:tracking-[0.3em] text-[#C15950] uppercase">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- BLOCK 2: SERVICES --- */}
        <section id="services" className="relative bg-[#0f0f0f]">
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
            <div className="hidden lg:block col-span-1 border-r border-white/10"></div>
            <div className="col-span-11 p-8 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between">
               <h3 className="font-serif-custom text-3xl lg:text-4xl text-white font-normal">
                 Области практики
               </h3>
               <span className="font-sans-custom text-[10px] tracking-[0.3em] text-[#C15950] uppercase mt-4 lg:mt-0">
                 Миралигал
               </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
            <div className="hidden lg:block lg:col-span-1 border-r border-white/10 min-h-full bg-[#0f0f0f]"></div>
            <div className="col-span-1 md:col-span-2 lg:col-span-11 grid grid-cols-1 md:grid-cols-2">
              {services.map((item, index) => (
                <ServiceCard
                  key={index}
                  index={index}
                  item={item}
                  onOpen={() => setActiveService(index)}
                />
              ))}
            </div>
          </div>

          {/* --- RECOGNITION --- */}
          <section className="relative border-t border-white/10 bg-[#0b0b0c] overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <div
                className="absolute inset-y-0 right-0 w-[56%] opacity-[0.28] mix-blend-screen"
                style={{
                  backgroundImage: "url('/scales.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="absolute -top-24 right-16 h-72 w-72 rounded-full bg-[#C15950]/10 blur-3xl"></div>
              <div className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-[#7f3a34]/10 blur-3xl"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.52),rgba(10,10,10,0.8))]"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-white/10">
              <div className="hidden lg:block col-span-1 border-r border-white/10"></div>
              <div className="relative col-span-11 p-8 lg:p-12">
                <div className="max-w-3xl">
                  <p className="font-sans-custom text-[10px] tracking-[0.24em] uppercase text-[#C15950] mb-3">Признание</p>
                  <h3 className="font-serif-custom text-2xl sm:text-3xl lg:text-4xl text-white font-normal mb-5">Профессиональные рейтинги</h3>
                  <p className="font-sans-custom text-base text-stone-300 max-w-xl leading-relaxed">
                    Международные и российские рейтинги подтверждают стабильный опыт сопровождения сложных сделок и проектов
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block lg:col-span-1 border-r border-white/10"></div>
              <div className="relative col-span-1 lg:col-span-11 grid grid-cols-1 md:grid-cols-2">
                {recognitions.map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-r border-b border-white/10 p-5 sm:p-6 lg:p-8 bg-black/10 hover:bg-[#111112]/70 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-serif-custom text-xl sm:text-2xl text-white leading-tight">{item.title}</h4>
                      <Award size={20} className="text-[#C15950]" />
                    </div>
                    <p className="font-sans-custom text-sm lg:text-base text-stone-400/85 leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer / Contacts */}
          <footer id="footer" className="border-t border-white/10 bg-[#0a0a0a]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="hidden lg:block col-span-1 border-r border-white/10"></div>

              <div className="col-span-11 p-10 lg:p-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
                {/* Contact */}
                <div className="flex flex-col gap-6">
                  <div>
                    <h4 className="font-serif-custom text-2xl text-white font-normal mb-2">Мария Мирошникова</h4>
                    <p className="font-sans-custom text-base text-stone-400 leading-relaxed max-w-[42rem]">Эксклюзивная юридическая практика для бизнеса и частных лиц</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                    <a href="tel:+79031490249" className="group flex gap-3 items-center text-stone-300 hover:text-white transition-colors duration-300">
                      <Phone size={16} className="text-[#C15950]" />
                      <span className="text-base">+7 (903) 149-02-49</span>
                    </a>
                    <a href="https://t.me/miroshnikova_maria" target="_blank" rel="noopener noreferrer" className="group flex gap-3 items-center text-stone-300 hover:text-white transition-colors duration-300">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-[#C15950]">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                      <span className="text-base">@miroshnikova_maria</span>
                    </a>
                  </div>
                </div>

                {/* Brand + Copyright */}
                <div className="flex flex-col items-start md:items-end gap-3">
                  <span className="font-sans-custom text-sm tracking-[0.16em] text-[#C15950] uppercase">Миралигал</span>
                  <p className="font-sans-custom text-sm text-stone-500 tracking-[0.08em]">
                    &copy; {new Date().getFullYear()} All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </section>

      </main>

      <AnimatePresence>
        {activeService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveService(null)}
            className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm p-4 lg:p-8 flex items-end lg:items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[92vh] border border-white/15 bg-[#0c0c0d] shadow-[0_20px_80px_rgba(0,0,0,0.55)] flex flex-col"
            >
              <div className="flex items-start justify-between p-6 lg:p-8 border-b border-white/10">
                <div className="pr-6">
                  <p className="font-sans-custom text-[11px] tracking-[0.22em] uppercase text-[#C15950] mb-3">Миралигал</p>
                  <h4 className="font-serif-custom text-2xl lg:text-4xl text-white leading-tight">
                    {services[activeService].title}
                  </h4>
                </div>
                <button
                  aria-label="Закрыть"
                  onClick={() => setActiveService(null)}
                  className="text-stone-400 hover:text-white transition-colors p-1"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 lg:p-8 overflow-y-auto">
                <p className="font-sans-custom text-base lg:text-lg text-stone-200 leading-relaxed mb-6">
                  {services[activeService].description}
                </p>
                <div className="space-y-3">
                  {services[activeService].bullets.map((point) => (
                    <div key={point} className="flex gap-3 items-start">
                      <span className="mt-2 h-[6px] w-[6px] rounded-full bg-[#C15950] flex-shrink-0"></span>
                      <p className="font-sans-custom text-sm lg:text-base text-stone-300 leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="font-sans-custom text-[10px] tracking-[0.22em] uppercase text-[#C15950] mb-4">Избранный опыт</p>
                  <div className="space-y-3">
                    {(showFullExperience ? services[activeService].cases : services[activeService].cases.slice(0, 3)).map((item) => (
                      <div key={item} className="flex gap-3 items-start">
                        <span className="mt-2 h-[1px] w-6 bg-[#C15950] flex-shrink-0"></span>
                        <p className="font-sans-custom text-sm lg:text-base text-stone-200 leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                  {services[activeService].cases.length > 3 && (
                    <button
                      onClick={() => setShowFullExperience((prev) => !prev)}
                      className="mt-5 px-3 py-1.5 lg:px-4 lg:py-2 text-[10px] lg:text-xs uppercase tracking-[0.14em] lg:tracking-[0.16em] text-white border border-white/20 hover:border-[#C15950] hover:bg-[#C15950]/10 transition-colors"
                    >
                      {showFullExperience ? "Свернуть" : "Показать больше"}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

