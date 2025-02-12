// import Link from "next/link";

// const Navbar = () => {
//   return (
//     <nav className="bg-blue-600 text-white py-4 shadow-lg">
//       <div className="max-w-6xl mx-auto px-4 flex flex-col justify-between items-center">
//         {/* Logo */}
//         <Link href="/">
//           <p className="text-2xl font-bold">Study MBBS Abroad</p>
//         </Link>
//         <div className="hidden lg:flex lg:flex-col space-x-6">
//           <Link href="/#why-study">
//             <p className="hover:text-gray-200">Why Study MBBS</p>
//           </Link>
//           <Link href="/#countries">
//             <p className="hover:text-gray-200">Top Countries</p>
//           </Link>
//           <Link href="/admissionprocess">
//             <p className="hover:text-gray-200">Admission Process</p>
//           </Link>
//           <Link href="/#contact">
//             <p className="hover:text-gray-200">Contact Us</p>
//           </Link>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             id="menu-button"
//             className="text-white focus:outline-none focus:ring-2 focus:ring-white"
//           >
//             <svg
//               className="w-6 h-6"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16m-7 6h7"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = [
  'HOURS & LOCATION',
  'MENU',
  'RESTAURANT',
  'WINE-BAR',
  'PRIVATE-DINING',
  'GALLERY',
];

function Navbar() {
  return (
    <AppBar position="static" className="bg-[#0B1519] h-[4.8175rem] flex justify-center items-center">
      <Container maxWidth="" className="flex justify-center items-center">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: { xs: 'row', md: 'row' }, // Stack buttons vertically on mobile
              flexWrap: 'wrap'
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={page}
                sx={{
                  color: '#BCA263',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0.25rem 1.5rem',
                  height: 'auto',
                  lineHeight: '1rem',
                  fontSize: { xs: '1rem', md: '1.375rem' }, 
                  borderRight: {
                    md: index !== pages.length - 1 ? '3.5px solid' : 'none',
                  },
                  borderRadius: 0,
                //   fontFamily: ubuntu.style.fontFamily,
                }}
                className="text-[#BCA263] tracking-widest"
                style={{ fontWeight: '500' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;