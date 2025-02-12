import Link from "next/link";

const Footer = () => {
    return (
      <footer className="bg-[#213555] text-[#D8C4B6]  py-4">
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Footer Links */}
          <div className="grid lg:grid-cols-4 grid-cols-2 justify-center lg:px-32 mb-4">
            <Link href="#why-study" className="hover:underline">
              Why Abroad    
            </Link>
            <Link href="#countries" className="hover:underline">
              Top Countries
            </Link>
            <Link href="#admissionprocess" className="hover:underline">
              Admission Process
            </Link>
            <Link href="#contact" className="hover:underline">
              Contact Us
            </Link>
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
  