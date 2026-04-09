import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'contact' | 'resume'>('contact');
  const contactEmail = 'emmanueldonkoh335@gmail.com';

  const handleContactSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hello Emmanuel,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  const handleResumeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const company = String(formData.get('company') || 'Not provided');
    const role = String(formData.get('role') || 'Not specified');
    const notes = String(formData.get('notes') || 'None');

    const subject = encodeURIComponent(`Resume Request from ${name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Hello Emmanuel,\n\nI would like to request your resume.\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nPosition of Interest: ${role}\nAdditional Notes: ${notes}\n`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Interested in working together? Reach out or request my resume below.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm border border-gray-200">
              <button
                type="button"
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'contact'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Send Message
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('resume')}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeTab === 'resume'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Request Resume
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-blue-600" aria-hidden="true">Location</div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">Texas, USA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-green-600" aria-hidden="true">Email</div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">{contactEmail}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-purple-600" aria-hidden="true">Phone</div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">+1 (936) 720-1908</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Requesting my resume helps me share the most relevant version for your role.
                </p>
              </div>
            </div>

            <div>
              {activeTab === 'contact' ? (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Send Message</h3>
                  <form className="space-y-6" onSubmit={handleContactSubmit}>
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Tell me about your project or opportunity..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      Send Message
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                      This opens your email app with a pre-filled message.
                    </p>
                  </form>
                </div>
              ) : (
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-6">Request My Resume</h3>
                  <form className="space-y-6" onSubmit={handleResumeSubmit}>
                    <div>
                      <label htmlFor="resume-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Name *
                      </label>
                      <input
                        id="resume-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="resume-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        id="resume-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your.company@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="resume-company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        id="resume-company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Where do you work?"
                      />
                    </div>

                    <div>
                      <label htmlFor="resume-role" className="block text-sm font-medium text-gray-700 mb-2">
                        Position of Interest
                      </label>
                      <select
                        id="resume-role"
                        name="role"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      >
                        <option value="">Select a role type</option>
                        <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                        <option value="Data Scientist">Data Scientist</option>
                        <option value="MLOps Engineer">MLOps Engineer</option>
                        <option value="Data Engineer">Data Engineer</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="resume-notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes (Optional)
                      </label>
                      <textarea
                        id="resume-notes"
                        name="notes"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Any specific skills or experience you're looking for?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Request Resume
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                      This opens your email app with your request details and I usually respond within 24 hours.
                    </p>
                  </form>
                </div>
              )}
            </div>
          </div>

          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-lg font-medium text-gray-800 mb-4">Connect with me</h4>
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/Penod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center space-x-2"
              >
                <span aria-hidden="true">Code</span>
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/emmanuel-donkoh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2"
              >
                <span aria-hidden="true">Profile</span>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
