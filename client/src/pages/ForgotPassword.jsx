import { useState } from 'react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email) return;
        setSuccess(true);
    };

    return (
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-8">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Forgot password</p>
                    <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Reset your account access</h1>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Enter your email address and we’ll send a reset link to help you sign back in safely.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email address</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            placeholder="you@example.com"
                        />
                    </div>
                    <button type="submit" className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Send reset link
                    </button>
                </form>
                {success && (
                    <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-200">
                        A reset link has been sent to your email address.
                    </p>
                )}
                <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
                    Remembered your password?{' '}
                    <Link to="/signin" className="font-semibold text-slate-900 underline decoration-sky-300 dark:text-white">
                        Back to login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default ForgotPassword;
