const client = require('discord-rich-presence')('823950645178138714');

client.updatePresence({
    details: "Varios shows",
    state: "Tentando completar o passe",
    startTimestamp: Date.now(),
    largeImageKey: "fall-guys-theme",
    largeImageText: "Se passou o mouse por aqui voce precisa mandar um pix agora mesmo pra essa chave: 9a427427-98f3-4889-a8f9-ff48f1e650a9",
    smallImageKey: "rosto-fallguys-2",
    smallImageText: "🚀🚀🚀🚀",
    instance: true
});