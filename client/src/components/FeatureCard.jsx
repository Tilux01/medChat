function FeatureCard({ Icon, title, description }) {
    return (
        <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-700 dark:bg-sky-900/20 dark:text-sky-200">
                <Icon className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-slate-100">{title}</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{description}</p>
        </article>
       
    );
        
}

export default FeatureCard;
