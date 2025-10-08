
#  Sistema de Pagos Escolares - UTT 

---

##  Descripción
Sistema web para **gestión de pagos escolares** desarrollado con microservicios.  
Permite a **estudiantes** ver sus pagos pendientes y a **administradores** gestionar todo el sistema.

---

##  Tecnologías Usadas
- **Backend**: Node.js + Express ⚡  
- **Frontend**: React 🌐  
- **Base de Datos**: MongoDB 🍃  
- **Arquitectura**: Microservicios 🏗️  

---

##  Estructura del Proyecto
```
proyecto-cobros-escuela/
├── 📁 api-gateway/ (Puerto 3000)
├── 📁 auth-service/ (Puerto 3001)
├── 📁 payments-service/ (Puerto 3002)
└── 📁 frontend/ (Interfaz web)
```

---

## ⚙️ Instalación Paso a Paso 

### 1️ Clonar el Proyecto
```bash
git clone https://github.com/IRVINISAEL/UTT.git
cd proyecto-cobros-escuela
```

### 2️ Instalar Dependencias
```bash
cd api-gateway && npm install
cd ../auth-service && npm install
cd ../payments-service && npm install
```

### 3️Configurar Variables de Entorno 
En cada carpeta de servicio, crear archivo `.env`:

** api-gateway/.env**
```env
PORT=3000
AUTH_SERVICE_URL=http://localhost:3001
PAYMENTS_SERVICE_URL=http://localhost:3002
MONGODB_URI=mongodb://localhost:27017/utt_pagos
JWT_SECRET=mi_clave_secreta
```

** auth-service/.env**
```env
PORT=3001
MONGODB_URI=mongodb://localhost:27017/utt_auth
JWT_SECRET=mi_clave_secreta
```

** payments-service/.env**
```env
PORT=3002
MONGODB_URI=mongodb://localhost:27017/utt_payments
```

### 4️ Configurar MongoDB
- Tener MongoDB instalado y ejecutándose  
- O usar MongoDB Atlas (en la nube)  
- La base de datos se crea automáticamente

###  Ejecutar el Sistema

**Opción 1: Ejecutar Manualmente**
```bash
# Terminal 1 - Servicio de Autenticación
cd auth-service
npm start

# Terminal 2 - Servicio de Pagos
cd payments-service
npm start

# Terminal 3 - API Gateway
cd api-gateway
npm start
```

**Opción 2: Usar Script (si está configurado)**
```bash
npm run start:all
```

### ✅ Verificar Instalación
```
✅ Auth Service running on port 3001
✅ Payments Service running on port 3002
✅ API Gateway running on port 3000
```

