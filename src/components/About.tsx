import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Main Bio */}
          <div className="text-justify mb-12">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              I am a Machine Learning Engineer and Data Scientist dedicated to designing 
              intelligent, scalable solutions that address complex real-world challenges. 
              My work spans end-to-end machine learning pipelines, cloud-native deployment 
              on AWS, and advanced analytics grounded in rigorous statistical and mathematical principles.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With a Master's degree in Mathematics and Statistics and hands-on experience 
              in model development, optimization, and production deployment, I bring analytical 
              depth and practical engineering expertise. I have a keen interest in Artificial 
              Intelligence (AI) and its potential to transform industries, and I am committed 
              to continuous learning to remain at the forefront of this rapidly evolving field.
            </p>
          </div>

          {/* Research & Publications */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Research & Publications</h3>
            <a
              href="https://doi.org/10.3390/computation9030032"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 group"
            >
              <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">Peer-Reviewed Publication &middot; Computation (MDPI), Vol. 9, No. 3 &middot; March 2021</p>
              <p className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                Pharmacophore-Guided Identification of Natural Products as Potential Inhibitors of Mycobacterium ulcerans Cystathionine &gamma;-Synthase MetB
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Co-authored computational drug discovery research conducted at the Noguchi Memorial Institute for Medical Research, Ghana,
                identifying natural product inhibitor candidates for a key enzyme in the bacterium that causes Buruli ulcer using pharmacophore modeling
                and molecular screening.
              </p>
            </a>
          </div>

          {/* Professional Philosophy */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">My Professional Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg border border-blue-100">
                <div className="text-blue-600 text-lg font-semibold mb-3">Data-Driven</div>
                <p className="text-gray-600 text-sm">
                  Building solutions grounded in statistical rigor and empirical evidence
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg border border-green-100">
                <div className="text-green-600 text-lg font-semibold mb-3">Cloud-Native</div>
                <p className="text-gray-600 text-sm">
                  Architecting scalable systems with AWS for reliability and performance
                </p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg border border-purple-100">
                <div className="text-purple-600 text-lg font-semibold mb-3">End-to-End</div>
                <p className="text-gray-600 text-sm">
                  Delivering complete ML solutions from concept to production deployment
                </p>
              </div>
            </div>
          </div>

          {/* Career Focus */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Current Focus</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Advancing expertise in large-scale machine learning systems, MLOps practices, 
              and exploring cutting-edge AI research while delivering practical, impactful solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;