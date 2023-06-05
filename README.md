# docker-node-mongo-crud

Hola para comenzar tienes que ejecutar con docker ejecuta el siguiente comando.

Recuerda clonar el repositorio
// para modo de devolper para pruebas locales
 docker compose -f docker-compose-dev.yml up 
// para producción 
docker compose docker-compose.yml up

//la ruta principal para consulta los datos en la bd
http://localhost:3000/

//para crear un Animal que es Schema que esta creado con dos campos tipo y estado
http://localhost:3000/crear/caballo
//para actualizar un Animal que es Schema que esta creado con dos campos tipo y estado donde se cambia el estado de Feliz a Triste
http://localhost:3000/actualizar/caballo
//para borrar un Animal en este caso el caballo
http://localhost:3000/borrar/caballo
