import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
const LangSelector = () => {

    const { i18n } = useTranslation()

    const langugaes = [
        { name: "English", code: "en" },
        { name: "Hindi", code: "hi" },
        { name: "Urdu", code: "ur" },
        { name: "French", code: "fr" },
        { name: "Arbic", code: "ar" }
    ]

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }

    useEffect(() =>{
        document.body.dir = i18n.dir()
    },[i18n,i18n.language])
    return (
        <div>
            {
                langugaes.map((lng) => {
                    return (
                        <button key={lng.name} onClick={() => changeLanguage(lng.code)}  >{lng.name}</button>
                    )
                })
            }
        </div>
    )
}

export default LangSelector