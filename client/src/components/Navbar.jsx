import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Moon, SunMedium, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext.jsx';

const languages = [
  { code: 'en', label: 'EN' },
];

function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-xl transition dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center gap-3 text-lg font-semibold text-slate-900 dark:text-white">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500 text-white">S</span>
          MentalEase
        </Link>

        <nav className={`flex-1 items-center justify-between gap-6 sm:flex ${open ? 'block' : 'hidden'}`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            {['/', '/dashboard', '/chat', '/resources', '/emergency', '/privacy'].map((path) => {
              const label = path === '/' ? t('nav.home') : path.replace('/', '');
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition ${isActive ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950' : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'}`
                  }
                >
                  {label === 'home' ? t('nav.home') : label.charAt(0).toUpperCase() + label.slice(1)}
                </NavLink>
              );
            })}
          </div>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <select
            value={i18n.language}
            onChange={(event) => i18n.changeLanguage(event.target.value)}
            className="rounded-full border border-slate-300 bg-slate-50 px-4 py-2 text-sm text-slate-700 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>{language.label}</option>
            ))}
          </select>
          <button onClick={onThemeToggle} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-slate-50 text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {theme === 'dark' ? <SunMedium className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="hidden rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-900 dark:bg-slate-800 dark:text-slate-100 sm:inline-flex">
                {`Hi, ${user.name}`}
              </span>
              <Link
                to="/profile"
                className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:inline-flex"
              >
                Account
              </Link>
              <button
                type="button"
                onClick={logout}
                className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:inline-flex"
              >
                Sign out
              </button>
              
            </div>
          ) : (
            <Link
              to="/signin"
              className="hidden rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white sm:inline-flex"
            >
              {t('nav.login')}
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 sm:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;