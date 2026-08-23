const projects = [
  {
    id: 1,
    title: "Skinzy — AI Medical Telemedicine Platform",
    tagline: "AI-powered platform for instant dermatological analysis and medical consultation",
    description: "A deep learning medical web application designed for skin condition analysis. Integrates a PyTorch CNN model to classify skin diseases, evaluate severity, and suggest targeted remedies and products in real-time.",
    problem: "Dermatological consultations take days to schedule, leaving patients anxious and without immediate guidance for urgent skin symptoms.",
    solution: "Engineered an instant AI telemedicine platform powered by a PyTorch CNN deep learning model served via FastAPI. Delivers diagnostic confidence scores and medical guidance in under 500 milliseconds.",
    image: "/skinzy-preview.png",
    mobileImage: "/skinzy-preview.png",
    technologies: ["React", "Next.js", "PyTorch", "Python", "FastAPI", "Docker", "Tailwind CSS", "Vercel"],
    liveUrl: "https://skinzy-beta.vercel.app/",
    githubUrl: "https://github.com/HassanHashmi39/Skinzy",
    stars: 12,
    commits: 145,
    lastUpdated: "2026",
    features: [
      "Real-Time Image Upload & Deep Learning Analysis",
      "PyTorch CNN Convolutional Model Classification",
      "FastAPI Microservice with Sub-500ms Latency",
      "Medical Diagnostic Remedies & Product Suggestions",
      "Responsive Dark-Themed Doctor & Patient Interface",
      "Serverless Production Deployment on Vercel"
    ],
    category: "AI & Machine Learning",
    featured: true,
    caseStudy: {
      problem: "Patients suffering from skin abnormalities often wait up to 2 weeks for a specialist consultation. Existing diagnostic portals are slow, unorganized, and lack instant visual analysis tools.",
      solution: "Built Skinzy — a high-speed web and mobile telemedicine application. Integrated a PyTorch CNN model wrapped in a lightweight FastAPI microservice to process skin photos directly from user devices and produce actionable severity scores.",
      architecture: [
        { stage: "Client Layer", tech: "React / Next.js", desc: "User uploads skin photo & views instant diagnostic report" },
        { stage: "API Gateway", tech: "FastAPI / Python", desc: "Receives image payload, executes preprocessing, and queries ML model" },
        { stage: "AI Inference Engine", tech: "PyTorch CNN Model", desc: "Classifies condition probability & severity metrics" },
        { stage: "Data Layer", tech: "Medical Remedies DB", desc: "Matches classified condition with verified remedies & products" }
      ],
      challenges: "Training a lightweight PyTorch CNN model to maintain over 94% classification accuracy while keeping API payload processing under 500ms for mobile clients.",
      results: "Achieved instantaneous diagnostic insights, reduced user waiting time from days to seconds, and processed 1,000+ test image inputs with zero server crashes."
    }
  },
  {
    id: 2,
    title: "Snapstrom — MERN SaaS Analytics Platform",
    tagline: "Full-Stack SaaS application with role-based authentication and live user management",
    description: "A modern SaaS web application with a complete user management system, interactive analytics dashboard, JWT authentication, and full MERN stack integration.",
    problem: "Startups need secure, scalable user management and analytics without sacrificing page load speed or introducing security vulnerabilities.",
    solution: "Designed and engineered Snapstrom using MERN architecture with MongoDB indexing, JWT stateless token security, and modular React analytics widgets.",
    image: "/snapstrom-preview.png",
    mobileImage: "/snapstrom-preview.png",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS"],
    liveUrl: "https://snapstrom-project-1.vercel.app/login",
    githubUrl: "https://github.com/ehsanshahid522/snapstrom",
    stars: 8,
    commits: 82,
    lastUpdated: "2026",
    features: [
      "Stateless JWT Authentication & Refresh Tokens",
      "Role-Based Access Control (Admin / Attendant / User)",
      "RESTful API Micro-routing with Express & Mongoose",
      "Responsive Interactive Analytics Dashboard",
      "User Profile Settings & Account Management",
      "Production Cloud Hosting on Vercel"
    ],
    category: "Full Stack (MERN)",
    featured: true,
    caseStudy: {
      problem: "Traditional web portals struggle with slow session verification, session hijacking risks, and bulky non-responsive administration dashboards.",
      solution: "Engineered a production-ready MERN application with HTTP-only cookie JWT auth, protected private route guards, and dynamic data tables.",
      architecture: [
        { stage: "Frontend", tech: "React + Vite", desc: "Fast single-page application with dark glassmorphism design" },
        { stage: "REST API", tech: "Node.js + Express", desc: "Modular endpoints handling user management & analytics" },
        { stage: "Security", tech: "JWT + Bcrypt", desc: "Stateless authentication and encrypted password hashing" },
        { stage: "Database", tech: "MongoDB Atlas", desc: "Indexed NoSQL schemas for fast query retrieval" }
      ],
      challenges: "Securing JWT token storage against XSS/CSRF attacks while maintaining seamless session persistence across tab reloads.",
      results: "Delivered a production-ready SaaS template featuring sub-100ms API response times and robust role-based security."
    }
  },
  {
    id: 3,
    title: "Order Profit — AI E-Commerce Analytics",
    tagline: "Real-time revenue, profit margin, and financial forecasting dashboard for online sellers",
    description: "A professional e-commerce profit analytics dashboard. Provides real-time insights into revenue, net profit margins, ad spend, and order trends.",
    problem: "E-commerce store owners struggle to calculate net profit in real time after deducting ad spend, gateway fees, shipping, and refunds.",
    solution: "Engineered an ultra-fast glassmorphic dashboard with live net margin calculations, interactive charts, and AI revenue prediction insights.",
    image: "/order-profit-preview.png",
    mobileImage: "/order-profit-preview.png",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Recharts", "Vercel"],
    liveUrl: "https://order-profit.vercel.app/",
    githubUrl: "https://github.com/ehsanshahid522/order-profit",
    stars: 11,
    commits: 60,
    lastUpdated: "2026",
    features: [
      "Automated Net Profit & Gross Revenue Calculations",
      "Interactive Multi-Axis Bar & Line Financial Charts",
      "AI-Powered Order Revenue Insights",
      "Glassmorphic High-Tech Analytics UI",
      "Instant Vite Build & Mobile Responsive Layout"
    ],
    category: "Web Application",
    featured: true,
    caseStudy: {
      problem: "E-commerce sellers rely on cumbersome spreadsheets to track margins, missing real-time margin drops during active ad campaigns.",
      solution: "Created an automated React analytics portal using Recharts for dynamic visual feedback and custom calculation hooks for net profit metrics.",
      architecture: [
        { stage: "UI View", tech: "React + Tailwind", desc: "Dark glassmorphism layout tailored for high-density financial metrics" },
        { stage: "Data Engine", tech: "Custom Hooks", desc: "Memoized financial aggregations for real-time calculations" },
        { stage: "Visuals", tech: "Recharts Library", desc: "Responsive multi-series charts for revenue vs expense trends" }
      ],
      challenges: "Calculating multi-variable dynamic financial formulas across large transaction sets without component re-render performance drops.",
      results: "Enabled store owners to visualize net profit in 1 click, identifying non-profitable ad campaigns immediately."
    }
  },
  {
    id: 4,
    title: "Smart Parking ALPR System",
    tagline: "Automated license plate recognition and parking management system",
    description: "An automated system for parking management integrated with AI Automatic License Plate Recognition (ALPR) using YOLOv8 & OpenCV.",
    problem: "Manual parking lot monitoring causes long queues at entry gates and leads to errors in duration-based billing calculations.",
    solution: "Developed an automated license plate scanner system using OpenCV and YOLOv8 connected to a Java interface over socket transactions.",
    image: "/smart-parking-preview.png",
    mobileImage: "/smart-parking-preview.png",
    technologies: ["Java", "Python", "OpenCV", "YOLOv8", "MySQL", "Socket API"],
    liveUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    githubUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    stars: 15,
    commits: 110,
    lastUpdated: "2026",
    features: [
      "AI License Plate Recognition (YOLOv8 & OpenCV)",
      "Real-Time Floor Parking Occupancy Grid Map",
      "Automated Duration-Based Billing Engine",
      "Attendant Role-Based Control Dashboard",
      "Relational MySQL Database Integration"
    ],
    category: "AI & Desktop",
    featured: false,
    caseStudy: {
      problem: "Manual ticket distribution at parking facilities creates vehicle entry bottlenecks and frequent revenue leaks.",
      solution: "Built a computer vision pipeline with YOLOv8 to detect vehicle license plates automatically upon entry, logging timestamps into MySQL.",
      architecture: [
        { stage: "Camera Stream", tech: "OpenCV", desc: "Captures vehicle entry frames in real-time" },
        { stage: "ALPR Engine", tech: "YOLOv8 Model", desc: "Detects and extracts license plate text characters" },
        { stage: "Control Panel", tech: "Java UI + Sockets", desc: "Updates parking slot grid and computes billing upon exit" }
      ],
      challenges: "Processing high-resolution camera video frames continuously without blocking the user interface event thread.",
      results: "Automated entry/exit logging, eliminated entry gate delays, and guaranteed accurate duration billing."
    }
  },
  {
    id: 5,
    title: "AML Financial Fraud AI Detector",
    tagline: "Machine learning financial anomaly detection system",
    description: "An Anti-Money Laundering detection system built with machine learning algorithms to identify suspicious financial transaction patterns.",
    problem: "Financial institutions waste thousands of hours manually reviewing transaction records to flag potential money laundering activities.",
    solution: "Created an anomaly scoring ML engine trained with Scikit-Learn pipelines and deployed with interactive Gradio widgets on Hugging Face.",
    image: "/aml-preview.png",
    mobileImage: "/aml-preview.png",
    technologies: ["Python", "Gradio", "Scikit-Learn", "Hugging Face", "Pandas"],
    liveUrl: "https://ehsanshahid522-aml-project.hf.space/",
    githubUrl: "https://github.com/ehsanshahid522/",
    stars: 9,
    commits: 45,
    lastUpdated: "2026",
    features: [
      "Real-Time Transaction Anomaly Risk Scoring",
      "Dynamic Visualizations for Risk Profiles",
      "Automated Feature Scaling & Scikit-Learn Pipeline",
      "Hugging Face Cloud Deployment"
    ],
    category: "AI & Machine Learning",
    featured: false,
    caseStudy: {
      problem: "Traditional rule-based fraud detection systems yield high false-positive rates, overwhelming compliance teams.",
      solution: "Developed a machine learning classifier trained on transaction attributes to assign dynamic risk scores instantly.",
      architecture: [
        { stage: "Pipeline", tech: "Scikit-Learn", desc: "Feature scaling and ensemble anomaly model" },
        { stage: "Interface", tech: "Gradio Web UI", desc: "Interactive query interface for compliance analysts" }
      ],
      challenges: "Addressing class imbalance in transaction data while optimizing precision-recall thresholds.",
      results: "Streamlined financial risk assessment with real-time anomaly scores."
    }
  }
];

export default projects;
