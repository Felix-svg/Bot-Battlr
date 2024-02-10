//import { useEffect, useState } from "react";

function BotCollection({ botsData }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>health</th>
            <th>damage</th>
            <th>armor</th>
            <th>bot_class</th>
            <th>catchphrase</th>
            <th>created_at</th>
            <th>updated_at</th>
          </tr>
        </thead>

        <tbody>
            {botsData.map((bot, _) => (
              <tr key={bot}>
                <td>{bot.id}</td>
                <td>{bot.name}</td>
                <td>{bot.health}</td>
                <td>{bot.damage}</td>
                <td>{bot.armor}</td>
                <td>{bot.bot_class}</td>
                <td>{bot.catchphrase}</td>
                <td>{bot.created_at}</td>
                <td>{bot.updated_at}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}

export default BotCollection;
