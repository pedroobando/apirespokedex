<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Pokedex

## Intalacion

1. Clonar repositorio
2. Ejecutar yarn

```
yarn install
```

3. Instalar el nest/cli

```
npm i -g @nestjs/cli
```

4. Levantar base de datos (contenedor)

```
docker compose up -d
```

5. Clonar o renombrar archivo `.env.template` a `.env`

6. Llenar las variables de archivo `.env`

7. Ejecutar la aplicacion en dev:

```
yarn start:dev
```

8. Construccion de la base de datos con la semilla

```
http://localhost:3000/api/v2/seed
```

## Stack usado

- Nestjs
- MongoDb
