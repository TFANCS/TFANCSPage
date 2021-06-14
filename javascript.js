function copyToClipboard(txt) {
    navigator.clipboard.writeText(txt)
    alert("Copied to clipboard");
}


window.onload = function () {
    const spinner = document.getElementById('loading');
    spinner.classList.add('loaded');
}