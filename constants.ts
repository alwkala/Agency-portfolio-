import type { PortfolioItem } from './types';
import { PortfolioCategory } from './types';
import React from 'react';

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 1,
    category: PortfolioCategory.WEB_DESIGN,
    image: 'https://picsum.photos/seed/web1/800/600',
    title: { en: 'QuantumLeap CRM', ar: 'كوانتم ليب CRM' },
    description: {
      en: 'A comprehensive UI/UX overhaul for a leading fintech CRM platform.',
      ar: 'إعادة تصميم شاملة لواجهة المستخدم وتجربة المستخدم لمنصة رائدة في إدارة علاقات العملاء في التكنولوجيا المالية.',
    },
    details: {
      goal: { en: 'Increase user engagement by 25% and streamline data visualization.', ar: 'زيادة تفاعل المستخدمين بنسبة 25% وتبسيط عرض البيانات.' },
      process: { en: 'Conducted user research, created wireframes and high-fidelity prototypes, and implemented a component-based design system.', ar: 'أجرينا بحثًا للمستخدمين، وأنشأنا نماذج أولية، ونفذنا نظام تصميم قائم على المكونات.' },
      result: { en: 'Achieved a 30% increase in user session duration and received overwhelmingly positive feedback.', ar: 'حققنا زيادة بنسبة 30% في مدة جلسة المستخدم وتلقينا ردود فعل إيجابية ساحقة.' },
    },
    gallery: ['https://picsum.photos/seed/web1_gal1/1200/800', 'https://picsum.photos/seed/web1_gal2/1200/800'],
  },
  {
    id: 2,
    category: PortfolioCategory.PHOTOGRAPHY,
    image: 'https://picsum.photos/seed/photo1/800/600',
    title: { en: 'Urban Canvas', ar: 'لوحة حضرية' },
    description: {
      en: 'A photographic series capturing the juxtaposition of nature and urban decay.',
      ar: 'سلسلة فوتوغرافية تلتقط التجاور بين الطبيعة والتحلل الحضري.',
    },
    details: {
        goal: { en: 'To create a visually compelling narrative about modern city life.', ar: 'خلق سرد بصري مقنع عن حياة المدينة الحديثة.' },
        process: { en: 'Location scouting, experimental lighting techniques, and post-production color grading.', ar: 'استكشاف المواقع، وتقنيات الإضاءة التجريبية، وتصحيح الألوان في مرحلة ما بعد الإنتاج.' },
        result: { en: 'The series was featured in a prominent art gallery and published online.', ar: 'تم عرض السلسلة في معرض فني بارز ونشرت على الإنترنت.' },
    },
    gallery: ['https://picsum.photos/seed/photo1_gal1/1200/800', 'https://picsum.photos/seed/photo1_gal2/1200/800'],
  },
  {
    id: 3,
    category: PortfolioCategory.EVENTS_MARKETING,
    image: 'https://picsum.photos/seed/event1/800/600',
    title: { en: 'SynthWave Fest 2023', ar: 'مهرجان سينث ويف 2023' },
    description: {
      en: 'A viral marketing campaign for a major international music festival.',
      ar: 'حملة تسويقية فيروسية لمهرجان موسيقي دولي كبير.',
    },
    details: {
        goal: { en: 'Sell out tickets two weeks before the event date and generate 10 million social media impressions.', ar: 'بيع جميع التذاكر قبل أسبوعين من تاريخ الحدث وتحقيق 10 ملايين انطباع على وسائل التواصل الاجتماعي.' },
        process: { en: 'Created teaser videos, managed influencer collaborations, and ran a targeted ad campaign across multiple platforms.', ar: 'أنشأنا مقاطع فيديو تشويقية، وأدرنا تعاونات مع المؤثرين، وأطلقنا حملة إعلانية مستهدفة عبر منصات متعددة.' },
        result: { en: 'Exceeded goals with a complete sell-out 3 weeks in advance and over 15 million impressions.', ar: 'تجاوزنا الأهداف ببيع كامل للتذاكر قبل 3 أسابيع وتحقيق أكثر من 15 مليون انطباع.' },
    },
    gallery: ['https://picsum.photos/seed/event1_gal1/1200/800', 'https://picsum.photos/seed/event1_gal2/1200/800'],
  },
  {
    id: 4,
    category: PortfolioCategory.BRANDING,
    image: 'https://picsum.photos/seed/brand1/800/600',
    title: { en: 'AetherAI', ar: 'إيثر إيه آي' },
    description: {
      en: 'Developing a complete visual identity for a groundbreaking AI startup.',
      ar: 'تطوير هوية بصرية كاملة لشركة ناشئة رائدة في مجال الذكاء الاصطناعي.',
    },
    details: {
        goal: { en: 'To create a brand that feels futuristic, intelligent, and trustworthy.', ar: 'خلق علامة تجارية تبدو مستقبلية وذكية وموثوقة.' },
        process: { en: 'Logo design, color palette selection, typography system, and comprehensive brand guidelines.', ar: 'تصميم الشعار، اختيار لوحة الألوان، نظام الطباعة، وإرشادات شاملة للعلامة التجارية.' },
        result: { en: 'The new branding helped AetherAI secure a significant round of seed funding.', ar: 'ساعدت العلامة التجارية الجديدة شركة AetherAI في تأمين جولة تمويل أولية هامة.' },
    },
    gallery: ['https://picsum.photos/seed/brand1_gal1/1200/800', 'https://picsum.photos/seed/brand1_gal2/1200/800'],
  },
  {
    id: 5,
    category: PortfolioCategory.DIGITAL_MARKETING,
    image: 'https://picsum.photos/seed/digital1/800/600',
    title: { en: 'GrowthHack SEO', ar: 'جروث هاك SEO' },
    description: {
      en: 'A data-driven SEO strategy that doubled organic traffic for an e-commerce client.',
      ar: 'استراتيجية تحسين محركات البحث قائمة على البيانات ضاعفت حركة المرور العضوية لعميل في التجارة الإلكترونية.',
    },
    details: {
      goal: { en: 'Increase organic search traffic by 100% and improve keyword rankings for top products.', ar: 'زيادة حركة البحث العضوية بنسبة 100٪ وتحسين تصنيفات الكلمات الرئيسية للمنتجات العليا.' },
      process: { en: 'Comprehensive keyword research, on-page and off-page optimization, technical SEO audit, and content marketing.', ar: 'بحث شامل للكلمات الرئيسية، تحسين داخل وخارج الصفحة، تدقيق فني لتحسين محركات البحث، وتسويق المحتوى.' },
      result: { en: 'Achieved a 120% increase in organic traffic in 6 months and secured first-page rankings for 15 key terms.', ar: 'حققنا زيادة بنسبة 120٪ في حركة المرور العضوية في 6 أشهر وحصلنا على تصنيفات في الصفحة الأولى لـ 15 مصطلحًا رئيسيًا.' },
    },
    gallery: ['https://picsum.photos/seed/digital1_gal1/1200/800', 'https://picsum.photos/seed/digital1_gal2/1200/800'],
  },
];

