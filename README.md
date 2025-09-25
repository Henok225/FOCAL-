
# 🌌 FOCAL Physics Club Website

A modern, responsive **static website** built with **React** and **Tailwind CSS** for the **FOCAL Physics Club** at Addis Ababa University.  
The site provides information about the club, its mission, history, team members, accomplishments, and ways to connect with the community.

---

## 🚀 Live Demo
[Visit the Website](https://your-deployment-link.com)  
*(Update this link once deployed on Netlify or Vercel)*

---

## 📖 About FOCAL
**FOCAL (Future of Physics Club at Addis Ababa University)** is a student-run physics club dedicated to:
- Inspiring curiosity about the universe.
- Promoting collaboration and innovation.
- Building a vibrant community of aspiring physicists.

The club hosts events, seminars, outreach programs, and collaborative projects to foster scientific growth and awareness.

---

## 🖥️ Features
- **Home Page:** Inspiring hero section with a tagline and call-to-action buttons.
- **About Page:** Club history, mission, vision, and goals.
- **Accomplishments Page:** Showcases past achievements, projects, and events.
- **Team Page:** Displays leadership team members with roles and photos.
- **Contact Page:** Contact form and static details for communication.
- **Optional Add-ons:**
  - FAQ Section
  - Gallery Section
  - Upcoming Events Section
  - Membership "Join Us" Page

---

## 📂 Project Structure
```

focal-website/
│
├── public/              # Static public files
│   └── images/          # Public images (optional)
│
└── src/
├── assets/          # Local images and assets
│   └── images/
│
├── components/      # Reusable UI components
│   ├── Navbar.jsx
│   └── Footer.jsx
│
├── pages/           # Website pages
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Accomplishments.jsx
│   ├── Team.jsx
│   └── Contact.jsx
│
├── App.jsx          # Main app component
└── main.jsx         # React entry point

````

---

## 🛠️ Tech Stack
- **Frontend Framework:** [React](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Routing:** [React Router](https://reactrouter.com/)
- **Deployment:** [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/)

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### **1. Clone the Repository**
```bash
git clone https://github.com/your-username/focal-website.git
cd focal-website
````

### **2. Install Dependencies**

```bash
npm install
```

### **3. Start the Development Server**

```bash
npm run dev
```

The site will be live at:

```
http://localhost:5173
```

---

## 📸 Dynamic Image Loading

To dynamically load all images from the `src/assets/images` folder without importing them one by one, the project uses **Vite's `import.meta.glob`**:

```jsx
const images = import.meta.glob('./assets/images/*.{png,jpg,jpeg,svg}', { eager: true });
const imageList = Object.values(images).map(mod => mod.default);
```

This makes it easy to manage and display large sets of images, such as for the gallery.

---

## 🌍 Deployment

### **Netlify**

1. Push your project to GitHub.
2. Go to [Netlify](https://www.netlify.com/).
3. Click **New Site → Import from Git**.
4. Select your repo and deploy.

### **Vercel**

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com/).
3. Import the repo and deploy.

---

## 🎨 Design Guidelines

* **Theme:** Dark, modern, science-inspired.
* **Primary Color:** `#0F172A` (Deep Space Navy)
* **Accent Color:** `#38BDF8` (Sky Blue)
* **Fonts:** Clean and minimal, using default system fonts.
* **Layout:** Rounded corners, soft shadows, and smooth hover animations.

---

## 📜 License

This project is licensed under the **MIT License**.
You are free to use, modify, and distribute this project with proper attribution.

---

## 🤝 Acknowledgements

Special thanks to:

* The **FOCAL Physics Club members** for their contributions.
* **Addis Ababa University Physics Department** for their support.
* [Tailwind CSS](https://tailwindcss.com/) and [React](https://reactjs.org/) for powering the site.

---

## 🧑‍💻 Author

**Henok Zena**

* 🌐 [Portfolio](https://henokzena.netlify.app) 
* 💼 [LinkedIn](https://www.linkedin.com/in/henok-zena-3b8b99260/)
* 🐙 [GitHub](https://github.com/Henok225)

```

