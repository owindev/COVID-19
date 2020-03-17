const request = require('request');
const Discord = require("discord.js");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars 3447003


  request.get("https://corona.lmao.ninja/all", (error, response, body) => {
    let json = JSON.parse(body);
    message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "COVID-19 Stats",
      description: "(Gathered from various sources)",
      fields: [{
        name: "Cases",
        value: `${json.cases}`
        },
        {
          name: "Deaths",
          value: `${json.deaths}`
        },
        {
          name: "Recovered",
          value: `${json.recovered}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© COVID-19 Bot"
      }
    }
  });

  });



};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["COVID"],
  permLevel: "User"
};

exports.help = {
  name: "stats",
  category: "Spotify",
  description: "COVID-19 Stats. Gathered from Various Sources",
  usage: "stats"
};
