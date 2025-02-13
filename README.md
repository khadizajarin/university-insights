# Study MBBS Abroad Landing Page

This project is a responsive landing page for "Study MBBS Abroad," designed as part of a front-end development internship application at University Insights. The site highlights the benefits of studying MBBS abroad and includes several interactive sections like a hero banner, a swiper carousel for benefits, a grid of top countries, a detailed admission process section, and a responsive contact form.

---

## Features

- **Hero Section**  
  An engaging banner with a clear call-to-action ("Apply Now"), featuring Material UI icons, gradient backgrounds, and responsive design.

- **Benefits Section**  
  A dynamic Swiper carousel showcasing the benefits of studying MBBS abroad, equipped with smooth auto-swipe, looping functionality, and responsive settings.

- **Top Countries Section**  
  A visually appealing grid layout with hover effects, displaying a curated list of top countries for MBBS studies.

- **Admission Process Section**  
  A step-by-step guide explaining the admission process and eligibility criteria, presented through interactive card layouts for enhanced user experience.

- **Contact Form**  
  - Fully responsive with a two-column layout on larger screens.  
  - Fields include Name, Email, Phone, Date of Birth, Country Preference, Preferred Intake, and a Message box.  
  - Custom autofill styles aligned with the site’s design system for a consistent look and feel.

- **Responsive and SEO-Optimized**  
  The design is mobile-first and adapts seamlessly to various screen sizes. Semantic HTML practices have been used to enhance SEO.

- **Integrated Social Media and Tracking Scripts**  
  Open Graph (OG) metadata, Twitter cards, and placeholder tracking scripts for testing analytics integration.

---

## Tech Stack

- **Next.js:** Framework for building the static landing page.
- **React:** For component-based UI development.
- **Tailwind CSS:** For fast, customizable styling.
- **Swiper:** To implement the auto-swiping carousel.
- **Material UI (MUI):** For icons and additional UI elements.
- **Framer Motion (optional):** For adding smooth animations.

---

## Live Demo

[View Live Demo](https://study-mbbs-abroad-insights.netlify.app/)

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khadizajarin/university-insights
   ```

2. Navigate into the project directory:
   ```bash
   cd study-mbbs-abroad
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
study-mbbs-abroad/
├── components/
│   ├── HeroSection.jsx           # Landing page hero section with CTA
│   ├── BenefitsCarousel.jsx      # Swiper carousel for showcasing benefits
│   ├── TopCountries.jsx          # Grid section listing top MBBS study countries
│   ├── AdmissionProcess.jsx      # Step-by-step guide and eligibility criteria
│   ├── ContactForm.jsx           # Responsive contact form with a two-column layout
├── pages/
│   ├── index.js                  # Home page integrating all components
│   ├── admissionprocess.js       # Dedicated page for the admission process
│   └── ...                       # Other pages (if any)
├── public/
│   ├── images/                   # Static assets such as images and icons
├── styles/
│   ├── globals.css               # Global styles and Tailwind CSS imports
│   └── tailwind.config.js        # Tailwind configuration file
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project documentation (this file)
```

---

## Customization and Configuration

- **Tailwind CSS:** Customize colors, fonts, and responsive breakpoints in `tailwind.config.js` and `globals.css`.
- **Swiper Carousel:** Adjust carousel settings (e.g., auto-swipe delay, loop, breakpoints) in `BenefitsCarousel.jsx`.
- **Material UI Icons:** Replace or update icons by importing components from MUI.
- **SEO & Analytics:** Enhance meta tags and integrate tracking scripts in Next.js's `_document.js` or `Head` components.

---

## Deployment

This project is deployable on platforms like Vercel or Netlify. For example, to deploy on Vercel:
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and import your repository.
3. Follow the prompts to deploy your project.

---

## Future Enhancements

- **Backend Integration:** Connect the contact form to a backend API for storing user submissions.
- **Animations:** Improve user experience with additional animations using Framer Motion.
- **Accessibility:** Further refine accessibility with ARIA roles, labels, and keyboard navigation support.
- **Multilingual Support:** Add translations to cater to a global audience.

---

## Author

- **Khadiza Jarin Roza**  
  - [GitHub](https://github.com/khadizajarin)  
  - [LinkedIn](https://www.linkedin.com/in/khadiza-jarin-roza/)

---

## License

This project is licensed under the [MIT License](LICENSE).  
