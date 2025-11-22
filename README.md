# Basic Informational Site

A simple Node.js web server that serves static HTML pages using only core Node.js modules—no frameworks required. Built as part of [The Odin Project](https://www.theodinproject.com/) curriculum to learn fundamental backend concepts.

---

## 📋 Project Description

This project demonstrates how to build a basic HTTP server from scratch using Node.js's built-in `http`, `fs`, and `url` modules. The server handles routing for multiple pages and displays a custom 404 page for undefined routes.

**Key Learning Objectives:**
- Understanding how web servers work at a fundamental level
- Handling HTTP requests and responses
- Implementing basic routing without external libraries
- Reading and serving files from the filesystem
- Managing different HTTP status codes

---

## 🚀 Features

- ✅ Serves static HTML pages
- ✅ Custom routing system (no Express needed)
- ✅ 404 error handling for undefined routes
- ✅ Built with vanilla Node.js (zero dependencies)
- ✅ Clean, beginner-friendly code structure

---

## 🛠️ Tech Stack

- **Runtime:** Node.js v22.15.1
- **Core Modules:** 
  - `http` - Creating the web server
  - `fs` - Reading HTML files from disk
  - `url` - Parsing request URLs

---

## 📁 Project Structure

basic-informational-site/
├── index.js # Main server file
├── index.html # Home page
├── about.html # About page
├── contact-me.html # Contact page
├── 404.html # Error page
└── README.md # Project documentation


---

## 🔧 Installation & Setup

### Prerequisites

- Node.js (v14 or higher) installed on your machine
- Basic command line knowledge

### Steps

1. **Clone or download this repository**
git clone <your-repo-url>
cd basic-informational-site

2. **No dependencies to install!**  
This project uses only Node.js built-in modules.

3. **Run the server**
node index.js


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
