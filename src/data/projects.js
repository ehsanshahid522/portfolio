const projects = [
  {
    id: 1,
    title: "Skinzy",
    description: "A deep learning medical web application designed for skin condition analysis. Integrates a PyTorch CNN model to classify skin diseases, evaluate severity, and suggest targeted remedies and products in real-time.",
    image: "/skinzy-preview.png",
    technologies: ["React", "Next.js", "PyTorch", "Python", "FastAPI", "Docker", "Tailwind CSS", "Vercel"],
    liveUrl: "https://skinzy-beta.vercel.app/",
    githubUrl: "https://github.com/HassanHashmi39/Skinzy",
    features: [
      "Deep Learning classification model (PyTorch)",
      "Dynamic remedies and product suggestions database",
      "Vercel serverless deployment",
      "REST API communication with FastAPI",
      "Sleek medical dark-mode dashboard"
    ],
    category: "Machine Learning (AI)"
  },
  {
    id: 2,
    title: "AML Detection AI",
    description: "A premium, high-tech dashboard for Anti-Money Laundering detection. Built with advanced Machine Learning models to identify suspicious financial patterns with high accuracy. Hosted on Hugging Face Spaces.",
    image: "/aml-preview.png",
    technologies: ["Python", "Gradio", "Scikit-Learn", "Hugging Face", "Machine Learning", "Data Analysis"],
    liveUrl: "https://ehsanshahid522-aml-project.hf.space/",
    githubUrl: "https://github.com/ehsanshahid522/",
    features: [
      "Real-time transaction anomaly scoring",
      "Dynamic data visualization for risk profiles",
      "Detection Active status monitoring",
      "AI & ML integration for predictive analytics",
      "Sophisticated dark-themed UI"
    ],
    category: "Machine Learning (AI)"
  },
  {
    id: 3,
    title: "Snapstrom Web App",
    description: "A modern SaaS web application with a full user management system. Features a clean navigation sidebar, interactive components, and real-time data visualization.",
    image: "/snapstrom-preview.png",
    technologies: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "JavaScript", "CSS", "HTML"],
    liveUrl: "https://snapstrom-project-1.vercel.app/login",
    githubUrl: "https://github.com/ehsanshahid522/snapstrom",
    features: [
      "Comprehensive User Profile Management",
      "Secure authentication and data protection",
      "Interactive analytics dashboard",
      "Sleek SaaS design with blue accents",
      "Full-stack integration"
    ],
    category: "Web Application"
  },
  {
    id: 4,
    title: "Smart Parking ALPR",
    description: "An automated desktop application for parking management integrated with an AI-based Automatic License Plate Recognition (ALPR) system. Recognizes license plates at gates and syncs database occupancy maps in real-time.",
    image: "/smart-parking-preview.png",
    technologies: ["Java Swing", "Python", "OpenCV", "YOLOv8", "MySQL", "Socket API", "JDBC", "FlatLaf"],
    liveUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    githubUrl: "https://github.com/ehsanshahid522/smart-parking-system",
    features: [
      "AI-powered Automatic License Plate Recognition (ALPR)",
      "Real-time visual floor parking slots grid map",
      "Automatic duration-based billing calculation",
      "Admin/Attendant role-based dashboard controls",
      "Secure JDBC relational data transactions"
    ],
    category: "Machine Learning (AI)"
  },
  {
    id: 5,
    title: "Order Profit AI",
    description: "A professional and modern e-commerce profit analytics dashboard. Provides real-time insights into revenue, profit margins, and order trends using smart analytics.",
    image: "/order-profit-preview.png",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript", "Vercel", "AI Integration"],
    liveUrl: "https://order-profit.vercel.app/",
    githubUrl: "https://github.com/ehsanshahid522/order-profit",
    features: [
      "Smart Analytics with AI insights",
      "Vibrant bar and line charts for revenue trends",
      "Net profit and margin tracking",
      "Premium Dark Glassmorphism UI",
      "Performance optimized with Vite"
    ],
    category: "E-commerce AI"
  }
];

export default projects;
