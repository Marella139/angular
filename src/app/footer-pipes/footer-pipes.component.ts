import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-pipes',
  templateUrl: './footer-pipes.component.html',
  styleUrls: ['./footer-pipes.component.css'],
  template: `<p class="probootstrap-copyright">&copy; 2017 <a href="https://uicookies.com/">uiCookies:Explorer</a> All Rights Reserved.</p>
             <ul class="probootstrap-social">
             <li><a href="#"><i class="icon-twitter"></i></a></li>
             <li><a href="#"><i class="icon-facebook2"></i></a></li>
             <li><a href="#"><i class="icon-instagram2"></i></a></li>
             <li><a href="#"><i class="icon-google-plus"></i></a></li>
             </ul>`
})
export class FooterPipesComponent {

}