import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-300 transition-colors">
            ← Back to Workshops
          </Link>
          <h1 className="text-3xl font-black">Workshop Registration</h1>
        </div>
      </header>

      {/* Registration Form */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-black text-indigo-900 mb-4">Register Now</h2>
            <p className="text-gray-600 text-lg">Fill out the form to secure your spot in our medical workshops</p>
          </div>

          <form className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-indigo-900 mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-indigo-900 mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Phone Number</label>
              <input 
                type="tel" 
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="+213 XXX XXX XXX"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Select Workshop</label>
              <select className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                <option value="">Choose a workshop...</option>
                <option value="ai-diagnosis">Artificial Intelligence in Medical Diagnosis</option>
                <option value="surgical-robotics">Surgical Robotics with Da Vinci</option>
                <option value="telemedicine">Telemedicine and Connected Health</option>
                <option value="big-data">Big Data in Medical Research</option>
                <option value="cybersecurity">Cybersecurity of Medical Systems</option>
                <option value="3d-printing">3D Printing in Medical Prosthetics</option>
                <option value="vr-training">Virtual Reality in Medical Training</option>
                <option value="blockchain">Blockchain in Medical Records Management</option>
                <option value="medical-drones">Medical Drones and Emergency Delivery</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Institution/University</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                placeholder="Your institution name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Academic Level</label>
              <select className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                <option value="">Select your level...</option>
                <option value="bachelor">Bachelor Student</option>
                <option value="master">Master Student</option>
                <option value="phd">PhD Student</option>
                <option value="researcher">Researcher</option>
                <option value="professor">Professor</option>
                <option value="professional">Healthcare Professional</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-indigo-900 mb-2">Why are you interested in this workshop?</label>
              <textarea 
                rows="4"
                className="w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your motivation and expectations..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button 
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-indigo-800 text-white font-bold text-lg rounded-xl transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Complete Registration
              </button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 mb-2">Need help? Contact us:</p>
            <p className="text-indigo-600 font-semibold">workshops@univ-constantine2.dz</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;

