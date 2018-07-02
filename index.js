const Discord = require('discord.js')
const bot = new Discord.Client()
const client = new Discord.Client()
var membres_afk = []
var prefix = '!';


Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

bot.on('ready', function() {
  bot.user.setGame("!help | IceKow™");
  console.log("I'm ready !");
})

bot.on('message', function (message) {
if (message.content === "!clearme"){
    message.delete()
    message.channel.send(":white_check_mark: *Ton message a bien été supprimé*")
.then(msg => console.log(`Message supprimé de ${msg.author.username} sur le serveur ${message.guild}`))
  .catch(console.error);
}

if(message.content === 'SpicyxBot')
message.channel.send('Mon préfix est : \`!\`, faites \`!help\` pour __afficher mon aide__')

if (message.content === "!help"){
     message.channel.send("\n\n**Bienvenue sur la commande** \`!help\`.\n\n:shield: **MODERATION** :shield:\n```!purge\n!clearall\n!kick\n!ban\n!deletechannel```\n\n:pushpin: **UTILE** :pushpin:\n```!help\n!ping\n!si\n!bi\n!ui\n!afk\n!avatar\n!aide\n!report```\n\n:tada: **FUN** :tada:\n```!say\n!rps\n!8ball\n!roll\n!vcs\n!flip\n!virus\n!lucky\n!clearme```\n*Pour plus d'informations sur une commande, veuillez faire* \`!help\` *suivi de la commande*\n*Vous pouvez aussi faire* \`!help MODERATION\` / \`!help UTILE\` / \`!help FUN\` *pour afficher les commandes de la cathégorie désiré*")
     console.log("Commande help effectuée !")
     return;
  }

  if(message.content === "!help aide"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !aide')
    .addField("Description :", "demander de l'aide au staff du serveur")
    .addField("Utilisation :", "!aide <texte>")
    .addField("Exemple :", "!aide Je n'arrive pas à me connecter au salon chocolat")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help clearme"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !clearme')
    .addField("Description :", "effacer la commande")
    .addField("Utilisation :", "!clearme")
    .addField("Exemple :", "!clearme")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help lucky"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !lucky')
    .addField("Description :", "savoir son nombre chance")
    .addField("Utilisation :", "!lucky")
    .addField("Exemple :", "!lucky")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help virus"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !virus')
    .addField("Description :", "lancer un faux virus")
    .addField("Utilisation :", "!virus")
    .addField("Exemple :", "!virus")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help flip"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !flip')
    .addField("Description :", "jouer à pile ou face")
    .addField("Utilisation :", "!flip")
    .addField("Exemple :", "!flip")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help vcs"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !vcs')
    .addField("Description :", "parler entre serveurs à distance")
    .addField("Utilisation :", "!vcs <texte>")
    .addField("Exemple :", "!vcs Hey !")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help roll"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !roll')
    .addField("Description :", "jouer au dé")
    .addField("Utilisation :", "!roll")
    .addField("Exemple :", "!roll")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help 8ball"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !8ball')
    .addField("Description :", "répondre aux questions")
    .addField("Utilisation :", "!8ball <question>")
    .addField("Exemple :", "!8ball J'aime le chocolat ?")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }
  if(message.content === "!help rps"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !rps')
    .addField("Description :", "jouer à pierre, feuille, ciseaux")
    .addField("Utilisation :", "!rps <pierre, feuille, ciseaux>")
    .addField("Exemple :", "!rps pierre")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }


  if(message.content === "!help say"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !say')
    .addField("Description :", "faire parler le bot")
    .addField("Utilisation :", "!say <texte>")
    .addField("Exemple :", "!say J'aime le chocolat")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help report"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !report')
    .addField("Description :", "signaler un utilisateur au staff du serveur")
    .addField("Utilisation :", "!report @user <raison>")
    .addField("Exemple :", "!report @SpicyxBot Il a mangé des chocolats en cachette")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help avatar"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !avatar')
    .addField("Description :", "afficher les avatars")
    .addField("Utilisation :", "!avatar @user")
    .addField("Exemple :", "!avatar @SpicyxBot")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help afk"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !afk')
    .addField("Description :", "signaler votre absence et votre retour")
    .addField("Utilisation :", "!afk")
    .addField("Exemple :", "!afk")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help ui"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !ui')
    .addField("Description :", "afficher les informations sur l'utilisateur qui effectue la commande")
    .addField("Utilisation :", "!ui")
    .addField("Exemple :", "!ui")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help bi"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !bi')
    .addField("Description :", "afficher les informtaions sur le bot")
    .addField("Utilisation :", "!bi")
    .addField("Exemple :", "!bi")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help si"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !si')
    .addField("Description :", "afficher les informations sur le serveur")
    .addField("Utilisation :", "!si")
    .addField("Exemple :", "!si")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help ping"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !ping')
    .addField("Description :", "afficher son pings")
    .addField("Utilisation :", "!ping")
    .addField("Exemple :", "!ping")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help help"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !help')
    .addField("Description :", "afficher les commandes")
    .addField("Utilisation :", "!help")
    .addField("Exemple :", "!help")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help deletechannel"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !deletechannel')
    .addField("Description :", "supprimer un salon textuel")
    .addField("Utilisation :", "!deletechannel")
    .addField("Exemple :", "!deletechannel")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help ban"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !ban')
    .addField("Description :", "bannir un utilisateur")
    .addField("Utilisation :", "!ban @user <raison>")
    .addField("Exemple :", "!ban @SpicyxBot Il a mangé des chocolats en cachette")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help kick"){
    let purgeemebed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Commande : !kick')
    .addField("Description :", "kicker un utilisateur")
    .addField("Utilisation :", "!kick @user <raison>")
    .addField("Exemple :", "!kick @SpicyxBot Il a mangé des chocolats en cachette")
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(purgeemebed);
    }

  if(message.content === "!help purge"){
let purgeemebed = new Discord.RichEmbed()
.setColor("#7289DA")
.setTitle('Commande : !purge')
.addField("Description :", "nettoyer un salon textuel")
.addField("Utilisation :", "!purge <amount>")
.addField("Exemple :", "!purge 10")
.setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
.setTimestamp()
message.channel.send(purgeemebed);
}

  if (message.content === '!help clearall'){
let clearallembed = new Discord.RichEmbed()
.setColor("#7289DA")
.setTitle('Commande : !clearall')
.addField("Description :", "nettoyer un salon textuel de 100 messages")
.addField("Utilisation :", "!clearall")
.addField("Exemple :", "!clearall")
.setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
.setTimestamp()
message.channel.send(clearallembed);
  }

  if (message.content === "!help MODERATION"){
       message.channel.send("\n\n**Bienvenue sur la commande** \`!help MODERATION\`.\n\n:shield: **MODERATION** :shield:\n```!purge\n!clearall\n!kick\n!ban\n!deletechannel```\n*Pour plus d'informations sur une commande, veuillez faire* \`!help\` *suivi de la commande*")
       console.log("Commande help effectuée !")
       return;
    }

    if (message.content === "!help UTILE"){
         message.channel.send("\n\n**Bienvenue sur la commande** \`!help UTILE\`.\n\n:pushpin: **UTILE** :pushpin:\n```!help\n!ping\n!si\n!bi\n!ui\n!afk\n!avatar\n!aide\n!report```\n*Pour plus d'informations sur une commande, veuillez faire* \`!help\` *suivi de la commande*")
         console.log("Commande help effectuée !")
         return;
      }

      if (message.content === "!help FUN"){
           message.channel.send("\n\n**Bienvenue sur la commande** \`!help FUN\`.\n\n:tada: **FUN** :tada:\n```!say\n!rps\n!8ball\n!roll\n!vcs\n!flip\n!virus\n!lucky\n!clearme```\n*Pour plus d'informations sur une commande, veuillez faire* \`!help\` *suivi de la commande*")
           console.log("Commande help effectuée !")
           return;
        }

  if(message.content === '!lucky'){
  var LuckNumber = Math.floor((Math.random() * 12000) + 0.120);
  const numEmb = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setAuthor('Lucky', 'https://vignette.wikia.nocookie.net/nintendo/images/0/02/Question_Block_NSMB.png/revision/latest?cb=20151206055532&path-prefix=en')
  .addField('Et votre nombre chanceux est...', `${LuckNumber} !`)
  .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
  message.channel.send({embed: numEmb})

}

    if(membres_afk.includes(message.author)) {
        let afk2embed = new Discord.RichEmbed()
        .setColor("#7289DA")
   .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`${message.author.tag} est maintenant AFK !`)
        .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
        membres_afk.remove(message.author);
        console.log("Commande n'est plus afk effectuée");
        return message.channel.send(afk2embed);
     }
 
     if (message.content === prefix + "afk"){
       message.delete()
        let afk1embed = new Discord.RichEmbed()
   .setColor("#7289DA")
   .setAuthor(message.author.username, message.author.avatarURL)
         .setDescription(`${message.author.tag} est maintenant AFK !`)
         .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
         membres_afk.push(message.author.tag);
         console.log("Commande est maintenant afk effectuée");
         return message.channel.send(afk1embed);
         
     }


if(message.content === '!si'){
  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let hour = message.guild.createdAt.getHours()
  let min = message.guild.createdAt.getMinutes()
   let sicon = message.guild.iconURL
   let serverembed = new Discord.RichEmbed()
   .setAuthor(message.guild.name, sicon)
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("Propriétaire du serveur", message.guild.owner.user.tag, true)
   .addField("ID", message.guild.id, true)
   .addField("Membres", message.guild.memberCount, true)
   .addField("Humains", message.guild.memberCount - message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Bots", message.guild.members.filter(m => m.user.bot).size, true)
   .addField("Channels", message.guild.channels.size, true)
   .addField("Rôles", message.guild.roles.size, true)
   .addField("Région", message.guild.region, true)
   .addField("En ligne", online.size, true)
   .addField("Création du serveur",`${day}/${month}/${year} à ${hour}:${min}`)
   .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
   message.channel.send(serverembed);

}

if (message.content === "!ui"){
  let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
  let days = message.author.createdAt.getDate()
  let months = 1 + message.author.createdAt.getMonth()
  let years = message.author.createdAt.getFullYear()
  let hours = message.author.createdAt.getHours()
  let mins = message.author.createdAt.getMinutes()
  let target = message.author;
  let botembed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
   .setColor("#7289DA")
   .setThumbnail(message.author.avatarURL)
   .addField('ID', message.author.id)
   .addField('Pseudo', message.author.tag)
   .addField('Nom', message.author.username) 
   .addField('Discrim', `#${message.author.discriminator}`, true)  
   .addField('Nickname', message.guild.member(target).displayName)  
   .addField('Date de création', `${days}/${months}/${years} à ${hours}:${mins}`) 
  .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
  .addField('Bot', message.author.bot, true)
  .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
  console.log("Commande botinfo effectué ! ")
  return message.channel.send(botembed)
}

if (message.content === "!bi"){
  let day = message.guild.joinedAt.getDate()
  let month = 1 + message.guild.joinedAt.getMonth()
  let year = message.guild.joinedAt.getFullYear()
  let hour = message.guild.joinedAt.getHours()
  let min = message.guild.joinedAt.getMinutes()
  let botembed = new Discord.RichEmbed()
  .setAuthor("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
  .setThumbnail("https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
  .setColor("#7289DA")
  .addField("Fondateur du bot", "IceKow™#5613")
  .addField("Date de création", "27/6/2018 à 18:00")
  .addField("Date d'arrivée", `${day}/${month}/${year} à ${hour}:${min}`)
  .addField("Rôle par défault", "@SpicyxBot")
  .addField("ID",message.client.user.id)
  .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
  console.log("Commande botinfo effectué ! ")
  return message.channel.send(botembed)
}

if (message.content === '!virus'){
    message.channel.sendMessage('``virus.exe...``')
      .then(msg => {
  
        msg.edit("``[▓▓▓                    ] / {virus}-virus.exe Packing files.``");

        msg.edit("``[▓▓▓                    ] / {virus}-virus.exe Packing files.``");
  
        msg.edit("``[▓▓▓▓▓▓▓                ] - {virus}-virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓                ] - {virus}-virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓           ] \ {virus}-virus.exe Packing files..``");
        
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓           ] \ {virus}-virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ] | {virus}-virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓         ] | {virus}-virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓      ] / {virus}-virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] - {virus}-virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] - {virus}-virus.exe Packing files..``");
  
        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ {virus}-virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ {virus}-virus.exe Packing files..``");

        msg.edit("``[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] \ {virus}-virus.exe Packing files..``");

        msg.edit("``Successfully downloaded {virus}-virus.exe``");

        msg.edit("``Successfully downloaded {virus}-virus.exe``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus.   |``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus..  /``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Injecting virus... -``");

        msg.edit("``Successfully Injected virus.exe``");

      })
    }


