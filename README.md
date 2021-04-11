# Clinica_Dental
 
### Introduccion: 

Gestión de una Clínica Dental manejada mediante una base de datos **SQL** y que interactua con funciones desarrolladas en **Node.js** con el ORM de **Sequelize** para gestionar las funciones de SQL

### Endpoints: 
  ### Authentication 🔐
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicación
    -  Ejemplo :key: `{"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0"}`
