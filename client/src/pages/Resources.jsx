import { Link } from 'react-router-dom';
import { resources } from '../data/dummyData.js';

function Resources() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Wellness resources</p>
                <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white">Guides to help you feel calm and confident.</h1>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">Explore articles, coping techniques, and self-care lessons designed for everyday mental wellbeing.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {resources.map((resource) => (
                    <article key={resource.id} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-950 flex flex-col items-start">
                        <p className="text-xs uppercase tracking-[0.24em] text-sky-600">{resource.category}</p>
                        <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">{resource.title}</h2>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300 flex-1">{resource.description}</p>
                        <Link to={`/resources/${resource.id}`} className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                            Read more
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}

export default Resources;
