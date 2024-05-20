import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      const response = await fetch('https://api.quotable.io/quotes/random?tags=Wisdom');
      const data = await response.json();
      setQuote(data[0]);
    };

    if (navigator.onLine) {
      fetchQuote();
    } else {
      const localQuotes = [
        { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        // ... other local quotes
      ];
      const randomIndex = Math.floor(Math.random() * localQuotes.length);
      setQuote(localQuotes[randomIndex]);
    }
  }, []);

  return (
    <div id="quoteBox">
      <h2>Quotes</h2>
      <p id="quote">{quote.content} - {quote.author}</p>
    </div>
  );
}

export default QuoteBox;
