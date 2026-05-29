# Adiosa Personal Portfolio Website

A premium, lightweight, and modern multi-page portfolio website built for a solo developer or agency. This project is built line-by-line from scratch, utilizing local static assets to guarantee lightning-fast load times even without an active internet connection.

## 🚀 Features

*   **Premium Dribbble Look:** A clean, grid-based workspace design with smooth hover zoom animations and floating shadow lifts.
*   **Fully Responsive Layout:** Optimized using custom Flexbox systems and Bootstrap 5 utilities to fit perfectly on mobile screens, tablets, and laptops.
*   **Interactive Multi-Page Workspace:** Clean navigation structural pathways across a 4-page ecosystem (`index.html`, `services.html`, `portfolio.html`, `contact.html`).
*   **Direct WhatsApp Routing System:** Custom JavaScript logic that captures contact form data and routes clients straight to WhatsApp with pre-filled project descriptions.
*   **Offline-Ready Components:** Bootstrap CSS and JS scripts are saved locally inside the static directory to allow quick local execution.

## 📁 Project Directory Structure

Ensure your project file architecture matches this layout exactly:

```text
📁 My-Project-Folder/
│── 📄 index.html        # Main landing homepage
│── 📄 services.html     # Pricing and service offerings
│── 📄 portfolio.html    # Centered Dribbble-style work gallery
│── 📄 contact.html      # Interactive click-to-chat contact page
│── 📄 style.css         # Main custom layout & animation styles
│── 📄 script.js        # Core form handling & routing logic
└── 📁 static/
    ├── 📁 css/
    │   └── 📄 bootstrap.min.css         # Local offline Bootstrap layout file
    ├── 📁 js/
    │   └── 📄 bootstrap.bundle.min.js  # Local offline Bootstrap scripts file
    └── 📁 image/
        ├── 🖼️ web.jpg                   # Project 1 card thumbnail
        ├── 🖼️ ecom.jpg                  # Project 2 card thumbnail
        └── 🖼️ mobi.jpg                  # Project 3 card thumbnail
```

## 🛠️ Setup and Installation Instructions

1.  Download or clone this project folder to your local machine.
2.  Open the folder using any text editor (like VS Code, Notepad++, or Sublime Text).
3.  Launch `index.html` inside any web browser (Chrome, Safari, Firefox, or Edge) to preview the live environment locally.

## 🔧 Production Customization Guide

### Updating the WhatsApp Target Number
To change the recipient phone number to your active mobile wallet line, open `script.js` and locate line 21:
```javascript
const myWhatsAppNumber = "256772482481"; // Keep country code 256, omit the (+) sign
```
Simply replace those digits with your personal line.

### Changing Image Assets
To replace the default grid graphics, swap out the file assets inside `static/image/` with your own images. Keep the exact names (`web.jpg`, `ecom.jpg`, `mobi.jpg`) and extensions in lowercase.

## 📝 Project Details
*   **Technologies Used:** HTML5, CSS3 (Flexbox & Grid), Bootstrap v5.3, Vanilla JavaScript.
*   **Developer Identity:** Adiosa Production System.
*   **License:** Open Source MIT Standard License.

## 👤 Project Owner Profile
*   **Lead Engineer:**  Adiao Sarah ,Adiosa Production Developer
*   **Location:** Kampala, Uganda
*   **GitHub Workspace Profile:**https://github.com/Adiosa21/project-portfolio
*   **Contact Information:** Reach out directly through the integrated WhatsApp web form embedded on the contact page layout workspace.
