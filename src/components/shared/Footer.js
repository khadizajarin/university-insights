const Footer = () => {
    return (
      <footer className="bg-blue-600 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center space-x-6 mb-4">
            <a href="#why-study" className="hover:underline">
              Why Study MBBS
            </a>
            <a href="#countries" className="hover:underline">
              Top Countries
            </a>
            <a href="/admissionprocess" className="hover:underline">
              Admission Process
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
          </div>
  
          {/* Copyright */}
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Study MBBS Abroad. All Rights
            Reserved.
          </p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  