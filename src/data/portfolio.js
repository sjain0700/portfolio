// All portfolio content lives here so it can be updated without touching layout code.

export const profile = {
  name: 'Sunil Kumar Jain',
  role: 'Senior Mobile Apps Engineer · Tech Lead',
  tagline:
    '15 years building React Native apps, Flutter, native iOS, native Android and  — now with Generative AI in both the products I build and the way I build them.',
  location: 'Dubai, UAE · Open to Abu Dhabi',
  availability: 'Available to join immediately',
  email: 'er.suniljain88@gmail.com',
  phones: [
    { label: 'UAE (WhatsApp)', value: '+971 54 760 4986', href: 'https://wa.me/971547604986' },
    { label: 'India (WhatsApp)', value: '+91 94607 18098', href: 'https://wa.me/919460718098' },
  ],
  linkedin: 'https://www.linkedin.com/in/sunil-jain-a5057520/',
};

export const stats = [
  { value: '15+', label: 'Years in mobile engineering' },
  { value: '9', label: 'Years hands-on React & React Native' },
  { value: '10M+', label: 'Downloads on an app built from scratch' },
  { value: '40%', label: 'Crash-rate reduction' },
  { value: '30%', label: 'Faster deployments with micro frontends' },
];

export const about = [
  'Senior Mobile Apps Engineer with 15 years of experience in React Native (nine years hands-on), Flutter, native iOS, native Android and hybrid apps. I take apps from concept and architecture through to App Store and Google Play release and long-term maintenance.',
  'I build scalable, secure, modular architectures, lead offshore teams, set coding standards, and build the NestJS and ExpressJS APIs behind the apps. I work with Flutter and Ionic-Angular alongside React Native and native code, and I choose an approach by business outcome, not by loyalty to one stack.',
];

export const aiWork = {
  intro:
    'I use Generative AI both inside the products I ship and in my day-to-day engineering workflow.',
  points: [
    {
      title: 'Chat-with-Docs (RAG assistant)',
      text: 'A retrieval-augmented assistant: React Native chat app, Node.js backend and a local LLM served through Ollama.',
    },
    {
      title: 'Design-to-code with Figma MCP',
      text: 'A Figma MCP setup that generates React Native code directly from designs.',
    },
    {
      title: 'AI-assisted delivery',
      text: 'GitHub Copilot, Cursor and Gemini AI used daily for coding, review and refactoring.',
    },
  ],
  certifications: [
    'Coursera — Generative AI: Turbocharge Mobile App Development',
    "Outskill — AI Engineering Accelerator (in progress)",
  ],
};

export const skills = [
  {
    group: 'Mobile & Frontend',
    items: ['React Native', 'React', 'Flutter', 'Ionic-Angular', 'iOS (Objective-C)', 'Android (Java, Kotlin)', 'Micro Frontends'],
  },
  {
    group: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Dart', 'Objective-C', 'Java', 'Kotlin'],
  },
  {
    group: 'Backend & Data',
    items: ['NestJS', 'ExpressJS', 'Node.js', 'REST / SOAP', 'Firebase', 'SQLite', 'MySQL', 'CoreData', 'WebSockets'],
  },
  {
    group: 'AI',
    items: ['RAG', 'Ollama / local LLMs', 'Figma MCP', 'GitHub Copilot', 'Cursor', 'Gemini AI'],
  },
  {
    group: 'Quality & DevOps',
    items: ['Azure DevOps CI/CD', 'SonarCloud', 'Jest', 'New Relic', 'Unit & UI testing', 'Performance profiling', 'Store releases'],
  },
  {
    group: 'Security & Auth',
    items: ['UAE Pass', 'Biometric / Face ID', 'OAuth 2.0', 'JWT', 'Keychain / secure storage', 'SSL pinning & encryption'],
  },
  {
    group: 'Payments',
    items: ['Adyen', 'Stripe', 'PayPal', 'CCAvenue'],
  },
  {
    group: 'Design & Process',
    items: ['Figma', 'Zeplin', 'Adobe XD', 'Agile / Scrum', 'Code review', 'Accessibility'],
  },
];

export const leadership = [
  'Led an offshore team and set architecture and coding standards',
  'Turn designs and requirements into technical solutions with architects',
  'Unblock delivery across Backend, DevOps, product and design',
  'Own client communication: calls, meetings and expectation-setting',
  'Resolve production performance issues and bottlenecks',
];

// Featured projects get a larger card with highlights.
export const featuredProjects = [
  {
    id: 'danube-one',
    title: 'Danube One',
    client: 'Danube Properties',
    category: 'Real estate · Broker app',
    description:
      'Business app for Danube Properties brokers: generate offers from leads and raise support tickets directly to the Danube team.',
    highlights: [
      'Lead-driven offer generation for brokers',
      'In-app support tickets routed to the Danube team',
      'Scalable, secure, modular architecture',
      'Biometric and Face ID login',
    ],
    tech: ['React Native', 'Micro Frontends', 'Biometrics', 'Face ID'],
    link: 'https://apps.apple.com/us/app/danube-one/id6747100528',
    linkLabel: 'View on App Store',
    accent: 'teal',
  },
  {
    id: 'my-danube',
    title: 'My Danube',
    client: 'Danube Properties',
    category: 'Real estate · Customer app',
    description:
      'The Danube Properties app for buyers, owners and residents: explore new launches, follow construction progress, view account details and connect with the community.',
    highlights: [
      'UAE Pass login plus biometric and Face ID authentication',
      'Multi-profile support for owners with several units',
      'Micro frontend approach cut deployment time by 30%',
      'Profiling and optimization cut the crash rate by 40%',
    ],
    tech: ['React Native', 'UAE Pass', 'Micro Frontends', 'Face ID'],
    link: 'https://apps.apple.com/us/app/my-danube/id6739030052',
    linkLabel: 'View on App Store',
    accent: 'blue',
  },
  {
    id: 'chat-with-docs',
    title: 'Chat-with-Docs',
    client: 'Personal project',
    category: 'Generative AI · RAG',
    description:
      'A retrieval-augmented assistant that answers questions over your own documents, running fully on a local LLM.',
    highlights: [
      'React Native chat app',
      'Node.js backend with document retrieval (RAG)',
      'Local LLM served through Ollama — no data leaves the machine',
    ],
    tech: ['React Native', 'Node.js', 'Ollama', 'RAG'],
    link: null,
    accent: 'violet',
  },
];

