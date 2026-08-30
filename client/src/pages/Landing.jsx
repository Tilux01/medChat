import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HeartHandshake, Globe2, ShieldCheck } from 'lucide-react';
import FeatureCard from '../components/FeatureCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FAQItem from '../components/FAQItem.jsx';
import { features, testimonials, faqs } from '../data/dummyData.js';

function Landing() {
    const { t } = useTranslation();

    return (
        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <p className="mb-4 inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold text-sky-700 dark:bg-sky-900/20 dark:text-sky-200">
                        Trusted support for Nigeria’s mental wellbeing
                    </p>
                    <h1 className="mb-6 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                        {t('hero.title')}
                    </h1>
                    <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
                        {t('hero.subtitle')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/signup" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                            {t('hero.ctaPrimary')}
                        </Link>
                        <Link to="/chat" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100">
                            {t('hero.ctaSecondary')} <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>

                <div className="rounded-[2rem] bg-gradient-to-tr from-slate-900 via-sky-700 to-violet-500 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-10">
                    <div className="grid gap-5 rounded-[2rem] bg-slate-950/5 p-6 backdrop-blur-xl">
                        <div>
                            <p className="text-sm uppercase tracking-[0.32em] text-sky-200">Daily wellbeing</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Mood summary</h2>
                            <p className="mt-2 text-sm leading-6 text-slate-200/85">Your personal dashboard gently highlights emotions, trends, and self-care progress.</p>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="rounded-3xl bg-slate-950/70 p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Mood score</p>
                                <p className="mt-3 text-3xl font-semibold">8.2</p>
                            </div>
                            <div className="rounded-3xl bg-slate-950/70 p-4">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Self-care</p>
                                <p className="mt-3 text-3xl font-semibold">5d streak</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 grid gap-8 lg:grid-cols-3">
                <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-950">
                    <HeartHandshake className="mb-4 h-10 w-10 text-sky-600" />
                    <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Emotional support</h2>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">Support designed to help you feel safe, valued, and understood no matter where you are.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-950">
                    <Globe2 className="mb-4 h-10 w-10 text-emerald-600" />
                    <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Inclusive design</h2>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">Fast loading, mobile-friendly, and built for Nigerians across devices and connections.</p>
                </div>
                <div className="rounded-3xl bg-white p-8 shadow-sm dark:bg-slate-950">
                    <ShieldCheck className="mb-4 h-10 w-10 text-violet-600" />
                    <h2 className="mb-3 text-xl font-semibold text-slate-900 dark:text-white">Safe privacy</h2>
                    <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">Confidential tools and calm information so you can focus on your wellness journey.</p>
                </div>
            </div>

            <section className="mt-24">
                <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">Features</p>
                        <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Everything you need to stay balanced.</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300">{t('sections.benefits')}</p>
                </div>
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            Icon={feature.id === 1 ? ShieldCheck : feature.id === 2 ? Globe2 : feature.id === 3 ? HeartHandshake : ArrowRight}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </section>

            <section className="mt-24">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Testimonials</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Stories from people who found balance.</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {testimonials.map((item) => (
                        <TestimonialCard key={item.id} name={item.name} role={item.role} quote={item.quote} />
                    ))}
                </div>
            </section>

            <section className="mt-24 mb-24">
                <div className="mb-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">FAQ</p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">Common questions about privacy and support.</h2>
                </div>
                <div className="grid gap-4 lg:grid-cols-3">
                    {faqs.map((item) => (
                        <FAQItem key={item.id} question={item.question} answer={item.answer} />
                    ))}
                </div>
            </section>
        </section>
    );
}

export default Landing;
