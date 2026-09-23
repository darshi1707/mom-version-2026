# 💗 Mom Version 2026

> A small digital collection of memories, photographs, love, and heartfelt wishes — created especially for my mother on her birthday.

## 🌸 About the Project

**Mom Version 2026** is a personal birthday website created as a digital memory book for my mother.

Instead of a traditional birthday card, this project brings together personal photographs, memories, messages, and a birthday wish in one interactive website.

The website begins with a private welcome screen and opens into a collection of memories and photographs, followed by a final birthday message.

Every part of the website is designed to feel warm, personal, simple, and elegant.

---

## ✨ Features

* 🔐 **Password-Protected Welcome Page**

  * A password is required before entering the main website.
  * Displays an error message when an incorrect password is entered.

* 💌 **Personal Birthday Letter**

  * A dedicated introduction expressing love and gratitude.
  * Designed as a personal letter from daughter to mother.

* 📸 **Memory Collection**

  * Multiple memory sections containing photographs and personal messages.
  * Photos and text alternate between left and right sides.
  * The layout can easily be extended with more memories.

* 🎂 **Birthday Wish**

  * A dedicated final section for the main birthday message.
  * Includes a personal signature.

* 📱 **Responsive Design**

  * Designed to work on desktop, laptop, tablet, and mobile screens.
  * Memory sections automatically adapt to smaller screens.

* 🌷 **Soft & Elegant Design**

  * Warm cream, pink, rose, and brown colour palette.
  * Decorative elements and typography give the website a personal memory-book feel.

---

## 🛠️ Technologies Used

| Technology       | Purpose                                          |
| ---------------- | ------------------------------------------------ |
| **HTML5**        | Website structure and content                    |
| **CSS3**         | Styling, layouts, colours, and responsive design |
| **JavaScript**   | Password functionality and page interaction      |
| **Google Fonts** | DM Serif Display and Quicksand                   |

---

## 📁 Project Structure

```text
mom-version-2026/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   └── [personal photos - not included in GitHub]
│
└── README.md
```

### File Description

**`index.html`**
Contains the structure of the website, including the welcome screen, memory sections, and final birthday message.

**`style.css`**
Contains the visual design, colours, typography, layouts, responsive styling, and memory-card positioning.

**`script.js`**
Handles the password functionality and switching between the welcome page and the memories page.

**`images/`**
Contains the personal photographs used by the website.

> 🔒 The photographs are personal and have intentionally **not been uploaded to the GitHub repository**.

---

## 🚀 Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/mom-version-2026.git
```

### 2. Open the project

Open the project folder in **VS Code**.

### 3. Add the personal images

Because the photographs are not stored in the GitHub repository, the website expects them locally inside:

```text
images/
```

For example:

```text
images/
├── photo1.jpeg
├── photo2.jpeg
├── photo3.jpeg
├── ...
└── photo29.jpeg
```

The filenames must match the filenames referenced in `index.html`.

For example:

```html
<img src="images/photo1.jpeg" alt="Me and my mother">
```

### 4. Run the website

The easiest option is to use the **Live Server** extension in VS Code.

Alternatively, open `index.html` directly in a browser.

---

## 🔑 Password

The website starts with a password screen before displaying the memories.

The password is configured inside:

```text
script.js
```

For example:

```javascript
const correctPassword = "YOUR_PASSWORD";
```

Replace it with your desired password.

> **Important:** This is a front-end password intended for a personal surprise website. It is not a security system for protecting sensitive information.

---

## 📸 Adding Memories

New memories can be added by duplicating an existing memory card inside `index.html`.

A memory follows this structure:

```html
<article class="memory-card">
  <div class="memory-photo image-placeholder">
    <img src="images/photo30.jpeg" alt="Memory description">
    <span>Photo 30</span>
  </div>

  <div class="memory-text">
    <p class="memory-number">29</p>
    <h3>Another beautiful memory</h3>
    <p>
      Write your personal memory here.
    </p>
  </div>
</article>
```

For the alternating layout, add the `reverse` class:

```html
<article class="memory-card reverse">
```

This automatically places the photograph on the opposite side.

---

## 🎨 Design

The website uses a warm and soft colour palette:

* 🌸 Soft Pink
* 🤍 Cream
* 🌹 Rose
* 🤎 Warm Brown
* ✨ White

The typography combines:

**DM Serif Display**
Used for large headings and titles.

**Quicksand**
Used for body text, labels, buttons, and smaller content.

Together, they create a soft handwritten-letter / memory-book atmosphere.

---

## 📱 Responsive Design

The website is designed for:

* 💻 Desktop
* 💻 Laptop
* 📱 Tablet
* 📱 Mobile

On smaller screens, the memory cards automatically switch from a two-column layout to a single-column layout.

The alternating desktop layout therefore remains easy to read on mobile devices as well.

---

## 🔒 Privacy

This project contains personal photographs and memories.

For privacy reasons:

* Personal photographs are **not uploaded to GitHub**.
* The `images/` folder is kept locally.
* Personal messages can be customized before sharing the project.
* The repository contains the website structure and styling, but not the private photographs.

If the project is deployed publicly, the images will need to be hosted somewhere accessible to the website.

---

## 💭 The Idea Behind It

A normal birthday card lasts for a moment.

A memory can last forever.

**Mom Version 2026** was created to turn a collection of photographs and memories into something that can be opened, explored, and revisited.

It is a small digital way of saying something much bigger:

> Thank you for being my safest place.

---

## ❤️ A Personal Note

This project isn't just a website.

It is a collection of moments, photographs, memories, and words dedicated to someone who has been there through every chapter of my life.

**Happy Birthday, Mum. ❤️**

---

## ⭐ Made With Love

**Made with HTML, CSS, JavaScript, memories, and a lot of love.**

### Mom Version 2026 · 2026
