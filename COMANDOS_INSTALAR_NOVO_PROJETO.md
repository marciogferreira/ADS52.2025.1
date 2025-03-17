# React Native com Expo - Guia de Instalação

Este guia explica como instalar e configurar um projeto React Native utilizando Expo.

## Requisitos
Antes de iniciar, certifique-se de que possui os seguintes requisitos instalados:

- **Node.js** (versão LTS recomendada) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **Expo CLI** (Interface de Linha de Comando do Expo)
- **Emulador Android/iOS** ou um dispositivo físico com o aplicativo Expo Go instalado

## Passo 1: Instalando o Expo CLI
Abra o terminal e execute o seguinte comando para instalar o Expo CLI globalmente:

```sh
npm install -g expo-cli
```

## Passo 2: Criando um Novo Projeto
Para criar um novo projeto React Native com Expo, execute:

```sh
expo init meu-projeto

OU

npx create-expo-app@latest
```

Escolha a opção desejada no prompt (geralmente, "Blank" para um projeto vazio) e aguarde a instalação.

## Passo 3: Navegando até o Diretório do Projeto

```sh
cd meu-projeto
```

## Passo 4: Iniciando o Projeto
Para iniciar o servidor de desenvolvimento, utilize:

```sh
expo start
```

Isso abrirá o Expo Developer Tools no navegador e exibirá um QR Code.

## Passo 5: Executando no Dispositivo ou Emulador
- **No dispositivo físico**: Baixe o aplicativo "Expo Go" na App Store (iOS) ou Google Play (Android), escaneie o QR Code e abra o projeto.
- **No emulador**: Caso esteja usando um emulador Android (com Android Studio) ou um simulador iOS (Xcode), pressione "a" para abrir no Android ou "i" para abrir no iOS.

## Passo 6: Editando o Projeto
O código fonte do aplicativo está no arquivo `App.js`. Para ver alterações em tempo real, basta modificar o arquivo e salvar.

## Passo 7: Construindo o Aplicativo
Para criar uma build do app, use:

```sh
expo build:android  # Para Android
expo build:ios      # Para iOS (necessita conta Apple Developer)
```

Ou, caso esteja usando o Expo Application Services (EAS):

```sh
eas build -p android  # Para Android
eas build -p ios      # Para iOS
```

## Conclusão
Agora você tem um projeto React Native configurado com Expo e pronto para desenvolvimento!

Para mais informações, consulte a [documentação oficial do Expo](https://docs.expo.dev/).

