// Chat state
let conversationHistory = [];
let threadId = localStorage.getItem('chatThreadId') || generateThreadId();

// Initialize chat
document.addEventListener('DOMContentLoaded', () => {
    // Set up event listeners
    const userInput = document.getElementById('user-input');
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Load conversation history
    loadConversationHistory();
});

// Chat visibility toggle
function toggleChat() {
    const container = document.getElementById('chat-container');
    container.classList.toggle('hidden');
    
    if (!container.classList.contains('hidden')) {
        document.getElementById('user-input').focus();
    }
}

// Message handling
async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (!message) return;
    
    // Clear input
    userInput.value = '';
    
    // Add user message to chat
    addMessageToChat(message, true);
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message,
                thread_id: threadId,
                conversation_history: conversationHistory
            })
        });
        
        const data = await response.json();
        
        if (data.error) {
            throw new Error(data.error);
        }
        
        // Add bot response to chat
        addMessageToChat(data.message, false);
        
    } catch (error) {
        console.error('Error:', error);
        addMessageToChat('Sorry, I encountered an error. Please try again.', false);
    } finally {
        hideTypingIndicator();
    }
}

// Quick message handling
function sendQuickMessage(message) {
    document.getElementById('user-input').value = message;
    sendMessage();
}

// UI helpers
function addMessageToChat(text, isUser) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = text;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Update conversation history
    updateConversationHistory(text, isUser);
}

function showTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    indicator.classList.add('visible');
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    indicator.classList.remove('visible');
}

// Conversation management
function updateConversationHistory(text, isUser) {
    conversationHistory.push({
        text,
        isUser,
        timestamp: new Date().toISOString()
    });
    
    // Limit history length
    if (conversationHistory.length > 20) {
        conversationHistory = conversationHistory.slice(-20);
    }
    
    // Save to localStorage
    localStorage.setItem('chatHistory', JSON.stringify(conversationHistory));
}

function loadConversationHistory() {
    const savedHistory = localStorage.getItem('chatHistory');
    if (savedHistory) {
        conversationHistory = JSON.parse(savedHistory);
        conversationHistory.forEach(msg => {
            addMessageToChat(msg.text, msg.isUser);
        });
    }
}

// Utilities
function generateThreadId() {
    const threadId = Math.random().toString(36).substring(2, 15);
    localStorage.setItem('chatThreadId', threadId);
    return threadId;
}
