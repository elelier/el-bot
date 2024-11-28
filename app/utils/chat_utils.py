from app.config import Config

def format_conversation_history(history):
    """
    Format the conversation history for the OpenAI API.
    Limits the context window to the most recent messages.
    """
    if not history:
        return []

    # Limit the context window size
    limited_history = history[-Config.CONTEXT_WINDOW_SIZE:]
    
    # Format messages for the API
    formatted_messages = []
    for msg in limited_history:
        role = "assistant" if msg.get('isBot') else "user"
        formatted_messages.append({
            "role": role,
            "content": msg.get('text', '')
        })
    
    return formatted_messages
