import { Mail, MapPin, Globe2, HeartHandshake, MessageCircle } from 'lucide-react';

function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-100 py-10 text-slate-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-md space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-sky-600 text-white">S</div>
                    <p className="text-sm leading-7">MindEase provides privacy-aware emotional wellness support for Nigerians. Reach out if you need help or want to learn more.</p>
                    <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <MapPin className="h-4 w-4" /> Lagos, Nigeria
                    </div>
                    <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                        <Mail className="h-4 w-4" /> support@mindease.app
                    </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-200">Quick links</h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li>Home</li>
                            <li>Dashboard</li>
                            <li>Chat support</li>
                            <li>Resources</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-200">Support</h3>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
                            <li>Privacy</li>
                            <li>Emergency</li>
                            <li>Profile</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-slate-900 dark:text-slate-200">Follow us</h3>
                        <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                            <MessageCircle className="h-5 w-5" />
                            <HeartHandshake className="h-5 w-5" />
                            <Globe2 className="h-5 w-5" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
                © 2026 Serene AI. All rights reserved.
            </div> */}
        </footer>
    );
}

export default Footer;