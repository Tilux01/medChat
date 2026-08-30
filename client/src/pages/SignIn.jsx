import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Alert from '../components/Alert.jsx';

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedEmail = email.trim();
        if (!trimmedEmail || !password) {
            setError('Please enter both email and password.');
            return;
        }

        setError('');
        try {
            await login({ email: trimmedEmail.toLowerCase(), password });
            setAlert({ type: 'success', message: 'Login successful! Welcome back...' });
            setTimeout(() => navigate('/dashboard'), 3500);
        } catch (error) {
            setAlert({ type: 'error', message: error.message });
        }
    };

    return (
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
            {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
            <div className="grid gap-10 rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-950 sm:grid-cols-[0.9fr_0.8fr]">
                <div className="space-y-6">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-sky-600">Welcome back</p>
                        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Login to your account</h1>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">Enter your credentials to continue to your personalised mental wellness dashboard.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                placeholder="you@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                placeholder="Enter your password"
                            />
                        </div>
                        {error ? <p className="text-sm text-rose-600">{error}</p> : null}
                        <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                            Continue
                        </button>
                    </form>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        New to MentalEase?{' '}
                        <Link to="/signup" className="font-semibold text-slate-900 underline decoration-2 decoration-sky-300 dark:text-white">
                            Create an account
                        </Link>
                    </p>
                    <Link to="/forgot-password" className="text-sm font-semibold text-slate-900 underline decoration-sky-300 dark:text-white">
                        Forgot password?
                    </Link>
                </div>
                <div className="hidden rounded-[1.75rem] bg-gradient-to-br from-sky-600 via-violet-600 to-slate-900 p-8 text-white sm:block">
                    <p className="text-sm uppercase tracking-[0.28em] text-sky-100">Mental wellness</p>
                    <h2 className="mt-4 text-3xl font-semibold">Support that feels warm and secure.</h2>
                    <p className="mt-5 text-sm leading-7 text-slate-100/80">Track your mood, access resources, and speak with caring support whenever you need it.</p>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
