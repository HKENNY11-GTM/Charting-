const icon = document.getElementById('icon');
const input = document.getElementById('input');
const chatting = document.getElementById('chatting');

icon.addEventListener('click', (e) => {
    e.preventDefault();
    const messageText = input.value.trim();
    if (messageText === "") 
    return;
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('right');

    const message = document.createElement('div');
    message.classList.add('replied', 'few');
    
    message.textContent = messageText;
    messageContainer.appendChild(message);
    chatting.appendChild(messageContainer);
    input.value = '';
    chatting.scrollTop = chatting.scrollHeight;
});
    
    
    
    
    
    