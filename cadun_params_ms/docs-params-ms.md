# Descripción General del Microservicio de Parámetros

**Nombre:** CADUN Params Microservice  
**Descripción:** Este microservicio maneja operaciones CRUD relacionadas con órdenes de fabricación. Utiliza Flask y MongoDB para la persistencia de datos.  
**Base URL:** `http://localhost:4000/`

# Endpoints

| **Método**                                | **Endpoint**         | **Descripción**                                     | **Parámetros**                                                       |
| ----------------------------------------- | -------------------- | --------------------------------------------------- | -------------------------------------------------------------------- |
| <span style="color:#27ae60">GET</span>    | `/`                  | Devuelve un mensaje de bienvenida y bases de datos. | N/A                                                                  |
| <span style="color:#27ae60">GET</span>    | `/orders`            | Obtiene todas las órdenes registradas.              | N/A                                                                  |
| <span style="color:#2980b9">POST</span>   | `/orders`            | Crea una nueva orden.                               | `order_id`, `user_email`, `diameter`, `length`, `thickness`, `state` |
| <span style="color:#27ae60">GET</span>    | `/orders/<order_id>` | Obtiene una orden específica por `order_id`.        | N/A                                                                  |
| <span style="color:#e74c3c">DELETE</span> | `/orders/<order_id>` | Elimina una orden específica por `order_id`.        | N/A                                                                  |
| <span style="color:#f39c12">PUT</span>    | `/orders/<order_id>` | Actualiza los detalles de una orden específica.     | `user_email`, `diameter`, `length`, `thickness`, `state`             |
