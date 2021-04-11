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
  - Endpoint para realizar el login.
  - Funcionamiento y Llave:
    - `/users` : recibe en el header un dni y telefono y devuelve "datos incorrectos" en caso de fallo y un json token en caso de verificación correcta.
  - Endpoint para crear el usuario.
  - Funcionamiento y Llave:
    - `/users` : metodo POST recibe en el body un objeto json con los datos de usuario y devuelve "el DNI del usuario ya existe en la base de datos" en caso de repetición de dni y un objeto json con los datos del usuario en caso de creación correcta.
  - Endpoint para ver perfil de usuario.
  - Funcionamiento y Llave:
    - `/users/profile` : recibe en el header un json web token obtenido del login y un dni y devuelve "no existe el dni (número dni introducido) en nuestra base de datos" en caso de no encontrar dni y un objeto json con los datos del usuario en caso de búsqueda correcta.
  - Endpoint para realizar el logout.
  - Funcionamiento y Llave:
    - `/users/logout` : no necesita ningun dato y responde "gracias por elegir Clinica Dental, hasta pronto".

### Doctors ⚕️
  
  - Un endpoint controlado con una llave secreta que permite ver el listado completo de los doctores disponibles dentro de la clinica
  - Funcionamiento y Llave: 
    - `/doctors` : Tras verificar si la clave de autenticación es la correcta se mostrarán a todos los dentistas de la clinica y todos sus datos.

### Datings 📆
  
  - Un endpoint que controla todas las acciones de las citas de la Clinica
  - Funcionamiento y Llave: 
    - `/datings` : Permite listar todas las citas (método Get); Crear citas nuevas (método Post); Actualizar el estado de una cita mediante su ID y con el nuevo estado de la misma (método Patch)
    - `/datings/pro`: Un endpoint que muestra el listado de todas aquellas citas que están pendientes de ser atendidas

### Tools 🔧
  
  - **Node.js**: Entorno de ejecución de JavaScript
  - **Express**: Framework Backend de node.js
  - **Dotenv**: Gestión de variables de entorno
  - **Sequelize**: ORM que permite interactuar con SQL
  - **Postman**: Software para realizar las peticiones
  ![image](https://user-images.githubusercontent.com/75450403/114313403-aa04b680-9af6-11eb-88e5-0fe7e0bfa0cb.png)
  - **GitHub**: Control de versiones 

### Control de Versiones
  
  - Utilizando la herramienta de GitHub y GitHub Desktop, se ha podido controlar, corregir y verificar los cambios realizados en el proceso de desarrollo de la aplicación
  - Para evitar interferencias en las diferentes versiones de los miembros del proyecto, se dividió el repositorio en diferentes ramas:
    - **main**: Rama con la aplicacion final.
    - **Demo**: Rama con una versión beta donde se realizan las diferentes pruebas necesarias antes de lanzar la versión final
    - **Adri y Gabo**: Ramas de los diferentes programadores
  - Tras crear el entorno, los desarrolladores despliegan e implementan pequeñas funciones en sus respectivos entornos y posteriormente se juntan dentro de la rama **Demo** para probrar el conjunto de las funcionalidades y verificar que no hay conflictos en los archivos ni errores dentro del código.
