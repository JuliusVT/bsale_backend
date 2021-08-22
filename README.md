# bsale_backend
## Prueba técnica bsale
## Requisitos
- Contar con NodeJS en su última versión
## Instalación
- Clonar el proyecto
- Ejecutar el comando `npm install`
## Teconologías aplicadas al proyecto
- nose.js
- Express: Framework node.js
- Morgan: Monitoreo de consultas realizadas por el cliente
- Nodemon: Monitoreo de cambios en el codigo y renicio automático de la aplicación (esto solo funciona en el entorno de desarrollo)
- Mysql: Driver para conexión
- Express-myconnection: Modulo de express para interactuar con las conexiones y consultas de mysql

## Ejecucion en entorno local
Para ejecutar el proyecto en entorno local usaremos `npm run dev`
## Ejecucion en producción
Para ejecutar el proyecto en producción usaremos `npm run start`

## Enlaces rutas de la API
[Ruta inicial](https://backend-bsale-julius.herokuapp.com/)

[Ruta Productos](https://backend-bsale-julius.herokuapp.com/api/products)

[Ruta Categorias](https://backend-bsale-julius.herokuapp.com/api/categories)

## Enlace a la Documentación
[![Documentación con Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/7433309-d11f335f-436d-4b61-9f21-fceb8d5c2564?action=collection%2Ffork&collection-url=entityId%3D7433309-d11f335f-436d-4b61-9f21-fceb8d5c2564%26entityType%3Dcollection%26workspaceId%3Dad04b560-c6b3-4329-9c7a-799b280471c3)

## Explicación del ejercicio
El presente ejercicio consiste en la construcción de una API la cual pueda ser consumida por cualquier cliente que utilice peticiones GET.
Esta API consta de 2 endpoins:

1. Endpoin cumple función de traer todos los productos, este endpoin recibe parametros.
  - page: indica el número de pagina
  - category: buscara productos relacionados con la categoria a buscar
  - order: busca los productos por los siguiente filtros
    - alfabético (ascendente y descendente)
    - precios (mayor y menor)
  - search : busca los productos por nombre
2. Endpoin cumple la función de traer todas las categorias

Adicionalmente este ejercicio cuanta con paginacion de productos y filtro de productos por ordenamiento y categorias