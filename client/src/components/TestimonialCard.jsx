function TestimonialCard({ name, role, quote }) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">“{quote}”</p>
            <div>
                <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{role}</p>

            </div>
        </div>
    );
}

export default TestimonialCard;
