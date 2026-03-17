// Elements

const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeImg = document.querySelector('#qr-code img');


// Events

// Generate QR Code
function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) return;

    qrCodeBtn.innerText = 'Generating code...';

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`

    qrCodeImg.addEventListener('load', () => {
        container.classList.add('active');
        qrCodeBtn.innerText = 'Code generated!!';
    })
};

qrCodeBtn.addEventListener('click', () => {
    generateQrCode();
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        generateQrCode();
    }
})

// Clean QR Code Area
qrCodeInput.addEventListener('keyup', () => {

    const qrCodeInputValue = qrCodeInput.value;

    if (!qrCodeInputValue) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Generate QR Code';
    }
})

