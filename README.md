# fin-track

A simple financial tracker built with Vue 3 and Vite.

## Features

- Add, edit, and delete transactions
- Dashboard overview
- Amount formatting with thousand separators (e.g., 15,000 → 15.000)
- Responsive and clean UI with Tailwind CSS
- Easy navigation and user-friendly interface

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

Clone the repository and install dependencies:

```sh
git clone https://github.com/masum-xyz/fin-track.git
cd fin-track
npm install
```

### Running the Application
To start the development server, run:

```sh
npm run dev
```
Open your browser and navigate to `http://localhost:3000` to view the application.
### Building for Production
To build the application for production, run:

```sh
npm run build
```
This will create a `dist` directory with the production-ready files.
### Running Tests
To run tests, use the following command:

```sh
npm run test
```
### Directory Structure
```plaintext
fin-track/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── base.css
│   │   └── main.css
│   ├── components/
│   │   └── Transaction.vue
│   ├── pages/
│   │   ├── Add.vue
│   │   ├── Dashboard.vue
│   │   └── Edit.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   ├── App.vue
│   └── main.js
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```
## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.