if (message.author.bot) return undefined;

let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(' ');
let command = args.shift().toLowerCase();

if (command === "say"){
let say = args.join(' ');
message.delete();
message.channel.send(say);
console.log(`Commande say effectuée sur le serveur ${message.guild}`)
}

if (command === 'avatar'){
  let user = message.mentions.users.first() || message.author;
let AvatarEmbed = new Discord.RichEmbed()
.setColor("#7289DA")
  .setAuthor(`Avatar de ${user.username}`)
  .setImage(user.displayAvatarURL)
  .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
  .setTimestamp()
  message.channel.send(AvatarEmbed)
  console.log(`Commande avatar effectuée sur le serveur ${message.guild}`)
}


if (command === 'kick'){  
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(":x: *Vous n'avez pas la permission d'utiliser cette commande !*");
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if (!member) return message.channel.send(":x: *Veuillez mentionner l'utilisateur à kicker !*")
if (!member.kickable) return message.channel.send(":x: *Vous ne pouvez pas kicker un membre avec un rôle supérieur ou égale à vous !*")

let reason = args.slice(1).join(' ');

member.kick(reason)
.catch(error => message.channel.send(`:x: *Désolé, vous ne pouvez pas kick car une erreur à eu lieu.* **erreur :** ${error}`));

let kickEmbed = new Discord.RichEmbed()
.setColor("#7289DA")
.setTitle(':hammer: **KICKED** :hammer:')
.setDescription(`${member.user.tag} a été kické avec la raison : **${reason}**`)
.setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
.setTimestamp()
message.channel.send(kickEmbed)
}

