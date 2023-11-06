import i18next from 'i18next';
import { GetLang } from 'common/storage';
import enLang from './lang/en';
import jaLang from './lang/ja';
import viLang from './lang/vi';

i18next
    .init({
        interpolation: {
            // React already does escaping
            escapeValue: false,
        },
        lng: GetLang(), // 'en' | 'ja' | 'vi'
        // Using simple hardcoded resources for simple example
        resources: {
            vi: {
                translation: viLang
            },
            en: {
                translation: enLang
            },
            ja: {
                translation: jaLang
            },
        },
    })

export default i18next;