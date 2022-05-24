import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../main/users.services';
import { routingComponents } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor(private UsersService: UsersService) { }


  ngOnInit(): void {
  }
  height:any;
  age:any;
  street:any;
  city:any;
  step:any =1;
  price:any;
  cost:any;
  name:any;
  last:any;
  some:any;
  multistep =  new FormGroup({
    
  })
  getPrice(){
    this.UsersService.getPrice(this.price) .subscribe((result:any) =>{
      this.cost=result
      console.log (this.cost.priceChange)
    })
      
  }
  onSubmit(){
    this.UsersService.getPrice(this.price) .subscribe((result:any) =>{
      this.cost=result

      console.log (this.cost.priceChange)
    })

  }

  submit(){
    this.step ++;
    
  }
  pervious(){
    this.step --;

  }
  pervious2(){
    this.step --;  
  }
  
  final(){
    this.step ++;
    this.age=this.age
  } 
  }

