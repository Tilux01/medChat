import { useMemo, useState } from 'react';
import { journalEntries } from '../data/dummyData.js';

function Journal() {
    const [search, setSearch] = useState('');
    const entries = useMemo(
        () => journalEntries.filter((entry) => entry.title.toLowerCase().includes(search.toLowerCase()) || entry.excerpt.toLowerCase().includes(search.toLowerCase())),
        [search]
    );

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Private journal</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Capture your thoughts securely</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Create, search and revisit journal entries with a calm, private layout.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.6fr_0.4fr]">
                <section className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Search journal entries</h2>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Find reflections by keywords or mood notes.</p>
                        </div>
                        <input
                            type="search"
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                            placeholder="Search entries"
                            className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white sm:w-72"
                        />
                    </div>

                    <div className="space-y-4">
                        {entries.map((entry) => (
                            <article key={entry.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-900">
                                <div className="flex items-center justify-between gap-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{entry.title}</h3>
                                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{entry.date}</p>
                                    </div>
                                    <span className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700 dark:bg-slate-800 dark:text-slate-200">Journal</span>
                                </div>
                                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{entry.excerpt}</p>
                            </article>
                        ))}
                        {entries.length === 0 && <p className="text-sm text-slate-500 dark:text-slate-400">No entries found. Try another keyword.</p>}
                    </div>
                </section>

                <aside className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Need inspiration?</h2>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">Use prompts to reflect on progress, gratitude, and emotional patterns.</p>
                    <div className="mt-6 space-y-3">
                        <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">How did I feel today?</p>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Write about what made your mood stronger or softer today.</p>
                        </div>
                        <div className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">What helped me cope?</p>
                            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Reflect on the strategies that kept you grounded.</p>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default Journal;
