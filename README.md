Red Social
Aplicación de red social full-stack desarrollada con React en el frontend y Node.js +
Express + MongoDB (Atlas) en el backend. Permite a los usuarios registrarse, iniciar
sesión, seguir a otros usuarios, publicar contenido y ver un timeline de publicaciones.
Tecnologías utilizadas
Frontend
• React
• React Router DOM
• Vite
• Context API (autenticación global)
• Font Awesome (iconos)
Backend
• Node.js
• Express
• MongoDB Atlas (base de datos en la nube)
• Mongoose (ODM para MongoDB)
• JSON Web Tokens (JWT) para autenticación
• Bcrypt (cifrado de contraseñas)
• Multer (subida de archivos e imágenes)
Funcionalidades
• Registro e inicio de sesión de usuarios con contraseñas cifradas.
• Autenticación mediante JWT, persistida en localStorage.
• Perfil de usuario: nombre, apellidos, nick, biografía y avatar.
• Sistema de seguimiento: seguir / dejar de seguir a otros usuarios.
• Contadores: número de usuarios que sigues, que te siguen y publicaciones
realizadas.
• Listado de usuarios (sección "Gente") con paginación.
• Timeline / Feed: publicaciones de los usuarios que sigues.
• Publicaciones: creación, listado con paginación y eliminación (solo por el
autor).
• Subida de imágenes: avatar de usuario y archivos adjuntos en publicaciones.
• Rutas protegidas: separación entre rutas públicas (login, registro) y privadas
(feed, perfil, ajustes, etc.) mediante layouts diferenciados.
Estructura del proyecto
Frontend
src/
├── assets/ # Imágenes, fuentes y estilos
├── components/
│ ├── layouts/
│ │ ├── public/ # PublicLayout, Header
│ │ └── private/ # PrivateLayout, Header, Nav, Sidebar
│ ├── user/ # Login, Register, Logout, Profile,
People, Config, UserList
│ ├── follow/ # Following, Followers
│ └── publication/ # Feed, PublicationList
├── context/ # AuthProvider (Context de
autenticación)
├── helpers/ # Global (config API), GetProfile,
SerializeForm
├── hooks/ # useAuth, useForm
├── router/ # Routing (definición de rutas)
├── App.jsx
└── main.jsx

Backend
├── controllers/ # Lógica de negocio (user, follow,
publication...)
├── models/ # Esquemas de Mongoose (User, Follow,
Publication)
├── routes/ # Definición de endpoints de la API
├── middlewares/ # Autenticación (comprobación de JWT)
├── services/ # jwt (creación/verificación de tokens),
followService
├── helpers/ # Validaciones
├── database/ # Conexión a MongoDB Atlas
├── uploads/ # Archivos subidos (avatares,
publicaciones)
└── index.js # Punto de entrada del servidor
Instalación
Requisitos previos
• Node.js instalado
• Cuenta de MongoDB Atlas (o instancia local de MongoDB)
Backend
1. Accede a la carpeta del backend: cd Backend
2. Instala las dependencias: npm install
3. Crea un archivo .env en la raíz del backend con tu cadena de conexión de
MongoDB Atlas:
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.xxxxx.mongodb
.net/mi_redsocial
4. Arranca el servidor: npm start
El servidor quedará disponible en http://localhost:3900.
Frontend
1. Accede a la carpeta del frontend: cd Frontend
2. Instala las dependencias: npm install
3. Arranca el entorno de desarrollo: npm run dev
4. Abre la URL que indique la terminal (por defecto http://localhost:5173).
Asegúrate de que la URL configurada en src/helpers/Global.js del frontend
coincide con la URL donde corre tu backend (por defecto http://localhost:3900/api/).
Endpoints principales de la API
Método Endpoint Descripción
POST /api/user/register Registrar nuevo usuario
POST /api/user/login Iniciar sesión
GET /api/user/profile/:id Ver perfil de un usuario
GET /api/user/list/:page? Listar usuarios (paginado)
PUT /api/user/update Actualizar datos del usuario
POST /api/user/upload Subir avatar
GET /api/user/avatar/:file Obtener imagen de avatar
GET /api/user/counters/:id? Contadores de
seguidores/publicaciones
POST /api/follow/save Seguir a un usuario
DELETE /api/follow/unfollow/:id Dejar de seguir a un usuario
GET /api/follow/following/:id?/:page? Listar usuarios seguidos
GET /api/follow/followers/:id?/:page? Listar seguidores
POST /api/publication/save Crear publicación
GET /api/publication/feed/:page? Timeline de publicaciones
GET /api/publication/user/:id/:page? Publicaciones de un usuario
DELETE /api/publication/remove/:id Eliminar publicación propia
POST /api/publication/upload/:id Subir archivo adjunto a
publicación
GET /api/publication/media/:file
Obtener archivo de
publicación

