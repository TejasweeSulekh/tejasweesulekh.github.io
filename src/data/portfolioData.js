// src/data/portfolioData.js

export const heroData = {
  toRotate: ["AI & Systems Engineer", "Architecting intelligent systems from silicon to scale."],
  typingSpeed: 150
};

export const achievements = [
  {
    iconType: "School",
    text: "Achieved AIR 305 in JEE Advanced among 0.15M aspirants and 97.70 percentile in JEE Main ['20]."
  },
  {
    iconType: "Money",
    text: "Completed the Summer of Quant programme under IIT Bombay's Quant community ['24]."
  },
  {
    iconType: "Landscape",
    text: "Summited Chang-La (17,586 ft.) and Khardung-La (18,380 ft.) passes in Ladakh ['23]."
  },
  {
    iconType: "Group",
    text: "Contributed to the Versova beach cleanup initiative organized by the Abhyuday community ['23]."
  }
];

export const experiences = [
  {
    role: "AI R&D Engineer",
    company: "IPHIPI, Hyderabad",
    period: "July 2025 - Present",
    points: [
      "Architected a sub-150ms multi-threaded Python inference engine, utilizing thread-safe producer-consumer queues with 0% deadlock and an active health monitoring dashboard.",
      "Prototyped an ultra-low latency (4ms) inference system utilizing dynamic filter coefficients evolving every 0.5ms driven by real-time neural network masks.",
      "Abstracted data buffering and pre-processing pipelines, decoupling ML architectures from low-level hardware constraints to enable rapid model retraining.",
      "Engineered custom asymmetric and multi-resolution loss functions to penalize false positives in low-SNR environments, improving speech quality metrics by 10%.",
      "Optimized neural network bottlenecks by replacing standard GRUs with Dilated Convolutional Networks, improving temporal context and achieving 1:1 speech power transparency.",
      "Developed automated data augmentation pipelines handling varying digital gain levels via a magnitude-independent loss function at a natural logarithmic scale.",
      "Executed end-to-end Edge AI deployments from Python to bare-metal hardware via Quantization-Aware Training (QAT), achieving 95% quantization retention.",
      "Spearheaded technical integrations as the lead liaison between the client and silicon manufacturers, resolving OTA blockers to advance POCs to commercial pricing."
    ]
  }
];

export const mainProjects = [
  {
    title: "Explainable Fraud Detection System",
    subtitle: "Event-Driven Microservices Architecture",
    points: [
      "Created a Kubernetes microservices architecture to process Kafka event streams for real-time inference within 15ms.",
      "Built an automated MLflow MLOps pipeline, training a 99.96% accuracy XGBoost classifier for imbalanced datasets.",
      "Engineered a ReAct agentic AI workflow via LangGraph, with automated risk reports based on extracted SHAP values.",
      "Executed a RAG pipeline utilizing LLM embeddings for historical similarity searches monitored on a live Streamlit dashboard."
    ],
    githubLink: "https://github.com/TejasweeSulekh/Fraud-Detection-System",
  }
];

export const academicProjects = [
  {
    title: "Generative Pre-trained Transformer",
    points: [
      "Engineered a 10M parameter decoder-only transformer from scratch in PyTorch.",
      "Implemented multi-head self-attention and residual pathways to train a generative model on the Tiny Shakespeare dataset."
    ]
  },
  {
    title: "Algorithmic Trading Predictor",
    points: [
      "Developed a customizable LSTM network utilizing OHLCV time-series data to forecast short-term stock prices.",
      "Integrated a simulated trading module for automated long/short strategy execution and risk management."
    ]
  },
  {
    title: "Hierarchical Object Detection",
    points: [
      "Led a 6-member team to build a multi-label X-ray detector using wavelet compression and fine-tuned Co-DETR.",
      "Utilized Efficient-Net with Focal loss to increase detection accuracy from 72.7% to 78.9%."
    ]
  },
  {
    title: "Computer Vision Metrology",
    points: [
      "Applied Wavelet transforms, SIFT, and Wiener filtering for image restoration.",
      "Benchmarked traditional CV anomaly detection algorithms against a custom CNN using OpenCV."
    ]
  }
];

export const skills = {
  "Languages": ["C/C++", "Python", "Bash", "VHDL", "SQL", "LaTeX"],
  "Frameworks & Libraries": ["TensorFlow", "PyTorch", "Keras", "LangGraph", "RAG", "Streamlit", "NumPy", "Pandas", "OpenCV"],
  "Tools & Platforms": ["Docker", "Kubernetes", "Kafka", "Redis", "MLflow", "Streamlit", "Git", "WSL", "Excel", "Jupyter Notebook"]
};