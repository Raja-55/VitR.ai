import React, { useState } from 'react';
import './search.css'

import { ClipLoader } from 'react-spinners'; 

function SearchComponent() {
  
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null); 
  const [input, setInput] = useState(''); 

  const handleSearch = async () => {
    setLoading(true); 
    try {
      const response = await fetchData(input); 
      setData(response);
    } catch (error) {
      console.error("Error fetching data", error);
    }
    setLoading(false); 
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter your query"
      />
      <button onClick={handleSearch}>Search</button>

      {loading ? (
        <div className="loading-container">
          <ClipLoader color="#00BFFF" size={50} />
        </div>
      ) : (
        <div>{data && <p>{data}</p>}</div>
      )}
    </div>
  );
}

const fetchData = async (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Result for: ${input}`);
    }, 2000);                                           
  });
};

export default SearchComponent;
