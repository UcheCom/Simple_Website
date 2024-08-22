import React, { useEffect, useState }  from 'react';

const HelloWorld = () => {
  const [message, setMessage] = useState(''); // State holds the message

  useEffect(() => {
    // Fetches data form the Django API
    fetch('http://localhost:8000/api/hello/')
      .then(response => response.json()) // Parse the JSON from the response
      .then(data => {
        setMessage(data.message); // Set the fetched message 
      })
      .catch(error => console.error('Error fetching data:', error)); // Handle errors
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <h1>{message}</h1> {/* Renders the message */}
    </div>
  );
};

export default HelloWorld;