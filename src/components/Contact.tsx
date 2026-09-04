import React, { useState } from 'react';

const FORM_ENDPOINT = 'https://formspree.io/f/xnpqzoqb';

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error';

const Contact: React.FC = () => {
  const contactEmail = 'emmanueldonkoh335@gmail.com';
  const [status, setStatus] = useState<SubmitStatus>('idle');

  const handleResumeSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get('name') || '');
    formData.append('_subject', `Resume Request from ${name || 'Website Visitor'}`);

    setStatus('submitting');

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black rounded-2xl p-8 mb-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Interested in working together? Request my resume below or reach out directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-blue-600" aria-hidden="true">📍</div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">Texas, USA</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-green-600" aria-hidden="true">📧</div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">{contactEmail}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200">
                  <div className="text-purple-600" aria-hidden="true">📱</div>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Request My Resume</h3>

              {status === 'success' ? (
                <div className="p-6 bg-green-50 border border-green-200 rounded-lg text-center">
                  <p className="text-green-800 font-medium mb-2">Thanks — your request went through!</p>
                  <p className="text-sm text-green-700">I usually respond within 24 hours.</p>
                  <button
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-4 text-sm text-green-800 underline hover:text-green-900"
                  >
                    Send another request
                  </button>
                </div>
              ) : (
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

                  {/* Honeypot field to deter spam bots; hidden from real visitors */}
                  <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                  {status === 'error' && (
                    <p className="text-sm text-red-600" role="alert">
                      Something went wrong sending your request. Please try again, or email me directly at {contactEmail}.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'submitting' ? 'Sending...' : 'Request Resume'}
                  </button>
                  <p className="text-sm text-gray-500 text-center">
                    I usually respond within 24 hours.
                  </p>
                </form>
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
