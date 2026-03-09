const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
    { name: 'Keylogger', path: 'keylogger.txt' },
    { name: 'EH PRACT', path: 'EHh.pdf' }

    // Add more file paths as needed
];

pdfFiles.forEach((file) => {
    const cyberCard = document.createElement('div');
    cyberCard.classList.add('cyber-card');

    const link = document.createElement('a');
    link.href = file.path;
    link.textContent = file.name;
    link.classList.add('file-name');

    const fileSize = document.createElement('p');
    fileSize.classList.add('file-size');
    fileSize.textContent = file.size;

    cyberCard.appendChild(link);
    cyberCard.appendChild(fileSize);

    cyberGrid.appendChild(cyberCard);
});
