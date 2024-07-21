
document.addEventListener('DOMContentLoaded', function () {
    const copyButton = document.getElementById('copy-button');

    copyButton.addEventListener('click', function () {
        const address = document.getElementById('ltc-address').textContent;
        navigator.clipboard.writeText(address).then(() => {
            alert('LTC Address copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });
});
