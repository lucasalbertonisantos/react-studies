import React, {useState, useEffect} from "react";
import wikipedia from "../apis/wikipedia";

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedText, setDebouncedText] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedText(term);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [term]);

    useEffect(() => {
        const search = async () => {
            const {data} = await wikipedia.get('/w/api.php', {
                params: {
                    srsearch: debouncedText
                }
            });
            setResults(data.query.search);
        }
        search();
    }, [debouncedText]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`${wikipedia.defaults.baseURL}?curid=${result.pageid}`}>GO</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        )
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={e => setTerm(e.target.value)} className="input" />
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;