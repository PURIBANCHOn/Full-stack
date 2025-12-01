const fullName = "Puribanchon Khemngoen";
const cleanedName = fullName.trim();
console.log(`Cleaned Name: '${cleanedName}'`);

const namePart = cleanedName.split(" ");
console.log("Name Parts:", namePart);

const finalParts = namePart.filter(Boolean);
console.log("Final Name Parts:", finalParts);

const fistName = finalParts[0];
console.log(`First Name: '${fistName}'`)