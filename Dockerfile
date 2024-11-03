# Usa una imagen base de Node.js ligera (Alpine)
FROM node:18-alpine

# Crear y establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar solo los archivos necesarios para instalar dependencias
COPY package*.json yarn.lock ./

# Instalar dependencias de producción únicamente para el entorno de producción
RUN yarn install --production

# Copiar el resto de la aplicación
COPY . .

# Exponer el puerto de la aplicación
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["yarn", "start:prod"]
