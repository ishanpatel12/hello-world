import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsersService } from './users.services';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  

  constructor(private UsersService: UsersService) { }

  ngOnInit(): void {
  }



  city=""
  state=""
  Name=""
  ID=""
  weather:any;
  zip:any;
  cost:any;

  EmployeeName = new FormControl ('')

  EmployeeAdd = new FormControl ('')

   
  public localWaterMark: string = 'Select countries';
  price:any;
  getPrice(){

    this.UsersService.getPrice(this.price).subscribe((data:any) =>{
      this.cost=data
      console.log (this.cost.rate)
    })
      
  }
  getWeatherDataByState(){
    this.UsersService.getWeatherDataByState(this.zip).subscribe((data: any) =>{
      this.weather = data;
      console.log (this.weather.main.temp_min)
    })
  }

  onSubmit(){
		
		
	
      if (this.zip >= 10000 && this.zip <= 99999){
        this.UsersService.getWeatherDataByState(this.zip).subscribe((data: any) =>{
            this.weather = data;
            console.log (this.weather.main.temp_min)
          })
        }
      else {
          console.log ('error')
          }	
	

   
  
    
  
      }





}
