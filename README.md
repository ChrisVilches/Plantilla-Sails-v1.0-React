# Sails.js + React.js  + Webpack

## Tecnologias

1. Sails.js (v0.12.13)
2. React (v15.5.4)
3. Webpack (para poder usar `import Clase from 'modulo'` desde el cliente)
4. Jade
5. Bootstrap

## Funcionalidad

1. Tiene un par de componentes React
2. Tiene un chat (usando socket)
3. Los modelos y controladores de Sail.js tienen practicamente nada (la API del chat son rutas autogeneradas)
4. Mantiene cuenta de visitas de la instancia del servidor en un `Service`
5. Enrutador
    * Paso de parametros por URL
    * Paso de `props`
    * Cambio de ventanas a traves de un menu

## Instalacion y uso

Instalar con 

```
npm install
bower install
```

Parece que hay que tener Sails instalado globalmente (usar `npm install -g sails`)

Y empezar con

```
npm run dev
```

Ir a 

```
http://localhost:1337/
```

