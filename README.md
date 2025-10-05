# Code Viewer GUI

A full-stack web application that lets you enter any URL and displays the source code of the page in a visually appealing GUI with syntax highlighting, line numbers, and easy navigation.

## Features

- ✨ **Syntax Highlighting**: Uses PrismJS for beautiful code highlighting
- 📝 **Line Numbers**: Displays code with line numbers for easy reference
- 🎨 **Modern UI**: Clean, responsive design with gradient accents
- ⚡ **Fast & Lightweight**: Built with Vite for optimal performance
- 🔒 **Secure**: Backend proxy to safely fetch website source code

## Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **PrismJS** - Syntax highlighting
- **CSS3** - Styling with modern features

### Backend
- **Express.js** - Web server framework
- **Axios** - HTTP client for fetching URLs
- **CORS** - Cross-origin resource sharing

## Project Structure

```
code-viewer-gui/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```
   
   The server will run on `http://localhost:5000`

   For development with auto-reload:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   
   The frontend will run on `http://localhost:3000`

4. Open your browser and visit `http://localhost:3000`

### Production Build

To create a production build of the frontend:

```bash
cd frontend
npm run build
```

The optimized files will be in the `dist/` directory.

## Usage

1. Start both the backend and frontend servers (follow setup instructions above)
2. Open the application in your browser at `http://localhost:3000`
3. Enter any valid URL in the input field (e.g., `https://example.com`)
4. Click "Fetch Source Code" button
5. View the beautifully formatted source code with syntax highlighting

## API Endpoint

The backend exposes a single endpoint:

### GET `/fetch-source`

**Query Parameters:**
- `url` (required): The URL of the website to fetch

**Example:**
```
http://localhost:5000/fetch-source?url=https://example.com
```

**Response:**
```json
{
  "sourceCode": "<!DOCTYPE html>...",
  "contentType": "text/html; charset=UTF-8"
}
```

## Configuration

### Backend Port

To change the backend port, set the `PORT` environment variable:

```bash
PORT=8000 npm start
```

### Frontend Port

To change the frontend port, modify `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000 // Change this
  }
})
```

## Development

### Backend Development

The backend uses nodemon for auto-reload during development:

```bash
cd backend
npm run dev
```

### Frontend Development

Vite provides hot module replacement (HMR) out of the box:

```bash
cd frontend
npm run dev
```

## Troubleshooting

### CORS Issues

If you encounter CORS errors, ensure:
1. The backend server is running on `http://localhost:5000`
2. The frontend is properly configured to make requests to the backend

### Port Already in Use

If port 5000 or 3000 is already in use:
- Backend: Set a different `PORT` environment variable
- Frontend: Modify the port in `vite.config.js`

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
