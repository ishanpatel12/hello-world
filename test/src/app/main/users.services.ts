import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
// import {HttpClient} from '@angular/common/http'

 @Injectable ({

    providedIn : 'root'

})
export class UsersService{
   
url = 'https://api.openweathermap.org/data/2.5/weather'
apiKey = 'd00c28a64976141a9ae10d4553a8c04f'
 constructor (private http:HttpClient) {}
 
 getWeatherDataByState (zip:number){
    let params=new HttpParams()
    
    .set('appid', this.apiKey)
    .set('zip',zip)
  
    return this.http.get(this.url, {params});
}

getWeatherDataByCoords (lat: string | number | boolean , lon: string | number | boolean){
    let params = new HttpParams()
    .set('lat', lat)
    .set('lon', lon)

    .set ('unit','imperial')
    .set('appid', this.apiKey)

    return this.http.get(this.url, {params});
    }

}








// // getData(){
// //     let url="https://parse-dashboard.back4app.com/apps/7fa90969-2e61-4cc3-baf6-4e1b20a52135/browser/AK";
// //     return this.http.get(url);
// //     }
// 