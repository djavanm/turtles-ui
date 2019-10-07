import React, { useState, useEffect }from 'react';
import './App.css';

function App() {
  const [ turtles, setTurtles ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  let turtleStuff = undefined;
  useEffect(() => {
    fetch(process.env.REACT_APP_BACKEND_URL + '/api/v1/turtles')
      .then(response => response.json())
      .then(data => {
        setTurtles(data)
        setLoading(false)
      })
  }, [])

  if(turtles.length) {
    turtleStuff = turtles.map(turtle => (
        <div key={turtle.id}>
        <h2>{turtle.name}</h2>
        <p>{turtle.type}</p>
        </div>
      ) 
    );
  };
  return (
    <div className="App">
      { loading && <h1>Loading...</h1> }
      { turtles.length && turtleStuff }
    </div>
  );
}

export default App;
