# PFA Discord Bot GPT (TODO)


The PFA Discord Bot GPT is a Discord bot that uses the GPT-3 language model to generate text and answer your questions in an informative way.

This project aims to help learn DevOps by automating the CI/CD process. The project uses GitHub Actions to trigger workflows that build and deploy the app to GitHub Registry, DockerHub, and Azure Container Service.

[![Build & Test Node app (CI) for dev](https://github.com/ENET-Com-22/pfa-discord-bot-gpt/actions/workflows/node.js.yml/badge.svg)](https://github.com/ENET-Com-22/pfa-discord-bot-gpt/actions/workflows/node.js.yml) 
[![Build & publish Docker image for dev](https://github.com/ENET-Com-22/pfa-discord-bot-gpt/actions/workflows/docker.yml/badge.svg)](https://github.com/ENET-Com-22/pfa-discord-bot-gpt/actions/workflows/docker.yml)

---
## Requirements

For development, you will only need Node.js and a node global package installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.18.1

    $ npm --version
    9.2.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###

## Install

    $ git clone git@github.com:ENET-Com-22/pfa-discord-bot-gpt.git
    $ cd pfa-discord-bot-gpt

    //Check the current branch
    $ git branch

    //Switch to "dev" branchif the current branch is not "dev"
    $ git checkout dev

    $ npm install

## Configure app

Make a copy of [.env-tamplate](./.env-template) and rename it to `.env`.

Next, you need to fill enviroment vars inside [.env](./.env) with your own APIs keys. 

- DISCORD_TOKEN - [Discord Developer Portal](https://discord.com/developers/applications)
- OPENAI_ORG - [OpenAI Organization settings](https://platform.openai.com/account/org-settings)
- OPENAI_KEY - [OpenAI API keys](https://platform.openai.com/account/api-keys)

### Setup Discord

  To make a Discord bot, you need to create a discord application through [Discord Developer Portal](https://discord.com/developers/applications):

1. Click on `New Application` button

2. Give your application a name , check the terms of servive box and then`Create`.

3. In `Bot` section, name your bot and make sure the following options are enabled:

      - PUBLIC BOT
      - MESSAGE CONTENT INTENT

4. Go to `OAuth2` section then `URL Generator`. You need to check `bot` in scopes and `Administrator` in permissions (it's not recemmeded to grant adminstrator permission to a bot, we're doing so for demo purposes). Copy the generated URL at bottom of the page and run it on your browser. You'll be prompted to select your Discord server where you want to add your bot.

5. In `General` section under`OAuth2`, regenerate an new "CLIENT SECRET" key by clicking on `Reset secret`. Copy the new client secret key to your `.env` as DISCORD_TOKEN.

### OpenAi API
You need to have an OpenAi account in order to access their API.

1. Login or create a new account on https://platform.openai.com/overview

2. Create a new secret key for the bot (https://platform.openai.com/account/api-keys). Once generated, copy and paste it in `.env` as OPENAI_KEY

3. Finally, to fill the last environment variable OPENAI_ORG, just go to `settings` then copy your Organization ID.


## Running the project

    $ npm start

The bot will now be available in your Discord server.