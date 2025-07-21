# Gaming Store Website

## Overview
This project is a web-based gaming store that allows users to browse and purchase games online. It features a modern design and user-friendly interface, built using React and TypeScript.

## Project Structure
The project is organized as follows:

```
gaming-store-website
├── src
│   ├── components          # Reusable components for the application
│   │   ├── Header.tsx     # Header component with logo and navigation
│   │   ├── Footer.tsx     # Footer component with copyright and links
│   │   ├── Navbar.tsx     # Main navigation menu
│   │   └── Cart.tsx       # Shopping cart component
│   ├── pages               # Pages of the application
│   │   ├── Home.tsx       # Landing page showcasing featured games
│   │   ├── Store.tsx      # Page displaying available games
│   │   ├── About.tsx      # Information about the store
│   │   ├── Contact.tsx     # Contact form for inquiries
│   │   └── Cart.tsx       # Page displaying cart contents
│   ├── styles              # CSS styles for the application
│   │   └── main.css       # Main stylesheet
│   └── types               # TypeScript types and interfaces
│       └── index.ts       # Type definitions
├── public
│   └── index.html         # Main HTML file for the application
├── package.json           # npm configuration file
├── tsconfig.json          # TypeScript configuration file
└── README.md              # Project documentation
```

## Features
- User-friendly navigation through the Navbar component.
- Display of featured games on the Home page.
- Store page to showcase available games (to be populated).
- About page providing information about the store.
- Contact page with a form for user inquiries.
- Shopping cart functionality to manage selected items.

## Setup Instructions
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd gaming-store-website
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

## Usage
- Visit the Home page to see featured games.
- Navigate to the Store page to view available games (once added).
- Use the About page to learn more about the store.
- Fill out the Contact form for any inquiries.
- Manage your shopping cart using the Cart component.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License
This project is licensed under the MIT License.