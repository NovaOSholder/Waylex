function writeToTerminal(text) {
    const terminal = document.getElementById('terminal');
    terminal.innerHTML += `<br/>${text}`;
}

function processCommand(command) {
    if (command === 'help') {
        writeToTerminal('Available commands: help, echo, clear, date');
    } else if (command.startsWith('echo ')) {
        writeToTerminal(command.substring(5));
    } else if (command === 'clear') {
        const terminal = document.getElementById('terminal');
        terminal.innerHTML = '';
    } else if (command === 'date') {
        writeToTerminal(new Date().toLocaleString());
    } else {
        writeToTerminal(`Command not found: ${command}`);
    }
}

document.getElementById('input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const inputElement = document.getElementById('input');
        const command = inputElement.value;
        
        processCommand(command);
        
        inputElement.value = '';
    }
});
