// js/chart2_scatter.js
function createScatterPlot() {
  const provinces = [...new Set(socioData.map(d => d.province))];
  const colors = [
    '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd',
    '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf',
    '#aec7e8', '#ffbb78', '#98df8a', '#ff9896', '#c5b0d5',
    '#c49c94', '#f7b6d2', '#c7c7c7', '#dbdb8d', '#9edae5'
  ];

  const colorMap = {};
  provinces.forEach((p, i) => {
    colorMap[p] = colors[i % colors.length];
  });

  const trace = {
    x: socioData.map(d => +d.exp_percap),
    y: socioData.map(d => +d.life_exp),
    mode: 'markers',
    type: 'scatter',
    text: socioData.map(d => `${d.cities_reg}, ${d.province}`),
    marker: {
      size: 7,
      color: socioData.map(d => colorMap[d.province]),
      opacity: 0.7
    },
    hovertemplate: 
      '<b>%{text}</b><br>' +
      'Pengeluaran per Kapita: Rp%{x:,}<br>' +
      'Harapan Hidup: %{y:.1f} tahun<extra></extra>'
  };

  const layout = {
    xaxis: { title: 'Pengeluaran Per Kapita (Rp)' },
    yaxis: { title: 'Harapan Hidup (tahun)' },
    height: 550,
    margin: { t: 20, b: 50, l: 60, r: 20 }
  };

  Plotly.newPlot('scatter-plot', [trace], layout);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createScatterPlot);
} else {
  createScatterPlot();
}