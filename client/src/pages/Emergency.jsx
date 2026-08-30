import { Phone, ShieldCheck, LifeBuoy } from 'lucide-react';
import { emergencyContacts } from '../data/dummyData.js';

function Emergency() {
    return (
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="mb-10 rounded-[2rem] border border-rose-200 bg-rose-50 p-8 shadow-sm dark:border-rose-700 dark:bg-rose-950/30">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-rose-700">Emergency support</p>
                        <h1 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Immediate help when you need it most</h1>
                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 dark:text-slate-300">Quick access to crisis contacts, local resources, and urgent support guidance.</p>
                    </div>
                    <div className="inline-flex items-center gap-3 rounded-full bg-white/90 px-5 py-4 text-sm font-semibold text-rose-700 shadow-sm dark:bg-slate-900 dark:text-rose-200">
                        <ShieldCheck className="h-5 w-5" /> Safe & confidential
                    </div>
                </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {emergencyContacts.map((item) => (
                    <div key={item.id} className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-950">
                        <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-rose-100 text-rose-700 dark:bg-rose-900/20 dark:text-rose-200">
                            {item.id === 1 ? <Phone className="h-6 w-6" /> : item.id === 2 ? <LifeBuoy className="h-6 w-6" /> : <ShieldCheck className="h-6 w-6" />}
                        </div>
                        <h2 className="mt-6 text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h2>
                        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.subtitle}</p>
                        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                        <button className="mt-6 inline-flex items-center rounded-full bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
                            Contact now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Emergency;
