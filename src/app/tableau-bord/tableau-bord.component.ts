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
import { DatePipe } from '@angular/common';
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
  private jourD: string[]=[];
  private nomp: string[]=[];
  private togather: string[]=[];


  

  chartLabel = ["poids", "Pression Arterielle","Utilisateurs"]
  constructor(private service:SuiviSanteServiceService) {
    this.suiviSanteService = service;
    this.suiviSanteService.getMesures().forEach((element: { poids: number; pressionArterielle: number; pouls: number; date:string, NomComplet:string , togather:string}) => {
        this.poids.push(element.poids);
        this.pressionArt.push(element.pressionArterielle);
        this.pouls.push(element.pouls);
        this.jourD.push(element.date);
        this.nomp.push(element.NomComplet);
        this.togather.push(element.NomComplet+'->'+element.date);
    });
    // 
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
          columnWidth: '50%',
        }
      
      },
      colors: colorPalette,
      series: [{
        name: "Poids",
        data:  this.poids, //[this.suivisanteService.getMesures()[0].poids, 52, 16, 55, 59, 51, 45, 32, 26, 33, 44, 51, 42, 56],
        color: "#26B08D",
      }, {
        name: "Pression Arterielle",
        data: this.pressionArt,// [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        color: "#FF0000"
        // color: "#E3E7FC"
      }
      , {
        name: "Pouls",
        data:this.pouls,// [6, 12, 4, 7, 5, 3, 6, 4, 3, 3, 5, 6, 7, 4],
        color: "#0000FF"
        // color: "#E3E7FC"
      }],
      labels: this.togather,
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
        text: 'SuiviSanteApp',
        align: 'left',
        style: {
          fontSize: '18px'
        }
      }
    
    } 
   

   
        
  };

  
}


  
  
