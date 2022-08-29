import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hobbies=[{name:"Chess",startdate:"2022-01-01" ,fav:0,des:"hobbby is good"},{name:"Cricket",startdate:"2022-01-01" ,fav:0,des:"hobby is bad"}];
  favhobby:any[]=[];
  isLoggedin=true;  
  invalue="";
  isActive=false;
  title = 'Hobbies';
  col = 2;
  email="nikhil@gmail.com";
  xyz:any;
  lnk="";
  myhobby="";
 
  pic ="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Nilgiri_Mountain_Train.jpg/220px-Nilgiri_Mountain_Train.jpg"
  
  addHobby($event:any){
    let obj={name:$event,startdate:"2022-01-01",fav:0,des:""};
    this.hobbies.unshift(obj);
  }

  updatelnk(data:string){
    this.lnk=data;
  }

  delhobby($event:any){
    this.hobbies.splice($event,1);
  }

  addtofav($event:any){
    this.hobbies[$event].fav=1;
    this.favhobby= this.hobbies.filter(item=>item.fav==1);
  }

  removefav($event:any){
    this.hobbies[$event].fav=0;
  }



  }
  

  

  


