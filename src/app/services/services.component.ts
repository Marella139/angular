import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import { expandCollapse } from './services.component.animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state } from '@angular/animations';
import { HostListener } from '@angular/core';
import { AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
  animations:[
    expandCollapse,
    trigger('slide',[
      transition(':enter',[
        style({transform: 'translateY(+50px)'}),
        animate(700),
      ])
    ]),
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: "translateX(0)"
      })),
      state('hide',   style({
        opacity: 0,
        transform: "translateX(+50%)"
      })),
      transition('show => hide', animate('1200ms ease-out')),
      transition('hide => show', animate('1200ms ease-in'))
    ])
  ]
})
export class ServicesComponent implements OnInit {

  services;

  constructor(private service: ServicesService, public el: ElementRef) { }

  ngOnInit() {
    this.service.dohvatiServices().subscribe(
      response => {
      console.log(response);

      },
      error => {
        console.log(error);
      }
    );
  }

  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

  state = 'hide'

 

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.el.nativeElement.offsetTop
      const scrollPosition = window.pageYOffset

      if (scrollPosition >= componentPosition) {
        this.state = 'show'
      } else {
        this.state = 'hide'
      }

    }

}



