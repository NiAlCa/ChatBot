Chat Bot usando api OpenAi

Requisitos Previos
Node.js (versión X o superior)
MongoDB (localmente o una instancia de MongoDB Atlas)
npm (viene instalado con Node.js)

Configuración del Entorno

1.Clonar el repositorio:

git clone url_del_repositorio

2.Navegar al directorio del proyecto:
cd ChatBot

3.Instalar las dependencias del proyecto:
npm install

4.Configurar las variables de entorno necesarias:
Crear un archivo .env en la carpeta server.
Añadir las siguientes variables con tus valores correspondientes:

OPENAI_API_KEY=tu_clave_api_openai
MONGODB_URI=tu_cadena_conexión_mongodb
PORT=3000 (opcional, el puerto por defecto será 3000)


Ejecutar el Proyecto

BackEnd

1. Navegar al directorio server.

cd server

2. Ejecutar el servidor.

Node index.js

Frontend

1. Navegar al directorio del client:

cd client

2 Ejecutar la aplicación React:

npm run dev

3. La aplicación debería abrirse automáticamente en http://localhost:5173 en tu navegador. Si no, puedes acceder manualmente a esa URL.





[![Video Title](http://img.youtube.com/vi/vOLsjFpemMg/0.jpg)](http://www.youtube.com/watch?v=vOLsjFpemMg "Video Title")