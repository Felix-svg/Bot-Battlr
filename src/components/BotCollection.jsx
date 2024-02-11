function BotCollection({ bots, addToArmy }) {
  return (
    <div>
      <h2>Bot Collection</h2>
      <div className="bot-collection">
        {bots.map((bot, index) => (
          <div className="bot-in-collection" key={index}>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>Name: {bot.name}</h3>
            <h3>Class: {bot.bot_class}</h3>
            {/* <h3>Health: {bot.health}</h3>
            <h3>Armor: {bot.armor}</h3>
            <h3>Damage: {bot.damage}</h3> */}
            <button onClick={() => addToArmy(bot)} className="enlist-button">
              Enlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BotCollection;
