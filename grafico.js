document.getElementById('GeraChart').addEventListener('click', processarCSV);
 
function processarCSV() {
    const tipoGrafico = document.querySelector('.TipoGraf').value;
    const fileInput = document.getElementById('csvFile');
 
    const file = fileInput.files[0];
    const reader = new FileReader();
 
    reader.onload = function(e) {
        const content = e.target.result;
        const lines = content.split('\n');
        const labels = [];
        const deposits = [];
        const withdrawals = [];
 
        for (let i = 1; i < lines.length; i++) {
            const columns = lines[i].split(',');
            labels.push(columns[0]);
            deposits.push(parseInt(columns[1]));
            withdrawals.push(parseInt(columns[2]));
        }
 
        renderChart(labels, deposits, withdrawals, tipoGrafico);
    };
 
    reader.readAsText(file);
}
 
function renderChart(labels, deposits, withdrawals, tipoGrafico) {
    const ctx = document.getElementById('chart').getContext('2d');
    let chart;
 
    if (tipoGrafico === 'linha') {
        chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: 'rgba(19, 185, 185, 0.532)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: 'rgba(193, 193, 29, 0.542)',
                        borderColor: 'rgba(183, 180, 9, 0.37)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else if (tipoGrafico === 'barra') {
        chart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Depósito',
                        data: deposits,
                        backgroundColor: 'rgba(19, 185, 185, 0.532)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Retirada',
                        data: withdrawals,
                        backgroundColor: 'rgba(193, 193, 29, 0.542)',
                        borderColor: 'rgba(183, 180, 9, 0.37)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}
 