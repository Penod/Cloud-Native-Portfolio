import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Graduate Teaching Assistant",
      company: "Stephen F. Austin State University",
      period: "Aug 2023 - Aug 2025",
      achievements: [
        "Presented research on Time Series Analysis and model selection, emphasizing reproducibility and data validation",
        "Graded students' assignments in statistics and probability",
        "Managed troubleshooting, installation, and maintenance of 50+ desktops and software for the university math department"
      ],
      technologies: ["Research", "Statistics", "Data Validation", "Academic Mentoring"]
    },
    {
      id: 2,
      title: "Data Analytics Consultant",
      company: "EmPen Data Consulting",
      period: "May 2024 - Jan 2026",
      achievements: [
        "Developed and deployed Tableau dashboards to track model performance and operational metrics, improving data-driven decision-making",
        "Led a team of four analysts in building enterprise BI solutions, aligning KPIs and reporting systems with operational objectives",
        "Collaborated with cross-functional stakeholders to define data requirements, ensuring data integrity and governance across projects",
        "Engaged 10+ business clients to discuss project requirements and deliverables"
      ],
      technologies: ["Tableau", "Business Intelligence", "Data Governance", "Team Leadership", "Stakeholder Management"]
    },
    {
      id: 3,
      title: "STEM Instructor",
      company: "Unigrant Ghana LTD",
      period: "Aug 2022 - April 2023",
      achievements: [
        "Designed structured lesson plans integrating analytics concepts to improve student comprehension and performance",
        "Taught remedial students Mathematics, Physics, and Chemistry",
        "Managed small groups of students and monitored their performance to plan future lessons",
        "Mentored learners to develop problem-solving and quantitative reasoning skills applicable to real-world analytics"
      ],
      technologies: ["Educational Strategy", "Curriculum Development", "Student Mentoring", "STEM Education"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "M.S., Mathematics and Statistics",
      school: "Stephen F. Austin State University",
      period: "2023 - 2025",
      note: "Jason Bulesek Scholarship (2023–2025)"
    },
    {
      id: 2,
      degree: "B.Sc., Biomedical Engineering",
      school: "University of Ghana",
      period: "2014 - 2018"
    }
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Work Experience */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <p className="text-xl text-gray-600">Professional journey and key achievements</p>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {index < experiences.length - 1 && (
                  <div className="absolute left-6 top-20 w-0.5 h-full bg-blue-200 hidden lg:block"></div>
                )}
                
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hidden lg:flex">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <h4 className="text-xl text-blue-600 font-semibold mb-2">{exp.company}</h4>
                    <p className="text-gray-600 mb-6 font-medium">{exp.period}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {exp.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-500 mr-3 mt-1 text-lg">•</span>
                          <span className="text-gray-700 text-lg leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-blue-600 font-semibold mb-3">{edu.school}</h4>
                <p className="text-gray-600 mb-3 font-medium">{edu.period}</p>
                {edu.note && (
                  <p className="text-green-600 font-semibold text-sm">{edu.note}</p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
