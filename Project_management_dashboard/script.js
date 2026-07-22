// 1. VISITORS & BUYERS CHART (Stacked Columns + Line Overlay)
var optionsVisitorsBuyers = {
  series: [
    {
      name: "Visitors",
      type: "column",
      data: [35, 38, 30, 42, 38, 28, 26, 32, 38, 48, 52, 36],
    },
    {
      name: "Buyers",
      type: "column",
      data: [20, 22, 18, 25, 24, 18, 16, 20, 24, 28, 30, 22],
    },
    {
      name: "Returni",
      type: "line",
      data: [58, 62, 68, 75, 72, 60, 62, 74, 82, 88, 80, 70],
    },
  ],
  chart: {
    height: 260,
    type: "line",
    stacked: true,
    toolbar: { show: false },
    sparkline: { enabled: false },
  },
  colors: ["#328593", "#00b894", "#e67e22"],
  stroke: {
    width: [0, 0, 3],
    curve: "smooth",
  },
  plotOptions: {
    bar: {
      columnWidth: "35%",
      borderRadius: 4,
      borderRadiusApplication: 'top',
    },
    bar: {
      columnWidth: '40%',
      
    //   // 1. Set the pixel radius for the corners
    //   borderRadius: 6, 
      
    //   // 2. Control which corners get rounded ('top' or 'all')
    //   borderRadiusApplication: 'top', // Options: 'top' (default) or 'all'
      
    //   // 3. Control how rounded corners apply to stacked bars
    //   borderRadiusWhenStacked: 'all', // Options: 'all' (rounds top of each bar in stack) or 'last' (rounds only the top-most bar)
    },
  },
  
  fill: {
    opacity: [0.85, 1, 1],
  },
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  markers: {
    size: [0, 0, 5],
    colors: ["#fff"],
    strokeColors: "#e67e22",
    strokeWidth: 2,
  },
  xaxis: {
    type: "category",
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false, // Custom HTML header legend used instead
  },
  grid: {
    show: false,
  },
  tooltip: {
    shared: true,
    intersect: false,
  },
};

var chartVisitorsBuyers = new ApexCharts(
  document.querySelector("#chart"),
  optionsVisitorsBuyers,
);
chartVisitorsBuyers.render();

// 2. CONVERSION DONUT CHART
var optionsConversion = {
  series: [33, 19, 48],
  chart: {
    type: "donut",
    height: 200,
  },
  colors: ["#00b894", "#2482f6", "#ca6d49"],
  labels: ["Other", "New", "Buyers"],
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "60%",
        labels: {
          show: false,
        },
      },
    },
  },
  stroke: {
    width: 2,
  },
};

var chartConversion = new ApexCharts(
  document.querySelector("#doughnutChart"),
  optionsConversion,
);
chartConversion.render();

// 3. SALES VOLUME CHART (Dual Area Chart)
var optionsSalesVolume = {
  series: [
    {
      name: "Sales",
      data: [60, 75, 95, 80, 65, 50, 55, 75, 95, 80, 60, 50],
    },
    {
      name: "Purchase",
      data: [40, 50, 65, 55, 45, 38, 42, 55, 70, 60, 45, 35],
    },
  ],
  chart: {
    height: 220,
    type: "area",
    toolbar: { show: false },
  },
  colors: ["#00b894", "#2482f6"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    width: 2,
  },
  fill: {
    type: "gradient",
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.35,
      opacityTo: 0.05,
      stops: [0, 90, 100],
    },
  },
  xaxis: {
    categories: [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ],
    axisBorder: { show: false },
    axisTicks: { show: false },
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val + "K";
      },
    },
  },
  grid: {
    borderColor: "#f1f1f1",
  },
  legend: {
    show: false, // Custom header legend used instead
  },
};

var chartSalesVolume = new ApexCharts(
  document.querySelector("#bottoMchart"),
  optionsSalesVolume,
);
chartSalesVolume.render();


// // 1. VISITORS & BUYERS GRAPH
// var optionsVisitors = {
//   series: [
//     {
//       name: 'Visitors',
//       type: 'column',
//       data: [35, 38, 30, 42, 38, 28, 26, 32, 38, 48, 52, 36],
//     },
//     {
//       name: 'Buyers',
//       type: 'column',
//       data: [20, 22, 18, 25, 24, 18, 16, 20, 24, 28, 30, 22],
//     },
//     {
//       name: 'Returni',
//       type: 'line',
//       data: [58, 62, 68, 75, 72, 60, 62, 74, 82, 88, 80, 70],
//     },
//   ],
//   chart: {
//     height: 250,
//     type: 'line',
//     stacked: true,
//     toolbar: { show: false },
//   },
//   colors: ['#4A7E8C', '#00b894', '#ca6d49'],
//   stroke: {
//     width: [0, 0, 3],
//     curve: 'smooth',
//   },
//   plotOptions: {
//     bar: {
//       columnWidth: '40%',
//     },
//   },
//   fill: {
//     opacity: [0.85, 1, 1],
//   },
//   labels: [
//     'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
//     'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
//   ],
//   markers: {
//     size: [0, 0, 4],
//   },
//   xaxis: {
//     type: 'category',
//     labels: { show: false },
//     axisBorder: { show: false },
//     axisTicks: { show: false }
//   },
//   yaxis: {
//     show: false
//   },
//   grid: {
//     show: false
//   },
//   legend: {
//     show: false
//   }
// };

// var chartVisitors = new ApexCharts(document.querySelector('#chart'), optionsVisitors);
// chartVisitors.render();

// // 2. CONVERSION DONUT CHART
// var optionsConversion = {
//   series: [48, 19, 33],
//   chart: {
//     type: 'donut',
//     height: 220,
//   },
//   colors: ['#00b894', '#2482f6', '#ca6d49'],
//   legend: {
//     show: false,
//   },
//   dataLabels: {
//     enabled: false,
//   },
//   plotOptions: {
//     pie: {
//       donut: {
//         size: '70%',
//       },
//     },
//   },
// };

// var chartConversion = new ApexCharts(document.querySelector('#doughnutChart'), optionsConversion);
// chartConversion.render();

// // 3. SALES VOLUME BOTTOM AREA CHART
// var optionsSalesVolume = {
//   series: [
//     {
//       name: 'Sales',
//       data: [60, 75, 95, 80, 65, 50, 55, 75, 95, 80, 60, 50],
//     },
//     {
//       name: 'Purchase',
//       data: [40, 50, 65, 55, 45, 38, 42, 55, 70, 60, 45, 35],
//     },
//   ],
//   chart: {
//     height: 200,
//     type: 'area',
//     toolbar: { show: false }
//   },
//   colors: ['#00f2fe', '#96c93d'],
//   dataLabels: {
//     enabled: false,
//   },
//   stroke: {
//     curve: 'smooth',
//     width: 2
//   },
//   fill: {
//     type: 'gradient',
//     gradient: {
//       shadeIntensity: 1,
//       opacityFrom: 0.4,
//       opacityTo: 0.05,
//     },
//   },
//   xaxis: {
//     categories: [
//       'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
//       'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
//     ],
//     labels: { show: false },
//     axisBorder: { show: false },
//     axisTicks: { show: false }
//   },
//   yaxis: {
//     labels: {
//       formatter: function (val) {
//         return val + 'K';
//       },
//     },
//   },
//   grid: {
//     borderColor: '#f1f1f1',
//   },
//   legend: {
//     show: false
//   }
// };

// var chartSalesVolume = new ApexCharts(document.querySelector('#bottoMchart'), optionsSalesVolume);
// chartSalesVolume.render();