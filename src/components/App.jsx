import { useState, useEffect } from 'react';

import BotCollection from './BotCollection'

function App() {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((resp) => resp.json())
      .then((data) => setBots(data.map((bot) => bot)));
  }, []);


  return (
    <>
      <BotCollection botsData={bots}/>
    </>
  )
}

export default App
