#!/bin/bash

brew install nvm

echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.bash_profile
echo "export NVM_DIR=~/.nvm" >> ~/.bash_profile
source ~/.bash_profile

brew install yarn --without-node
nvm install 6 && nvm use 6
yarn global add create-react-native-app
create-react-native-app meu-deputado
cd meu-deputado
yarn global add @storybook/cli
getstorybook

echo -e "import StorybookUI from './storybook'\nexport default StorybookUI" > App.js
