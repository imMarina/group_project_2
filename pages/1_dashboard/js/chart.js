let chart = JSC.chart('chartDiv', { 
  debug: true, 
  legend_position: 'bottom right', 
  type: 'area spline', 
  defaultSeries: { shape_opacity: 0.5 }, 
  xAxis: { 
    crosshair_enabled: true, 
    scale: { type: 'time' } 
  }, 
  title_label_text: 'Costs (Last 6 Months)', 
  yAxis: { formatString: 'c' }, 
  series: [ 
    { 
      name: 'Purchases', 
      points: [ 
        ['1/1/2020', 29.9], 
        ['2/1/2020', 97.5], 
        ['3/1/2020', 110.4], 
        ['4/1/2020', 129.2], 
        ['5/1/2020', 144.0], 
        ['6/1/2020', 176.0] 
      ] 
    }, 
    { 
      name: 'Taxes', 
      points: [ 
        ['1/1/2020', 86.9], 
        ['2/1/2020', 79.5], 
        ['3/1/2020', 95.4], 
        ['4/1/2020', 97.2], 
        ['5/1/2020', 123.0], 
        ['6/1/2020', 111.0] 
      ] 
    }, 
    { 
      name: 'Supplies', 
      points: [ 
        ['1/1/2020', 129.9], 
        ['2/1/2020', 111.5], 
        ['3/1/2020', 66.4], 
        ['4/1/2020', 29.2], 
        ['5/1/2020', 88.0], 
        ['6/1/2020', 102.0] 
      ] 
    }, 
    { 
      name: 'Rent', 
      points: [ 
        ['1/1/2020', 56.9], 
        ['2/1/2020', 56.5], 
        ['3/1/2020', 56.4], 
        ['4/1/2020', 56.2], 
        ['5/1/2020', 75.0], 
        ['6/1/2020', 56.0] 
      ] 
    } 
  ] 
}); 