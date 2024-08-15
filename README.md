# Curso de react native de midudev - Metacritic app

## Descripción del proyecto

Metacritic es una aplicacion para poder chequear las reseñas y valoraciones de algunos juegos, peliculas.

## Características

### Metacritic app:

- Pendiente definir con el pasar del curso

## Creación de proyecto

Ejecutar el comando:

    npx create-expo-app@latest curso-react-native-metacritic-app --template blank

Permitir que el proyecto se pueda ejecutar en web:

    npx expo install react-dom react-native-web @expo/metro-runtime

Instalar eslint en el proyecto:

    npx expo lint
    npm install --save --save-dev prettier eslint-config-prettier eslint-plugin-prettier

Configurar eslint:

    En el archivo .eslintrc.js debemos de agregar lo siguiente:
    module.exports = {
        extends: ['expo', 'prettier'],
        plugins: ['prettier'],
        rules: {
            'prettier/prettier': 'error',
        },
    };
    Tener las extensiones de eslint y prettier code formater en el Vs Code instalado.

Instalar constantes de expo para acceder a constantes de la aplicación:

    npx expo install expo-constants

Instalar dependencia para que las aplicaciones se visualicen bien en referencia al statusBarHeight:

    npx expo install react-native-safe-area-context

Para que rendericen los svg en la aplicacion:

    npx expo install react-native-svg

## ✔️ Tecnologías

- [React Native + Expo](https://reactnative.dev/)
- JavaScript

## Tecnologías secundarias

- Node.js y npm (incluyendo node_modules)
- VsCode
- Git
- GitHub
