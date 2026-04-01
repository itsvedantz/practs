const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [

  { name: 'M1P11 Reshaping data', path: 'M1P11 Reshaping data.txt' },
  { name: 'M1P2 Creating datasets from raw data', path: 'M1P2 Creating datasets from raw data.txt' },
  { name: 'M1P3 Exploring data- Displaying datasets', path: 'M1P3 Exploring data- Displaying datasets.txt' },
  { name: 'M1P5 Sorting data', path: 'M1P5 Sorting data.txt' },
  { name: 'M1P7 Selecting & dropping variables', path: 'M1P7 Selecting & dropping variables.txt' },
  { name: 'M1P9 Performing text manipulation', path: 'M1P9 Performing text manipulation.txt' },
  { name: 'M2P1 generating frequency tables', path: 'M2P1 generating frequency tables.txt' },
  { name: 'M2P3 performing one-sample + -tests', path: 'M2P3 performing one-sample + -tests.txt' },
  { name: 'M2P5 performing paired t tests', path: 'M2P5 performing paired t tests.txt' },
  { name: 'M2P6 performing one-way ANOVA', path: 'M2P6 performing one-way ANOVA.txt' },
  { name: 'BOOK CSV', path: 'BOOKCSV.txt' }
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
