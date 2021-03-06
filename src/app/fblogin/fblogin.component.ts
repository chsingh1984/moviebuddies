import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.scss']
})

export class FbloginComponent implements OnInit {

  private userName:string;
  constructor() { }

  ngOnInit() {

    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '655672971584721',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));

  }

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            //login success
            //login success code here
            //redirect to home page
            FB.api('/me',(response) => {
              console.log("your facebook name is:" + response.name);
              this.userName=response.name; 
            });  
      
           }
           else
           {
           console.log('User login failed');
         }
      });
    
      
    
  }
}
