import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Cloud-Native Portfolio Platform',
      date: 'AWS Infrastructure | 2025',
      highlights: [
        'Deployed on AWS S3 with CloudFront CDN for global low-latency delivery',
        'Implemented CI/CD pipeline with GitHub Actions for automated deployments',
        'Configured custom domain with Route 53 and SSL via AWS Certificate Manager',
        'Optimized costs using S3 Intelligent-Tiering and CloudFront caching policies',
        'Implemented security best practices with IAM roles and bucket policies',
        'Set up monitoring and alerts with CloudWatch for performance tracking'
      ],
      technologies: ['S3', 'CloudFront', 'Route 53', 'ACM', 'CloudWatch', 'CI/CD', 'Terraform'],
      links: {
        github: 'https://github.com/Penod/portfolio-website',
        demo: 'https://emmanueldonkoh.com'
      }
    },
    {
      id: 2,
      title: 'RAG Chatbot on Amazon Bedrock',
      date: 'AWS AI/ML | 2024',
      highlights: [
        'Architected RAG pipeline with Llama 3.3 and Titan Embeddings',
        'Built vector retrieval with OpenSearch Serverless and S3 integration',
        'Implemented document chunking with metadata and citation tracking',
        'Optimized prompts for grounded responses'
      ],
      technologies: ['Amazon Bedrock', 'OpenSearch', 'Llama 3.3', 'Titan', 'S3', 'RAG'],
      links: {
        github: 'https://github.com/Penod/Set-Up-a-RAG-ChatBot-in-Bedrock',
        demo: null
      }
    },
    {
      id: 3,
      title: 'Mobile Price Classification',
      date: 'ML Engineering | 2024',
      highlights: [
        'End-to-end ML pipeline on Amazon SageMaker',
        'Random Forest classifier for price prediction',
        'Data preprocessing with pandas',
        'S3 integration for training and test datasets'
      ],
      technologies: ['SageMaker', 'Random Forest', 'Python', 'Pandas', 'S3', 'MLOps'],
      links: {
        github: 'https://github.com/Penod/mobile-price-classification-sagemaker',
        demo: null
      }
    },
    {
      id: 4,
      title: 'Sales Analytics Dashboard',
      date: 'Business Intelligence | 2023',
      highlights: [
        'Interactive Tableau dashboards for YoY performance',
        'KPI tracking and subcategory trend visualization',
        'Customer segmentation analysis',
        'Data-driven business growth optimization'
      ],
      technologies: ['Tableau', 'Business Intelligence', 'Data Viz', 'KPIs', 'Analytics'],
      links: {
        github: null,
        demo: 'https://public.tableau.com/shared/R8PPZYM6J?:display_count=n&:origin=viz_share_link'
      }
    },
    {
      id: 5,
      title: 'Credit Card Customer Segmentation',
      date: 'Machine Learning | 2024',
      highlights: [
        'K-Means clustering for customer behavior analysis',
        'Demographic and spending pattern segmentation',
        'Actionable insights for targeted marketing',
        'Customer profile visualization and interpretation'
      ],
      technologies: ['Python', 'K-Means', 'Clustering', 'Scikit-learn', 'Data Analysis'],
      links: {
        github: 'https://github.com/Penod/Credit_Card_Customer_Segmentation',
        demo: null
      }
    },
    {
      id: 6,
      title: 'Sales Data Pipeline (Case Study)',
      date: 'Data Engineering | 2026',
      highlights: [
        'Designed an end-to-end ETL workflow that converts messy sales records into analysis-ready data',
        'Built a 3-step Apache Airflow DAG: generate_data -> load_raw -> clean_data',
        'Loaded and validated raw and clean datasets in PostgreSQL using SQL quality checks',
        'Containerized infrastructure with Docker Compose for consistent local execution',
        'Documented revenue-by-category analysis and DAG success evidence as reproducible deliverables'
      ],
      technologies: ['Python', 'PostgreSQL', 'Apache Airflow', 'Docker Compose', 'SQL', 'uv'],
      links: {
        github: 'https://github.com/Penod/sales_data_pipeline',
        demo: null
      }
    }
  ];

  const getYear = (dateLabel: string): number => {
    const match = dateLabel.match(/(20\d{2})/);
    return match ? Number(match[1]) : 0;
  };

  const sortedProjects = [...projects].sort((a, b) => getYear(b.date) - getYear(a.date));

  return (
    <section id="projects" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600">Showcasing real-world applications of ML, data analytics, and AWS-powered AI solutions</p>
        </div>

        <div className="grid gap-8 lg:gap-12">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">{project.title}</h3>
                  <span className="text-blue-600 font-semibold mt-2 lg:mt-0">{project.date}</span>
                </div>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 text-sm flex items-center gap-2"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
