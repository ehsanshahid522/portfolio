const projects = [
  {
    id: 1,
    title: "Skinzy — AI Skin Analysis Platform",
    tagline: "AI-powered platform for skin condition detection and intelligent healthcare insights",
    description: "An AI-powered web platform designed to analyze skin conditions using a trained PyTorch CNN deep learning model and provide instant medical insights.",
    problem: "Dermatology consultations take days to schedule, leaving patients anxious without immediate guidance for skin symptoms.",
    solution: "Engineered an instant AI telemedicine portal with PyTorch CNN served via FastAPI microservice, returning diagnostic probability scores in under 500ms.",
    image: "/skinzy-preview.png",
    mobileImage: "/skinzy-preview.png",
    technologies: ["React", "Next.js", "PyTorch", "Python", "FastAPI", "Docker", "Tailwind CSS"],
    liveUrl: "https://skinzy-beta.vercel.app/",
    githubUrl: "https://github.com/HassanHashmi39/Skinzy",
    stars: 12,
    commits: 145,
    lastUpdated: "2026",
    featureBadges: [
      "🤖 AI Image Analysis",
      "🔐 Secure Authentication",
      "📊 User Dashboard",
      "📱 Responsive Design"
    ],
    features: [
      "PyTorch Deep Learning Image Classification",
      "FastAPI Microservice Backend with <500ms Response",
      "Dermatologist Product & Remedy Recommendations",
      "Doctor & Patient Dashboard UI"
    ],
    category: "AI & Machine Learning",
    featured: true,
    caseStudy: {
      problem: "Patients wait up to 2 weeks for specialist appointments without early diagnostic awareness.",
      solution: "Built Skinzy web app connecting PyTorch CNN models to process uploaded skin images instantly.",
      architecture: [
        { stage: "Client Layer", tech: "React / Next.js", desc: "Image upload & interactive report view" },
        { stage: "API Gateway", tech: "FastAPI / Python", desc: "Image payload processing & model query" },
        { stage: "Inference Engine", tech: "PyTorch CNN Model", desc: "Diagnostic probability classification" },
        { stage: "Database", tech: "Medical Remedies DB", desc: "Matches condition with verified remedies" }
      ],
      challenges: "Maintaining high diagnostic accuracy while reducing payload latency under 500 milliseconds.",
      results: "Delivered instantaneous diagnostic scores, cutting user wait time from days to seconds."
    }
  },
  {
    id: 2,
    title: "Snapstrom — MERN SaaS Analytics Platform",
    tagline: "Full-Stack SaaS platform with role-based authentication and live user management",
    description: "A modern SaaS web application with a complete user management system, interactive analytics dashboard, JWT authentication, and full MERN stack integration.",
    problem: "Startups require secure, scalable user management and analytics dashboards without sacrificing performance.",
    solution: "Designed and engineered Snapstrom using MERN architecture with MongoDB indexing, JWT token security, and responsive React widgets.",
    image: "/snapstrom-preview.png",
    mobileImage: "/snapstrom-preview.png",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    liveUrl: "https://snapstrom-project-1.vercel.app/login",
    githubUrl: "https://github.com/ehsanshahid522/snapstrom",
    stars: 8,
    commits: 82,
    lastUpdated: "2026",
    featureBadges: [
      "🔐 Secure Authentication",
      "📊 User Dashboard",
      "⚙️ REST API Backend",
      "📱 Responsive Design"
    ],
    features: [
      "JWT Stateless Token Authentication & Refresh Tokens",
      "Role-Based Access Control (Admin / User)",
      "Express REST API Micro-routing & MongoDB Indexing",
      "Interactive Analytics Sidebar & Profile Manager"
    ],
    category: "Full Stack (MERN)",
    featured: true,
    caseStudy: {
      problem: "Traditional web portals struggle with slow session verification and insecure authentication flows.",
      solution: "Engineered a production-ready MERN SaaS portal with protected routes and HTTP-only cookies.",
      architecture: [
        { stage: "Frontend", tech: "React + Vite", desc: "Dark glassmorphic single-page app" },
        { stage: "REST API", tech: "Node.js + Express", desc: "User management and data endpoints" },
        { stage: "Security", tech: "JWT + Bcrypt", desc: "Stateless tokens & encrypted passwords" },
        { stage: "Database", tech: "MongoDB Atlas", desc: "NoSQL collection schema indexing" }
      ],
      challenges: "Securing token persistence across tab refreshes without risking CSRF vulnerabilities.",
      results: "Delivered sub-100ms API response times with rock-solid role-based access security."
    }
  },
  {
    id: 3,
    title: "Order Profit — E-Commerce Revenue Analytics",
    tagline: "Real-time revenue, profit margin, and financial forecasting dashboard for store owners",
    description: "A professional e-commerce profit analytics dashboard providing real-time insights into revenue, net profit margins, ad spend, and order trends.",
    problem: "Online store owners struggle to calculate net profit after deducting ad spend, gateway fees, and shipping costs.",
    solution: "Engineered a glassmorphic dashboard with live net margin calculations, interactive charts, and revenue insights.",
    image: "/order-profit-preview.png",
    mobileImage: "/order-profit-preview.png",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Recharts", "Vercel"],
    liveUrl: "https://order-profit.vercel.app/",
    githubUrl: "https://github.com/ehsanshahid522/order-profit",
    stars: 11,
    commits: 60,
    lastUpdated: "2026",
    featureBadges: [
      "📊 Live Revenue Charts",
      "⚡ Sub-Second Speed",
      "📱 Fully Responsive",
      "💡 Profit Insights"
    ],
    features: [
      "Automated Net Profit Margin Calculation Engine",
      "Interactive Multi-Axis Financial Charts (Recharts)",
      "Smart Order Profit Analytics & Trend Insights",
      "Dark Glassmorphism Interface"
    ],
    category: "Web Application",
    featured: true,
    caseStudy: {
      problem: "Sellers rely on manual spreadsheets to calculate profit, missing margin drops during ad campaigns.",
      solution: "Created an automated React analytics portal using custom calculation hooks and Recharts.",
      architecture: [
        { stage: "UI View", tech: "React + Tailwind", desc: "Glassmorphic layout for financial metrics" },
        { stage: "Data Engine", tech: "Custom Hooks", desc: "Real-time net margin formula calculation" },
        { stage: "Charts", tech: "Recharts", desc: "Responsive revenue vs ad spend series" }
      ],
      challenges: "Handling multi-variable dynamic formulas across large date ranges efficiently.",
      results: "Enabled store owners to visualize net profit in 1 click, optimizing ad budget spend."
    }
  },
  {
    id: 4,
    title: "Smart Parking ALPR System",
    tagline: "Automated license plate recognition and parking management system",
    description: "An automated system for parking management integrated with AI Automatic License Plate Recognition (ALPR) using YOLOv8 & OpenCV.",
    problem: "Manual parking lot management causes congestion at entry gates and leads to duration billing errors.",
    solution: "Developed an automated license plate scanner system using OpenCV and YOLOv8 connected to a Java interface.",
    image: "/smart-parking-preview.png",
    mobileImage: "/smart-parking-preview.png",
    technologies: ["Java", "Python", "OpenCV", "YOLOv8", "MySQL", "Socket API"],
    liveUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    githubUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    stars: 15,
    commits: 110,
    lastUpdated: "2026",
    featureBadges: [
      "🤖 Computer Vision",
      "📊 Real-time Grid Map",
      "🔐 Role Controls",
      "⚡ Socket API"
    ],
    features: [
      "AI License Plate Recognition (YOLOv8 & OpenCV)",
      "Real-Time Floor Parking Occupancy Grid Map",
      "Automated Duration-Based Billing Engine",
      "Attendant Role-Based Control Dashboard"
    ],
    category: "AI & Desktop",
    featured: false,
    caseStudy: {
      problem: "Manual ticket distribution causes entry gate bottlenecks.",
      solution: "Built a computer vision pipeline with YOLOv8 to log license plates into MySQL automatically.",
      architecture: [
        { stage: "Camera Stream", tech: "OpenCV", desc: "Captures vehicle entry frames" },
        { stage: "ALPR Model", tech: "YOLOv8", desc: "Detects license plate characters" },
        { stage: "Dashboard", tech: "Java UI + Sockets", desc: "Updates parking slots and billing" }
      ],
      challenges: "Processing high-res video streams without freezing the GUI event thread.",
      results: "Automated entry logging and guaranteed duration billing accuracy."
    }
  }
];

export default projects;