export const projects = [
  {
    id: 1,
    title: 'DAMAC Living',
    category: 'Property management',
    platform: 'React Native · Redux · Saga',
    description: 'Led the property management app for DAMAC customers, including smart home control over sockets and IoT.',
    link: 'https://apps.apple.com/us/app/damac-living/id1446489552',
    thumbnail: require('../assets/DL_app.png'),
  },
  {
    id: 2,
    title: 'Mamaearth Online Shopping',
    category: 'E-commerce · 10M+ downloads',
    platform: 'React Native · Redux-thunk',
    description: 'Built from scratch: catalogue, cart, payments and cash on delivery for one of India’s largest D2C brands.',
    link: 'https://play.google.com/store/apps/details?id=com.mamaearthapp&hl=en',
    thumbnail: require('../assets/ecom_app.png'),
  },
  {
    id: 3,
    title: 'Microsoft MyHub',
    category: 'Enterprise',
    platform: 'React Native · TypeScript · Redux',
    description: 'Brings together the tools and services Microsoft employees use every day.',
    link: 'https://apps.apple.com/us/app/microsoft-myhub/id1476326475',
    thumbnail: require('../assets/ms_app.png'),
  },
  {
    id: 4,
    title: 'MyFIRST Salary',
    category: 'Banking · IDFC FIRST Bank',
    platform: 'Android · iOS',
    description: 'Opens corporate salary accounts with IDFC FIRST Bank.',
    link: 'https://play.google.com/store/apps/details?id=com.idfcfirstbank.csapp',
    thumbnail: require('../assets/idfc_app.png'),
  },
  {
    id: 5,
    title: 'Saal Health',
    category: 'Healthcare',
    platform: 'React Native · SQLite',
    description: 'Lifestyle tracker for medication, lab reports, vitals and health risk assessment, with local storage and reminders.',
    link: null,
  },
  {
    id: 6,
    title: 'Msheireb Cars',
    category: 'Automotive',
    platform: 'Flutter · English & Arabic',
    description: 'Vehicle listings, details, search by multiple criteria and finance calculation.',
    link: 'https://play.google.com/store/apps/details?id=com.msheirebcars',
  },
  {
    id: 7,
    title: 'MG Calculator',
    category: 'Banking',
    platform: 'iOS · Objective-C',
    description: 'Calculates affordable loans, mortgages and amortization schedules.',
    link: 'https://itunes.apple.com/us/app/mg-calculator/id902956669?ls=1&mt=8',
  },
  {
    id: 8,
    title: 'Polleniser',
    category: 'Social',
    platform: 'iOS · Objective-C',
    description: 'Location sharing with nearby friends on a map, groups and Facebook invitations.',
    link: 'https://itunes.apple.com/in/app/polleniser/id1038375749?mt=8&ign-mpt=uo%3D4',
  },
  {
    id: 9,
    title: 'Deal Finder (Pub Grub)',
    category: 'Food & drink',
    platform: 'iOS · Objective-C',
    description: 'Finds nearby restaurant deals and draws the route from your current location.',
    link: 'https://itunes.apple.com/us/app/pub-grub/id1033438479?ls=1&mt=8',
  },
  {
    id: 10,
    title: 'Tour of Oman',
    category: 'Sports',
    platform: 'iOS · Objective-C',
    description: 'Live results, teams and riders, route maps, event dates and stage winners.',
    link: null,
  },
  {
    id: 11,
    title: 'Night Owl',
    category: 'Nightlife',
    platform: 'iOS · Objective-C · PayPal',
    description: 'Bar and restaurant search across the USA, friend invites and paid bar-owner registration.',
    link: null,
  },
  {
    id: 12,
    title: 'Rent Buy',
    category: 'Real estate',
    platform: 'iOS · Objective-C',
    description: 'Property and agent search, and listing properties for sale or rent.',
    link: null,
  },
  {
    id: 13,
    title: 'Student Discussion',
    category: 'Messaging',
    platform: 'iOS · Objective-C',
    description: 'One-to-one and group chat, friend requests, blocking, profile likes and Facebook sharing.',
    link: null,
  },
  {
    id: 14,
    title: 'Cheese Cake',
    category: 'Retail · Enterprise iPad',
    platform: 'iOS · Objective-C',
    description: 'In-store iPad catalogue for a cake shop in Australia.',
    link: null,
  },
  {
    id: 15,
    title: 'Photo Collage Creator',
    category: 'Photo',
    platform: 'iOS · Objective-C',
    description: 'Creates photo collages in seconds from the iPhone photo library.',
    link: null,
  },
];