if (command === 'ban'){  
  if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(":x: *Vous n'avez pas la permission d'utiliser cette commande !*");
  let member = message.mentions.members.first();
  if (!member) return message.channel.send(":x: *Veuillez mentionner l'utilisateur à bannir !*");
  if (!member.bannable) return message.channel.send(":x: *Vous ne pouvez pas bannir un membre avec un rôle supérieur ou égale à vous !*")
  
  let reason = args.slice(1).join(' ');
  
  member.ban(reason)
  .catch(error => message.channel.send(`:x: *Désolé, vous ne pouvez pas bannir car une erreur à eu lieu.* **erreur :** ${error}`));
  
  let BanEmbed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle(':hammer: **BANNED** :hammer:')
  .setDescription(`${member.user.tag} a été banni avec la raison : **${reason}**`)
  .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
  message.channel.send(BanEmbed)
  }

  if(command === 'clearall'){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: *Vous n'avez pas la permission d'utiliser cette commande !*");
    message.channel.bulkDelete(100)
  message.channel.send(":white_check_mark: *Clear des messages dans le salon effectué avec succès !*")
  .then(messages => console.log(`Il y a eu un clear de ${messages.author.username} sur le serveur ${message.guild}`))
  .catch(console.error);
  }

  if(command === 'deletechannel'){
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(":x: *Vous n'avez pas la permission d'utiliser cette commande !*");
    message.channel.delete()
    .then(messages => console.log(`Il y a eu un delete de ${messages.author.username} sur le serveur ${message.guild}`))
    .catch(console.error);
  }

  if(command === 'purge'){
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(":x: *Vous n'avez pas la permission d'utiliser cette commande !*");
  if(isNaN(args[0])) return message.channel.send(':x: *Veuillez mettre un chiffre/nombre !*');
  message.channel.bulkDelete(args[0])
  .then(messages => console.log(`Il y a eu un purge de ${messages.author.username} sur le serveur ${message.guild}`))
    .catch(console.error);
  }

  if(command == 'flip') {
    let flipEmbed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setTitle('Flip')
    .addField("Réponse :", `**${Math.floor(Math.random() * 2) == 0 ? "Face" : "Pile"}** !`)
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
    message.channel.send(flipEmbed)
    .catch(console.error);
  }
  
