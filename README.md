# Clinica_Dental
 
### Introduccion: 

Gesti贸n de una Cl铆nica Dental manejada mediante una base de datos **SQL** y que interactua con funciones desarrolladas en **Node.js** con el ORM de **Sequelize** para gestionar las funciones de SQL

### Endpoints: 
  ### Authentication 馃攼
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicaci贸n, para obtener esta clave ser谩     necesario identificar a los usuarios por el rol dentro de la base de datos.
    -  Ejemplo :key: `{"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0"}`


### Usuarios 馃懁
  
  - Un endpoint que otorga una clave de seguridad.
  - Funcionamiento y Llave: 
    - `/auth` : endpoint que otorga a los usarios administradores una llave secreta para accedere a otras funcionalidades dentro de la aplicaci贸n
    -  Ejemplo :key: `{"auth": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5pc3RyYWRvciIsImlhdCI6MTYxODE1NjE2MH0"}`
  - Endpoint para realizar el login.
  - Funcionamiento y Llave:
    - `/users` : recibe en el header un dni y telefono y devuelve "datos incorrectos" en caso de fallo y un json token en caso de verificaci贸n correcta.
  - Endpoint para crear el usuario.
  - Funcionamiento y Llave:
    - `/users` : metodo POST recibe en el body un objeto json con los datos de usuario y devuelve "el DNI del usuario ya existe en la base de datos" en caso de repetici贸n de dni y un objeto json con los datos del usuario en caso de creaci贸n correcta.
  - Endpoint para ver perfil de usuario.
  - Funcionamiento y Llave:
    - `/users/profile` : recibe en el header un json web token obtenido del login y un dni y devuelve "no existe el dni (n煤mero dni introducido) en nuestra base de datos" en caso de no encontrar dni y un objeto json con los datos del usuario en caso de b煤squeda correcta.
  - Endpoint para realizar el logout.
  - Funcionamiento y Llave:
    - `/users/logout` : no necesita ningun dato y responde "gracias por elegir Clinica Dental, hasta pronto".

### Doctors 鈿曪笍
  
  - Un endpoint controlado con una llave secreta que permite ver el listado completo de los doctores disponibles dentro de la clinica
  - Funcionamiento y Llave: 
    - `/doctors` : Tras verificar si la clave de autenticaci贸n es la correcta se mostrar谩n a todos los dentistas de la clinica y todos sus datos.

### Datings 馃搯
  
  - Un endpoint que controla todas las acciones de las citas de la Clinica
  - Funcionamiento y Llave: 
    - `/datings` : Permite listar todas las citas (m茅todo Get); Crear citas nuevas (m茅todo Post); Actualizar el estado de una cita mediante su ID y con el nuevo estado de la misma (m茅todo Patch)
    - `/datings/pro`: Un endpoint que muestra el listado de todas aquellas citas que est谩n pendientes de ser atendidas

### Tools 馃敡
  
  - **Node.js**: Entorno de ejecuci贸n de JavaScript
  - **Express**: Framework Backend de node.js
  - **Dotenv**: Gesti贸n de variables de entorno
  - **Sequelize**: ORM que permite interactuar con SQL
  - **Postman**: Software para realizar las peticiones
  ![image](https://user-images.githubusercontent.com/75450403/114313403-aa04b680-9af6-11eb-88e5-0fe7e0bfa0cb.png)
  - **GitHub**: Control de versiones 
  ![image](https://user-images.githubusercontent.com/75450403/114313512-18497900-9af7-11eb-8855-0ce999d00fda.png)



### Control de Versiones
  
  - Utilizando la herramienta de GitHub y GitHub Desktop, se ha podido controlar, corregir y verificar los cambios realizados en el proceso de desarrollo de la aplicaci贸n
  - Para evitar interferencias en las diferentes versiones de los miembros del proyecto, se dividi贸 el repositorio en diferentes ramas:
    - **main**: Rama con la aplicacion final.
    - **Demo**: Rama con una versi贸n beta donde se realizan las diferentes pruebas necesarias antes de lanzar la versi贸n final
    - **Adri y Gabo**: Ramas de los diferentes programadores
  - Tras crear el entorno, los desarrolladores despliegan e implementan peque帽as funciones en sus respectivos entornos y posteriormente se juntan dentro de la rama **Demo** para probrar el conjunto de las funcionalidades y verificar que no hay conflictos en los archivos ni errores dentro del c贸digo.
