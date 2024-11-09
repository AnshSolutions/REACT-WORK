// import React, { useState } from 'react';
// import { JokeLoaderButton } from './components/JokeLoaderButton';

// // JokeCard Component for displaying each joke
// const JokeCard = ({ joke, removeJoke }) => (
//   <div>
//     <p>{joke.setup}</p>
//     <p>{joke.punchline}</p>
//     <button onClick={removeJoke}>Remove Joke</button>
//   </div>
// );

// function App() {
//   const url = 'https://official-joke-api.appspot.com/random_joke';
//   const [joke, setJoke] = useState({
//     id: 385,
//     type: "programming",
//     setup: "Why do programmers prefer dark mode?",
//     punchline: "Because light attracts bugs."
//   });
//   const [loading, setLoading] = useState(false);
//   const [jokesLoaded, setJokesLoaded] = useState(0);
//   const [jokes, setJokes] = useState([joke]); // Start with one joke

//   const loadNewJoke = async () => {
//     setLoading(true);
//     const response = await fetch(url);
//     const data = await response.json();
//     setJoke(data);
//     setLoading(false);
//     setJokesLoaded(jokesLoaded + 1); // Increment joke count when a new joke is loaded
//   };

//   const removeJoke = (id) => {
//     setJokes(jokes.filter((joke) => joke.id !== id)); // Remove joke by id
//   };

//   return (
//     <>
//       <div>
//         <h1>Random Jokes Generator</h1>
//         <JokeLoaderButton loadNewJoke={loadNewJoke} />
//       </div>
//       <h3>{loading ? 'Loading...' : `${jokesLoaded} jokes loaded. ${joke.setup}`}</h3>
//       {!loading && <p>{joke.punchline}</p>}
//       {jokes.map((joke) => (
//         <JokeCard
//           key={joke.id}
//           joke={joke}
//           removeJoke={() => removeJoke(joke.id)} // Remove joke functionality
//         />
//       ))}
//     </>
//   );
// }

// export default App;
import React, { useState } from 'react';
import  JokeLoaderButton  from './comonents/JokeLoaderButton';

// JokeCard Component for displaying each joke
const JokeCard = ({ joke, removeJoke }) => (
  <div className="bg-white shadow-md p-6 rounded-lg mb-4 w-80">
    <p className="text-lg text-gray-700">{joke.setup}</p>
    <p className="mt-2 text-xl text-gray-600">{joke.punchline}</p>
    <button
      onClick={removeJoke}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
    >
      Remove Joke
    </button>
  </div>
);

function App() {
  const url = 'https://official-joke-api.appspot.com/random_joke';
  const [joke, setJoke] = useState({
    id: 385,
    type: "programming",
    setup: "Why do programmers prefer dark mode?",
    punchline: "Because light attracts bugs."
  });
  const [loading, setLoading] = useState(false);
  const [jokesLoaded, setJokesLoaded] = useState(0);
  const [jokes, setJokes] = useState([joke]); // Start with one joke

  const loadNewJoke = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setJoke(data);
    setLoading(false);
    setJokesLoaded(jokesLoaded + 1); // Increment joke count when a new joke is loaded
  };

  const removeJoke = (id) => {
    setJokes(jokes.filter((joke) => joke.id !== id)); // Remove joke by id
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Random Jokes Generator</h1>
      <JokeLoaderButton loadNewJoke={loadNewJoke} />
      <h3 className="mt-6 text-xl text-gray-700">{loading ? 'Loading...' : `${jokesLoaded} jokes loaded. ${joke.setup}`}</h3>
      {!loading && <p className="mt-4 text-lg text-gray-600">{joke.punchline}</p>}

      <div className="mt-8 space-y-4">
        {jokes.map((joke) => (
          <JokeCard
            key={joke.id}
            joke={joke}
            removeJoke={() => removeJoke(joke.id)} // Remove joke functionality
          />
        ))}
      </div>
    </div>
  );
}

export default App;

