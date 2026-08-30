import { Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { dashboardStats, moodHistory } from '../data/dummyData.js';

function Dashboard() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-sky-800 px-8 py-10 text-white shadow-2xl shadow-slate-900/20">
                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
                    <div>
                        <p className="text-sm uppercase tracking-[0.32em] text-sky-200">Welcome back</p>
                        <h1 className="mt-4 text-4xl font-semibold tracking-tight">Your mental wellness dashboard</h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200/90">A calm place to view your mood, complete quick self-care actions, and keep your progress in check.</p>
                    </div>
                    <div className="grid gap-4 rounded-[1.75rem] bg-slate-950/80 p-6">
                        <div className="rounded-3xl bg-slate-900/90 p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Mood check</p>
                            <p className="mt-3 text-3xl font-semibold">Feeling balanced today</p>
                            <p className="mt-2 text-sm text-slate-300">Your mood pattern looks stronger and more stable this week.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-900/90 p-5">
                            <p className="text-xs uppercase tracking-[0.24em] text-sky-300">Self-care</p>
                            <p className="mt-3 text-3xl font-semibold">5 days</p>
                            <p className="mt-2 text-sm text-slate-300">You’ve completed daily reflections and healthy check-ins consistently.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {dashboardStats.map((item) => (
                    <article key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                        <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">{item.label}</p>
                        <p className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-white">{item.value}</p>
                        <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.detail}</p>
                    </article>
                ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[0.65fr_0.35fr]">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mood trend</p>
                            <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Weekly mood overview</h2>
                        </div>
                        <Sparkles className="h-7 w-7 text-sky-600" />
                    </div>

                    <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/80 p-4 dark:border-slate-700 dark:bg-slate-900/70">
                        <div className="space-y-2">
                            {moodHistory.map((day) => (
                                <div key={day.day} className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 shadow-sm dark:bg-slate-950/70">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{day.day}</p>
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Weekly check-in</p>
                                    </div>
                                    <span className="rounded-full bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
                                        {day.score}/10
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <aside className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Quick actions</p>
                        <div className="mt-4 space-y-3">
                            <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">Journal a mood note</button>
                            <button className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-left text-sm text-slate-900 transition hover:border-slate-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">Explore wellness tips</button>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Wellness tip</p>
                        <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-200">Try a short breathing break between tasks and notice how your body softens.</p>
                    </div>
                </aside>
            </div>

            <section className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <div className="mb-6 flex items-center justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Activity</p>
                        <h2 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">Recent activities</h2>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
                        <ShieldCheck className="h-5 w-5 text-sky-600" />
                        Updated just now
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Mood entry</p>
                        <p className="mt-4 font-semibold text-slate-900 dark:text-white">Added reflection</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">You noted a calming moment after work.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Resource</p>
                        <p className="mt-4 font-semibold text-slate-900 dark:text-white">Read stress relief guide</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Built healthy habits for worry and balance.</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5 dark:bg-slate-900">
                        <p className="text-sm text-slate-500 dark:text-slate-400">Chat</p>
                        <p className="mt-4 font-semibold text-slate-900 dark:text-white">Talked to support</p>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">You asked for a calming breathing routine.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Dashboard;
