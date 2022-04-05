import React, {useState, useEffect, useLayoutEffect} from "react";
import googleapi from "../apis/googleapi";

const Convert = ({language, text}) => {
    const [translated, setTranslated] = useState('');
    const [debouncedText, setDebouncedText] = useState('');

    useLayoutEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return () => {
            clearInterval(timerId);
        }
    }, [text]);

    useEffect(() => {
        const doTranslation = async ()=>{
            const {data} = await googleapi.post('/language/translate/v2', {}, {
                params: {
                    q: debouncedText,
                    target: language.value
                }
            });
            setTranslated(data.data.translations[0].translatedText);
        };
        doTranslation();
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
};

export default Convert;