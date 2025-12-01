function gennerateTempID() {
    const randomPart = Math.random().toString(36).substring(2, 10);
    return randomPart.toUpperCase();
}

const orderId = gennerateTempID();
console.log(`ID ออเดอร์ชั่วคราว: ${orderId}`);