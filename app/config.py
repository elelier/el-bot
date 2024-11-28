import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'dev-key-please-change'
    OPENAI_API_KEY = os.environ.get('OPENAI_API_KEY')
    MAX_CONVERSATION_LENGTH = 20
    CONTEXT_WINDOW_SIZE = 10
