from flask import Flask
from app.config import Config
import os

def create_app(config_class=Config):
    template_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'templates'))
    static_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'static'))
    
    app = Flask(__name__,
                template_folder=template_dir,
                static_folder=static_dir)
    
    app.config.from_object(config_class)

    # Register blueprints
    from app.routes import main
    app.register_blueprint(main)

    return app
