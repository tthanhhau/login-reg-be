function generateOtp(length = 6) {
let code = '';
for (let i = 0; i < length; i++) code += Math.floor(Math.random() * 10);
return code; // dạng "123456"
}
module.exports = generateOtp;