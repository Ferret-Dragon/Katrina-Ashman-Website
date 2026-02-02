# Personal Portfolio Website

A clean, modern personal website built with HTML, CSS, and JavaScript. Designed to be easy to customize and maintain.

Visit website here: https://ferret-dragon.github.io/Katrina-Ashman-Website/index.html

## Features

- **Black background with white text** for a modern, professional look
- **Sharp, clean design** with no rounded edges
- **Easy to customize** color scheme and fonts via CSS variables
- **Fully responsive** design that works on all devices
- **Multiple sections**: Projects, About, Blog, Contact
- **Individual project pages** for detailed project information
- **Blog/Articles section** to share your thoughts and experiences

## Design Specifications

### Colors
- **Primary**: `#700000` (Dark Red) - Used for buttons and accents
- **Secondary**: `#0F4210` (Dark Green) - Used for links and highlights
- **Accent**: `#666` (Gray) - Used for body text
- **Background**: `#000000` (Black)
- **Text**: `#FFFFFF` (White)

### Fonts
- **Main Font**: Urbanist (sans-serif) - Used for headings and navigation
- **Secondary Font**: Times New Roman (serif) - Used for body text

### Style Details
- No rounded edges (sharp corners throughout)
- Images have 3px solid white borders
- Clean, minimalist aesthetic
- Easy to read and navigate

## Project Structure

```
Personal_Website/
├── index.html              # Homepage with all main sections
├── projects.html           # All projects listing
├── contact.html            # Contact page with form
├── css/
│   └── styles.css         # All styles with CSS variables
├── js/
│   └── main.js            # Interactive functionality
├── projects/
│   ├── project1.html      # Individual project page
│   ├── project2.html      # Individual project page
│   └── project3.html      # Individual project page
├── blog/
│   ├── article1.html      # Individual article
│   ├── article2.html      # Individual article
│   └── article3.html      # Individual article
├── images/                # Store all images here
└── README.md              # This file
```

## How to Customize

### 1. Update Your Information

**Homepage (index.html)**
- Replace "Your Name" with your actual name
- Update the "About Me" text in the hero section
- Modify project titles and descriptions
- Update the "Who is Me?" section content
- Add your contact information
- Update social media links (LinkedIn, GitHub)

### 2. Change Colors

Open `css/styles.css` and modify the CSS variables at the top:

```css
:root {
    --primary-color: #700000;        /* Change this */
    --secondary-color: #0F4210;      /* Change this */
    --accent-color: #666;            /* Change this */
    --bg-color: #000000;             /* Change this */
    --text-color: #ffffff;           /* Change this */
}
```

### 3. Change Fonts

To use different fonts, update the font variables in `css/styles.css`:

```css
:root {
    --font-main: 'Urbanist', sans-serif;
    --font-secondary: 'Times New Roman', serif;
}
```

Then update the Google Fonts link in your HTML files:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap" rel="stylesheet">
```

### 4. Add Images

Place your images in the `images/` folder and update the `src` attributes in your HTML:

- Profile picture: `images/profile-placeholder.jpg`
- Project images: `images/placeholder-project1.jpg`, etc.
- Blog images: `images/blog-placeholder.jpg`

### 5. Add Projects

To add a new project:

1. Create a new HTML file in the `projects/` folder (e.g., `project4.html`)
2. Copy the structure from `project1.html`
3. Update the content
4. Add a link to it in `index.html` (Recent Work section)
5. Add it to `projects.html` (All Projects section)

### 6. Add Blog Articles

To add a new article:

1. Create a new HTML file in the `blog/` folder (e.g., `article4.html`)
2. Copy the structure from `article1.html`
3. Update the content
4. Add a link to it in `index.html` (Articles section)

## Sections Overview

### Homepage (index.html)

1. **Navigation Bar**: Projects, Resume, Get in Touch
2. **Hero Section**: Large name and about me text
3. **Recent Work**: 3 most recent projects with "See More Projects" button
4. **Who is Me?**: Profile picture and bio with "Get in Touch" button
5. **Articles**: Blog posts/articles section
6. **Contact Information**: Name, email, school email, phone, address
7. **Footer**: Social media links (LinkedIn, GitHub)

### Projects Page (projects.html)

- Lists all projects with short descriptions
- Each project links to its own detailed page
- Back to home button

### Individual Project Pages (projects/*.html)

- Full project image
- Detailed project description
- Technologies used
- Challenges & solutions
- Results
- Links to live demo and GitHub
- Back to projects link

### Contact Page (contact.html)

- Contact information display
- Contact form (name, email, subject, message)
- Back to home button

### Blog Articles (blog/*.html)

- Full article content
- Publication date
- Properly formatted text with headings
- Back to articles link

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com/)
2. Drag and drop your project folder
3. Your site will be deployed automatically

### Vercel

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Deploy with one click

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Tips for Customization

1. **Keep it simple**: The design is intentionally clean. Don't overcomplicate it.
2. **Use high-quality images**: Your projects and profile picture should be professional.
3. **Update regularly**: Keep your projects and blog current.
4. **Test on mobile**: Always check how your changes look on mobile devices.
5. **Use the CSS variables**: They make global changes easy.

## Contact Form Setup

The contact form currently shows an alert. To make it functional:

1. **Use a form service** like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [EmailJS](https://www.emailjs.com/)
2. **Build a backend** with Node.js, Python, or PHP to handle form submissions
3. **Update the form handler** in `js/main.js`

## Need Help?

If you need to make changes:

1. All colors are in `css/styles.css` at the top (lines 4-11)
2. All fonts are in `css/styles.css` at the top (lines 13-15)
3. Spacing can be adjusted in the spacing variables (lines 17-23)
4. Border width is at line 26

## License

This website template is free to use for your personal portfolio. No attribution required.

---

**Built with simplicity and customization in mind.**
# Katrina-Ashman-Website
