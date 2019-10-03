const status = document.getElementById('status');
const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

const wss = new WebSocket('wss://chat-domain.com')

function setStatus(value) {
    status.innerHTML = value;
}

function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    wss.send(input.value);
    input.value=''
})

wss.onopen = () => setStatus('ONLINE')

wss.onclose = () => setStatus('DISCONNECTED')

wss.onmessage = response => printMessage(response.data)