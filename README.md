# Clinica_Dental
 
### Introduccion: 

Gestión de una Clínica Dental manejada mediante una base de datos **SQL** y que interactua con funciones desarrolladas en **Node.js** con el ORM de **Sequelize** para gestionar las funciones de SQL

### Endpoints: 
  ### Authentication 🔐
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicación, para obtener esta clave será     necesario identificar a los usuarios por el rol dentro de la base de datos.
    -  Ejemplo :key: `{"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0"}`


### Usuarios 👤
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicación
    -  Ejemplo :key: `{"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0"}`

### Doctors ⚕️
  
  - Un endpoint controlado con una llave secreta que permite ver el listado completo de los doctores disponibles dentro de la clinica
  - Funcionamiento y Llave: 
    - `/doctors` : Tras verificar si la clave de autenticación es la correcta se mostrarán a todos los dentistas de la clinica y todos sus datos.
    -  (Clinica_Dental/img/Captura.PNG)
