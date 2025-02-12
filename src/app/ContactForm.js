const ContactForm = () => {
    return (
      <div className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full p-3 border rounded"
            required
          />
          <select className="w-full p-3 border rounded">
            <option value="">Country Preference</option>
            <option>Russia</option>
            <option>Uzbekistan</option>
            {/* Add more options */}
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;
  