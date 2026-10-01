import { Challenge, TimelineNode, ImpactCategory, FaqItem } from '../types';

export const CHALLENGES: Challenge[] = [
  {
    id: 'education',
    number: '01',
    category: 'EDUCATION',
    title: 'Offline-First Learning Hub for Rural Classrooms',
    ngoName: 'OpenEd Global Initiative',
    ngoLocation: 'Miami & Latin America Outreach',
    summary: 'Help NGOs improve access to education, learning resources and student support in low-connectivity areas.',
    problemStatement:
      'Over 240 million students globally attend schools without dependable internet access. Teachers lack structured digital lesson plans, offline video compression tools, and automated local sync when connectivity momentarily returns.',
    targetBeneficiaries: 'K-12 students, rural volunteer teachers, community library coordinators.',
    keyDeliverables: [
      'PWA or desktop app with SQLite/IndexedDB local storage',
      'Mesh peer-to-peer lesson sync between student tablets',
      'Ultra-compact PDF and audio textbook compression engine',
      'Interactive offline quiz module with syncable gradebook'
    ],
    suggestedStack: ['React / Vite', 'Service Workers', 'IndexedDB / Dexie', 'Tailwind CSS', 'WebRTC DataChannels'],
    impactMetric: '42,000+ Students Target Reach',
    accentColor: '#ff2a85',
    bgGradient: 'from-[#ff2a85] via-[#ff6838] to-[#ffb800]',
    stickerText: 'HIGH PRIORITY TRACK',
    rotation: '-rotate-1'
  },
  {
    id: 'healthcare',
    number: '02',
    category: 'HEALTHCARE',
    title: 'Mobile Clinic Triage & Inventory Radar',
    ngoName: 'Care Without Borders',
    ngoLocation: 'South Florida Community Clinics',
    summary: 'Build solutions that help NGOs reach underserved communities with timely clinical care and medical aid.',
    problemStatement:
      'Field health volunteers operating mobile vans waste critical hours sorting paper manifests and calling dispatchers for vaccine cold-chain validation and emergency prescription reorders during remote site visits.',
    targetBeneficiaries: 'Uninsured patients, field nurses, mobile clinic drivers.',
    keyDeliverables: [
      'Rapid offline barcode/QR patient intake scanner',
      'Low-bandwidth SMS/WhatsApp medical appointment alerts',
      'Cold-storage temperature anomaly alert dashboard',
      'Multi-lingual symptom triage questionnaire'
    ],
    suggestedStack: ['Next / React', 'HTML5 Barcode Detection API', 'Tailwind CSS', 'IndexedDB', 'WebSockets'],
    impactMetric: '18,500+ Patients Served Annually',
    accentColor: '#ff5252',
    bgGradient: 'from-[#ff0077] via-[#ff5252] to-[#ff8c42]',
    stickerText: 'CRITICAL FIELD NEED',
    rotation: 'rotate-1'
  },
  {
    id: 'fundraising',
    number: '03',
    category: 'FUNDRAISING',
    title: 'Real-Time Impact Ledger & Micro-Donation Discovery',
    ngoName: 'Beacon Social Alliance',
    ngoLocation: 'International NGO Consortium',
    summary: 'Create technology that improves donation discovery, transparency and grassroots donor engagement.',
    problemStatement:
      'Gen-Z and millennial donors want radical visibility into where their $5 or $25 contributions go. NGOs struggle to produce lightweight, tamper-evident visual proof receipts connecting funds directly to delivered supplies.',
    targetBeneficiaries: 'Grassroots donors, non-profit grant accountants, community leaders.',
    keyDeliverables: [
      'Public verifiable impact ledger with proof-of-work/receipt uploads',
      'Interactive campaign embed widgets for student communities',
      'Automated donor milestone notifications with photo stories',
      'Transparent budget breakdown visualizer'
    ],
    suggestedStack: ['React', 'D3.js / SVG Canvas', 'Tailwind CSS', 'REST API', 'Framer Motion'],
    impactMetric: '$1.4M Projected Transparent Flow',
    accentColor: '#ff9e79',
    bgGradient: 'from-[#ff5252] via-[#ff9e79] to-[#ffbe3b]',
    stickerText: 'TRANSPARENCY FOCUS',
    rotation: '-rotate-2'
  },
  {
    id: 'volunteers',
    number: '04',
    category: 'VOLUNTEER MANAGEMENT',
    title: 'Rapid Disaster Volunteer Dispatch & Skill Router',
    ngoName: 'HandsTogether Network',
    ngoLocation: 'Gulf Coast Disaster Relief',
    summary: 'Help NGOs coordinate volunteers, tasks, logistics and community activities during urgent crises.',
    problemStatement:
      'When hurricanes or floods strike, hundreds of willing volunteers arrive on-site with zero coordination. Non-profit coordinators get flooded with phone calls while specialized tasks (chainsaw crews, Spanish translators, CPR certs) sit unfilled.',
    targetBeneficiaries: 'Emergency volunteers, shelter directors, displaced neighborhood families.',
    keyDeliverables: [
      'Geofenced emergency task board with live shift claims',
      'Skill certification verification & instant badge generator',
      'Offline-capable dispatch SMS broadcast engine',
      'Safety check-in & automated perimeter roll call'
    ],
    suggestedStack: ['React', 'Leaflet / OpenStreetMap', 'Tailwind CSS', 'PWA Offline Sync', 'Web Audio API'],
    impactMetric: '5,000+ Rapid Responders',
    accentColor: '#ffbe3b',
    bgGradient: 'from-[#ff6e26] via-[#ffb833] to-[#ff3d77]',
    stickerText: 'RAPID RESPONSE',
    rotation: 'rotate-2'
  },
  {
    id: 'safety',
    number: '05',
    category: 'WOMEN & CHILD SAFETY',
    title: 'Discreet Emergency Alert & Safe Haven Pathfinder',
    ngoName: 'ShieldHaven Initiative',
    ngoLocation: 'Urban Crisis Advocacy Group',
    summary: 'Design technology that improves discreet access to emergency resources, legal aid, and trusted shelter networks.',
    problemStatement:
      'Individuals in high-risk domestic scenarios need ways to seek urgent shelter or legal counseling without leaving a suspicious digital browser history, installed native app icon, or cellular call log.',
    targetBeneficiaries: 'Vulnerable women, youth in crisis, hotline crisis counselors.',
    keyDeliverables: [
      'Camouflaged web utility with instant quick-exit panic trigger',
      'Verified encrypted map of 24/7 safe havens and pharmacies',
      'Steganographic crisis message generator disguised as notes',
      'Local peer network verification and silent check-ins'
    ],
    suggestedStack: ['React', 'Web Crypto API', 'Tailwind CSS', 'OpenStreetMap', 'Canvas Obfuscation'],
    impactMetric: '100% Zero-Trace Architecture',
    accentColor: '#ff1f8f',
    bgGradient: 'from-[#3a0d5c] via-[#ff1f8f] to-[#ff5252]',
    stickerText: 'CONFIDENTIAL / OPEN SOURCE',
    rotation: '-rotate-1'
  },
  {
    id: 'environment',
    number: '06',
    category: 'ENVIRONMENT',
    title: 'Community Coastal Telemetry & Microplastic Heatmap',
    ngoName: 'CoralCoast Watch Foundation',
    ngoLocation: 'Biscayne Bay & Florida Keys',
    summary: 'Build tools that help communities and NGOs monitor, educate, visualize and take action on environmental threats.',
    problemStatement:
      'Algal blooms and marine debris damage sensitive coastal estuaries, but official environmental testing stations are miles apart. Local citizens, kayakers, and fishermen lack a unified way to report water turbidity and pollution spikes.',
    targetBeneficiaries: 'Marine biologists, coastal conservationists, student eco-clubs.',
    keyDeliverables: [
      'Crowdsourced photo pollution report flow with GPS EXIF verification',
      'Real-time water quality heat-index and tidal vulnerability map',
      'Automated alert push to local cleanup NGOs and authorities',
      'Interactive educational biodiversity loss simulator'
    ],
    suggestedStack: ['React', 'Canvas / WebGL', 'GeoJSON', 'Tailwind CSS', 'Exif Parser'],
    impactMetric: '120 Miles of Coastline Monitored',
    accentColor: '#00f0d0',
    bgGradient: 'from-[#00b4d8] via-[#00f0d0] to-[#ff1f8f]',
    stickerText: 'CLIMATE ACTION',
    rotation: 'rotate-1'
  }
];

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 'step-1',
    phase: 'STAGE 01',
    title: 'REGISTRATIONS OPEN',
    date: 'OCTOBER 15, 2026',
    time: '12:00 PM EST',
    description: 'Portal opens for students, developers, designers and social innovators worldwide. Team formation mixer begins.',
    status: 'completed',
    tag: 'REGISTRATION LIVE'
  },
  {
    id: 'step-2',
    phase: 'STAGE 02',
    title: 'PROBLEM STATEMENTS RELEASED',
    date: 'NOVEMBER 01, 2026',
    time: '09:00 AM EST',
    description: 'NGO dossiers, sample datasets, stakeholder interviews and technical constraints made public to registered hackers.',
    status: 'completed',
    tag: 'DOSSIERS UNLOCKED'
  },
  {
    id: 'step-3',
    phase: 'STAGE 03',
    title: 'TEAM FORMATION & MENTOR MATCH',
    date: 'NOVEMBER 08, 2026',
    time: '06:00 PM EST',
    description: 'Join Discord channels, match with NGO project leads, align on technology stack and establish Git repositories.',
    status: 'active',
    tag: 'NOW ACTIVE'
  },
  {
    id: 'step-4',
    phase: 'STAGE 04',
    title: 'HACKATHON DAY — 24H SPRINT',
    date: 'NOVEMBER 14, 2026',
    time: '10:00 AM EST',
    description: 'The clock begins. 24 hours of non-stop coding, UI/UX polishing, live mentor check-in tables, and fuel.',
    status: 'upcoming',
    tag: 'COUNTDOWN TIK'
  },
  {
    id: 'step-5',
    phase: 'STAGE 05',
    title: 'SUBMISSIONS & CODE FREEZE',
    date: 'NOVEMBER 15, 2026',
    time: '10:00 AM EST',
    description: 'GitHub repositories locked, demo video uploaded, and project documentation submitted to NGO evaluation board.',
    status: 'upcoming',
    tag: 'STRICT DEADLINE'
  },
  {
    id: 'step-6',
    phase: 'STAGE 06',
    title: 'DEMO DAY & STAKEHOLDER PITCH',
    date: 'NOVEMBER 15, 2026',
    time: '02:00 PM EST',
    description: 'Top 12 finalist teams pitch live directly to NGO directors and senior tech judges on the main stage.',
    status: 'upcoming',
    tag: 'MAIN STAGE'
  },
  {
    id: 'step-7',
    phase: 'STAGE 07',
    title: 'WINNERS & NGO PILOT GRANTS',
    date: 'NOVEMBER 15, 2026',
    time: '07:30 PM EST',
    description: '$35,000+ awarded in direct implementation funding, cloud compute grants, and guaranteed NGO deployment trials.',
    status: 'upcoming',
    tag: 'AWARDS NIGHT'
  }
];

