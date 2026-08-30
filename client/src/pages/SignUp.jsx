import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import Alert from '../components/Alert.jsx';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState(null);
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();

        if (!trimmedName || !trimmedEmail || !password) {
            setError('Please fill in all fields.');
            return;
        }

        setError('');
        try {
            await register({ name: trimmedName, email: trimmedEmail.toLowerCase(), password });
            setAlert({ type: 'success', message: 'Account created successfully! Redirecting...' });
            setTimeout(() => navigate('/dashboard'), 2500);
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
                        <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Create your account</p>
                        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Join the MindEase community</h1>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">Start tracking your wellness, journaling feelings, and getting on-demand emotional support.</p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                placeholder="Your full name"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
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
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                                placeholder="Create a strong password"
                            />
                        </div>
                        {error ? <p className="text-sm text-rose-600">{error}</p> : null}
                        <button type="submit" className="w-full rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500">
                            Create account
                        </button>
                    </form>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        Already have an account?{' '}
                        <Link to="/signin" className="font-semibold text-slate-900 underline decoration-2 decoration-emerald-200 dark:text-white">
                            Sign in
                        </Link>
                    </p>
                </div>
                <div className="hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-600 via-sky-600 to-slate-900 p-8 text-white sm:block">
                    <p className="text-sm uppercase tracking-[0.28em] text-emerald-100">Self-care tools</p>
                    <h2 className="mt-4 text-3xl font-semibold">A secure place for your emotional wellbeing.</h2>
                    <p className="mt-5 text-sm leading-7 text-slate-100/80">Keep mood notes, browse calming content, and find supportive guidance at your own pace.</p>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
