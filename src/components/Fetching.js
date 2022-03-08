import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Fetching() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/quotes');
      // console.log('Data was fetched! This is the response', response.data);
      setQuotes(response.data.results);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      // console.log('Random quote response', response);
      setRandomQuote(response.data);
    } catch (error) {
      console.log('ERROR:', error);
    }
  };

  useEffect(() => {
    // console.log('useEffect was triggered');
    fetchData();
    fetchRandomQuote();
  }, []);

  // console.log('Component rendered', randomQuote);
  return (
    <div>
      <div>
        <h2>Random Quote</h2>

        {randomQuote ? (
          // We are not mapping over randomQuote
          // Because its just one object! Not an array of objects
          <div>
            <h4>{randomQuote.author}</h4>
            <p>{randomQuote.content}</p>
          </div>
        ) : (
          'No quote found'
        )}
      </div>
      <div>
        <h2>Quotes</h2>
        {quotes.map((quote, index) => {
          return (
            <div key={index}>
              <h4>{quote.author}</h4>
              <p>{quote.content}</p>
            </div>
          );
        })}
      </div>
      <button onClick={() => fetchData()}>Fetch data</button>
    </div>
  );
}
