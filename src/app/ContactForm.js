"use client"

import React, { useState } from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    country: '',
    intake: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'A valid email is required';
    if (!formData.phone.trim() || !/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = 'A valid phone number is required';
    if (!formData.dob.trim()) newErrors.dob = 'Date of Birth is required';
    if (!formData.country.trim()) newErrors.country = 'Please select a country';
    if (!formData.intake.trim()) newErrors.intake = 'Please select a preferred intake';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Submitted Successfully:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        dob: '',
        country: '',
        intake: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <div className="py-16 bg-gradient-to-r from-[#F5EFE7] to-[#D8C4B6]">
      <div className="flex justify-center items-center">
        <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#3E5879] border-2 border-[#3E5879] rounded-md px-10 py-2 relative">
          Contact
        </h2>
      </div>
      <form
        className="max-w-4xl lg:mx-auto bg-[#F5EFE7] lg:p-8 p-2 shadow-lg rounded-lg space-y-6 mx-4"
        onSubmit={handleSubmit}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
          </div>

          <div className="flex flex-col gap-4">
            <input
              type="date"
              name="dob"
              placeholder="Your Date of Birth"
              value={formData.dob}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            />
            {errors.dob && <p className="text-red-500 text-sm">{errors.dob}</p>}

            <select
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            >
              <option value="">Country Preference</option>
              <option>Russia</option>
              <option>Uzbekistan</option>
              <option>Kazakhstan</option>
              <option>Philippines</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}

            <select
              name="intake"
              value={formData.intake}
              onChange={handleInputChange}
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            >
              <option value="">Preferred Intake</option>
              <option>Spring 2025</option>
              <option>Fall 2025</option>
            </select>
            {errors.intake && <p className="text-red-500 text-sm">{errors.intake}</p>}
          </div>
        </div>

        <textarea
          name="message"
          placeholder="Your Message or Specific Query (optional)"
          value={formData.message}
          onChange={handleInputChange}
          className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
          rows="4"
        />

        <button
          type="submit"
          className="w-full bg-[#F5EFE7] border-[#213555] border-2 text-[#213555] hover:text-[#F5EFE7] hover:bg-[#213555] font-semibold px-6 py-3 rounded-md focus:ring-0 focus:ring-[#213555] focus:outline-none transition-all duration-300 transform hover:scale-105"
        >
          <div className="flex flex-row justify-center items-center gap-2">
            Submit <DoneAllIcon />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

