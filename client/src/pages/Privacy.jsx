function Privacy() {
    return (
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Privacy policy</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Keeping your wellness data confidential</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">We build the interface with privacy, data protection, and user trust as top priorities.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What we collect</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">We only use the information needed to personalize your wellness experience.</p>
                    <ul className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                        <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Account details like name and email for secure sign in.</li>
                        <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Mood notes and journal entries kept private in your space.</li>
                        <li className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Usage insights for improving the experience without sharing personal details.</li>
                    </ul>
                </section>

                <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                    <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How we protect it</h2>
                    <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">Your reflections and settings are treated with care through secure interfaces.</p>
                    <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                        <p className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Encrypted communication and privacy-forward design patterns.</p>
                        <p className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">No public sharing without your explicit consent.</p>
                        <p className="rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">Clear settings so you control notifications and theme preferences.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Privacy;
