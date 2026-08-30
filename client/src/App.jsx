import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Landing from './pages/Landing.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ChatSupport from './pages/ChatSupport.jsx';
import MoodTracker from './pages/MoodTracker.jsx';
import Journal from './pages/Journal.jsx';
import Resources from './pages/Resources.jsx';
import ResourceDetail from './pages/ResourceDetail.jsx';
import Emergency from './pages/Emergency.jsx';
import Profile from './pages/Profile.jsx';
import Privacy from './pages/Privacy.jsx';
import NotFound from './pages/NotFound.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import { AuthProvider } from './context/AuthContext.jsx';

function App() {
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === 'undefined') return 'automatic';
    const savedMode = localStorage.getItem('themeMode');
    return savedMode === 'light' || savedMode === 'dark' || savedMode === 'automatic' ? savedMode : 'automatic';
  });
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const getSystemTheme = () => (mediaQuery.matches ? 'dark' : 'light');

    const applyTheme = () => {
      const resolvedTheme = themeMode === 'automatic' ? getSystemTheme() : themeMode;
      setTheme(resolvedTheme);
      document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
      document.documentElement.style.colorScheme = resolvedTheme;
      localStorage.setItem('theme', resolvedTheme);
      localStorage.setItem('themeMode', themeMode);
    };

    applyTheme();
    mediaQuery.addEventListener('change', applyTheme);

    return () => mediaQuery.removeEventListener('change', applyTheme);
  }, [themeMode]);

  const handleThemeToggle = () => {
    setThemeMode((prev) => {
      if (prev === 'automatic') {
        return theme === 'dark' ? 'light' : 'dark';
      }
      return prev === 'dark' ? 'light' : 'dark';
    });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <Router>
          <Navbar theme={theme} onThemeToggle={handleThemeToggle} />
          <main className="pt-24">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="/chat" element={<ProtectedRoute><ChatSupport /></ProtectedRoute>} />
              <Route path="/mood-tracker" element={<ProtectedRoute><MoodTracker /></ProtectedRoute>} />
              <Route path="/journal" element={<ProtectedRoute><Journal /></ProtectedRoute>} />
              <Route path="/resources" element={<ProtectedRoute><Resources /></ProtectedRoute>} />
              <Route path="/resources/:id" element={<ProtectedRoute><ResourceDetail /></ProtectedRoute>} />
              <Route path="/emergency" element={<ProtectedRoute><Emergency /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile themeMode={themeMode} onThemeModeChange={setThemeMode} /></ProtectedRoute>} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;