if(command === 'ping'){
  let pingEmbed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle('Pings')
    .setDescription(`**${message.author.tag}** | :ping_pong: Pong : ${bot.ping}ms`)
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
message.channel.send(pingEmbed)
    .catch(console.error);

}

if(command === 'aide'){
  var rreason = args.join(" ").slice();
  
  let day = message.createdAt.getDate()
  let month = 1 + message.createdAt.getMonth()
  let year = message.createdAt.getFullYear()
  let hour = message.createdAt.getHours()
  let min = message.createdAt.getMinutes()
  var reportEmbed = new Discord.RichEmbed()
      .setColor("#7289DA")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setThumbnail(message.author.avatarURL)
      .addField("Utilisateur a aider", `${message.author} avec ID: ${message.author.id}`)
      .addField("Date",`${day}/${month}/${year} à ${hour}:${min}`)
      .addField("L'aide demandé", `**${rreason}**`)
      .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()
  
  var reportschannel = message.guild.channels.find(`name`, "aides");
  if (!reportschannel) return message.channel.send(":x: *Veuillez créer un salon \`aides\`*");
  
  
  message.delete().catch(O_o => { });
  reportschannel.send(reportEmbed);

  message.channel.send(":white_check_mark: *Un membre du staff répondra à votre aide, veuillez patienter !*")
  
  }

