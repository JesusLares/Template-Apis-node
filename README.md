# Template de APIs node js

Este template para APIs se creo en node js con una estructura basica que permite poder seguir escalando el proyecto.

## Author

**JesusLares**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-jesusLares-0077B5?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=101010)](https://www.linkedin.com/in/jesusLares)
<br />
[![Web](https://img.shields.io/badge/jesuslares.com-5865F2?style=for-the-badge&logo=dev.to&logoColor=white&labelColor=101010)](https://jesuslares.com)
<br />
[![Github](https://img.shields.io/badge/jesuslares-238636?style=for-the-badge&logo=github&logoColor=white&labelColor=101010)](https://github.com/JesusLares)
<br />

### Ejecutar la Aplicación

**Utilizando make**

Aqui depende de si tienes docker o no,

**_Sin docker_**

Unicamente corre el comando `make init` y posterior a esto puedes ejecutar la aplicación con:

```bash
# windows
npm run dev:windows
# linux / Mac
npm run dev
```

**_Con docker_**

Ejecuta el siguiente comando para construir y ejecutar los contenedores de Docker (el primero genera la imagen y el segundo levanta un demonio):

```
  make build-development
  make start-development
```

Una vez quieras dejar de usar la app corre el comando

```
  make stop-develpoment
```

**Utilizando docker**

Ejecuta el siguiente comando para construir y ejecutar los contenedores de Docker (el primero genera la imagen y el segundo levanta un demonio):

```
  docker compose -f docker-compose.yml build app
  docker compose -f docker-compose.yml up -d app
```

Accede a la aplicación en http://localhost:5000

Una vez quieras dejar de usar la app corre el comando

```
	docker compose -f docker-compose.yml down app
```

**Sin Docker:**

Asegúrate de tener el archivo .env.development.
Instala las dependencias de la aplicación y la configuracion de husky:

```bash
  npm install
  npm run prepare
```

Ejecuta la aplicación con:

```bash
# windows
npm run dev:windows
# linux / Mac
npm run dev
```

Por ahora, se tienen 3 distintos ejemplos donde se implementan distinto tipos de base de datos, las cuales son Mysql, Sqlite3 y MongoDb. Estos ejemplos los puedes encontrar en sus respetivas ramas:

- ![Rama de Mongo](https://github.com/Jesus-Lares/Template-Apis-node/tree/mongoDb)
- ![Rama de Sqlite3 ](https://github.com/Jesus-Lares/Template-Apis-node/tree/sqlite3Db)
- ![Rama de Mysql ](https://github.com/Jesus-Lares/Template-Apis-node/tree/mysqlDB)

La idea con este template es la de mover partes basicas del codigo para que sirva como esqueleto de algun proyecto.

## Arquitectura Multicapa

Cada capa de la arquitectura debe incluirse en una carpeta específica .

```
__tests__
src
├─ context
├─ core
  ├─ config
  ├─ constants
  ├─ errors
  ├─ interface
  ├─ middlewares
  ├─ router
    ├─ v1
  ├─ utils
├─ app.js
├─ index.js
```

## Capa de context

Se puede decir a grandes rasgos que esta es la capa más importante del repositorio, ya que por dentro tendrá la gran parte de lógica del mismo, esta capa se estructura teniendo 3 sub capas las cuales son **application**, **domain** e **infra** la cual tiene otras 3 carpetas llamadas controller, useCases y routes.

- Application: Como el nombre lo dice, aquí se guardan las aplicaciones en general que se tienen, un ejemplo es guardar los métodos que te permite una base de datos como lo son: find, save, etc.
- Domain: En esta se guarda lo tipado, esto incluye las interfaces que se usen en este contexto, el schema del usuario, el modelo, etc.
- Infra: En la infraestructura se encuentran las carpetas:
  - Controller: en la cual se guardan los controladores del contexto,
  - UseCases: es donde se queda el código que se pueda separar, explicando esto de mejor manera se crean casos de uso para creación, búsqueda, actualización de usuario, etc. Esto con el fin de hacer que los controllers carguen con el menor código posible para su mejor entendimiento (aquí se manda a llamar a los archivos creados en application)
  - Routes: Se guardan todas las rutas que estén relacionadas con el contexto

## Capa de core

En esta capa se define todo lo que se comparta o pertenezca a la logica fuera del context, se agregan secciones las cuales son compartidas por todo el proyecto y no estan ligadas a una entidad en especifico.

Aqui se agregan las configuraciones, constantes globales, errores, helpers, interfaces, middlewares, el manejo de rutas, utilidades, etc.

Para proyectos pequeños, este enfoque puede no ser necesario. El problema radica en el hecho de que no se puede predecir la magnitud del proyecto. Es por eso que debe definir una capa diseñada para contener todos sus archivos de enrutamiento y lógica

## Archivos restantes en su estructura de varias capas

Tenga en cuenta que una arquitectura de este tipo puede no ser suficiente para cubrir todos los archivos que componen su base de código. Es por eso que siempre habrá archivos adicionales que quizás no sepa dónde colocar.

Seguir una estructura tan organizada le permite reducirlos a unos pocos lugares. Una buena regla general es que si tiene menos de tres archivos, debe dejarlos en la carpeta de nivel superior de su proyecto, o donde crea que pertenecen. De lo contrario, siempre puede diseñar nuevas capas que satisfagan sus necesidades.
