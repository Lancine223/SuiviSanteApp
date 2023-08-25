import { Component, ViewChild } from '@angular/core';

//

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexTooltip,
ApexGrid,
ApexStroke,
ApexFill,
ApexYAxis, ApexLegend
} from "ng-apexcharts";
//
export type chartOptionstwo = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};
//

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
};


//


export type chartOptions = {
  series: ApexAxisChartSeries| ApexNonAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  plotOptions:ApexPlotOptions,
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  labels: string[];
  fill: ApexFill;
  subtitle: ApexTitleSubtitle;
  colors: string[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};


var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];
var colorPalette = ['#475BE8','#E3E7FC',  '#FEB019', '#FF4560', '#775DD0'];
//

@Component({
  selector: 'app-tableau-bord',
  templateUrl: './tableau-bord.component.html',
  styleUrls: ['./tableau-bord.component.css']
})
export class TableauBordComponent {
  public chartOptions!: Partial<chartOptions>  | any;
  public chartOptions1!: Partial<chartOptions> | any;
  public chartOptions2!: Partial<chartOptions> | any;
  public monthlyEarningsOpt! : Partial<chartOptions> | any;
  public optionsBar !: Partial<chartOptions> | any;
  public visitsQuotidiennes! : Partial<chartOptions> | any;
  public optionsLine! : Partial<chartOptions> | any;
  public optionDonut! : Partial<chartOptions> | any;

