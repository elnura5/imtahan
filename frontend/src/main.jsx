
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WishlistProvider from './Context/WishlistProvider.jsx'

createRoot(document.getElementById('root')).render(
  <WishlistProvider>
    <App />
  </WishlistProvider>,
)
