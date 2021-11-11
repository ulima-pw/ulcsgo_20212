# ulcsgo_20212

## useful commands
````
npx sequelize model:generate --name Torneo --attributes nombre:string,fecha:date,estado:integer
npx sequelize model:generate --name TipoTorneo --attributes nombre:string
npx sequelize db:migrate
npx sequelize db:migrate:undo --name 20211111001410-create_relation_torneo_tipotorneo
npx sequelize db:drop
````
