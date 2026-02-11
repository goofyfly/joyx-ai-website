import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user types
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    let isValid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      e.preventDefault(); // Prevent form submission if validation fails
    }
    // If valid, allow default behavior (mailto action)
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <span className="text-2xl font-extrabold tracking-tighter text-slate-900 mb-6 block">
               JOYX
             </span>
             <p className="text-slate-500 text-sm mb-6">
               Unlocking the potential of every frame. The leader in AI-driven in-video advertising.
             </p>
             <div className="flex space-x-4">
               <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-joyx-blue hover:text-white transition-colors">
                 <i className="fab fa-linkedin-in"></i>
               </a>
               <a href="#" className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 hover:bg-black hover:text-white transition-colors">
                 <i className="fab fa-medium-m"></i>
               </a>
             </div>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#about" className="hover:text-joyx-blue">About Us</a></li>
              <li><a href="#" className="hover:text-joyx-blue">Careers</a></li>
              <li><a href="#" className="hover:text-joyx-blue">Press</a></li>
            </ul>
          </div>
          
          <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h4 className="font-bold text-slate-900 mb-2">Ready to unlock revenue?</h4>
            <p className="text-slate-500 text-sm mb-4">Get in touch with our team.</p>
            
            <form 
              action="mailto:joybot666@gmail.com" 
              method="post" 
              encType="text/plain" 
              className="space-y-3"
              onSubmit={handleSubmit}
              noValidate
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="w-full">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name" 
                    className={`w-full px-4 py-2 rounded-lg bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm transition-colors`} 
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                </div>
                <div className="w-full">
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email" 
                    className={`w-full px-4 py-2 rounded-lg bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm transition-colors`} 
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                </div>
              </div>
              <div className="w-full">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message" 
                  rows={3} 
                  className={`w-full px-4 py-2 rounded-lg bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-200'} focus:outline-none focus:border-joyx-blue focus:ring-1 focus:ring-joyx-blue text-sm transition-colors`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>
              <button type="submit" className="w-full bg-slate-900 text-white py-2 rounded-lg font-semibold text-sm hover:bg-joyx-blue transition-colors">
                Send Request
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
          <p>© 2026 JOYBOT Holdings Ltd. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-600">Privacy Policy</a>
            <a href="#" className="hover:text-slate-600">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;