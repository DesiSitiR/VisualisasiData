// js/chart3_pie.js
function createPieChart() {
  const counts = {};
  socioData.forEach(d => {
    counts[d.province] = (counts[d.province] || 0) + 1;
  });

  const labels = Object.keys(counts);
  const values = Object.values(counts);

  const trace = {
    labels: labels,
    values: values,
    type: 'pie',
    textinfo: 'percent',
    hovertemplate: '<b>%{label}</b><br>Jumlah Wilayah: %{value}<br>%{percent}<extra></extra>',
    automargin: true
  };

  const layout = {
    height: 600,
    margin: { t: 20, b: 20, l: 20, r: 20 }
  };

  Plotly.newPlot('pie-chart', [trace], layout);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createPieChart);
} else {
  createPieChart();
}