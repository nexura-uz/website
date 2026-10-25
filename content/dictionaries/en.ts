import type { Dictionary } from "./uz";

export const en: Dictionary = {
  meta: {
    homeTitle: "Custom Software Development Company in Uzbekistan | Nexura",
    homeDescription:
      "A senior team from Uzbekistan building business systems, integrations and e-commerce, from a Telegram bot to a nationwide retail system.",
  },
  nav: {
    services: "Services",
    work: "Work",
    pricing: "Pricing",
    about: "About",
    contact: "Contact",
    cta: "Book a call",
    menu: "Menu",
    close: "Close",
    language: "Language",
    from: "from {price}",
  },
  services: {
    telegramBot: {
      title: "Telegram bots",
      note: "Orders, bookings, catalogs",
      problem: "Orders getting lost in a Telegram group?",
      line: "A bot that takes orders and bookings, shows your catalog and logs everything to a table. With AI, it can also answer customer questions from your catalog.",
    },
    website: {
      title: "Websites",
      note: "Company and service sites",
      problem: "Customers can’t find you on Google?",
      line: "A fast site that explains what you do in plain words and collects inquiries.",
    },
    ecommerce: {
      title: "E-commerce",
      note: "Payments, delivery, admin panel",
      problem: "Outgrown selling through Instagram DMs?",
      line: "Catalog, cart, payments and delivery, with every order landing in your admin panel.",
    },
    apps: {
      title: "Mobile & desktop apps",
      note: "iOS, Android, Windows, macOS",
      problem: "Need your own app for staff or customers?",
      line: "Apps for phones, tablets and computers, running on the same data as your system.",
    },
    businessSystem: {
      title: "Business systems & integrations",
      note: "Warehouse, branches, sales, ERP",
      problem: "Still running stock and branches in Excel?",
      line: "Sales, stock and branches in one system, connected to the software you already use, with AI handling routine work like reading documents and sorting messages.",
    },
  },
  hero: {
    title: "Custom software that runs real businesses",
    sub: "A senior team from Uzbekistan building business systems, integrations and e-commerce, from a Telegram bot to a nationwide retail system.",
    primary: "Book a 20-min call",
    telegram: "or message us on Telegram",
    platforms: "Web · iOS · Android · Windows · macOS",
    trust: "Midea, Goodwell and 10+ retail stores run on software we built.",
    telegramText: "Hi! I found Nexura on your website and would like to discuss a project.",
  },
  sheet: {
    file: "stock_2026_FINAL(3).xlsx",
    columns: ["Product", "Branch", "Stock", "Price"],
    rows: [
      ["Wardrobe, 2-door", "Tashkent", "14", "2,450,000"],
      ["Office desk", "Fergana", "??", "890,000"],
      ["Shelf", "Tashkent", "7", "—"],
      ["Wardrobe, 2-door", "Samarkand", "3", "2,400,000"],
      ["Armchair", "Fergana", "-2", "1,150,000"],
      ["Office desk", "Tashkent", "11", "890,000"],
    ],
    note: "check this",
  },
  clients: { label: "Our clients", stores: "10+ stores on EasySale" },
  servicesSection: {
    eyebrow: "Services",
    title: "From a small bot to a company-wide system",
    sub: "Every project starts with a clear scope, price and timeline, ships in stages, and is supported after launch.",
    more: "Learn more",
  },
  contact: {
    metaTitle: "Contact | Nexura",
    metaDescription: "Tell us about your project. We reply within one business day with next steps, a rough price range and timeline.",
    title: "Let’s talk about your project",
    sub: "Four quick questions. We’ll come back with a rough price range, timeline and next steps.",
    response: "We reply within one business day (UTC+5).",
    or: "Or reach us directly:",
    telegram: "Message on Telegram",
    phone: "Call",
    form: {
      steps: {
        service: "What do you need?",
        budget: "Rough budget",
        timeline: "When do you need it?",
        contact: "How can we reach you?",
      },
      unsure: "Not sure yet, need advice",
      budgets: {
        lt500: "Under $500",
        "500-2k": "$500 – 2,000",
        "2-5k": "$2,000 – 5,000",
        "5-15k": "$5,000 – 15,000",
        "15k+": "$15,000+",
        unknown: "Not sure yet",
      },
      timelines: {
        urgent: "Urgent (within a month)",
        soon: "In 1–3 months",
        exploring: "Just exploring",
      },
      fields: {
        name: "Your name",
        phone: "Phone",
        telegram: "Telegram username",
        email: "Email",
        company: "Company",
        message: "A few words about the project",
      },
      optional: "optional",
      contactHint: "",
      consent: "I agree to my details being used to contact me.",
      back: "Back",
      submit: "Send",
      sending: "Sending…",
      errors: {
        name: "Please enter your name",
        contact: "Please enter your email",
        phone: "Please check the phone number",
        telegram: "Invalid username: @username",
        email: "Please check your email",
        consent: "Your consent is required",
        server: "Couldn’t send. Please try again or message us on Telegram.",
      },
      success: {
        title: "Thank you! We got your message.",
        text: "We’ll reply within one business day.",
        telegram: "Faster: message us on Telegram",
      },
    },
  },
  footer: {
    tagline: "Custom software that runs real businesses, from a Telegram bot to a company-wide system.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    hours: "Daily 09:00–20:00 (UTC+5)",
    privacy: "Privacy policy",
    location: "Uzbekistan",
  },
  privacy: {
    metaTitle: "Privacy Policy | Nexura",
    metaDescription: "What data the Nexura website collects, why we use it and where it is stored.",
    title: "Privacy policy",
    updated: "Last updated: October 25, 2026",
    intro: "This page explains what data nexura.uz collects, why we use it and where it is stored.",
    sections: [
      {
        title: "What we collect",
        body: ["When you fill in the contact form:"],
        list: [
          "your name, phone number, Telegram username or email;",
          "your company name and a note about the project (if you add them);",
          "the service you picked, a rough budget and timeline.",
        ],
        after: "Automatically: which link or ad brought you to the site (UTM tags, the previous page, the date of your first visit). This is kept in your browser’s storage and sent only together with your inquiry.",
      },
      {
        title: "Why we use it",
        body: [
          "Only to contact you, discuss your project and prepare a proposal. We don’t send marketing emails, sell your data or share it with third parties.",
        ],
      },
      {
        title: "Where it is stored",
        body: [
          "Your inquiry is sent by a Telegram bot to our team’s private Telegram group. Inquiries are not stored on the website’s servers. Our hosting provider (Vercel) may keep technical logs (IP address, browser type) for a short time.",
        ],
      },
      {
        title: "How long we keep it",
        body: ["For as long as we discuss your project and up to 12 months after. You can ask us to delete it at any time."],
      },
      {
        title: "Cookies and browser storage",
        body: [
          "The site keeps two things in your browser’s storage: which link brought you here (see above) and that you closed the cookie notice. No analytics or advertising tools are connected right now. If we add them, this page will be updated first.",
        ],
      },
      {
        title: "Your rights",
        body: ["You can ask us to show, correct or delete the data we hold about you. Message us on Telegram or call."],
      },
    ],
    contactTitle: "Contact",
  },
  cookie: {
    text: "We use cookies and browser storage to run this site.",
    link: "Learn more",
    ok: "OK",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    more: "Still have a question?",
    ask: "Ask us on Telegram",
    items: [
      {
        q: "How much does custom software development cost?",
        a: "It depends on scope and integrations. After a free 20-minute call we send a written proposal with a fixed price range, timeline and stages.",
      },
      {
        q: "How long does a project take?",
        a: "A simple Telegram bot usually takes 1–2 weeks and a business website 2–4 weeks. E-commerce, apps and business systems ship in stages, so you see the first working part within a few weeks.",
      },
      {
        q: "Can you integrate with the software we already use?",
        a: "Yes, it’s a core part of our work. For example, we integrated the system behind Goodwell’s nationwide shop network with their internal warehouse system. We review your current setup first, then propose an integration plan.",
      },
      {
        q: "Can you add AI to our system?",
        a: "Yes, where it pays off: a Telegram bot answering customer questions from your catalog, or a system that reads documents and sorts messages. We add AI as part of your system, not as a separate product.",
      },
      {
        q: "Do you support the product after launch?",
        a: "Yes. After launch we fix issues, add features and keep the system running reliably.",
      },
      {
        q: "Who owns the code and data?",
        a: "You do. Once the project is paid in full, we hand over the source code, the database and all access.",
      },
      {
        q: "We’re not in Uzbekistan. How do we work together?",
        a: "We work remotely with clients across Uzbekistan and abroad, in English, Russian or Uzbek, over calls and video meetings. You test the result of every stage yourself.",
      },
      {
        q: "How does payment work?",
        a: "In stages: the first stage before work starts, then each stage on delivery. You never pay for everything upfront.",
      },
    ],
  },
  about: {
    metaTitle: "About: a senior software team from Uzbekistan | Nexura",
    metaDescription: "Nexura is a team of 5 developers, 3 of them senior. 20+ projects delivered, and our own product EasySale runs in 10+ stores.",
    eyebrow: "About",
    title: "Small team. Senior experience.",
    sub: "We’re a team of 5 developers, three of them senior with 5+ years each. You discuss your project with the people who write the code, not with an account manager.",
    facts: [
      { n: "5", label: "developers" },
      { n: "3", label: "senior developers, 5+ years each" },
      { n: "20+", label: "projects delivered" },
      { n: "10+", label: "stores run on EasySale" },
    ],
    storyTitle: "Why Nexura",
    story: [
      "Many businesses in Uzbekistan still run on notebooks, Excel and Telegram groups. Orders get lost, stock levels are a guess, and owners find out what happened at their branches by calling around in the evening.",
      "We build the systems that replace that, from a small Telegram bot to a system running a nationwide shop network. Almost all of our clients came through referrals: do good work for one, and they bring the next.",
      "Our own product, EasySale, grew out of that work. It runs in 10+ stores every day, which means we don’t just ship software, we keep it running for years.",
    ],
    signature: "Muhammadaziz, founder of Nexura",
    teamTitle: "Team and stack",
    teamSub: "Each area is covered by someone who has done it for years.",
    team: [
      { area: "Backend & systems", tools: "Python, Java", note: "APIs, integrations, databases" },
      { area: "Frontend", tools: "Next.js, React, Vue", note: "Websites, admin panels, e-commerce" },
      { area: "Mobile", tools: "React Native", note: "iOS and Android apps" },
      { area: "Desktop", tools: "Electron", note: "Windows and macOS apps" },
    ],
    principlesTitle: "How we work",
    principles: [
      { title: "Direct line to developers", text: "You talk to the developer who writes the code. No chain of managers." },
      { title: "Price and timeline upfront", text: "Scope, price, timeline and stages are agreed in a written proposal before work starts." },
      { title: "Delivered in stages", text: "You test the result of each stage before we move to the next one." },
      { title: "You own the code and data", text: "Once paid in full, you get the source code and all access." },
      { title: "Support after launch", text: "We fix issues, add features and keep the system running reliably." },
    ],
    productEyebrow: "Our own product",
    productText: "EasySale is a retail ERP/POS system: sales, stock and multiple branches in one place. It runs in 10+ stores today.",
    ctaTitle: "Let’s talk about your project",
    ctaText: "Answer four quick questions and we’ll come back with a price range and timeline.",
  },
  notFound: {
    title: "This page got lost like an order in a paper notebook.",
    text: "That’s exactly why we build systems. You’ll find what you need on the homepage.",
    cta: "Go to homepage",
  },
  servicePages: {
    "common": {
      "eyebrow": "Services",
      "forWho": "Who it’s for",
      "includes": "What’s included",
      "timeline": "Timeline",
      "cases": "From our work",
      "priceTitle": "Pricing",
      "priceText": "Every project is quoted after a free 20-minute call: a written proposal with scope, price range, timeline and stages.",
      "priceLink": "",
      "processTitle": "How we work",
      "steps": [
        {
          "title": "Free call",
          "text": "We learn how you work today, what you need and which systems to connect."
        },
        {
          "title": "Proposal",
          "text": "A written proposal with scope, price, timeline and stages."
        },
        {
          "title": "Build",
          "text": "We ship in stages, and you test the result of each one."
        },
        {
          "title": "Launch",
          "text": "We launch, onboard your team and keep supporting the product."
        }
      ],
      "faqTitle": "FAQ",
      "ctaTitle": "Need something like this?",
      "ctaText": "Answer four quick questions and we’ll come back with a price range and timeline."
    },
    "telegramBot": {
      "h1": "Telegram bot development",
      "titleTemplate": "Telegram Bot Development | Nexura",
      "metaDescription": "Telegram bots for business: orders, bookings, catalogs and payments, built by a senior team from Uzbekistan.",
      "sub": "Stop losing orders, bookings and customer questions in Telegram groups. A bot takes them in, answers, and logs everything to a table.",
      "telegramText": "Hi! I’m interested in a Telegram bot for my business. Could we discuss scope and timeline?",
      "examples": [
        {
          "title": "Workshops and service businesses",
          "text": "Order intake, queues and a message when the job is done."
        },
        {
          "title": "Shops and restaurants",
          "text": "Catalog or menu, ordering and delivery address."
        },
        {
          "title": "Salons and clinics",
          "text": "Bookings, reminders and cancellations."
        }
      ],
      "includes": [
        "Order and booking intake",
        "Catalog or menu",
        "Notifications to you and your staff",
        "Data logged to a table",
        "Server setup and launch"
      ],
      "timeline": "1–2 weeks",
      "cases": [
        "ustaxona",
        "goodwellBot"
      ],
      "faq": [
        {
          "q": "How much does a Telegram bot cost?",
          "a": "It depends on the features: payments, CRM or stock integration and an admin panel all add scope. We quote after a free 20-minute call."
        },
        {
          "q": "How long does it take?",
          "a": "A simple bot usually takes 1–2 weeks. Complex bots ship in stages."
        },
        {
          "q": "Can the bot take payments?",
          "a": "Yes, we connect local payment providers such as Click and Payme."
        },
        {
          "q": "Can the bot answer customers by itself?",
          "a": "Yes. With AI it answers from your catalog and data, and hands complex questions to your staff."
        }
      ]
    },
    "website": {
      "h1": "Web development",
      "titleTemplate": "Web Development Company in Uzbekistan | Nexura",
      "metaDescription": "Business websites and landing pages built by a senior team from Uzbekistan: fast, mobile-first, with lead forms and technical SEO.",
      "sub": "A site that explains what you do in plain words, loads fast on phones and collects inquiries straight into your Telegram or inbox.",
      "telegramText": "Hi! We need a website for our company. Could we discuss scope and timeline?",
      "examples": [
        {
          "title": "Service companies",
          "text": "A company site with services, pricing and a contact form."
        },
        {
          "title": "Manufacturers and distributors",
          "text": "Product catalog and information for dealers."
        },
        {
          "title": "Product launches and campaigns",
          "text": "A single landing page for your ads."
        }
      ],
      "includes": [
        "A landing page or multi-page site",
        "Design for phones and desktops",
        "Lead form with instant notifications",
        "Technical SEO so Google can find you",
        "Domain and hosting setup"
      ],
      "timeline": "2–4 weeks",
      "note": "A landing or single product page costs less. Price depends on the number of pages.",
      "cases": [
        "midea"
      ],
      "faq": [
        {
          "q": "How much does a website cost?",
          "a": "It depends mostly on the number of pages and features. A landing page costs less than a multi-page site. We quote after a free call."
        },
        {
          "q": "How long does it take?",
          "a": "Usually 2–4 weeks; a landing page is faster."
        },
        {
          "q": "Will the site be found on Google?",
          "a": "Yes. Every page gets proper titles, descriptions and technical SEO, and we connect the site to Google Search Console."
        },
        {
          "q": "Can I edit the site myself?",
          "a": "Yes. If you need it, we add an admin panel for texts, images and prices."
        }
      ]
    },
    "ecommerce": {
      "h1": "E-commerce development",
      "titleTemplate": "E-commerce Development | Nexura",
      "metaDescription": "Online stores with catalog, cart, payments, delivery and an admin panel, integrated with your warehouse or ERP.",
      "sub": "Your own store instead of Instagram DMs: catalog, cart, payments and delivery, with every order landing in your admin panel and Telegram.",
      "telegramText": "Hi! I’m planning an online store. Could we discuss it?",
      "examples": [
        {
          "title": "Shops selling on Instagram",
          "text": "Moving orders from DMs to a proper store."
        },
        {
          "title": "Brands and distributors",
          "text": "The brand’s official online store."
        },
        {
          "title": "Retail chains with branches",
          "text": "Online sales tied to real stock levels."
        }
      ],
      "includes": [
        "Catalog, search and filters",
        "Cart and checkout",
        "Online payments and delivery",
        "Admin panel: products, orders, customers",
        "Order notifications in Telegram"
      ],
      "timeline": "In stages",
      "cases": [
        "midea"
      ],
      "faq": [
        {
          "q": "How much does an online store cost?",
          "a": "It depends on the catalog size, payment and delivery integrations, and warehouse sync. We quote after a free call."
        },
        {
          "q": "Which payment methods can you connect?",
          "a": "Local providers such as Click and Payme, plus cash on delivery. For other markets, we pick the right provider on the call."
        },
        {
          "q": "Can the store sync with our warehouse or ERP?",
          "a": "Yes. Stock and prices update automatically from your system, and orders flow back into it."
        },
        {
          "q": "Can I add products myself?",
          "a": "Yes, through the admin panel. Importing your existing products from Excel is also possible; we’ll agree on it on the call."
        }
      ]
    },
    "apps": {
      "h1": "Mobile & desktop app development",
      "titleTemplate": "Mobile App Development in Uzbekistan | Nexura",
      "metaDescription": "Apps for iOS, Android, Windows and macOS for your staff or customers, running on the same data as your system.",
      "sub": "Your own app for staff or customers on phones, tablets and computers, running on the same database as your website and system.",
      "telegramText": "Hi! We need a mobile/desktop app for our business. Could we discuss scope and timeline?",
      "examples": [
        {
          "title": "For your staff",
          "text": "Apps for sellers, couriers or warehouse staff: orders, scanning, reports."
        },
        {
          "title": "For your customers",
          "text": "Ordering, loyalty points and notifications."
        },
        {
          "title": "Desktop software",
          "text": "Point of sale, warehouse or office apps for Windows and macOS."
        }
      ],
      "includes": [
        "iOS and Android (React Native)",
        "or Windows and macOS (Electron)",
        "One database shared with your system",
        "Push notifications",
        "App Store and Google Play publishing"
      ],
      "timeline": "In stages",
      "cases": [
        "goodwellApp"
      ],
      "faq": [
        {
          "q": "How much does a mobile app cost?",
          "a": "It depends on scope. We use one codebase for iOS and Android (React Native), which costs less than building two separate apps. We quote after a free call."
        },
        {
          "q": "Do you publish to the App Store and Google Play?",
          "a": "Yes, we handle publishing and store review. If you prefer, the app is published from your own developer account."
        },
        {
          "q": "Which systems does the desktop app run on?",
          "a": "Windows and macOS: with Electron, one app runs on both."
        },
        {
          "q": "Will the app work with our existing system?",
          "a": "Yes. It shares one database with your website or business system, so data is the same everywhere."
        }
      ]
    },
    "businessSystem": {
      "h1": "Custom business systems & integrations",
      "titleTemplate": "Custom ERP Development & Systems Integration | Nexura",
      "metaDescription": "Custom ERP, warehouse and multi-branch systems, integrated with the software you already use. Built by a senior team from Uzbekistan.",
      "sub": "Sales, stock and branches in one system, connected to the software you already use, with AI handling routine work.",
      "telegramText": "Hi! We’d like to discuss a custom business system (warehouse/branches/sales).",
      "examples": [
        {
          "title": "Retail chains with branches",
          "text": "Sales and stock for every branch in real time."
        },
        {
          "title": "Manufacturing and workshops",
          "text": "Orders, materials and finished goods tracking."
        },
        {
          "title": "Distribution and wholesale",
          "text": "Customers, receivables, stock and delivery."
        }
      ],
      "includes": [
        "Sales, stock and branch accounting",
        "Staff roles and permissions",
        "Reports",
        "Integrations with ERP/accounting software",
        "AI where it pays off: documents and message triage"
      ],
      "timeline": "In stages",
      "cases": [
        "goodwell",
        "easysale"
      ],
      "faq": [
        {
          "q": "How much does a custom business system cost?",
          "a": "It depends on the number of branches, modules and integrations. We usually start with the most critical part and expand. We quote after a free call."
        },
        {
          "q": "Why not buy off-the-shelf software?",
          "a": "If an existing product fits your processes, we’ll tell you so. Custom makes sense when your processes are unusual or several systems need to work together."
        },
        {
          "q": "Can you integrate with the software we already use?",
          "a": "Yes. For example, we integrated Goodwell’s nationwide shop system with their internal warehouse system."
        },
        {
          "q": "Can we roll it out in stages?",
          "a": "Yes, that’s how we work: one process or branch first, then the rest."
        }
      ]
    }
  },
  cases: {
    "ustaxona": {
      "name": "Ustaxona Jadval",
      "type": "Telegram bot",
      "text": "A bot that replaced a workshop’s paper notebook: orders now go into the bot, not a notebook.",
      "url": "https://t.me/jadval_ustaxonabot"
    },
    "goodwellBot": {
      "name": "Goodwell Catalog",
      "type": "Telegram bot",
      "text": "Goodwell’s product catalog inside Telegram.",
      "url": "https://t.me/goodwellcatalog_bot"
    },
    "midea": {
      "name": "Midea Kitchen",
      "type": "E-commerce",
      "text": "The online store for Midea kitchen appliances in Uzbekistan.",
      "url": "https://midea-kitchen.uz"
    },
    "goodwell": {
      "name": "Goodwell",
      "type": "Business system & integration",
      "text": "A system running all of the brand’s shops nationwide, integrated with their internal warehouse system."
    },
    "goodwellApp": {
      "name": "Goodwell",
      "type": "Mobile app",
      "text": "An internal app for shop staff and sellers: product and stock data via QR code."
    },
    "easysale": {
      "name": "EasySale",
      "type": "Our own product",
      "text": "A retail ERP/POS system for sales, stock and branches, running in 10+ stores.",
      "url": "https://easysale.uz"
    }
  },
  projects: {
    metaTitle: "Our Work: Goodwell, Midea, EasySale | Nexura",
    metaDescription: "Selected work by Nexura: Goodwell’s nationwide shop system, the Midea Kitchen online store, EasySale ERP/POS and Telegram bots.",
    eyebrow: "Work",
    title: "Systems we’ve built",
    sub: "Selected from 20+ projects: the ones our clients allow us to show. The rest are under NDA.",
    featuredEyebrow: "Flagship project",
    featuredTitle: "Goodwell shop network",
    featuredText: "Three products for one brand: a system running their shops, an app for store staff and a catalog bot for customers.",
    webTitle: "E-commerce and our own product",
    botsTitle: "Telegram bots",
  },
  thanks: {
    metaTitle: "Thank you | Nexura",
    meanwhile: "While you wait, take a look at our work:",
  },
  mobileBar: { telegram: "Telegram", call: "Call" },
};
