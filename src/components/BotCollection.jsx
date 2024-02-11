// import React, { useState, useEffect } from "react";
// import Bot from "./Bot";

// const BotCollection = () => {
//   const [bots, setBots] = useState([]);

//   // Fetch bots from db.json
//   useEffect(() => {
//     fetch("http://localhost:3000/bots")
//       .then((resp) => resp.json())
//       .then((data) => setBots(data.map((bot) => bot)));
//   }, []);

//   const handleEnlistBot = (bot) => {
//     // Check if bot already enlisted and update state
//     if (!bots.find((b) => b.id === bot.id)) {
//       setBots(b => [...b, bot]);
//     }
//   };

//   return (
//     <>
//       <h2>Bot Collection</h2>
//       <div className="bot-collection">
//         {bots.map((bot, index) => (
//           <div className="bot-in-collection" key={index}>
//             <Bot key={bot.id} bot={bot} onEnlistClick={handleEnlistBot} />
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default BotCollection;
const BotCollection = ({ bots, addToArmy }) => {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot, index) => (
          <div className="bot-in-collection" key={index}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <button onClick={() => addToArmy(bot)}>Add to Army</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default BotCollection;
