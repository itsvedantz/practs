const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
    { name: 'invertconstalg.txt', path: 'Slip_1.txt' },
    { name: 'Slip 2', path: 'Slip_2.txt' },
    { name: 'Slip 3', path: 'Slip_3.txt' },
    { name: 'Slip 4', path: 'Slip_4.txt' },
    { name: 'Slip 5', path: 'Slip_5.txt' },
    { name: 'Slip 6', path: 'Slip_6.txt' },
    { name: 'Slip 7', path: 'Slip_7.txt' },
    { name: 'Slip 8', path: 'Slip_8.txt' },
    { name: 'Slip 9', path: 'Slip_9.txt' },
    { name: 'Slip 10', path: 'Slip_10.txt' },
    { name: 'Slip 11', path: 'Slip_11.txt' },
    { name: 'Slip 12', path: 'Slip_12.txt' },
    { name: 'Slip 13', path: 'Slip_13.txt' },
    { name: 'Slip 14', path: 'Slip_14.txt' },
    { name: 'Slip 15', path: 'Slip_15.txt' },
    { name: 'Slip 16', path: 'Slip_16.txt' },
    { name: 'Slip 17', path: 'Slip_17.txt' },
    { name: 'Slip 18', path: 'Slip_18.txt' },
    { name: 'Slip 19', path: 'Slip_19.txt' },
    { name: 'Slip 20', path: 'Slip_20.txt' }
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

