if(message.content === '!report'){
var rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if (!rUser) return message.channel.send(":x: *Veuillez mentionner l'utilisateur à report !*");
var rreason = args.join(" ").slice(22);

let day = message.createdAt.getDate()
let month = 1 + message.createdAt.getMonth()
let year = message.createdAt.getFullYear()
let hour = message.createdAt.getHours()
let min = message.createdAt.getMinutes()
var reportEmbed = new Discord.RichEmbed()
    .setColor("#7289DA")
    .setAuthor(message.author.username, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField("L'utilisateur report", `${rUser} avec ID: ${rUser.id}`)
    .addField("Report par", `${message.author} avec ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Date du report",`${day}/${month}/${year} à ${hour}:${min}`)
    .addField("Raison", `**${rreason}**`)
    .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
    .setTimestamp()

var reportschannel = message.guild.channels.find(`name`, "reports");
if (!reportschannel) return message.channel.send(":x: *Veuillez créer un salon \`reports\`*");


message.delete().catch(O_o => { });
reportschannel.send(reportEmbed);

}


if(command === 'roll'){
  let replies = ["1", "2", "3", "4", "5", "6"];
  let result = Math.floor((Math.random() * replies.length));

  message.delete().catch(O_o => {});

  try {
      let newembed = new Discord.RichEmbed()
      .setColor("#7289DA")
          .setAuthor("Un dé a été lancé !")
          .setDescription(`Roll par : ${message.author} \nRéponse : ${replies[result]}`)
          .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
          .setTimestamp()

      message.channel.send({
          embed: newembed
      });
  } catch (e) {
      console.log(e.stack);
  }; // The try is because it errored when I didn't do it.
};


if (message.author.equals(bot.user)) return;
    
if (!message.content.startsWith(prefix)) return;


var argss = message.content.substring(prefix.length).split(" ");

switch (argss[0].toLowerCase()) {

        case "8ball":
    let argss = message.content.split(" ").slice(1);
    let tte = argss.join(" ")
    if (!tte){
        return message.reply("*Merci de poser une question :8ball:*")};
    

        var replys = [
            "Oui",
            "Non",
            "Je sais pas",
            "Peut être"
        ];

        let reponse = (replys[Math.floor(Math.random() * replys.length)])
        var bembed = new Discord.RichEmbed()
        .setColor("#7289DA")
        .setDescription(":8ball: 8ball")
        .addField("Question", tte)
        .addField("Réponse", reponse)
        .setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
        .setTimestamp()
     message.channel.sendEmbed(bembed)

}

if(message.content.startsWith(prefix + "vcs")) {
  message.delete()
 var xo03 = message.content.split(" ").slice(1).join(" ")
var xo02 = message.guild.channels.find('name', 'vcs-SpicyxBot')
if(message.channel.name == "vcs-SpicyxBot") {
var embedvcs = new Discord.RichEmbed()
.setColor("#7289DA")
.setThumbnail(message.author.avatarURL)
.addField("VCS-SpicyxBot", message.author.username)
.addField("Provenant du serveur", message.guild.name)
.setFooter("SpicyxBot", "https://cdn.discordapp.com/avatars/460134595296493568/c7fad676368c819cee7c6758c1402af5.png?size=256")
   .setTimestamp()
return bot.channels.findAll('name', 'vcs-spicyx').map(a=>a.sendEmbed(embedvcs))
}
return message.channel.send(":x: *Veuillez écrire dans le salon vcs-SpicyxBot*");
}

if(command === 'rps'){
var choice = args[0];
  if (choice == "papier" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "ciseaux") {
      var response = "J'ai choisi **ciseaux** ! :v: J'ai gagné !"
    } else if (choice2 == "papier") {
      var response = "J'ai choisi **papier** ! :hand_splayed: Egalité !"
    } else {
      var response = "J'ai choisi **pierre** ! :punch: Tu as gagné !"
    }
    message.channel.send(response);
  } else if (choice == "pierre" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "papier") {
      var response = "J'ai choisi **papier** ! :hand_splayed: J'ai gagné !"
    } else if (choice2 == "pierre") {
      var response = "J'ai choisi **pierre** ! :punch: Egalité !"
    } else {
      var response = "J'ai choisi **ciseaux** ! :v: Tu as gagné !"
    }
    message.channel.send(response);
  } else if (choice == "ciseaux" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "papier";
    } else if (numb > 50) {
      var choice2 = "pierre";
    } else {
      var choice2 = "ciseaux";
    }
    if (choice2 == "pierre") {
      var response = "J'ai choisi **papier** ! :hand_splayed: Tu as gagné !"
    } else if (choice2 == "ciseaux") {
      var response = "J'ai choisi **Scissors** ! :v: Egalité !"
    } else {
      var response = "J'ai choisi **pierre** ! :punch: J'ai gagné !"
    }
    message.channel.send(response);
  } else {
    message.channel.send(`:x: *Vous avez mal effectué la commande.* \`${prefix}rps\` <pierre|papier|ciseaux>`);
  }
}
})

  bot.on('guildMemberAdd', (member) => {
var joinrole = member.guild.roles.find('name', 'Membres');
member.addRole(joinrole);
const joinchannel = member.guild.channels.find('name', 'nouveaux-membres');
joinchannel.send(`${member.user} bienvenue sur le serveur **SpicyxBot support** !`)
console.log(`Il y a eu une nouvelle personne sur le serveur`)
  })

bot.login('NDYwMTM0NTk1Mjk2NDkzNTY4.DheYXg._VrA_rZOEFnDSq0nPGjsoBh_Nho')