###  Acceder al Sistema
**URL:** [http://localhost:3000](http://localhost:3000)  

**Usuarios de Prueba:**
- **Administrador:** usuario `admin001`, contraseña [consultar con el equipo]  
- **Estudiante:** matrícula `2023001`, contraseña [consultar con el equipo]

### 🛠️ Comandos Útiles
```bash
# Modo desarrollo (con recarga automática)
npm run dev

# Ver logs detallados
DEBUG=* npm start

# Reinstalar dependencias
rm -rf node_modules && npm install
```

###  Solución de Problemas Comunes
- **Error: "Port already in use"**: Cambiar el puerto en `.env` o cerrar procesos que lo usen
- **Error: "Cannot connect to MongoDB"**: Verificar que MongoDB esté ejecutándose y la cadena de conexión
- **Error: "Module not found"**: Ejecutar `npm install` en el servicio afectado y verificar Node.js v16+

###  Soporte
- Revisar mensajes de error en consola  
- Verificar que los 3 servicios estén ejecutándose  
- Confirmar configuración de variables de entorno

**Repositorio:** [https://github.com/IRVINISAEL/UTT](https://github.com/IRVINISAEL/UTT)

---------------------------
# 🏫 Sistema de Pagos Escolares - UTT

---

## 📖 Descripción
Sistema web para **gestión de pagos escolares** desarrollado con **microservicios**.  
Permite a **estudiantes** consultar sus pagos pendientes y a **administradores** gestionar todo el sistema.

---

## 🧰 Tecnologías Usadas
- **Backend:** Node.js + Express ⚡  
- **Frontend:** React 🌐  
- **Base de Datos:** MongoDB 🍃  
- **Arquitectura:** Microservicios 🏗️

---

## 📂 Estructura del Proyecto
proyecto-cobros-escuela/
├── 📁 api-gateway/ (Puerto 3000)
├── 📁 auth-service/ (Puerto 3001)
├── 📁 payments-service/ (Puerto 3002)
└── 📁 frontend/ (Interfaz web)

yaml
Copiar código

---

## ⚙️ Instalación Paso a Paso

### 1️. Clonar el Proyecto
```bash
git clone https://github.com/IRVINISAEL/UTT.git
cd proyecto-cobros-escuela
2️. Instalar Dependencias
```

``` bash
Copiar código
cd api-gateway && npm install
cd ../auth-service && npm install
cd ../payments-service && npm install
🧪 Agregar Dependencias de Desarrollo (Jest)
Para realizar pruebas unitarias, agrega Jest en cada servicio:
```

```bash
Copiar código
npm install --save-dev jest
O bien, edita manualmente el archivo package.json de cada servicio agregando al final:

json
Copiar código
"devDependencies": {
  "jest": "^29.6.2"
}
```

## 💡 Luego ejecuta npm install nuevamente para aplicar los cambios.

## 3️. Configurar Variables de Entorno
Crea un archivo .env en cada servicio con las siguientes variables:

📁 api-gateway/.env
``` env
Copiar código
PORT=3000
AUTH_SERVICE_URL=http://localhost:3001
PAYMENTS_SERVICE_URL=http://localhost:3002
MONGODB_URI=mongodb://localhost:27017/utt_pagos
JWT_SECRET=mi_clave_secreta
```

## 📁 auth-service/.env
``` env
Copiar código
PORT=3001
MONGODB_URI=mongodb://localhost:27017/utt_auth
JWT_SECRET=mi_clave_secreta
```

## 📁 payments-service/.env
``` env
Copiar código
PORT=3002
MONGODB_URI=mongodb://localhost:27017/utt_payments
```

## 4️. Configurar MongoDB
Asegúrate de tener MongoDB instalado y ejecutándose

## O usa MongoDB Atlas (versión en la nube)

La base de datos se crea automáticamente al iniciar los servicios

## 5️. Ejecutar el Sistema
Opción 1: Manualmente

``` bash
Copiar código
# Terminal 1 - Servicio de Autenticación
cd auth-service
npm start


# Terminal 2 - Servicio de Pagos
cd payments-service
npm start

# Terminal 3 - API Gateway
cd api-gateway
npm start
```
## Opción 2: Usar Script (si está configurado)

``` bash
Copiar código
npm run start:all
✅ Verificar Instalación
arduino
Copiar código
✅ Auth Service running on port 3001  
✅ Payments Service running on port 3002  
✅ API Gateway running on port 3000
```

🌐 Acceder al Sistema
URL: http://localhost:3000

Usuarios de Prueba:

Administrador: usuario admin001, contraseña [consultar con el equipo]

Estudiante: matrícula 2023001, contraseña [consultar con el equipo]

## 🧪 Pruebas Unitarias con Jest
Puedes ejecutar las pruebas unitarias desde cualquier servicio con:

``` bash
Copiar código
npm test
```

## Ejemplo de estructura de pruebas:

``` markdown
Copiar código
auth-service/
└── tests/
    └── login.test.js
```

## Ejemplo de prueba básica:

``` js
Copiar código
test('El servidor responde correctamente', () => {
  const mensaje = 'Servidor activo';
  expect(mensaje).toBe('Servidor activo');
});
```

## 🛠️ Comandos Útiles
``` bash
Copiar código
# Modo desarrollo (con recarga automática)
npm run dev


# Ejecutar pruebas con Jest
npm test

# Ver logs detallados
DEBUG=* npm start

# Reinstalar dependencias
rm -rf node_modules && npm install
```

## 🚧 Solución de Problemas Comunes
Error: “Port already in use” → Cambia el puerto en .env o cierra procesos activos.

Error: “Cannot connect to MongoDB” → Verifica conexión o configuración del servidor.

Error: “Module not found” → Ejecuta npm install y confirma que Node.js ≥ v16.

## 💬 Soporte
Revisa mensajes de error en consola

Verifica que los 3 servicios estén en ejecución

Asegúrate de tener las variables de entorno correctas
