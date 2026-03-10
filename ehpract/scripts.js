const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
    { name: 'ins psd', path: 'inspr.pdf' },
    { name: 'ins code', path: 'ins.txt' },
    { name: 'pract6', path: 'pract6.pkt' },
    { name: 'pract7', path: 'pract7.pkt' },
    { name: 'pract8', path: 'pract8.pkt' },
    { name: 'pr6', path: 'pr6.png' },
    { name: 'pr7', path: 'pr7.png' },
    { name: 'pr8', path: 'pr8.png' },

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
