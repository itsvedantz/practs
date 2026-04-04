const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [

  { name: '1 column wise operation', path: '1 column wise operation.txt' },
  { name: '2random dataset of 1000 values', path: '2random dataset of 1000 values.txt' },
  { name: '4 1 D array of 100 datasets', path: '4 1 D array of 100 datasets.txt' },
  { name: '5 inner join outer join', path: '5 inner join outer join.txt' },
  { name: 'comparing the average value of a numerical column', path: 'comparing the average value of a numerical column.txt' },
  { name: 'create a pivot table summarizing the data', path: 'create a pivot table summarizing the data.txt' },
  { name: 'create a seaborn scatter plot between two numerical columns', path: 'create a seaborn scatter plot between two numerical columns.txt' },
  { name: 'create a seaborn violin plot to show the distribution of values for each column', path: 'create a seaborn violin plot to show the distribution of values for each column.txt' },
  { name: 'import numpy as np', path: 'import numpy as np.txt' },
  { name: 'index', path: 'index.html' },
  { name: 'plot a boxplot for a numerical column grouped by a categorical column', path: 'plot a boxplot for a numerical column grouped by a categorical column.txt' },
  { name: 'plot a histogram showing the distribution of a numerical column', path: 'plot a histogram showing the distribution of a numerical column.txt' },
  { name: 'script', path: 'script.js' },
  { name: 'style', path: 'style.css' },
  { name: 'visualize the frequency distribution of values in a categorical column', path: 'visualize the frequency distribution of values in a categorical column.txt' }

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


































