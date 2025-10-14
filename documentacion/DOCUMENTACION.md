# Full Stack Course - Helsinki University
## Documentación Completa del Repositorio y Estructura del Proyecto

---

## 📖 ÍNDICE / TABLE OF CONTENTS

1. [Descripción General / Overview](#descripción-general--overview)
2. [Estructura del Proyecto / Project Structure](#estructura-del-proyecto--project-structure)
3. [Partes del Curso / Course Parts](#partes-del-curso--course-parts)
4. [Tecnologías Utilizadas / Technologies Used](#tecnologías-utilizadas--technologies-used)
5. [Configuración del Proyecto / Project Setup](#configuración-del-proyecto--project-setup)
6. [Guía de Contribución / Contribution Guide](#guía-de-contribución--contribution-guide)

---

## 📝 Descripción General / Overview

### 🇪🇸 ESPAÑOL

Este repositorio contiene todas las ejercitaciones y proyectos completados durante el curso **Full Stack Open** ofrecido por la Universidad de Helsinki. El curso es un programa educativo completo que cubre desde los fundamentos del desarrollo web moderno hasta aplicaciones más avanzadas.

**Objetivo del Repositorio:**
- Almacenar y organizar todos los ejercicios realizados en cada parte del curso
- Servir como referencia de progreso y aprendizaje
- Demostrar la competencia adquirida en desarrollo Full Stack
- Facilitar la revisión y mejora continua del código

**Descripción del Curso:**
El Full Stack Open es un programa educativo intensivo que enseña desarrollo web moderno desde cero. Cubre tanto el desarrollo del lado del cliente (Frontend) como del lado del servidor (Backend), así como las herramientas y conceptos modernos del desarrollo web.

### 🇬🇧 ENGLISH

This repository contains all the exercises and projects completed during the **Full Stack Open** course offered by the University of Helsinki. The course is a comprehensive educational program covering everything from the fundamentals of modern web development to more advanced applications.

**Repository Purpose:**
- Store and organize all exercises completed in each course part
- Serve as a reference for progress and learning
- Demonstrate competency gained in Full Stack development
- Facilitate code review and continuous improvement

**Course Description:**
Full Stack Open is an intensive educational program that teaches modern web development from scratch. It covers both client-side development (Frontend) and server-side development (Backend), as well as modern web development tools and concepts.

---

## 📂 Estructura del Proyecto / Project Structure

```
helsinki-fullstack-course/
│
├── README.md                    # Descripción principal del repositorio
├── .gitignore                   # Archivos ignorados por Git
├── .vscode/                     # Configuración de Visual Studio Code
│
├── part0/                       # Parte 0: Fundamentos Web
│   ├── 04_new_note_diagram.md   # Diagrama de secuencia - Nueva nota (HTTP tradicional)
│   ├── 05_spa_diagram.md        # Diagrama de secuencia - Single Page Application
│   └── 06_new_note_spa.md       # Diagrama de secuencia - Nueva nota en SPA
│
├── part1/                       # Parte 1: Introducción a React
│   ├── anecdotes/               # Proyecto: Aplicación de anécdotas con votación
│   ├── courseinfo/              # Proyecto: Componentes de información del curso
│   └── unicafe/                 # Proyecto: Estadísticas de retroalimentación (café)
│
├── part2/                       # Parte 2: Comunicación con servidor
│   ├── courseinfo/              # Proyecto: Información del curso (mejorado)
│   └── phonebook/               # Proyecto: Agenda telefónica con persistencia
│
└── documentacion/               # Documentación del proyecto
    └── DOCUMENTACION.md         # Este archivo
```

### 🇪🇸 Descripción Detallada de Directorios

**part0/ - Fundamentos Web**
- Explicación de conceptos fundamentales del desarrollo web
- Diagramas de secuencia que muestran la comunicación HTTP tradicional
- Introducción a las Single Page Applications (SPAs)
- Archivos Markdown con análisis de cómo funcionan las aplicaciones web modernas

**part1/ - Introducción a React**
- Introducción a la librería React para construcción de interfaces
- Aprendizaje de componentes React y gestión de estado
- Tres proyectos prácticos:
  - `anecdotes/`: Aplicación para mostrar anécdotas aleatorias con sistema de votación
  - `courseinfo/`: Componentes reutilizables para mostrar información de cursos
  - `unicafe/`: Contador de retroalimentación (buena, neutral, mala) con estadísticas

**part2/ - Comunicación con Servidor**
- Comunicación HTTP y manejo de formularios
- Consumo de APIs REST desde React
- Persistencia de datos con servidores
- Dos proyectos prácticos:
  - `courseinfo/`: Versión mejorada con comunicación con servidor
  - `phonebook/`: Agenda telefónica completa con CRUD operations

### 🇬🇧 Detailed Directory Description

**part0/ - Web Fundamentals**
- Explanation of fundamental web development concepts
- Sequence diagrams showing traditional HTTP communication
- Introduction to Single Page Applications (SPAs)
- Markdown files with analysis of how modern web applications work

**part1/ - Introduction to React**
- Introduction to the React library for building interfaces
- Learning React components and state management
- Three practical projects:
  - `anecdotes/`: Application to display random anecdotes with voting system
  - `courseinfo/`: Reusable components to display course information
  - `unicafe/`: Feedback counter (good, neutral, bad) with statistics

**part2/ - Server Communication**
- HTTP communication and form handling
- REST API consumption from React
- Data persistence with servers
- Two practical projects:
  - `courseinfo/`: Improved version with server communication
  - `phonebook/`: Complete phonebook with CRUD operations

---

## 🎓 Partes del Curso / Course Parts

### 🇪🇸 PARTE 0: Fundamentos

**Contenido:**
- Conceptos básicos de la web
- Cómo funcionan los navegadores web
- HTTP y comunicación cliente-servidor
- Diagramas de secuencia de aplicaciones web tradicionales vs. SPAs
- Análisis detallado del flujo de datos en aplicaciones modernas

**Objetivos de Aprendizaje:**
- Entender la arquitectura fundamental del desarrollo web
- Comprender cómo se comunican clientes y servidores
- Introducción a los conceptos de aplicaciones web modernas

**Proyectos/Ejercicios:**
- Creación de diagramas de secuencia para diferentes escenarios de interacción web

---

### 🇪🇸 PARTE 1: Introducción a React

**Contenido:**
- Introducción a la librería React
- Componentes y JSX
- Props y estado (State)
- Hooks (useState, useEffect)
- Renderizado condicional
- Listas y keys
- Manejo de formularios

**Objetivos de Aprendizaje:**
- Crear componentes React funcionales
- Comprender el flujo de datos en React
- Implementar lógica de negocio en componentes
- Manejar interacciones del usuario

**Proyectos/Ejercicios:**

1. **Courseinfo** (`part1/courseinfo/`)
   - Crear componentes para mostrar información de un curso
   - Componentes: Header, Content, Part, Total
   - Props y composición de componentes

2. **Unicafe** (`part1/unicafe/`)
   - Contador de retroalimentación (buena, neutral, mala)
   - Cálculo de estadísticas (porcentajes, media)
   - Renderizado condicional

3. **Anecdotes** (`part1/anecdotes/`)
   - Aplicación de anécdotas aleatorias
   - Sistema de votación
   - Gestión de estado con useState

---

### 🇪🇸 PARTE 2: Comunicación con Servidor

**Contenido:**
- Formularios en React
- Consumo de APIs REST
- Peticiones HTTP (GET, POST, PUT, DELETE)
- Bibliotecas como Axios
- Manejo de promesas y async/await
- Gestión de errores
- Patrón de renderizado en servidor

**Objetivos de Aprendizaje:**
- Realizar operaciones CRUD desde React
- Comunicación efectiva entre cliente y servidor
- Manejo de errores y estados de carga
- Sincronización de datos

**Proyectos/Ejercicios:**

1. **Courseinfo Mejorado** (`part2/courseinfo/`)
   - Versión mejorada con comunicación con servidor
   - Obtención de datos desde API
   - Persistencia de cambios

2. **Phonebook** (`part2/phonebook/`)
   - Agenda telefónica completa
   - Crear, leer, actualizar y eliminar contactos
   - Búsqueda y filtrado
   - Servicios HTTP separados
   - Manejo de errores y notificaciones

---

### 🇬🇧 PART 0: Fundamentals

**Content:**
- Basic web concepts
- How web browsers work
- HTTP and client-server communication
- Sequence diagrams of traditional web applications vs. SPAs
- Detailed analysis of data flow in modern applications

**Learning Objectives:**
- Understand the fundamental architecture of web development
- Understand how clients and servers communicate
- Introduction to modern web application concepts

**Projects/Exercises:**
- Creating sequence diagrams for different web interaction scenarios

---

### 🇬🇧 PART 1: Introduction to React

**Content:**
- Introduction to the React library
- Components and JSX
- Props and State
- Hooks (useState, useEffect)
- Conditional rendering
- Lists and keys
- Form handling

**Learning Objectives:**
- Create functional React components
- Understand data flow in React
- Implement business logic in components
- Handle user interactions

**Projects/Exercises:**

1. **Courseinfo** (`part1/courseinfo/`)
   - Create components to display course information
   - Components: Header, Content, Part, Total
   - Props and component composition

2. **Unicafe** (`part1/unicafe/`)
   - Feedback counter (good, neutral, bad)
   - Calculate statistics (percentages, average)
   - Conditional rendering

3. **Anecdotes** (`part1/anecdotes/`)
   - Random anecdotes application
   - Voting system
   - State management with useState

---

### 🇬🇧 PART 2: Server Communication

**Content:**
- Forms in React
- Consuming REST APIs
- HTTP requests (GET, POST, PUT, DELETE)
- Libraries like Axios
- Promise handling and async/await
- Error management
- Server rendering pattern

**Learning Objectives:**
- Perform CRUD operations from React
- Effective client-server communication
- Error handling and loading states
- Data synchronization

**Projects/Exercises:**

1. **Improved Courseinfo** (`part2/courseinfo/`)
   - Improved version with server communication
   - Fetching data from API
   - Persistence of changes

2. **Phonebook** (`part2/phonebook/`)
   - Complete phonebook application
   - Create, read, update, and delete contacts
   - Search and filtering
   - Separate HTTP services
   - Error handling and notifications

---

## 💻 Tecnologías Utilizadas / Technologies Used

### 🇪🇸

**Frontend:**
- **React** - Librería para construcción de interfaces de usuario
- **JSX** - Extensión de JavaScript para escribir componentes
- **Hooks** - useState, useEffect y otros hooks de React
- **CSS** - Estilos y diseño responsivo

**Backend (Próximas Partes):**
- **Node.js** - Entorno de ejecución de JavaScript en servidor
- **Express** - Framework web minimalista
- **MongoDB** - Base de datos NoSQL (próximas partes)

**Herramientas:**
- **npm/yarn** - Gestores de paquetes
- **Create React App** - Herramienta para inicializar proyectos React
- **Axios** - Cliente HTTP para solicitudes
- **Git** - Control de versiones

### 🇬🇧

**Frontend:**
- **React** - Library for building user interfaces
- **JSX** - JavaScript extension for writing components
- **Hooks** - useState, useEffect and other React hooks
- **CSS** - Styling and responsive design

**Backend (Upcoming Parts):**
- **Node.js** - JavaScript runtime environment on server
- **Express** - Minimalist web framework
- **MongoDB** - NoSQL database (upcoming parts)

**Tools:**
- **npm/yarn** - Package managers
- **Create React App** - Tool for initializing React projects
- **Axios** - HTTP client for requests
- **Git** - Version control

---

## ⚙️ Configuración del Proyecto / Project Setup

### 🇪🇸

**Requisitos Previos:**
- Node.js (versión 14 o superior)
- npm o yarn
- Git
- Editor de código (VS Code recomendado)

**Pasos de Instalación:**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/JuMad-SE/helsinki-fullstack-course.git
   cd helsinki-fullstack-course
   ```

2. **Navegar a un proyecto específico**
   ```bash
   cd part1/courseinfo
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Ejecutar el proyecto**
   ```bash
   npm start
   ```

5. **El navegador se abrirá automáticamente en** `http://localhost:3000`

**Para proyectos específicos:**

- Cada proyecto dentro de `part1/`, `part2/`, etc., puede ser iniciado siguiendo los pasos anteriores desde su directorio respectivo.
- Algunos proyectos pueden requerir un servidor backend. Consulta el README de cada proyecto para más información.

### 🇬🇧

**Prerequisites:**
- Node.js (version 14 or higher)
- npm or yarn
- Git
- Code editor (VS Code recommended)

**Installation Steps:**

1. **Clone the repository**
   ```bash
   git clone https://github.com/JuMad-SE/helsinki-fullstack-course.git
   cd helsinki-fullstack-course
   ```

2. **Navigate to a specific project**
   ```bash
   cd part1/courseinfo
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Run the project**
   ```bash
   npm start
   ```

5. **The browser will automatically open at** `http://localhost:3000`

**For specific projects:**

- Each project within `part1/`, `part2/`, etc., can be started by following the above steps from its respective directory.
- Some projects may require a backend server. Check each project's README for more information.

---

## 🤝 Guía de Contribución / Contribution Guide

### 🇪🇸

**¿Cómo contribuir?**

1. **Fork el repositorio** en GitHub
2. **Crea una rama** para tu característica o corrección:
   ```bash
   git checkout -b feature/nombre-característica
   ```
3. **Realiza tus cambios** y haz commits descriptivos:
   ```bash
   git commit -m "Describe tu cambio de forma clara"
   ```
4. **Push a la rama**:
   ```bash
   git push origin feature/nombre-característica
   ```
5. **Abre una Pull Request** con una descripción clara de tus cambios

**Estándares de Código:**
- Sigue el código existente y sus convenciones
- Usa nombres descriptivos para variables y funciones
- Comenta código complejo
- Mantén commits atómicos y descriptivos

**Reportar Bugs:**
- Usa las GitHub Issues para reportar problemas
- Incluye pasos para reproducir el error
- Describe el comportamiento esperado vs. actual

### 🇬🇧

**How to Contribute?**

1. **Fork the repository** on GitHub
2. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/feature-name
   ```
3. **Make your changes** and commit with descriptive messages:
   ```bash
   git commit -m "Clearly describe your change"
   ```
4. **Push to the branch**:
   ```bash
   git push origin feature/feature-name
   ```
5. **Open a Pull Request** with a clear description of your changes

**Code Standards:**
- Follow existing code conventions
- Use descriptive names for variables and functions
- Comment complex code
- Keep commits atomic and descriptive

**Report Bugs:**
- Use GitHub Issues to report problems
- Include steps to reproduce the error
- Describe expected vs. actual behavior

---

## 📚 Recursos Adicionales / Additional Resources

### 🇪🇸

- **Sitio Oficial del Curso:** https://fullstackopen.com/
- **Documentación de React:** https://react.dev/
- **MDN Web Docs:** https://developer.mozilla.org/es/
- **GitHub Docs:** https://docs.github.com/es

### 🇬🇧

- **Official Course Website:** https://fullstackopen.com/
- **React Documentation:** https://react.dev/
- **MDN Web Docs:** https://developer.mozilla.org/en-US/
- **GitHub Docs:** https://docs.github.com/

---

## 📄 Licencia / License

Este proyecto es parte del curso Full Stack Open de la Universidad de Helsinki.

*This project is part of the Full Stack Open course from the University of Helsinki.*

---

**Última actualización / Last Update:** Octubre 2025

**Autor / Author:** Juan Madrid (JuMad-SE)

**Documentación creada con / Documentation created with:** MCP (Model Context Protocol)
