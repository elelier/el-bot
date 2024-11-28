from flask import Blueprint, render_template, request, jsonify
import openai
from app.config import Config
from app.utils.chat_utils import format_conversation_history

main = Blueprint('main', __name__)
openai.api_key = Config.OPENAI_API_KEY

@main.route('/')
def index():
    return render_template('index.html')

@main.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        message = data.get('message')
        thread_id = data.get('thread_id')
        conversation_history = data.get('conversation_history', [])

        # Format conversation history for context
        formatted_history = format_conversation_history(conversation_history)

        # Create chat completion
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are EL Bot, a professional and helpful AI assistant."},
                *formatted_history,
                {"role": "user", "content": message}
            ]
        )

        # Extract and return the response
        ai_message = response.choices[0].message['content']
        return jsonify({
            'message': ai_message,
            'thread_id': thread_id
        })

    except Exception as e:
        return jsonify({
            'error': str(e)
        }), 500
