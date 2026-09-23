# 💗 For My Wonderful Mother

> A small digital collection of memories, photographs, love, and heartfelt wishes — created especially for my mother on her birthday.

## 🌸 About the Project

**For My Wonderful Mother** is a personal birthday website designed as a digital memory book.

Instead of giving a traditional birthday card, this project turns precious photographs and memories into an interactive webpage. The website begins with a private password screen and then opens into a collection of letters, memories, photographs, and a birthday message.

Every section is designed to feel warm, simple, elegant, and personal.

---

## ✨ Features

* 🔐 **Password-Protected Welcome Page**

  * A simple password screen before entering the memories.
  * Displays an error message when an incorrect password is entered.

* 💌 **Personal Birthday Letter**

  * A dedicated hero section with a heartfelt message.
  * Introduces the purpose of the website.

* 📸 **Memory Collection**

  * Individual memory cards with photographs and personal stories.
  * Alternating left/right layouts for a more dynamic appearance.
  * Easily expandable with additional memories.

* 🖼️ **Photo Gallery**

  * Dedicated gallery section for favourite photographs.
  * Supports different photo sizes including tall and wide images.

* 🎂 **Birthday Wish**

  * A dedicated section for the main birthday message.
  * Includes a personal signature.

* 📱 **Responsive Design**

  * Works across desktop, tablet, and mobile screen sizes.
  * Memory cards automatically adapt to smaller screens.

* 🌷 **Elegant Visual Design**

  * Soft cream, pink, rose, and brown colour palette.
  * Decorative elements and typography designed for a warm birthday aesthetic.

---

## 🛠️ Technologies Used

| Technology       | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| **HTML5**        | Website structure and content                      |
| **CSS3**         | Styling, layout, animations, and responsive design |
| **JavaScript**   | Password functionality and page interaction        |
| **Google Fonts** | DM Serif Display and Quicksand typography          |

---

## 📁 Project Structure

```text
For-My-Wonderful-Mother/
│
├── index.html
├── style.css
├── script.js
│
├── images/
│   ├── photo1.jpeg
│   ├── photo2.jpeg
│   ├── photo3.jpeg
│   ├── ...
│   └── photo29.jpeg
│
└── README.md
```

### File Description

**`index.html`**
Contains the complete structure of the website, including the welcome page, memories, photo gallery, and birthday message.

**`style.css`**
Contains the complete visual design, layouts, colours, typography, responsive styling, and memory-card layouts.

**`script.js`**
Handles the password functionality and switching between the welcome page and the memories page.

**`images/`**
Contains the photographs displayed throughout the website.

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/YOUR-USERNAME/For-My-Wonderful-Mother.git
```

### 2. Open the project

Open the project folder in **VS Code** or another code editor.

### 3. Check the images

Make sure all photographs are inside:

```text
images/
```

and that their filenames match the paths used in `index.html`.

For example:

```html
<img src="images/photo1.jpeg" alt="Me and my mother">
```

### 4. Run the website

You can simply open `index.html` in your browser.

Alternatively, if you use VS Code, you can run the project using the **Live Server** extension.

---

## 🔑 Changing the Password

The password can be changed inside `script.js`.

Find the password value in the JavaScript file and replace it with your preferred password.

```javascript
const correctPassword = "YOUR_PASSWORD";
```

> **Note:** This is a front-end password and is intended for a personal surprise website, not for protecting sensitive information.

---

## 📸 Adding More Memories

Adding another memory is simple.

Copy an existing memory card:

```html
<article class="memory-card">
    ...
</article>
```

and change the image and text.

For example:

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
      Write your personal message here.
    </p>
  </div>
</article>
```

For alternating layouts, use:

```html
<article class="memory-card reverse">
```

This automatically moves the photograph to the opposite side.

---

## 🎨 Design

The website uses a soft and warm colour palette:

* 🌸 Soft Pink
* 🤍 Cream
* 🌹 Rose
* 🤎 Warm Brown
* ✨ White

The typography combines:

* **DM Serif Display** — headings
* **Quicksand** — body text

This combination gives the website a personal letter / memory-book feeling.

---

## 📱 Responsive Layout

The website is designed to work on:

* 💻 Desktop
* 💻 Laptop
* 📱 Mobile
* 📱 Tablet

On smaller screens, the two-column memory layouts automatically become a single-column layout so that photographs and messages remain easy to read.

---

## 💡 Inspiration

The idea behind this project is simple:

> Some memories are too special to fit inside a normal birthday card.

This website was created to bring together photographs, memories, and words in one place — something that can be revisited long after the birthday is over.

---

## ❤️ A Personal Note

This isn't just a website.

It is a collection of moments, photographs, and words dedicated to someone who has been there through every chapter of my life.

**Happy Birthday, Mum. ❤️**

---

## 📄 License

This project is a personal project created for a birthday gift.

The source code may be viewed for learning and inspiration, but the photographs and personal content are private and should not be reused without permission.

---

### ⭐ Made with love

**Made with HTML, CSS, JavaScript, memories, and a lot of love. ❤️**
