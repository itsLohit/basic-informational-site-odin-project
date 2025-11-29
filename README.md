# Basic Informational Site

A simple Node.js web server that serves static HTML pages, refactored from vanilla Node.js to Express.js. Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum to learn backend fundamentals and Express framework basics.

---

## 📋 Project Description

This project demonstrates the evolution from a basic HTTP server built with Node.js core modules to a cleaner implementation using the Express framework. It showcases how Express simplifies routing, file serving, and error handling compared to vanilla Node.js.

**Key Learning Objectives:**
- Understanding the benefits of web frameworks vs. vanilla Node.js
- Learning Express.js fundamentals (routing, middleware)
- Implementing clean route handlers with `res.sendFile()`
- Using middleware for 404 error handling
- Comparing framework-based vs. framework-free approaches

---

## 🚀 Features

- ✅ Serves static HTML pages with Express
- ✅ Clean routing system using Express route handlers
- ✅ 404 error handling with middleware
- ✅ Simplified codebase (no manual file reading required)
- ✅ Single dependency (Express)

---

## 🛠️ Tech Stack

- **Runtime:** Node.js v22.15.1
- **Framework:** Express.js
- **Core Modules:** 
  - `path` - Cross-platform file path handling

---

## 📁 Project Structure

basic-informational-site/
├── index.js # Express server file
├── index.html # Home page
├── about.html # About page
├── contact-me.html # Contact page
├── 404.html # Error page
├── package.json # Dependencies
└── README.md # Project documentation

text

---

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher) installed on your machine
- npm (comes with Node.js)
- Basic command line knowledge

### Steps

1. **Clone or download this repository**
git clone <your-repo-url>
cd basic-informational-site

text

2. **Install Express**
npm install express

text

3. **Run the server**
node index.js

text

4. **Open your browser**  
Navigate to: [http://localhost:8080](http://localhost:8080)

---

## 🌐 Available Routes

| Route | File Served | Description |
|-------|-------------|-------------|
| `/` | `index.html` | Home page |
| `/about` | `about.html` | About page |
| `/contact-me` | `contact-me.html` | Contact page |
| Any other URL | `404.html` | 404 error page (returns 404 status) |

---

## 💻 Usage Example

Once the server is running, you can test the routes:

Visit the home page
http://localhost:8080/

Visit the about page
http://localhost:8080/about

Visit the contact page
http://localhost:8080/contact-me

Test the 404 page
http://localhost:8080/random-page

text

---

## 🔄 Migration from Vanilla Node.js

This project was originally built using Node.js's built-in `http`, `fs`, and `url` modules (see commented code in `index.js`). The Express refactor demonstrates:

- **40% less code** - From ~40 lines to ~25 lines
- **No manual file reading** - Express's `res.sendFile()` handles everything
- **Cleaner routing** - Individual route handlers instead of if/else chains
- **Better error handling** - Middleware-based 404 handling
- **More maintainable** - Each route is isolated and easy to modify

---

## 📚 What I Learned

- How Express simplifies common server tasks
- The power of middleware for cross-cutting concerns
- Route-specific handlers vs. monolithic request processing
- When to use frameworks vs. vanilla Node.js
- Express conventions and best practices

---

## 🙏 Acknowledgments

Built as part of [The Odin Project's](https://www.theodinproject.com/) Node.js curriculum - Introduction to Express lesson.