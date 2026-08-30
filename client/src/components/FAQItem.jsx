import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
                <span className="text-base font-medium text-slate-900 dark:text-slate-100">{question}</span>
                <ChevronDown className={`h-5 w-5 transition ${open ? 'rotate-180' : ''} text-slate-500`} />
            </button>
            {open && <p className="border-t border-slate-100 px-6 py-4 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:text-slate-300">{answer}</p>}
        </div>
    );
}

export default FAQItem;
