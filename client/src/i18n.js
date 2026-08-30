import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            nav: {
                home: 'Home',
                features: 'Features',
                support: 'Support',
                dashboard: 'Dashboard',
                resources: 'Resources',
                privacy: 'Privacy',
                login: 'Login',
                signup: 'Sign Up',
            },
            hero: {
                title: 'Mental wellbeing made simple for Nigerians',
                subtitle: 'Accessible counselling, mood tracking, and supportive resources in one calm digital space.',
                ctaPrimary: 'Get Started',
                ctaSecondary: 'Talk to Support',
            },
            sections: {
                benefits: 'Trusted, private, and designed for your pace.',
            },
            footer: {
                contact: 'Contact Us',
                rights: 'All rights reserved.',
            },
        },
    },
    pcm: {
        translation: {
            nav: {
                home: 'Home',
                features: 'Features',
                support: 'Support',
                dashboard: 'Dashboard',
                resources: 'Resources',
                privacy: 'Privacy',
                login: 'Login',
                signup: 'Sign Up',
            },
            hero: {
                title: 'Mental health easy for Nigerians',
                subtitle: 'Counselling, mood tracking and support tools wey fit help you.',
                ctaPrimary: 'Start',
                ctaSecondary: 'Talk Now',
            },
            sections: {
                benefits: 'Private, soft, and easy to use for everybody.',
            },
            footer: {
                contact: 'Contact Us',
                rights: 'All rights reserved.',
            },
        },
    },
    yo: {
        translation: {
            nav: {
                home: 'Ile',
                features: 'Awọn ẹya',
                support: 'Atilẹyin',
                dashboard: 'Dashboard',
                resources: 'Orisun',
                privacy: 'Asiri',
                login: 'Wọle',
                signup: 'Forukọsilẹ',
            },
            hero: {
                title: 'Ilera ọpọlọ fun awọn ara Naijiria',
                subtitle: 'Iwọle si atilẹyin, atẹle ẹdun, ati awọn orisun ni ibi kan.',
                ctaPrimary: 'Bẹrẹ',
                ctaSecondary: 'Bawọle si Iranlọwọ',
            },
            sections: {
                benefits: 'Aṣiri ati itunu fun gbogbo eniyan.',
            },
            footer: {
                contact: 'Kan si Wa',
                rights: 'Gbogbo awọn ẹtọ wa ni tọju.',
            },
        },
    },
    ha: {
        translation: {
            nav: {
                home: 'Gida',
                features: 'Fasali',
                support: 'Taimako',
                dashboard: 'Dashboard',
                resources: 'Albarkatu',
                privacy: 'Sirri',
                login: 'Shiga',
                signup: 'Yi Rijista',
            },
            hero: {
                title: 'Lafiyar hankali ga ‘yan Najeriya',
                subtitle: 'Taimako na sirri, sakamakon yanayi, da albarkatu a wuri guda.',
                ctaPrimary: 'Fara',
                ctaSecondary: 'Yi Magana',
            },
            sections: {
                benefits: 'Sirri da dacewa don kowa.',
            },
            footer: {
                contact: 'Tuntube mu',
                rights: 'Duk haƙƙoƙi an tanada.',
            },
        },
    },
    ig: {
        translation: {
            nav: {
                home: 'Ụlọ',
                features: 'Njirimara',
                support: 'Nkwado',
                dashboard: 'Dashboard',
                resources: 'Akụrụngwa',
                privacy: 'Nzuzo',
                login: 'Banye',
                signup: 'Debanye',
            },
            hero: {
                title: 'Ahụ ike uche maka Ndị Naịjịrịa',
                subtitle: 'Nkwado nzuzo, nchịkọta mmetụta, na ihe ọmụma n’otu ebe.',
                ctaPrimary: 'Malite',
                ctaSecondary: 'Kwuo Na Nkwado',
            },
            sections: {
                benefits: 'Nzuzo na mfe iji maka onye ọ bụla.',
            },
            footer: {
                contact: 'Kpọtụrụ Anyị',
                rights: 'A nwekwara ikike niile.',
            },
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
