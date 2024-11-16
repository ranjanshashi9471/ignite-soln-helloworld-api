# Hello World in Multiple Languages

This project is a simple Node.js application using **Express** and **EJS** to display a "Hello World" message in different languages based on user input.

---

## Features

- Display "Hello World" messages in multiple languages (English, Hindi, French).
- Generate a random unique ID for each response.
- EJS templating for dynamic content rendering.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. [Node.js](https://nodejs.org/) (v16 or above recommended)
2. [npm](https://www.npmjs.com/) (comes with Node.js)

---

## Installation and Setup

Follow these steps to set up and run the project:

### 1. Clone the Repository

```bash
git clone https://github.com/ranjanshashi9471/ignitesoln-helloworld-api.git
cd ignitesoln-helloworld-api
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

For **development mode** (auto-restarts on changes):

```bash
npm run dev
```

For **production mode** (donot auto-restart):

```bash
npm start
```

The server will start on [http://localhost:5000](http://localhost:5000).

---

## Usage

### 1. Access the Application

Open your browser and navigate to:

```plaintext
http://localhost:5000/
```

Replace `<language>` with one of the following:

- `english`
- `hindi`
- `french`

### 2. Example Requests

#### Valid Request:

```plaintext
http://localhost:5000/hello?language=english
```

#### Invalid Request:

```plaintext
http://localhost:5000/hello?language=spanish
```

---

## Author

**Shashi Ranjan Kumar**

If you have any questions or suggestions, feel free to contact me.