// FIX: Replaced JSX with React.createElement to fix syntax errors in a .ts file.
const ICONS = {
    WEB_DESIGN: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" })),
    PHOTOGRAPHY: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" }), React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 13a3 3 0 11-6 0 3 3 0 016 0z" })),
    EVENTS: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514M15 11l-1 5" })),
    BRANDING: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" })),
    DIGITAL_MARKETING: React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, React.createElement('path', { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" })),
  };

export const CONTENT = {
    en: {
      navHome: 'Home',
      navServices: 'Services',
      navPortfolio: 'Portfolio',
      navContact: 'Contact',
      heroPill: 'AI-Driven Innovation',
      heroTitle1: 'Crafting Digital',
      heroTitle2: 'Experiences That Inspire',
      heroSubtitle: 'Transforming brands through advanced digital marketing, innovative design, and AI-powered solutions that deliver measurable results',
      heroCTA1: 'Explore Our Work',
      heroCTA2: 'Start a Project',
      
      servicesTitle: 'Our Core Services',
      servicesSubtitle: 'We provide the expertise and tools to elevate your brand in the digital landscape.',
      services: [
        { id: 1, icon: ICONS.WEB_DESIGN, title: 'Web Design & Development', description: 'Creating stunning, high-performance websites that captivate your audience and drive conversions with seamless UX.' },
        { id: 2, icon: ICONS.PHOTOGRAPHY, title: 'Commercial Photography', description: 'High-quality photography that tells your brand\'s story and showcases your products in the best light.' },
        { id: 3, icon: ICONS.EVENTS, title: 'Events Marketing', description: 'Generating buzz and driving attendance for your events through strategic, multi-channel marketing campaigns.' },
        { id: 4, icon: ICONS.BRANDING, title: 'Branding & Identity', description: 'Building memorable brands from the ground up, with a clear message and a compelling visual identity.' },
        { id: 5, icon: ICONS.DIGITAL_MARKETING, title: 'Digital Marketing', description: 'Comprehensive digital marketing strategies including SEO, SEM, and social media campaigns to boost your online visibility.' },
      ],

      valueTitle: 'Beyond the Hype',
      valueSubtitle: 'Solving real-world digital challenges with tangible results.',
      valueProblemTitle: 'The Problem',
      valueSolutionTitle: 'Our Solution',
      valuePoints: [
        { id: 1, problem: 'Low online visibility and poor engagement.', solution: 'Data-driven SEO and content strategies that connect you with your target audience.' },
        { id: 2, problem: 'Outdated branding that doesn\'t resonate.', solution: 'A complete brand overhaul that reflects your values and speaks to modern consumers.' },
        { id: 3, problem: 'Ineffective marketing campaigns with low ROI.', solution: 'AI-powered targeted advertising and analytics to maximize your return on investment.' },
      ],

      trustTitle: 'Trusted by Innovators',
      trustSubtitle: "Don't just take our word for it. Here's what our clients have to say.",
      testimonials: [
        { id: 1, quote: "ALWKALA transformed our online presence. Their team's expertise in design and AI-driven marketing is unmatched.", author: 'Fatima Al-Sayed', company: 'CEO of Nova Dynamics' },
        { id: 2, quote: 'The branding they developed for us was a game-changer. We saw a 200% increase in brand recognition.', author: 'Youssef Khalil', company: 'Founder of Tech Scape' },
        { id: 3, quote: "An incredible partner from start to finish. They are professional, creative, and delivered beyond our expectations.", author: 'Layla Hasan', company: 'Marketing Director at Future Fest' },
      ],

      partnersTitle: 'Our Technology Stack',
      partnersSubtitle: 'Leveraging cutting-edge tools to build the future of digital experiences.',

      ctaTitle: 'Ready to Elevate Your Brand?',
      ctaSubtitle: "Let's collaborate to create something extraordinary. Your journey to digital excellence starts here.",
      ctaButton: 'Get a Free Consultation',

      portfolioTitle: 'Our Work',
      portfolioSubtitle: 'A glimpse into the world we are creating.',
      contactTitle: 'Let\'s Build the Future',
      contactSubtitle: 'Have a project in mind? We\'d love to hear about it.',
      contactName: 'Your Name',
      contactEmail: 'Your Email',
      contactPhone: 'Your Phone (Optional)',
      contactSubject: 'Subject',
      contactMessage: 'Your Message',
      contactSend: 'Send Message',
      contactSuccess: 'Message sent successfully!',
      validationNameRequired: 'Name is required.',
      validationEmailRequired: 'Email is required.',
      validationEmailInvalid: 'Please enter a valid email address.',
      validationPhoneInvalid: 'Please enter a valid phone number.',
      validationSubjectRequired: 'Subject is required.',
      validationMessageRequired: 'Message is required.',
      
      footerText: '© 2024 ALWKALA. All rights reserved.',
      footerAboutText: 'A digital agency focused on crafting unique experiences through innovative design and AI-powered solutions.',
      footerQuickLinks: 'Quick Links',
      footerOurServices: 'Our Services',

      detailGoal: 'Goal',
      detailProcess: 'Process',
      detailResult: 'Result',
      detailGallery: 'Gallery',
      nextProject: 'Next Project',
      linkedinLabel: 'LinkedIn',
      twitterLabel: 'Twitter',
      instagramLabel: 'Instagram',
    },
    ar: {
      navHome: 'الرئيسية',
      navServices: 'خدماتنا',
      navPortfolio: 'أعمالنا',
      navContact: 'اتصل بنا',
      heroPill: 'ابتكار مدفوع بالذكاء الاصطناعي',
      heroTitle1: 'نصنع تجارب',
      heroTitle2: 'رقمية ملهمة',
      heroSubtitle: 'نحول العلامات التجارية من خلال التسويق الرقمي المتقدم والتصميم المبتكر والحلول المدعومة بالذكاء الاصطناعي التي تحقق نتائج قابلة للقياس',
      heroCTA1: 'استكشف أعمالنا',
      heroCTA2: 'ابدأ مشروعًا',

      servicesTitle: 'خدماتنا الأساسية',
      servicesSubtitle: 'نوفر الخبرة والأدوات للارتقاء بعلامتك التجارية في المشهد الرقمي.',
      services: [
        { id: 1, icon: ICONS.WEB_DESIGN, title: 'تصميم وتطوير المواقع', description: 'إنشاء مواقع ويب مذهلة وعالية الأداء تأسر جمهورك وتحفز التحويلات بتجربة مستخدم سلسة.' },
        { id: 2, icon: ICONS.PHOTOGRAPHY, title: 'التصوير التجاري', description: 'تصوير فوتوغرافي عالي الجودة يروي قصة علامتك التجارية ويعرض منتجاتك في أفضل صورة.' },
        { id: 3, icon: ICONS.EVENTS, title: 'تسويق الفعاليات', description: 'إثارة الضجة وزيادة الحضور لفعالياتك من خلال حملات تسويقية استراتيجية متعددة القنوات.' },
        { id: 4, icon: ICONS.BRANDING, title: 'العلامة التجارية والهوية', description: 'بناء علامات تجارية لا تُنسى من الألف إلى الياء، برسالة واضحة وهوية بصرية مقنعة.' },
        { id: 5, icon: ICONS.DIGITAL_MARKETING, title: 'التسويق الرقمي', description: 'استراتيجيات تسويق رقمي شاملة تتضمن تحسين محركات البحث والتسويق عبر محركات البحث وحملات وسائل التواصل الاجتماعي لتعزيز ظهورك على الإنترنت.' },
      ],

      valueTitle: 'ما وراء الضجة',
      valueSubtitle: 'حل تحديات العالم الرقمي الحقيقية بنتائج ملموسة.',
      valueProblemTitle: 'المشكلة',
      valueSolutionTitle: 'حلنا',
      valuePoints: [
        { id: 1, problem: 'ظهور ضعيف على الإنترنت وتفاعل منخفض.', solution: 'استراتيجيات تحسين محركات البحث والمحتوى المستندة إلى البيانات التي تصلك بجمهورك المستهدف.' },
        { id: 2, problem: 'علامة تجارية قديمة لا تلقى صدى.', solution: 'إصلاح شامل للعلامة التجارية يعكس قيمك ويخاطب المستهلكين العصريين.' },
        { id: 3, problem: 'حملات تسويقية غير فعالة ذات عائد استثمار منخفض.', solution: 'إعلانات وتحليلات مستهدفة مدعومة بالذكاء الاصطناعي لزيادة عائد استثمارك إلى أقصى حد.' },
      ],

      trustTitle: 'يثق بنا المبتكرون',
      trustSubtitle: 'لا تأخذ كلامنا على محمل الجد فقط. إليك ما يقوله عملاؤنا.',
      testimonials: [
        { id: 1, quote: 'الوكالة غيرت وجودنا على الإنترنت. خبرة فريقهم في التصميم والتسويق المدفوع بالذكاء الاصطناعي لا مثيل لها.', author: 'فاطمة السيد', company: 'الرئيس التنفيذي لشركة نوفا ديناميكس' },
        { id: 2, quote: 'العلامة التجارية التي طوروها لنا كانت نقطة تحول. شهدنا زيادة بنسبة 200٪ في التعرف على العلامة التجارية.', author: 'يوسف خليل', company: 'مؤسس تك سكيب' },
        { id: 3, quote: 'شريك رائع من البداية إلى النهاية. إنهم محترفون ومبدعون وقدموا ما يفوق توقعاتنا.', author: 'ليلى حسن', company: 'مديرة التسويق في فيوتشر فيست' },
      ],

      partnersTitle: 'مجموعتنا التقنية',
      partnersSubtitle: 'نستفيد من أحدث الأدوات لبناء مستقبل التجارب الرقمية.',

      ctaTitle: 'هل أنت مستعد للارتقاء بعلامتك التجارية؟',
      ctaSubtitle: 'لنتعاون لإنشاء شيء استثنائي. رحلتك نحو التميز الرقمي تبدأ هنا.',
      ctaButton: 'احصل على استشارة مجانية',

      portfolioTitle: 'أعمالنا',
      portfolioSubtitle: 'لمحة عن العالم الذي نبتكره.',
      contactTitle: 'لنصنع المستقبل معًا',
      contactSubtitle: 'هل لديك مشروع في ذهنك؟ نود أن نسمع عنه.',
      contactName: 'اسمك',
      contactEmail: 'بريدك الإلكتروني',
      contactPhone: 'رقم هاتفك (اختياري)',
      contactSubject: 'الموضوع',
      contactMessage: 'رسالتك',
      contactSend: 'إرسال الرسالة',
      contactSuccess: 'تم إرسال الرسالة بنجاح!',
      validationNameRequired: 'الاسم مطلوب.',
      validationEmailRequired: 'البريد الإلكتروني مطلوب.',
      validationEmailInvalid: 'الرجاء إدخال عنوان بريد إلكتروني صالح.',
      validationPhoneInvalid: 'الرجاء إدخال رقم هاتف صحيح.',
      validationSubjectRequired: 'الموضوع مطلوب.',
      validationMessageRequired: 'الرسالة مطلوبة.',

      footerText: '© 2024 الوكالة. جميع الحقوق محفوظة.',
      footerAboutText: 'وكالة رقمية تركز على صياغة تجارب فريدة من خلال التصميم المبتكر والحلول المدعومة بالذكاء الاصطناعي.',
      footerQuickLinks: 'روابط سريعة',
      footerOurServices: 'خدماتنا',

      detailGoal: 'الهدف',
      detailProcess: 'العملية',
      detailResult: 'النتيجة',
      detailGallery: 'المعرض',
      nextProject: 'المشروع التالي',
      linkedinLabel: 'لينكد إن',
      twitterLabel: 'تويتر',
      instagramLabel: 'انستغرام',
    },
  };