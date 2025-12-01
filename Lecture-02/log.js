function createLogEntry(message) {
    const now = new Date();
    const timestamp = now.toLocaleDateString('th-TH');

    const eventId = Math.random().toString(16).substring(2, 10).toUpperCase();

    const logMessage = message.toUpperCase();

    return `[${timestamp}] [ID: ${eventId}] ${logMessage}`;
}

const log = createLogEntry("User login successful");
console.log(log);