import { useState } from 'react'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-markup'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [sourceCode, setSourceCode] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchSourceCode = async () => {
    if (!url) {
      setError('Please enter a URL')
      return
    }

    setLoading(true)
    setError('')
    setSourceCode('')

    try {
      const response = await fetch(
        `http://localhost:5000/fetch-source?url=${encodeURIComponent(url)}`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch source code')
      }

      const data = await response.json()
      setSourceCode(data.sourceCode)
      
      // Highlight code after setting it
      setTimeout(() => Prism.highlightAll(), 0)
    } catch (err) {
      setError(err.message || 'Failed to fetch source code')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="App">
      <header className="app-header">
        <h1>Code Viewer GUI</h1>
        <p>View the source code of any website</p>
      </header>

      <div className="input-container">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && fetchSourceCode()}
          placeholder="Enter URL (e.g., https://example.com)"
          className="url-input"
        />
        <button 
          onClick={fetchSourceCode}
          disabled={loading}
          className="fetch-button"
        >
          {loading ? 'Fetching...' : 'Fetch Source Code'}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}

      {sourceCode && (
        <div className="code-container">
          <pre className="line-numbers">
            <code className="language-html">{sourceCode}</code>
          </pre>
        </div>
      )}
    </div>
  )
}

export default App
