function copyToClipboard(txt) {
    navigator.clipboard.writeText(txt).then(() => {
        alert("Copied to clipboard");
    })
    .catch(err => {
        alert("Failed to copy for some reason");
    });
}


window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}