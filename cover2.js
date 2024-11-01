function formatText(command, value = null) {
    document.execCommand(command, false, value);
}

function downloadCoverLetter() {
    const text = document.getElementById('coverLetter').innerText;
    const blob = new Blob([text], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CoverLetter.txt';
    a.click();
    window.URL.revokeObjectURL(url);
}
