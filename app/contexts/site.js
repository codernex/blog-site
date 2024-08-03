"use client"

import {createContext, useContext, useEffect, useState} from "react";
import {
    fetchCategories, fetchCountries,
    fetchCurrencies,
    fetchLanguages,
    fetchSiteSettings,
    fetchTranslations
} from "../(site)/helpers/backend";
import {useFetch} from "../(site)/helpers/hooks";
import Cookies from "js-cookie";
import {useJsApiLoader} from "@react-google-maps/api";

const SiteContext = createContext(undefined)
export const useSite = () => useContext(SiteContext)
const SiteProvider = ({children, site}) => {
    const [currencies, setCurrencies] = useState([])
    const [languages] = useFetch(fetchLanguages)
    const [categories] = useFetch(fetchCategories)
    const [currency, setCurrency] = useState('')
    const [currencySymbol, setCurrencySymbol] = useState('')
    const [language, setLanguage] = useState('en')
    const [country, setCountry] = useState('')
    const [countryName, setCountryName] = useState('')

    const { isLoaded: isGoogleMapLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: site?.google_map_key,
        libraries: ["places"]
    })

    const [location, setLocation] = useState(null)
    const changeLocation = (location) => {
        setLocation(location)
        localStorage.setItem('location', JSON.stringify(location))
    }

    const [translations, setTranslations] = useState({})
    useEffect(() => {
        fetchTranslations({types: ['common', 'site']}).then(({success, data}) => {
            if (success) {
                let translations = {}
                data?.forEach(d => {
                    translations[d.key] = d.value
                })
                setTranslations(translations)
            }
        })
    }, [])

    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetchCountries().then(({success, data}) => {
            if(success) {
                setCountries(data)
                let country = localStorage.getItem('country')
                if(!!country) {
                    setCountry(country)
                    let find = data?.find(c => c?.code === country)
                    if(!!find) {
                        setCountryName(find?.name)
                    }
                } else {
                    setCountry(data?.length > 0 ? data[0]?.code : '')
                    setCountryName(data?.length > 0 ? data[0]?.name : '')
                }
            }
        })
    }, [])

    useEffect(() => {
        let find = countries.find((item) => item.code === country)
        if(!!find) {
            setCurrencies(find?.currencies)
            let currency = localStorage.getItem('currency')
            let findC = find?.currencies?.find(c => c?.code === currency)
            if(!!findC) {
                setCurrency(findC?.code)
                setCurrencySymbol(findC?.symbol)
            } else {
                setCurrency(find?.currencies[0]?.code)
                setCurrencySymbol(find?.currencies[0]?.symbol)
            }
        }
    }, [country])


    const translate = (key) => {
        return translations[key] || key
    }

    useEffect(() => {
        let lang = localStorage.getItem('language')
        if (!!lang) {
            setLanguage(lang)
        } else {
            setLanguage('en')
        }
    }, [])


    useEffect(() => {
        let find = languages?.find((item) => item.code === language)
        if (!!find) {
            if (find.rtl === 1) {
                document.documentElement.dir = 'rtl'
            }
        }
    }, [languages]);


    const changeCurrency = (code) => {
        let findC = countries.find((item) => item.code === country)
        let find = findC?.currencies.find((item) => item.code === code)
        if (!!find) {
            setCurrency(code)
            setCurrencySymbol(find?.symbol)
            localStorage.setItem('currency', code)
        }
    }

    const changeLanguage = (code) => {
        let find = languages.find((item) => item.code === code)
        if (!!find) {
            localStorage.setItem('language', code)
            Cookies.set('lang', code, {expires: 365})
            window.location.reload()
        }
    }

    const changeCountry = (code) => {
        let find = countries.find((item) => item.code === code)
        if (!!find) {
            setCountry(code)
            setCountryName(find?.name)
            localStorage.setItem('country', code)
            let findC = find?.currencies?.find(c => c?.code === currency)
            if(!findC && find?.currencies?.length > 0) {
                changeCountry(find?.currencies[0]?.code)
            }
        }
    }


    return (
        <SiteContext.Provider
            value={{
                ...site,
                categories,
                isGoogleMapLoaded,
                currency,
                currencySymbol,
                currencies,
                changeCurrency,
                country,
                countryName,
                countries,
                changeCountry,
                language,
                languages,
                changeLanguage,
                translate,
                location,
                changeLocation,
            }}>
            {children}
        </SiteContext.Provider>
    )
}

export default SiteProvider