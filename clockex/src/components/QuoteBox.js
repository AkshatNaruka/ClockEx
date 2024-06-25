import React, { useState, useEffect } from 'react';

function QuoteBox() {
  const [quote, setQuote] = useState({ content: '', author: '' });

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/quotes/random?tags=Wisdom');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setQuote(data[0]);
      } catch (error) {
        const localQuotes = [
          { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
          { content: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", author: "Albert Schweitzer" },
          { content: "The best way to predict the future is to create it.", author: "Peter Drucker" },
          { content: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
          { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" }
        ];
        const randomIndex = Math.floor(Math.random() * localQuotes.length);
        setQuote(localQuotes[randomIndex]);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div id="quoteBox">
      <h2>Quotes</h2>
      <p id="quote">{quote.content} - {quote.author}</p>
    </div>
  );
}

export default QuoteBox;
