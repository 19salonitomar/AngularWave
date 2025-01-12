import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  
  Github = '';
  Linkedin = 'https://youtube.com/playlist?list=PLheXji-EGZWmQTXguIXLn00H-v3btJ_5n&si=jLzj4oMvgkId_65a'; // Replace with your actual YouTube channel URL
  emailAddress = 'codefh.dev@gmail.com';
constructor(public router:Router){

}

onHome(){
  window.scrollTo({top:0,behavior:'smooth'})
    }

    onAbout(){
  
      this.router.navigate(['./portfolio-website/about'])
    }
    
}
