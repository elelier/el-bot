# EL Bot - AI Assistant

EL Bot is a modern, responsive AI-powered chatbot built with Flask and OpenAI's GPT-3.5 API. It provides an interactive interface for users to engage with an AI assistant that can answer questions and provide information about various topics.

![Python](https://img.shields.io/badge/python-3.11-blue.svg)
![Flask](https://img.shields.io/badge/flask-2.3.3-green.svg)
![OpenAI](https://img.shields.io/badge/openai-0.27.8-orange.svg)

## Features

- 💬 Real-time chat interface
- 🤖 Powered by OpenAI's GPT-3.5
- 📱 Responsive design
- 🔄 Conversation context preservation
- 🚀 Quick action buttons
- 💾 Local conversation history
- ⚡ Typing indicators
- 🎨 Modern UI/UX

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Python 3.11 or higher
- OpenAI API key
- Modern web browser

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/el-bot.git
cd el-bot
```

2. Create and activate a virtual environment:
```bash
# Windows
python -m venv venv
venv\Scripts\activate

# Linux/MacOS
python -m venv venv
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create a `.env` file in the root directory:
```bash
cp .env.example .env
```

5. Edit `.env` and add your OpenAI API key:
```
OPENAI_API_KEY=your-api-key-here
SECRET_KEY=your-secret-key-here
```

## Usage

1. Start the development server:
```bash
python run.py
```

2. Open your web browser and navigate to:
```
http://localhost:5000
```

3. Click the chat button in the bottom right corner to start interacting with EL Bot.

## Project Structure

```
project_root/
├── app/                    # Application package
│   ├── __init__.py        # Flask app initialization
│   ├── routes.py          # API endpoints
│   ├── config.py          # Configuration
│   └── utils/             # Utilities
│       └── chat_utils.py  # Chat helper functions
├── static/                # Static files
│   ├── css/              # Stylesheets
│   │   ├── main.css
│   │   └── components/   # Component styles
│   └── js/               # JavaScript
│       └── main.js
├── templates/            # HTML templates
│   └── index.html
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── requirements.txt    # Python dependencies
└── run.py             # Application entry point
```

## API Endpoints

- `GET /`: Serves the main chat interface
- `POST /chat`: Handles chat messages
  - Request body:
    ```json
    {
        "message": "User message",
        "thread_id": "conversation_thread_id",
        "conversation_history": []
    }
    ```
  - Response:
    ```json
    {
        "message": "Bot response",
        "thread_id": "conversation_thread_id"
    }
    ```

## Configuration

The application can be configured through environment variables:

- `OPENAI_API_KEY`: Your OpenAI API key
- `SECRET_KEY`: Flask secret key for session management
- `MAX_CONVERSATION_LENGTH`: Maximum number of messages to retain (default: 20)
- `CONTEXT_WINDOW_SIZE`: Number of previous messages to include for context (default: 10)

## Development

To contribute to the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests (if available)
5. Submit a pull request

## Security Considerations

- API keys are stored in environment variables
- Conversation history is limited to prevent memory issues
- No sensitive data is stored permanently
- HTTPS is recommended for production deployment

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

If you have any questions or feedback, please reach out to [your contact information].

## Acknowledgments

- OpenAI for their powerful GPT-3.5 API
- Flask team for the excellent web framework
- Font Awesome for the icons
