"use client"
import DoneAllIcon from '@mui/icons-material/DoneAll';

const ContactForm = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-[#F5EFE7] to-[#D8C4B6]">
      <h2 className="lg:text-3xl text-xl font-bold text-center lg:mb-16 mb-10 lg:mt-10 text-[#3E5879] border-2 border-[#3E5879] lg:mx-[40rem] mx-[2rem] rounded-md lg:p-4 p-2 relative">
        Contact
      </h2>
      <form className="max-w-4xl lg:mx-auto bg-[#F5EFE7] lg:p-8 p-2 shadow-lg rounded-lg space-y-6 mx-4">
        {/* Grid Container for Two Columns */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">

          <div className="flex flex-col gap-4">
            {/* Name Input */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
              required
            />

            {/* Email Input */}
            <input
              type="email"
              placeholder="Your Email"
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
              required
            />
          </div>

          <div className="flex flex-col gap-4">
            {/* Date of Birth Input */}
            <input
  type="date"
  placeholder="Your Date of Birth"
  className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition custom-date"
/>

<style jsx>{`
  input[type="date"]::-webkit-datetime-edit,
  input[type="date"]::-webkit-inner-spin-button,
  input[type="date"]::-webkit-clear-button {
    color: #d8c4b6; /* Match your desired text color */
    background-color: transparent; /* Match the input background color */
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    color: #d8c4b6; /* Adjust calendar icon color */
  }
`}</style>



            {/* Country Preference Select */}
            <select
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
              required
            >
              <option value="">Country Preference</option>
              <option>Russia</option>
              <option>Uzbekistan</option>
              <option>Kazakhstan</option>
              <option>Philippines</option>
            </select>

            {/* Preferred Intake Select */}
            <select
              className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
              required
            >
              <option value="">Preferred Intake</option>
              <option>Spring 2025</option>
              <option>Fall 2025</option>
            </select>
          </div>
        </div>
          {/* Message Input */}
          <textarea
            placeholder="Your Message or Specific Query (optional)"
            className="w-full placeholder:text-[#D8C4B6] p-4 border bg-[#3E5879] text-[#D8C4B6] rounded-lg shadow-inner focus:outline-none focus:ring-0 focus:ring-[#213555] transition"
            rows="4"
          />
        

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#F5EFE7] border-[#213555] border-2 text-[#213555] font-semibold px-6 py-3 rounded-md hover:bg-opacity-60 hover:scale-1.5 focus:ring-0 focus:ring-[#213555] focus:outline-none"
        >
          <div className='flex flex-row justify-center items-center gap-2'>
          Submit <DoneAllIcon></DoneAllIcon>
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
