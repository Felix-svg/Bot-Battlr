// import React, { useState, useEffect } from 'react';
// import Bot from './Bot';
// import DischargeButton from './DischargeButton';

// const YourBotArmy = (onEnlistClick) => {
//   const [yourBots, setYourBots] = useState([]);

//   // Fetch or load enlisted bots
//   useEffect(() => {
//     fetch("http://localhost:3000/bots")
//       .then((resp) => resp.json())
//       .then((data) => setYourBots(onEnlistClick(data)));
//   }, []);

//   const handleReleaseBot = (bot) => {
//     // Remove bot from enlisted list and update state/storage
//     setYourBots(yourBots.filter(b => b.id !== bot.id))
//   };

//   const handleDischargeBot = (bot) => {
//     // Send delete request to backend API or update local storage
//     fetch(`http://localhost:3000/bots/${bot.id}`, {
//       method: 'DELETE',
//     })
//     .then(() => handleReleaseBot(bot))

//   };

//   return (
//     <>
//     <h2>Your Bot Army</h2>
//     <div className="your-bot-army">
//       {yourBots.map((bot) => (
//         <div key={bot.id} className="bot-in-army">
//           <Bot bot={bot}/>
//           <button onClick={() => handleReleaseBot(bot)}>Release</button>
//           <DischargeButton onDischargeClick={() => handleDischargeBot(bot)} />
//         </div>
//       ))}
//     </div>
//     </>
//   );
// };

// export default YourBotArmy;
const YourBotArmy = ({ army }) => {
  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {army.map((bot) => (
          <div key={bot.id} className="bot-in-army">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
export default YourBotArmy;
