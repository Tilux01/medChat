import { useState } from 'react';
import { moodHistory, moodOptions } from '../data/dummyData.js';

function MoodTracker() {
    const [selectedMood, setSelectedMood] = useState('happy');
    const [note, setNote] = useState('');

    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mood tracker</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Check in with how you’re feeling</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Select your mood, add a note, and review your weekly trend in one private view.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Daily check-in</p>
                    <h2 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">Choose a mood emoji</h2>
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                        {moodOptions.map((item) => (
                            <button
                                key={item.id}
                                type="button"
                                onClick={() => setSelectedMood(item.id)}
                                className={`flex items-center gap-3 rounded-3xl border px-4 py-4 text-left transition ${selectedMood === item.id ? 'border-sky-500 bg-sky-50 text-slate-900 dark:bg-slate-900' : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'}`}
                            >
                                <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>{item.emoji}</span>
                                <div>
                                    <p className="font-semibold">{item.label}</p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Tap to select</p>
                                </div>
                            </button>
                        ))}
                    </div>
                    <div className="mt-8">
                        <label htmlFor="mood-note" className="block text-sm font-medium text-slate-700 dark:text-slate-200">Journal note</label>
                        <textarea
                            id="mood-note"
                            rows="4"
                            value={note}
                            onChange={(event) => setNote(event.target.value)}
                            placeholder="Write a short reflection for today..."
                            className="mt-3 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 shadow-sm outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                        />
                    </div>
                    <button className="mt-6 w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                        Save mood entry
                    </button>
                </section>

                <aside className="space-y-6">
                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mood analytics</p>
                        <div className="mt-6 h-80 space-y-4 flex flex-col justify-end">
                            {moodHistory.map((day) => (
                                <div key={day.day} className="flex items-end gap-4">
                                    <span className="w-8 text-right text-sm font-medium text-slate-500">{day.day}</span>
                                    <div className="flex flex-1 items-end gap-2">
                                        <div
                                            className="rounded-t-2xl bg-gradient-to-t from-teal-500 to-teal-400 transition-all"
                                            style={{ height: `${(day.score / 10) * 160}px` }}
                                        />
                                    </div>
                                    <span className="w-8 text-right text-sm text-slate-500">{day.score}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Mood calendar</p>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">View a timeline of your emotional wellness and spot patterns through the week.</p>
                        <div className="mt-6 grid gap-3">
                            {moodHistory.map((entry) => (
                                <div key={entry.day} className="flex items-center justify-between rounded-3xl bg-slate-50 px-4 py-3 dark:bg-slate-900">
                                    <span className="text-sm text-slate-700 dark:text-slate-200">{entry.day}</span>
                                    <span className="rounded-full bg-slate-200 px-3 py-1 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-100">{entry.score}/10</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default MoodTracker;
