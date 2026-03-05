const cyberGrid = document.querySelector('.cyber-grid');

// Assuming you have an array of PDF file paths
const pdfFiles = [
    { name: 'Logistic Regression Pivot Table', path: 'Logistic Regression-pivottable.txt' },
    { name: 'Read CSV and Perform Data Pre Processing', path: 'Read CSV and Perform Data Pre-Pr.txt' },
    { name: 'Linear Regression VLOOKUP', path: 'Linear RegressionVLOOKUP.txt' },
    { name: 'Linear Regression Goal Seek', path: 'Linear Regressionoalseek.txt' },
    { name: 'Restaurant Waiting Decision Tree', path: 'Restaurant Waiting Decision Tree.txt' },

    { name: 'Decision Tree on Titanic Dataset', path: 'Decision Tree on Titanic Dataset.txt' },
    { name: 'Decision Tree Tennis Wind', path: 'Decision Treettennieswind.txt' },
    { name: 'One Way ANOVA PCA on Wine Quality', path: 'oneway.txt' },
    { name: 'Read CSV File into Data Frame', path: 'Read CSV File into Data Frame.txt' },
    { name: 'Feature Dumification Logistic Regression', path: 'dummy2.txt' },
    { name: 'Feature Scaling PCA', path: 'Feature ScalingPCA.txt' },
    { name: 'Python Code Performs Logistic Regression', path: 'Python code performs Logistic Re.txt' },
    { name: 'Paired T-Test', path: 'Paired T-Test.txt' },
    { name: 'Chi Square Test Logistic', path: 'Chi Square Test-logistic.txt' },
    { name: 'One Sample T-Test Feature Scaling', path: 'One Sample T-Test-featurescaling.txt' },
    { name: 'filecodes', path: 'ALL-PRAC.txt' }
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























