// import React from 'react';

// export default function JokeLoaderButton({ loadNewJoke }) {
//   return <button onClick={loadNewJoke}>Load New Joke</button>;
// }

import React from 'react';

export default function JokeLoaderButton({ loadNewJoke }) {
  return (
    <button
      onClick={loadNewJoke}
      className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
    >
      Load New Joke
    </button>
  );
}