  chartLabel = ["Ventes", "Revenus","Utilisateurs"]
  constructor() {
  
    this.chartOptions = {
      series: [70],
      
      chart: {
        type: "radialBar",        
        width:150,
      },
      plotOptions: {
        radialBar: {
          
          dataLabels:{
            name : {
              show:false
            },
          value : {
            show: false
          }
      },
        },
        
      },
      
      labels: [
        "Ventes"
      ]
    };
    this.chartOptions1 = {
      series: [40],
      colors : ["#4CE13F"],
      chart: {
        type: "radialBar",
        width:150
      },
      
      plotOptions: {
        radialBar: {
          hollow: {
            size: "40%"
          }
        }
      },
      labels: ["Revenus"]
    };
    this.chartOptions2 = {
      series: [20],
      colors : ["#F29A2E"],
      chart: {
        type: "radialBar",
        width:150,
      },
      plotOptions: {
        radialBar: {          
          hollow: {
            size: "80%"
          }
        }
      },
      fill:{
        colors : ["#4CE13F"]
      },
      labels: ["Utilisateurss"]
    };

    this.monthlyEarningsOpt = {
      chart: {
        type: 'area',
        height: 260,
        background: '#eff4f7',
        sparkline: {
          enabled: true
        },
        offsetY: 20
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        type: 'solid',
        opacity: 1,
      },
      series: [{
        data: randomizeArray(sparklineData)
      }],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0,
        max: 130
      },
      colors: ['#dce6ec'],
    
      title: {
        text: '$424,652',
        offsetX: 30,
        style: {
          fontSize: '24px',
         // cssClass: 'apexcharts-yaxis-title'
        }
      },
      subtitle: {
        text: 'Sales',
        offsetX: 30,
        style: {
          fontSize: '14px',
          //cssClass: 'apexcharts-yaxis-title'
        }
      }
    };
    this.optionsBar = {
      chart: {
        type: 'bar',
        height: 380,
        width: '100%',
        stacked: false,
      },legend: {
       // horizontalAlign: 'right',
        position: "top",
        offsetY:-30,
       // offsetX:430
      },
      
      plotOptions: {
        bar: {
          columnWidth: '55%',
        }
      
      },
      colors: colorPalette,
      series: [{
        name: "Ventes",
        data: [42, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
        color: "#475BE8",
      }, {
        name: "Revenus",
        data: [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        color: "#E3E7FC"
      }],
      labels: ["Janv","Féb","Mars","Avr","Mai","Juin","Juil","Aout","Sep","Oct","Nov","Dec"],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          show:false,
          style: {
            colors: '#78909c'
          }
        }
      },
      dataLabels:{
       enabled : false
      },
      title: {
        text: 'Monthly Sales',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
      subtitle: {
        text: '19 250 900F CFA',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      }
    
    } 
    
    // donut (catégories)
    this.optionDonut = {
      chart: {
          type: 'donut',
          width: '100%',
          height: 400
      },
      dataLabels: {
        enabled: false,
      },
      plotOptions: {
        pie: {
          customScale: 0.8,
          donut: {
            size: '75%',
          },
          offsetY: 20,
        },
        /*stroke: {
          colors: undefined
        }*/
      },
      colors: colorPalette,
      title: {
        text: 'Catégories',
        style: {
          fontSize: '18px'
        }
      },
      series: [21, 23, 19, 14, 6],
      labels: ['Habillement', 'Nourriture', 'Electroniques', 'Kitchen Utility', 'Gardening'],
      legend: {
        position: 'left',
        offsetY: 80
      }
    }

    //LE TRAFIC
    this.visitsQuotidiennes = {
      chart: {
        height: 340,
        type: 'area',
        zoom: {
          enabled: false
        },
      },
      stroke: {
        curve: 'straight'
      },
      colors: colorPalette,
      series: [
        {
          name: "Blog",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 4,
            y: 5
          }, {
            x: 5,
            y: 3
          }, {
            x: 9,
            y: 8
          }, {
            x: 14,
            y: 4
          }, {
            x: 18,
            y: 5
          }, {
            x: 25,
            y: 0
          }]
        },
        {
          name: "Social Media",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 4,
            y: 6
          }, {
            x: 5,
            y: 4
          }, {
            x: 14,
            y: 8
          }, {
            x: 18,
            y: 5.5
          }, {
            x: 21,
            y: 6
          }, {
            x: 25,
            y: 0
          }]
        },
        {
          name: "External",
          data: [{
            x: 0,
            y: 0
          }, {
            x: 2,
            y: 5
          }, {
            x: 5,
            y: 4
          }, {
            x: 10,
            y: 11
          }, {
            x: 14,
            y: 4
          }, {
            x: 18,
            y: 8
          }, {
            x: 25,
            y: 0
          }]
        }
      ],
      fill: {
        opacity: 1,
      },
      title: {
        text: 'Visites quotidiennes',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
     /* markers: {
        size: 0,
        style: 'hollow',
        hover: {
          opacity: 5,
        }
      },*/
      tooltip: {
        intersect: true,
        shared: false,
      },
      xaxis: {
        tooltip: {
          enabled: false
        },
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 4,
        max: 12,
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#78909c'
          }
        }
      },
      legend: {
        show: false
      }
    }

        // visite par moment (jour/nuit)
          this.optionsLine = {
          chart: {
            height: 340,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
         /* plotOptions: {
            stroke: {
              width: 4,
              curve: 'smooth'
            },
          },*/
          colors: colorPalette,
          series: [
            {
              name: "Visit Jour",
              data: trigoSeries(52, 20)
            },
            {
              name: "Visit Nuit",
              data: trigoSeries(52, 27)
            },
          ],
          title: {
            floating: false,
            text: 'Clients',
            align: 'left',
            style: {
              fontSize: '18px'
            }
          },
          subtitle: {
            text: '168,215',
            align: 'center',
            margin: 30,
            offsetY: 40,
            style: {
              color: '#222',
              fontSize: '24px',
            }
          },
         /* markers: {
            size: 0
          },
        */
          grid: {
        
          },
          xaxis: {
            labels: {
              show: false
            },
            axisTicks: {
              show: false
            },
            tooltip: {
              enabled: false
            }
          },
          yaxis: {
            tickAmount: 2,
            labels: {
              show: false
            },
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false
            },
            min: 0,
          },
          legend: {
            position: 'top',
            horizontalAlign: 'left',
            offsetY: -20,
            offsetX: -30
          }
        
        }
        
  };

  
}
var randomizeArray = function (arg:any)  {
    var array = arg.slice();
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
  function trigoSeries(cnt:any, strength:any) {
    var data = [];
    for (var i = 0; i < cnt; i++) {
        data.push((Math.sin(i / strength) * (i / strength) + i / strength+1) * (strength*2));
    }
  
    return data;
  }
  
  
