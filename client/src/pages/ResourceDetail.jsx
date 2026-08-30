import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { resources } from '../data/dummyData.js';

function ResourceDetail() {
    const { id } = useParams();
    const resource = resources.find(r => r.id === parseInt(id, 10));

    if (!resource) {
        return <Navigate to="/resources" replace />;
    }

    const markdownComponents = {
        h1: ({node, ...props}) => <h1 className="text-3xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white" {...props} />,
        h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-8 mb-4 text-slate-900 dark:text-white" {...props} />,
        h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-6 mb-3 text-slate-900 dark:text-white" {...props} />,
        p: ({node, ...props}) => <p className="mb-4 leading-7 text-slate-600 dark:text-slate-300" {...props} />,
        ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300" {...props} />,
        ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-slate-600 dark:text-slate-300" {...props} />,
        li: ({node, ...props}) => <li {...props} />,
        strong: ({node, ...props}) => <strong className="font-semibold text-slate-900 dark:text-white" {...props} />,
        em: ({node, ...props}) => <em className="italic" {...props} />,
        blockquote: ({node, ...props}) => <blockquote className="border-l-4 border-sky-500 pl-4 italic my-4 text-slate-700 dark:text-slate-400" {...props} />,
    };

    return (
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
            <Link to="/resources" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white mb-8">
                <ArrowLeft className="h-4 w-4" />
                Back to resources
            </Link>

            <article className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950 sm:p-12">
                <header className="mb-8 border-b border-slate-100 pb-8 dark:border-slate-800">
                    <p className="text-sm uppercase tracking-[0.24em] text-sky-600">{resource.category}</p>
                    <h1 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">{resource.title}</h1>
                    <p className="mt-4 text-lg text-slate-500 dark:text-slate-400">{resource.description}</p>
                </header>
                
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <ReactMarkdown components={markdownComponents}>
                        {resource.content}
                    </ReactMarkdown>
                </div>
            </article>
        </div>
    );
}

export default ResourceDetail;
