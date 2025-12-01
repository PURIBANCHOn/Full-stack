const registrationDate = new Date('2023-08-15T10:30:00Z');
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Bangkok',
};

const formattedDate = registrationDate.toLocaleDateString('th-TH', options);
console.log(`วันที่ลงทะเบียน: ${formattedDate}`);