export const IMPACT_CATEGORIES: ImpactCategory[] = [
  {
    id: 'env',
    iconName: 'leaf',
    category: '🌱 ENVIRONMENT',
    heading: 'Telemetry Where It Counts',
    description:
      'From Florida mangroves to Amazonian river basins, NGO field workers are using open-source water telemetry tools built during previous NEXUS hackathons.',
    ngoPartner: 'CoralCoast Watch & EcoVolunteers',
    metric: '180,000+',
    metricLabel: 'Liters of runoff monitored',
    quote: 'The student prototype gave us real-time salinity alerts for $80 instead of $12,000 industrial sensors.',
    quoteAuthor: 'Elena Diaz, Marine Field Director'
  },
  {
    id: 'edu',
    iconName: 'book',
    category: '📚 EDUCATION',
    heading: 'Zero-Bandwidth Knowledge',
    description:
      'Offline-first educational platforms created by student hackers are currently powering mobile solar classroom vans across 14 remote districts.',
    ngoPartner: 'OpenEd Global',
    metric: '54 Schools',
    metricLabel: 'Equipped with offline hubs',
    quote: 'Our students did not lose a single day of reading practice when seasonal storms knocked out regional cell towers.',
    quoteAuthor: 'Marcus Vance, Community Principal'
  },
  {
    id: 'health',
    iconName: 'heart',
    category: '❤️ HEALTHCARE',
    heading: 'Fast Clinic Coordination',
    description:
      'Mobile medical vans deployed simplified triage registries that cut patient check-in times from 18 minutes to under 90 seconds in mobile clinics.',
    ngoPartner: 'Care Without Borders',
    metric: '92%',
    metricLabel: 'Triage time reduction',
    quote: 'In urgent field conditions, simple software saves literal lives. The hackathon team solved our biggest bottleneck.',
    quoteAuthor: 'Dr. Sophia Reyes, Chief Medical Officer'
  },
  {
    id: 'comm',
    iconName: 'users',
    category: '🤝 COMMUNITY',
    heading: 'Hyper-Local Mutual Aid',
    description:
      'Disaster volunteer dispatch systems that instantly match bilingual volunteers and supply drivers to families during post-hurricane relief.',
    ngoPartner: 'HandsTogether Network',
    metric: '12,400+',
    metricLabel: 'Emergency supplies delivered',
    quote: 'Instead of chaos and missed calls, we dispatched 400 volunteers in under 3 hours after Hurricane Ian.',
    quoteAuthor: 'Javier Morales, Relief Coordinator'
  }
];

