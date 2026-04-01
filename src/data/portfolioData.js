// src/data/portfolioData.js

export const heroData = {
  toRotate: ["MLOps & Embedded Systems Engineer", "Architecting intelligent systems from silicon to scale."],
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
      "Engineered custom asymmetric and multi-resolution loss functions to penalize false positives in low-SNR environments, improving speech quality metric by 10% and noise reduction quality by 13% compared to the baseline.",
      "Executed end-to-end Edge AI deployments from Python to bare-metal hardware via Data-path and Quantization-Aware Training (QAT), achieving 95% quantization retention and 30% higher speech quality compared to baseline.",
      "Architected a sub-150ms multi-threaded python inference engine, utilizing a thread-safe producer-consumer queues with 0% deadlock and active health monitoring dashboard for overflow and underflow detection.",
      "Optimized neural network bottlenecks by replacing standard GRUs with Dilated Convolutional Networks, achieving 1:1 speech power transparency retention and improving temporal context.",
      "Abstracted data buffering and pre-processing pipelines, decoupling ML architectures from low-level hardware constraints to enable rapid model retraining across diverse Bluetooth chipsets compatibility with the product.",
      "Prototyped an ultra-low latency (4ms) inference system, utilizing filter coefficients which were dynamically evolving for every 0.5ms (8 samples) driven by real-time neural network masks in a multi-data-path pipeline.",
      "Developed automated data augmentation pipelines, teaching the model to dynamically handle varying digital gain levels via magnitude independent loss function at natural logarithmic scale.",
      "Spearheaded technical integrations as the lead liaison between the client and silicon manufacturers, resolving OTA blockers and advancing solutions from technical POC to the commercial pricing stage."
    ]
  }
];

export const mainProjects = [
  {
    title: "Explainable Fraud Detection System",
    subtitle: "Self Project",
    points: [
      "Built an automated MLflow MLOps pipeline, training a 99.96% accuracy XGBoost classifier for imbalanced datasets.",
      "Created a Kubernetes microservices architecture to process Kafka event streams for real-time inference within 15ms.",
      "Engineered a ReAct agentic AI workflow via LangGraph, with automated risk reports based on extracted SHAP values.",
      "Executed a RAG pipeline utilizing LLM embeddings, for historical similarity searches monitored on a live Streamlit."
    ],
    githubLink: "https://github.com/TejasweeSulekh/Fraud-Detection-System",
    // liveLink: "https://your-live-demo.com"
  }
];

export const academicProjects = [
  {
    title: "GPT from Scratch",
    description: "Engineered a 10M parameter decoder-only transformer from scratch in PyTorch, implementing multi-head self-attention and residual pathways to train a generative model on the Tiny Shakespeare dataset."
  },
  {
    title: "Hierarchical Object Detection",
    description: "Led a 6-member team to build a multi-label dental X-ray detector using wavelet compression, fine-tuned Co-DETR, and Efficient-Net with Focal loss, increasing accuracy from 72.7% to 78.9%."
  },
  {
    title: "Chest X-Ray Classifier",
    description: "Trained EfficientNet and ResNet models on a 100k+ image dataset for 14-class disease classification, utilizing Haar wavelets for denoising and decentralized Federated Learning for client-server training."
  },
  {
    title: "Algorithmic Trading Predictor",
    description: "Developed a customizable LSTM network utilizing OHLCV time-series data to forecast short-term stock prices, integrating a simulated trading module for automated long/short strategy execution."
  },
  {
    title: "Computer Vision Fundamentals",
    description: "Applied Wavelet transforms, SIFT, and Wiener filtering for image restoration and feature extraction, benchmarking traditional CV algorithms against a custom CNN using OpenCV."
  }
];

export const skills = {
  "Languages": ["C/C++", "Python", "Bash", "VHDL", "SQL", "LaTeX"],
  "Frameworks & Libraries": ["TensorFlow", "PyTorch", "Keras", "LangGraph", "RAG", "Streamlit", "NumPy", "Pandas", "OpenCV"],
  "Tools & Platforms": ["Docker", "Kubernetes", "Kafka", "Redis", "MLflow", "Streamlit", "Git", "WSL", "Excel", "Jupyter Notebook"]
};