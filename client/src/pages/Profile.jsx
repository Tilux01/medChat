import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext.jsx';

function Profile({ themeMode, onThemeModeChange }) {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [notifications, setNotifications] = useState(true);
    const [privacyMode, setPrivacyMode] = useState(true);

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);

    if (!user) {
        return (
            <div className="min-h-screen grid place-items-center px-4 py-20 text-slate-900 dark:text-slate-100">
                <p className="text-base font-medium">Loading account details…</p>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">User profile</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Your account settings</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Manage personal information, privacy settings, and notification preferences.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Personal information</h2>
                    <div className="mt-6 space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Full name</label>
                            <input
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
                            <input
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Country</label>
                            <input className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white" defaultValue="Nigeria" />
                        </div>
                    </div>
                    <button className="mt-8 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">Save changes</button>
                </section>

                <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div>
                        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Privacy & notifications</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Choose what you want to see and keep your data secure.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Privacy mode</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Keep your profile and journal activity private.</p>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input type="checkbox" className="peer sr-only" checked={privacyMode} onChange={() => setPrivacyMode((prev) => !prev)} />
                                <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600"></div>
                                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></span>
                            </label>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">Notifications</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Allow reminders and progress updates.</p>
                            </div>
                            <label className="relative inline-flex cursor-pointer items-center">
                                <input type="checkbox" className="peer sr-only" checked={notifications} onChange={() => setNotifications((prev) => !prev)} />
                                <div className="h-6 w-11 rounded-full bg-slate-300 transition peer-checked:bg-sky-600"></div>
                                <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-5"></span>
                            </label>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <p className="font-semibold text-slate-900 dark:text-white">Theme preference</p>
                        <select value={themeMode} onChange={(e) => onThemeModeChange(e.target.value)} className="mt-4 w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none dark:border-slate-700 dark:bg-slate-950 dark:text-white">
                            <option value="automatic">Automatic</option>
                            <option value="light">Light mode</option>
                            <option value="dark">Dark mode</option>
                        </select>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Profile;
