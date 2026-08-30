import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="mx-auto flex min-h-[calc(100vh-10rem)] max-w-4xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
            <p className="text-sm uppercase tracking-[0.32em] text-slate-500">404 error</p>
            <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">Page not found.</h1>
            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">The page you are looking for may have moved or is not available yet. Return to the landing page to continue your mental wellness journey.</p>
            <Link to="/" className="mt-10 inline-flex rounded-full bg-slate-900 px-8 py-4 text-sm font-semibold text-white transition hover:bg-slate-800">
                Back to home
            </Link>
        </div>
    );
}

export default NotFound;
