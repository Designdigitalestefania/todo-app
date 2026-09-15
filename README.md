# Todo App 📋

Una aplicación de lista de tareas moderna y funcional con almacenamiento local, construida con **React**, **Vite** y **Tailwind CSS**.

## ✨ Características

- ✅ **Agregar tareas** con prioridades (Alta, Media, Baja)
- ✅ **Marcar como completadas** con checkbox interactivo
- ✅ **Editar tareas** en tiempo real
- ✅ **Eliminar tareas** con un clic
- ✅ **Filtros avanzados**:
  - Todas las tareas
  - Tareas activas
  - Tareas completadas
  - Filtrar por prioridad (Alta, Media, Baja)
- ✅ **Almacenamiento local** (localStorage) - tus tareas se guardan automáticamente
- ✅ **Modo oscuro/claro** con persistencia
- ✅ **Estadísticas en tiempo real**:
  - Total de tareas
  - Tareas completadas
  - Tareas activas
  - Tareas de alta prioridad
- ✅ **Interfaz moderna** y responsiva con Tailwind CSS
- ✅ **Iconos intuitivos** con Lucide React

## 🚀 Inicio Rápido

### Requisitos
- Node.js 16+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Designdigitalestefania/todo-app.git
cd todo-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

### Build para Producción

```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
todo-app/
├── src/
│   ├── components/
│   │   ├── TodoForm.jsx      # Formulario para agregar tareas
│   │   ├── TodoList.jsx      # Contenedor de lista de tareas
│   │   ├── TodoItem.jsx      # Componente individual de tarea
│   │   └── FilterBar.jsx     # Barra de filtros
│   ├── App.jsx               # Componente principal
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos globales
├── index.html                # HTML principal
├── vite.config.js            # Configuración de Vite
├── tailwind.config.js        # Configuración de Tailwind CSS
├── postcss.config.js         # Configuración de PostCSS
└── package.json              # Dependencias del proyecto
```

## 🎨 Tecnologías Utilizadas

- **React 18** - Librería para construir interfaces
- **Vite** - Herramienta de build rápida
- **Tailwind CSS** - Framework de CSS utility-first
- **Lucide React** - Iconos SVG de alta calidad
- **localStorage API** - Persistencia de datos local

## 💾 Almacenamiento Local

Todas tus tareas se guardan automáticamente en el navegador usando `localStorage`. Esto significa que:
- ✅ Tus tareas se mantienen incluso si cierras el navegador
- ✅ No requiere servidor o base de datos
- ✅ Privacidad total - los datos nunca se envían a internet
- ✅ Funciona offline

## 🎯 Cómo Usar

1. **Agregar una tarea**: Escribe el título, selecciona la prioridad y haz clic en "Add Task"
2. **Marcar como completada**: Haz clic en el checkbox junto a la tarea
3. **Editar una tarea**: Pasa el cursor sobre la tarea y haz clic en el icono de editar
4. **Eliminar una tarea**: Pasa el cursor sobre la tarea y haz clic en el icono de basura
5. **Filtrar tareas**: Usa los botones de filtro para ver tareas específicas
6. **Cambiar modo oscuro**: Usa el botón de luna/sol en la esquina superior derecha

## 🌙 Modo Oscuro

La aplicación incluye un modo oscuro completamente funcional. Tu preferencia se guarda automáticamente.

## 📊 Estadísticas

En la parte superior verás:
- **Total**: Número total de tareas
- **Completed**: Tareas marcadas como completadas
- **Active**: Tareas pendientes
- **High Priority**: Tareas de alta prioridad pendientes

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Construye para producción
npm run preview  # Vista previa de build
npm run lint     # Ejecuta linter
```

### Agregar Nuevas Características

La arquitectura modular permite agregar fácilmente:
- Nuevos filtros en `FilterBar.jsx`
- Nuevas acciones en `TodoItem.jsx`
- Nuevos campos en el formulario en `TodoForm.jsx`

## 🎁 Posibles Mejoras Futuras

- [ ] Categorías/Etiquetas
- [ ] Fechas de vencimiento
- [ ] Recurrencia de tareas
- [ ] Notas adjuntas
- [ ] Sincronización en la nube
- [ ] Exportar/Importar como JSON
- [ ] Drag & drop para reordenar
- [ ] Recordatorios con notificaciones

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

Diseño Digital Estefania
- GitHub: [@Designdigitalestefania](https://github.com/Designdigitalestefania)
- Email: estefaniaprzvzqz@outlook.com

## 🙏 Agradecimientos

- [React](https://react.dev) - Librería base
- [Vite](https://vitejs.dev) - Build tool
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [Lucide Icons](https://lucide.dev) - Iconos

---

**Creado con ❤️ por Designdigitalestefania**
