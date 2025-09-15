import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // handle submission
  };

  return (
    <div className="bg-[#1e2528] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
            <h2
            className="text-4xl md:text-6xl font-extrabold mb-6
                      bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 
                      bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(56,189,248,0.6)]
                      tracking-wide
                      transition-all duration-700
                      hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(56,189,248,0.8)]"
          >
            CONTACT ME
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I’d love to connect! Feel free to reach out about projects,
            collaborations, or just to say hello.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* First Name & Last Name Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {["firstName", "lastName"].map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-sm font-medium mb-2">
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>

                    {/* input visual wrapper — ONLY this box is animated */}
                    <div className="relative group">
                      {/* base box looks like previous input */}
                      <div className="relative bg-gray-700 border border-gray-600 rounded-md">
                        {/* animated fill (only covers the input box area) */}
                        <div
                          className="absolute inset-0 bg-gray-600 scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 
                                      origin-left transition-transform duration-300 ease-out rounded-md pointer-events-none"
                        />
                        {/* actual input - transparent so fill shows */}
                        <input
                          id={field}
                          name={field}
                          value={formData[field]}
                          onChange={handleInputChange}
                          placeholder={field === "firstName" ? "Juan" : "Dela Cruz"}
                          className="relative z-10 w-full px-4 py-3 bg-transparent rounded-md text-white placeholder-gray-400 
                                     focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Email & Phone Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { id: "email", type: "email", label: "Your email", placeholder: "juandelacruz@gmail.com" },
                  { id: "phone", type: "tel", label: "Phone Number", placeholder: "+63 912 345 6789" },
                ].map((input) => (
                  <div key={input.id}>
                    <label htmlFor={input.id} className="block text-sm font-medium mb-2">
                      {input.label}
                    </label>

                    <div className="relative group">
                      <div className="relative bg-gray-700 border border-gray-600 rounded-md">
                        <div
                          className="absolute inset-0 bg-gray-600 scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 
                                      origin-left transition-transform duration-300 ease-out rounded-md pointer-events-none"
                        />
                        <input
                          id={input.id}
                          name={input.id}
                          type={input.type}
                          value={formData[input.id]}
                          onChange={handleInputChange}
                          placeholder={input.placeholder}
                          className="relative z-10 w-full px-4 py-3 bg-transparent rounded-md text-white placeholder-gray-400 
                                     focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Your message
                </label>

                <div className="relative group">
                  <div className="relative bg-gray-700 border border-gray-600 rounded-md">
                    <div
                      className="absolute inset-0 bg-gray-600 scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 
                                  origin-left transition-transform duration-300 ease-out rounded-md pointer-events-none"
                    />
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Leave a comment..."
                      className="relative z-10 w-full px-4 py-3 bg-transparent rounded-md text-white placeholder-gray-400 
                                 resize-vertical focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Sidebar (kept as you had it) */}
          <div className="lg:col-span-1 space-y-8">
            {/* Socials */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 p-2 rounded-md mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V10a2 2 0 012-2h2m5-6h.01M12 4v4m0 0h4m-4 0H8" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Socials</h3>
              </div>

              <div className="space-y-4 text-gray-300">
                <a href="https://www.facebook.com/blipbloppppp" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.676 0H1.326C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.918.001c-1.505 0-1.796.716-1.796 1.765v2.315h3.588l-.467 3.622h-3.121V24h6.116C23.406 24 24 23.407 24 22.674V1.326C24 .593 23.406 0 22.676 0z" />
                  </svg>
                  <span>https://www.facebook.com/blipbloppppp</span>
                </a>

                <a href="https://www.instagram.com/axell_yuh/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-pink-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.5 2h9A5.5 5.5 0 0122 7.5v9a5.5 5.5 0 01-5.5 5.5h-9A5.5 5.5 0 012 16.5v-9A5.5 5.5 0 017.5 2zm0 2A3.5 3.5 0 004 7.5v9A3.5 3.5 0 007.5 20h9a3.5 3.5 0 003.5-3.5v-9A3.5 3.5 0 0016.5 4h-9zm4.5 3a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm5.25-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
                  </svg>
                  <span>@axell_yuh</span>
                </a>

                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-sky-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9.993 15.674l-.395 5.564c.563 0 .806-.242 1.096-.532l2.635-2.494 5.46 3.992c1.001.551 1.707.262 1.977-.925l3.58-16.765h.001c.317-1.477-.533-2.053-1.515-1.692L1.693 9.678c-1.446.562-1.426 1.366-.246 1.735l5.571 1.739L19.176 6.13c.563-.375 1.073-.167.652.208"/>
                  </svg>
                  <span>t.me/meowigop</span>
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 p-2 rounded-md mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <div className="text-gray-300 space-y-1">
                <p>Iloilo City, Philippines</p>
                <p>Open for remote work & collaborations</p>
              </div>
            </div>

            {/* Get in Touch */}
            <div className="bg-gray-700 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 p-2 rounded-md mr-3">
                  <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">Get in Touch</h3>
              </div>
              <div className="text-gray-300 space-y-2">
                <p>Email me for collaborations or projects:</p>
                <a href="mailto:nuqui.axeljohn0815@gmail.com" className="text-blue-400 hover:text-blue-300 font-medium">
                  nuqui.axeljohn0815@gmail.com
                </a>
                <p>Or call me:</p>
                <a href="tel:+639679186232 | TM" className="text-blue-400 hover:text-blue-300 font-medium">
                  +63 912 345 6789
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
