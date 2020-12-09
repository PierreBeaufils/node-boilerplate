# Node.js boilerplate
Node.js with express server and PostgreSQL database boilerplate.

## Packages currently installed

- `express` : to setup a node.js server
- `pg` : PostgreSQL module
- `bcrypt` : For crypting datas
- `sanitize-html` : for escaping html in the body
- `cors` :
[CORS](https://www.npmjs.com/package/cors) is a node.js package for providing a Connect/Express middleware that can be used to solve any CORS issue when connecting your endpoint to any front-end such as react.
- `path` 
- `dotenv --save-dev` :
[Dotenv](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a .env file into process.env.

### Optional
- `sequelize` :
[Sequelize](https://sequelize.org/) is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.
- `cookie-parser`
- `multer`
- `jsonwebtoken`

## Project Structure
```
/app
--- /controllers
--- /models
--- /services
--- server.js
--- router.js
--- database.js
/migrations
/seeders
/node_modules
.env
.gitignore
index.js
package.json
README.md
```

## Migrations

### Configuration
For database management, for example with Sqitch, setup with :

`cd migrations`

`sqitch init <project-name> --engine pg`

`sqitch add <migration-name> -n 'description'`

`sqitch target add <target-name> db:pg:<databaseName>`

`sqitch engine add pg <target-name>`

### Deploy
`sqitch deploy <databaseName>`

or `sqitch deploy <target-name>`

or `sqitch deploy` if default target has been setup with the last configuration command

### Revert

`sqitch revert <target-or-base-ou-nothing> <migration-name>`

or `sqitch revert` revert all deploys

or `sqitch revert HEAD^2` to revert 2 migrations from