// js/chart1_bar.js
function createBarChart() {
  const provinceMap = {};
  socioData.forEach(d => {
    if (!provinceMap[d.province]) {
      provinceMap[d.province] = { sum: 0, count: 0 };
    }
    provinceMap[d.province].sum += parseFloat(d.poorpeople_percentage);
    provinceMap[d.province].count++;
  });

  const avgData = Object.entries(provinceMap).map(([province, stats]) => ({
    province,
    avg: stats.sum / stats.count
  }));

  const top10 = avgData
    .sort((a, b) => b.avg - a.avg)
    .slice(0, 10);

  const trace = {
    x: top10.map(d => d.province),
    y: top10.map(d => d.avg),
    type: 'bar',
    marker: { color: '#e74c3c' },
    hovertemplate: '<b>%{x}</b><br>Rata-rata: %{y:.2f}%<extra></extra>'
  };

  const layout = {
    xaxis: { title: 'Provinsi', tickangle: -45 },
    yaxis: { title: 'Persentase Penduduk Miskin (%)' },
    height: 500,
    margin: { t: 20, b: 120, l: 50, r: 20 }
  };

  Plotly.newPlot('bar-chart', [trace], layout);
}

// Jalankan setelah DOM siap
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createBarChart);
} else {
  createBarChart();
}