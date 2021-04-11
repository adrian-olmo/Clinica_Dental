# Clinica_Dental
 
### Introduccion: 

Gestión de una Clínica Dental manejada mediante una base de datos **SQL** y que interactua con funciones desarrolladas en **Node.js** con el ORM de **Sequelize** para gestionar las funciones de SQL

### Endpoints: 
  ### Authentication :key:
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicación;
    - `{
    "auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0.2kI3uZ9-y13ASLhoBuquI4BTjVFJ5VKfrfdyRx6Ho_k"
}`
