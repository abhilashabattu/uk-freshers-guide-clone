# UK Freshers Guide Clone

A React-based clone of the UK Freshers Guide website, designed to help university students discover events, connect with communities, and make the most of their freshers experience across the UK.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![React Router](https://img.shields.io/badge/React_Router-7.9.1-orange)
![License](https://img.shields.io/badge/License-MIT-green)

##  Demo

https://github.com/user-attachments/assets/130af35f-cfe5-4e9c-b5c2-0290b8404fda


##  Features

- **City Selection**: Browse freshers events by university city (46 cities supported)
- **Responsive Design**: Mobile-friendly interface using Bootstrap
- **Interactive Components**: Engaging UI with gradient backgrounds and hover effects
- **Multi-page Routing**: Navigate between Home, Events, Groups, Blogs, and Contact pages
- **Student Statistics**: Display impressive numbers about the student community
- **Feature Highlights**: Six key reasons to use the platform with visual icons
- **Floating Action Buttons**: Easy access to important actions

##  Technology Stack

- **Frontend Framework**: React 19.1.1
- **Routing**: React Router DOM 7.9.1
- **Build Tool**: Create React App
- **Styling**: CSS3 with Bootstrap classes
- **Icons**: Custom icon assets
- **Testing**: React Testing Library

##  Installation

Follow these steps to set up the project locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/uk-freshers-guide-clone.git
   cd uk-freshers-guide-clone

2. **Install dependencies**
   ```bash
   npm install

3. **Start the development server**
   ```bash
   npm start

4. **Open your browser**
   ```bash
   Navigate to http://localhost:3000 to view the application

## Project Structure

```bash
	src/
├── components/
│   ├── header/               # Navigation header
│   ├── Hero-Section/         # Main hero banner
│   ├── Student-Trusted/      # Statistics section
│   ├── Choose-University/    # City selection component
│   ├── Why-Choose/           # Feature highlights
│   ├── Bottom-Section/       # Additional content
│   ├── Footer/               # Page footer
│   └── FloatingIcons/        # Floating action buttons
├── pages/                    # Route components
│   ├── Home.jsx              # Homepage
│   ├── Events.jsx            # Events page
│   ├── Groups.jsx            # Groups page
│   ├── Blogs.jsx             # Blogs page
│   └── Contact.jsx           # Contact page
├── assets/                   # Images and icons
└── App.js                    # Main app component with routing
└── README.md


   
