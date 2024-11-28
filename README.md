# EL Bot - Asistente AI

EL Bot es un chatbot moderno y responsivo impulsado por inteligencia artificial, construido con Flask y la API GPT-3.5 de OpenAI. Proporciona una interfaz interactiva para que los usuarios interactúen con un asistente AI que puede responder preguntas y proporcionar información sobre diversos temas.

![Python](https://img.shields.io/badge/python-3.11-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.3.3-green.svg)
![OpenAI](https://img.shields.io/badge/openai-0.27.8-orange.svg)

## Características

- 💬 Interfaz de chat en tiempo real
- 🤖 Impulsado por GPT-3.5 de OpenAI
- 📱 Diseño responsivo
- 🔄 Preservación del contexto de la conversación
- 🚀 Botones de acción rápida
- 💾 Historial de conversación local
- ⚡ Indicadores de escritura
- 🎨 UI/UX moderna

## Requisitos

Antes de comenzar, asegúrate de haber cumplido con los siguientes requisitos:
- Python 3.11 o superior
- Clave de API de OpenAI
- Navegador web moderno

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/yourusername/el-bot.git
cd el-bot
```

2. Crea y activa un entorno virtual:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/MacOS
python -m venv venv
source venv/bin/activate
```

3. Instala las dependencias:
```bash
pip install -r requirements.txt
```

4. Crea un archivo `.env` en el directorio raíz:
```bash
cp .env.example .env
```

5. Edita `.env` y agrega tu clave de API de OpenAI:
```
OPENAI_API_KEY=tu-clave-de-api-aqui
SECRET_KEY=tu-clave-secreta-aqui
```

## Uso

1. Inicia el servidor de desarrollo:
```bash
python run.py
```

2. Abre tu navegador web y navega a:
```
http://localhost:5000
```

3. Haz clic en el botón de chat en la esquina inferior derecha para comenzar a interactuar con EL Bot.

## Estructura del Proyecto

```
project_root/
├── app/                    # Paquete de la aplicación
│   ├── __init__.py        # Inicialización de la app Flask
│   ├── routes.py          # Puntos finales de la API
│   ├── config.py          # Configuración
│   └── utils/             # Utilidades
│       └── chat_utils.py  # Funciones auxiliares de chat
├── static/                # Archivos estáticos
│   ├── css/              # Hojas de estilo
│   │   ├── main.css
│   │   └── components/   # Estilos de componentes
│   └── js/               # JavaScript
│       └── main.js
├── templates/            # Plantillas HTML
│   └── index.html
├── .env.example         # Plantilla de variables de entorno
├── .gitignore          # Reglas de ignorar para Git
├── requirements.txt    # Dependencias de Python
└── run.py             # Punto de entrada de la aplicación
```

## Puntos finales de la API

- `GET /`: Sirve la interfaz principal de chat
- `POST /chat`: Maneja los mensajes de chat
  - Cuerpo de la solicitud:
    ```json
    {
        "message": "Mensaje del usuario",
        "thread_id": "id_del_hilo_de_conversacion",
        "conversation_history": []
    }
    ```
  - Respuesta:
    ```json
    {
        "message": "Respuesta del bot",
        "thread_id": "id_del_hilo_de_conversacion"
    }
    ```

## Configuración

La aplicación se puede configurar a través de variables de entorno:

- `OPENAI_API_KEY`: Tu clave de API de OpenAI
- `SECRET_KEY`: Clave secreta de Flask para la gestión de sesiones
- `MAX_CONVERSATION_LENGTH`: Número máximo de mensajes a retener (predeterminado: 20)
- `CONTEXT_WINDOW_SIZE`: Número de mensajes anteriores a incluir para el contexto (predeterminado: 10)

## Desarrollo

Para contribuir al proyecto:

1. Haz un fork del repositorio
2. Crea una rama de características
3. Realiza tus cambios
4. Ejecuta pruebas (si están disponibles)
5. Envía una solicitud de extracción

## Consideraciones de Seguridad

- Las claves de API se almacenan en variables de entorno
- El historial de conversación está limitado para evitar problemas de memoria
- No se almacenan permanentemente datos sensibles
- Se recomienda HTTPS para el despliegue en producción

## Soporte del Navegador

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.

## Contacto

Si tienes alguna pregunta o comentario, por favor contáctanos a [tu información de contacto].

## Agradecimientos

- OpenAI por su poderosa API GPT-3.5
- Equipo de Flask por el excelente marco web
- Font Awesome por los íconos
