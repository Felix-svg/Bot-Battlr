function BotCollection({ bots, addToArmy }) {
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
