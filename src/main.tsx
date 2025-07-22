import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// added dark mode
document.documentElement.classList.add('dark');

createRoot(document.getElementById("root")!).render(<App />);