export const HOW_IT_WORKS_STAGES = [
  {
    number: '01',
    title: 'DISCOVER',
    subtitle: 'Understand the NGO problem',
    description: 'Dive deep into real, unfiltered operational bottlenecks provided by our partner NGOs. Read actual field logs and interview recordings.',
    tag: 'THE REALITY CHECK',
    icon: 'Search'
  },
  {
    number: '02',
    title: 'DEFINE',
    subtitle: 'Identify people, pain points & constraints',
    description: 'Map out the human beings on the ground: rural teachers, field nurses, volunteers. Design around strict zero-budget, low-battery, and offline realities.',
    tag: 'HUMAN-CENTERED',
    icon: 'Target'
  },
  {
    number: '03',
    title: 'BUILD',
    subtitle: 'Design and develop your solution',
    description: '24 hours of rapid development. Build lightweight frontend interfaces, resilient offline synchronization, clean APIs, and accessible workflows.',
    tag: 'ZERO VAPORWARE',
    icon: 'Code'
  },
  {
    number: '04',
    title: 'TEST',
    subtitle: 'Validate whether your solution actually helps',
    description: 'Live testing sessions with real NGO representatives stationed on Discord and on-site. Iterate rapidly based on harsh real-world feedback.',
    tag: 'FIELD VALIDATION',
    icon: 'CheckCircle2'
  },
  {
    number: '05',
    title: 'IMPACT',
    subtitle: 'Present your solution & real-world roadmap',
    description: 'Pitch to a panel of non-profit executives, open-source maintainers, and tech leaders. Secure grants to take your prototype into production.',
    tag: 'PRODUCTION PILOT',
    icon: 'Flame'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'Who can participate in Hack for Good?',
    answer:
      'Any undergraduate, graduate, or bootcamp student, as well as early-career developers, designers, and community activists worldwide. Both beginners and experienced builders are warmly welcomed!',
    category: 'general'
  },
  {
    question: 'What is the team size?',
    answer:
      'Teams can consist of 1 to 4 members. If you do not have a team yet, don’t worry! We host virtual team-matching mixers and dedicated Discord channels before kickoff.',
    category: 'teams'
  },
  {
    question: 'Who owns the intellectual property created during the hackathon?',
    answer:
      'You and your team own your work! However, in the spirit of "Hack for Good", all submitted code must be licensed under a permissive open-source license (such as MIT or Apache 2.0) so partner NGOs can freely deploy and build upon it.',
    category: 'judging'
  },
  {
    question: 'What are the prizes and implementation grants?',
    answer:
      'We have a $35,000+ prize pool dedicated to real deployment! Top track winners receive $5,000 direct equity-free stipends, cloud compute credits from our tech sponsors, and guaranteed 6-month NGO pilot mentorship.',
    category: 'judging'
  },
  {
    question: 'Is the event in-person, remote, or hybrid?',
    answer:
      'Hybrid! We host our main in-person creative hub in Miami, FL with tropical atmosphere, free food, and mentor lounges, alongside a fully synchronized global virtual track on Discord.',
    category: 'logistics'
  },
  {
    question: 'Do I need prior experience with NGOs or non-profit tech?',
    answer:
      'Not at all. Every track includes a detailed problem dossier, sample data, and direct access to NGO representatives who will answer your questions throughout the 24-hour sprint.',
    category: 'general'
  }
];
