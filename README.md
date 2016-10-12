# pr0grammab0t
My personal discord bot

Click [here](https://discordapp.com/oauth2/authorize?&client_id=235429745221828608&scope=bot) to add my bot to your server right now!

# Using your own bot

If you allready have your own bot or would like to create your own bot using this code you can follow the instructions bellow.

1. Create your own bot on [discord developer applications](https://discordapp.com/developers/applications)
2. Set the bot to be an *app bot user* and collect the token
3. Do one of the following bellow

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git git@github.com:GOGO98901/pr0grammab0t.git # or clone your own fork
cd pr0grammab0t
npm install
npm start
```
Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```sh
heroku create
git push heroku master
heroku config:set TOKEN={Your_Token} # replace {Your_Token} with the token that you have collected from discord
heroku config:get TOKEN -s  >> .env
heroku open
```

Alternatively, you can deploy your own copy of the app using the web-based flow:

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/GOGO98901/pr0grammab0t/tree/master&env[TOKEN]=Your_Token)

## Adding the bot to your server

To add my bot to your server click [here](https://discordapp.com/oauth2/authorize?&client_id=235429745221828608&scope=bot).
However if you want to add your own bot to your server you need to collect your bots *`client_id`* from the [applications page](https://discordapp.com/developers/applications) on discord.

Using the link bellow, replace `{client_id}` with the client id of your own bot and enter the new link into your browser.
```
https://discordapp.com/oauth2/authorize?&client_id={client_id}&scope=bot
```
Simple.
	
## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [10 Habits of a Happy Node Hacker](https://blog.heroku.com/archives/2014/3/11/node-habits)
- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)
