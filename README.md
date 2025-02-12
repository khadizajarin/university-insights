
# Study MBBS Abroad Landing Page

This project is a responsive landing page for "Study MBBS Abroad" designed for a front-end development intern application at University Insights. The site highlights the benefits of studying MBBS abroad and includes several interactive sections such as a hero banner, a swiper carousel for benefits, a grid of top countries, an admission process section, and a responsive contact form.

## Features

- Hero Section:  
  An engaging banner with a clear call-to-action ("Apply Now") featuring Material UI icons and gradient backgrounds.

- Benefits Section:  
  A dynamic Swiper carousel showcasing the benefits of studying MBBS abroad with smooth auto-swipe, looping, and responsive settings.

- Top Countries Section:  
  A grid layout with hover effects that displays a list of top countries for MBBS studies.

- Admission Process Section:  
  A detailed, step-by-step guide explaining the admission process and eligibility criteria with interactive card layouts.

- Contact Form:  
  A fully responsive form with a two-column layout on larger screens, including fields such as Name, Email, Phone, Date of Birth, Country Preference, Preferred Intake, and a Message box.  
  Custom autofill styles have been applied to ensure consistency with the site’s color scheme.

- Responsive & SEO-Optimized:  
  The design is mobile-first and adapts to various screen sizes, while the code follows semantic HTML practices to help with SEO.

## Tech Stack

- Next.js: Framework for building the static landing page.
- React: For component-based UI development.
- Tailwind CSS: For rapid and customizable styling.
- Swiper: For implementing the auto-swiping carousel.
- Material UI (MUI): For icons and additional UI elements.
- Framer Motion (optional): For adding smooth animations.

## Live Demo

[View Live Demo](https://study-mbbs-abroad-insights.netlify.app/)

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

## Project Structure

```
study-mbbs-abroad/
├── components/
│   ├── HeroSection.jsx           # Landing page hero section with CTA
│   ├── TopCountries.jsx          # Grid section listing top MBBS study countries
│   ├── AdmissionProcess.jsx      # Step-by-step guide and eligibility criteria
│   ├── ContactForm.jsx           # Responsive contact form with two-column layout
│   ├── SwiperComponent.jsx       # Swiper carousel for showcasing benefits
├── pages/
│   ├── index.js                  # Home page integrating all components
│   ├── admissionprocess.js       # Dedicated page for the admission process section
│   └── ...                       # Other pages (if any)
├── public/
│   ├── images/                   # Static assets such as images and icons
├── styles/
│   ├── globals.css               # Global styles and Tailwind CSS imports
│   └── tailwind.config.js        # Tailwind configuration file
├── package.json                  # Project metadata and dependencies
└── README.md                     # Project documentation (this file)
```

## Customization and Configuration

- Tailwind CSS: Customize colors, fonts, and responsive breakpoints in `tailwind.config.js` and `globals.css`.
- Swiper Carousel: Modify the carousel settings (e.g., auto-swipe delay, loop, breakpoints) in `SwiperComponent.jsx`.
- Material UI Icons: Replace or update icons by importing different components from MUI.
- SEO & Analytics: Enhance meta tags and integrate tracking scripts in Next.js's `_document.js` or `Head` components.

## Deployment

This project can be deployed to platforms like Vercel or Netlify. For example, with Vercel:
1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and import your GitHub repository.
3. Follow the prompts to deploy your project.

## Future Enhancements

- Backend Integration: Connect the contact form to a backend API for storing leads.
- Additional Animations: Enhance UI animations using Framer Motion.
- Accessibility Improvements: Continue refining accessibility (ARIA roles, labels, etc.).
- Multilingual Support: Consider adding translations for a global audience.

## Author

- Your Name  
  [GitHub](https://github.com/khadizajarin)  
  [LinkedIn](https://www.linkedin.com/in/khadiza-jarin-roza/)

## License

This project is licensed under the [MIT License](LICENSE).
