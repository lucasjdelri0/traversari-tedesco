import React, {createContext, useContext, useEffect, useState} from "react";


const LanguageContext = createContext({
    language: 'sp',
    handleSetLanguage: () => {}
});

const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('sp');

    const handleSetLanguage = (lang) => {
        setLanguage(lang)
    };

    const value = {
        language,
        handleSetLanguage
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguageContext = () => {
    return useContext(LanguageContext);
}

export default LanguageProvider;
