const projects = [
  {
    id: 1,
    title: "Skinzy — AI Medical Telemedicine",
    tagline: "Deep Learning Skin Condition Classifier & Healthcare Platform",
    description: "A deep learning medical web application designed for skin condition analysis. Integrates a PyTorch CNN model to classify skin diseases, evaluate severity, and suggest targeted remedies and products in real-time.",
    problem: "Dermatological consultations often take days to schedule, leaving patients with unchecked skin conditions and uncertain remedies.",
    solution: "Built a high-speed AI telemedicine platform powered by a PyTorch CNN model served via a FastAPI REST endpoint that delivers instant AI diagnostic scores and customized medical remedies.",
    image: "/skinzy-preview.png",
    mobileImage: "/skinzy-preview.png",
    technologies: ["React", "Next.js", "PyTorch", "Python", "FastAPI", "Docker", "Tailwind CSS", "Vercel"],
    liveUrl: "https://skinzy-beta.vercel.app/",
    githubUrl: "https://github.com/HassanHashmi39/Skinzy",
    stars: 12,
    commits: 145,
    lastUpdated: "2026",
    features: [
      "PyTorch Deep Learning CNN Model Integration",
      "FastAPI Asynchronous Microservice Architecture",
      "Real-time Image Upload & Preprocessing",
      "Medical Diagnostic Remedies & Product Recommendation Database",
      "Dark-themed Responsive Doctor & Patient Dashboard",
      "Vercel Serverless Production Deployment"
    ],
    challenges: "Training a lightweight PyTorch CNN model to deliver high classification accuracy while maintaining under 500ms latency for mobile web users.",
    whatILearned: "Learned how to decouple deep learning inference into a FastAPI microservice, optimize image payload sizes, and construct resilient medical UI states.",
    category: "Machine Learning (AI)",
    featured: true,
    caseStudy: {
      architecture: [
        { stage: "Client Layer", tech: "React / Next.js", desc: "User uploads skin photo & views instant diagnostic report" },
        { stage: "API Gateway", tech: "FastAPI / Python", desc: "Receives image payload, executes preprocessing, and queries ML model" },
        { stage: "AI Inference Engine", tech: "PyTorch CNN Model", desc: "Classifies condition probability & severity metrics" },
        { stage: "Data Layer", tech: "Medical Remedies DB", desc: "Matches classified condition with verified remedies & products" }
      ]
    }
  },
  {
    id: 2,
    title: "Snapstrom MERN Web App",
    tagline: "Full-Stack SaaS Platform with Role-Based Authentication",
    description: "A modern SaaS web application with a complete user management system, interactive analytics dashboard, JWT authentication, and full MERN stack integration.",
    problem: "Existing community platforms struggle with heavy page load times, complex authentication flows, and lack real-time user management.",
    solution: "Designed and engineered Snapstrom using MERN architecture with optimized Mongo indexing, JWT stateless token management, and modular React components.",
    image: "/snapstrom-preview.png",
    mobileImage: "/snapstrom-preview.png",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    liveUrl: "https://snapstrom-project-1.vercel.app/login",
    githubUrl: "https://github.com/ehsanshahid522/snapstrom",
    stars: 8,
    commits: 82,
    lastUpdated: "2026",
    features: [
      "JWT Authentication & Refresh Tokens",
      "Role-Based Access Control (Admin / User)",
      "REST API Architecture with Express & Mongoose",
      "Responsive Sidebar & Dynamic Analytics Dashboard",
      "Profile & Settings Management",
      "Production deployment on Vercel"
    ],
    challenges: "Securing JWT token storage against XSS/CSRF while preserving continuous session persistence across tab reloads.",
    whatILearned: "Mastered full-stack authentication design patterns, HTTP-only cookie handlers, and global state management with React hooks.",
    category: "Full Stack (MERN)",
    featured: false
  },
  {
    id: 3,
    title: "Smart Parking ALPR System",
    tagline: "AI License Plate Recognition & Parking Management",
    description: "An automated desktop application for parking management integrated with an AI-based Automatic License Plate Recognition (ALPR) system using YOLOv8 & OpenCV.",
    problem: "Manual parking lot management creates congestion at entry gates and causes errors in duration-based billing calculations.",
    solution: "Developed an automated license plate scanner system using OpenCV and YOLOv8 connected to a Java Swing desktop interface over socket transactions.",
    image: "/smart-parking-preview.png",
    mobileImage: "/smart-parking-preview.png",
    technologies: ["Java Swing", "Python", "OpenCV", "YOLOv8", "MySQL", "Socket API", "JDBC"],
    liveUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    githubUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    stars: 15,
    commits: 110,
    lastUpdated: "2026",
    features: [
      "AI-Powered Automatic License Plate Recognition (YOLOv8)",
      "Real-time Floor Parking Slots Grid Occupancy Map",
      "Automated Duration-Based Billing Engine",
      "Admin/Attendant Role-Based Control Dashboard",
      "JDBC Relational Database Integration (MySQL)"
    ],
    challenges: "Handling real-time video frames from camera streams without freezing the Java Swing GUI event dispatch thread.",
    whatILearned: "Implemented multithreaded socket listeners and decoupled heavy computer vision processing from GUI threads.",
    category: "AI & Desktop",
    featured: false
  },
  {
    id: 4,
    title: "AML Detection AI System",
    tagline: "Machine Learning Financial Anomaly Detector",
    description: "A high-tech dashboard for Anti-Money Laundering detection. Built with advanced Machine Learning models to identify suspicious financial transaction patterns.",
    problem: "Financial institutions lose millions trying to spot suspicious transactions manually in huge transactional datasets.",
    solution: "Created an anomaly scoring ML engine trained with Scikit-Learn algorithms, deployed with interactive Gradio widgets on Hugging Face Spaces.",
    image: "/aml-preview.png",
    mobileImage: "/aml-preview.png",
    technologies: ["Python", "Gradio", "Scikit-Learn", "Hugging Face", "Pandas", "Machine Learning"],
    liveUrl: "https://ehsanshahid522-aml-project.hf.space/",
    githubUrl: "https://github.com/ehsanshahid522/",
    stars: 9,
    commits: 45,
    lastUpdated: "2026",
    features: [
      "Real-Time Transaction Anomaly Scoring",
      "Dynamic Data Visualizations for Risk Profiles",
      "Automated Feature Scaling & Scikit-Learn Pipelines",
      "Dark-themed High-Tech Analytics Interface",
      "Live Cloud Hosting on Hugging Face Spaces"
    ],
    challenges: "Balancing false-positive reduction with recall rates when training ML classifiers on imbalanced transaction records.",
    whatILearned: "Gained deep understanding of SMOTE resampling, Precision-Recall curve evaluation, and web app deployments on Hugging Face.",
    category: "Machine Learning (AI)",
    featured: false
  },
  {
    id: 5,
    title: "Order Profit AI Analytics",
    tagline: "E-commerce Revenue & Profit Margin Dashboard",
    description: "A professional and modern e-commerce profit analytics dashboard. Provides real-time insights into revenue, profit margins, and order trends.",
    problem: "Online sellers struggle to visualize net profitability after accounting for ad spend, shipping fees, and refunds.",
    solution: "Engineered a glassmorphic dashboard with live revenue metrics, interactive chart visualizations, and AI trend predictions.",
    image: "/order-profit-preview.png",
    mobileImage: "/order-profit-preview.png",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel", "Recharts"],
    liveUrl: "https://order-profit.vercel.app/",
    githubUrl: "https://github.com/ehsanshahid522/order-profit",
    stars: 11,
    commits: 60,
    lastUpdated: "2026",
    features: [
      "Real-time Profit Margin & Revenue Tracking",
      "Interactive Bar & Line Chart Visualizations",
      "Smart AI Order Profit Insights",
      "Premium Dark Glassmorphism UI",
      "Vite Fast Build & Vercel Deployment"
    ],
    challenges: "Calculating complex dynamic financial metrics across large date ranges without performance stutters.",
    whatILearned: "Advanced dynamic charting, custom memoization hooks, and high-performance component rendering in React.",
    category: "Web Application",
    featured: false
  }
];

export default projects;
