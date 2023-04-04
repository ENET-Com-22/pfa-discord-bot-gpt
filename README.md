# PFA Discord Bot GPT (TODO)

[TODO App Description]

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


## Running the project

    $ npm start
