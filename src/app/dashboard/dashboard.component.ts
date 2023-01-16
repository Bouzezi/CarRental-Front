import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
}) 
export class DashboardComponent implements OnInit {
total_cars:number;
kilometrage:number;
total_renting_cars:number;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.totalCars();
    this.kilometrageMoyenne();
    this.totalRentingCars();
  }

  totalCars(){
    this.dataService.totalCars().subscribe(res=>{
     console.log(res);
      this.total_cars=res;
      this.IncreasingNumbers(this.total_cars,".num1",800);
    })
  }
  kilometrageMoyenne(){
    this.dataService.kilometrageMoyenne().subscribe(res=>{
      console.log("kiloooo  "+res);
      this.kilometrage=res;
      this.IncreasingNumbers(this.kilometrage,".num2",100);
    })
  }

  totalRentingCars(){
    this.dataService.totalRentingCars().subscribe(res=>{
     console.log(res);
      this.total_renting_cars=res;
      this.IncreasingNumbers(this.total_renting_cars,".num3",800);
    })
  }

  IncreasingNumbers(value:number,classe:string,time:number){
    let valueDisplay = document.querySelector(classe);
      let startValue = 0;
      let endValue = value.valueOf()
      //Math.floor(interval / endValue); interval=4000
      let duration = time
      console.log(duration);
        let end=endValue;  
        let pct;
      let counter = setInterval(function () {
        if(end>=1000)
            pct=1000;
        else if(end>=100)
            pct=100;
        else if(end>=10)
            pct=10;
        else
            pct=1;
        startValue += pct;
        end-=pct;
        /* console.log("end "+end);
        console.log("start "+startValue); */
        valueDisplay.textContent= startValue.toString();
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
  }

}
