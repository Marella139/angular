import { Component, OnInit } from '@angular/core';
import { expandCollapse } from './home.component.animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state } from '@angular/animations';
import { HostListener } from '@angular/core';
import { AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
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
          transform: "translateX(-50%)"
        })),
        transition('show => hide', animate('1200ms ease-out')),
        transition('hide => show', animate('1200ms ease-in'))
      ])
    ]
})

export class HomeComponent {
  isExpanded: boolean;

  toggle() { 
    this.isExpanded = !this.isExpanded;
  }

  state = 'hide'

  constructor(public el: ElementRef) { }

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