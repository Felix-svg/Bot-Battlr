function YourBotArmy({ army, setArmy }) {
  const handleReleaseBot = (bot) => {
    // Remove bot from enlisted list and update state
    const updatedArmy = army.filter((b) => b.id !== bot.id);
    setArmy(updatedArmy);
  };

  const handleDischargeBot = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then(() => handleReleaseBot(bot))
      .catch((error) => {
        console.error("Error discharging bot:", error);
      });
  };

  return (
    <div>
      <h2>Your Bot Army</h2>
      <div className="your-bot-army">
        {army.map((bot) => (
          <div key={bot.id} className="bot-in-army">
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <h3>Class: {bot.bot_class}</h3>
            <h3>Health: {bot.health}</h3>
            <h3>Armor: {bot.armor}</h3>
            <h3>Damage: {bot.damage}</h3>
            <h3>Catchphrase: {bot.catchphrase}</h3>
            <button
              onClick={() => handleReleaseBot(bot)}
              className="release-button"
            >
              Release
            </button>
            <button
              className="discharge-button"
              onClick={() => handleDischargeBot(bot)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
