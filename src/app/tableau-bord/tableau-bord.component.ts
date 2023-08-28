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
import { SuiviSanteServiceService } from '../suivi-sante-service.service';
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
  toDay= new Date();

  private suiviSanteService:SuiviSanteServiceService | any;
 
  private poids:number[] = [] 
  private pressionArt:number[] = [];
  private pouls:number[] = [];


  

  chartLabel = ["poids", "Pression Arterielle","Utilisateurs"]
  constructor(private service:SuiviSanteServiceService) {
    this.suiviSanteService = service;
    this.suiviSanteService.getMesures().forEach((element: { poids: number; pressionArterielle: number; pouls: number; }) => {
        this.poids.push(element.poids);
        this.pressionArt.push(element.pressionArterielle);
        this.pouls.push(element.pouls)


    });
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
        "Poids"
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
      labels: ["Pression Arterielle"]
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
        name: "Poids",
        data:  this.poids, //[this.suivisanteService.getMesures()[0].poids, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
        color: "#475BE8",
      }, {
        name: "Pression Arterielle",
        data: this.pressionArt,// [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        color: "#F29A2E"
        // color: "#E3E7FC"
      }
      , {
        name: "Pouls",
        data:this.pouls,// [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        color: "#E3E7FC"
        // color: "#E3E7FC"
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
        text: 'Statistique',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      },
      subtitle: {
        text: 'Visualisation',
        align: 'left',
        style: {
          fontSize: '18px'
        }
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

  
  
