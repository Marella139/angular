import { Component, OnInit } from '@angular/core';
import { expandCollapse } from './contact-form.component.animations';
import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state } from '@angular/animations';
import { HostListener } from '@angular/core';
import { AfterContentInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
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
      transition('show => hide', animate('1000ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class ContactFormComponent {
    log(x){
      console.log(x);
    }
    onSave($event){
      console.log('Poslato!', $event);
    }
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
      //property binding
      kontakt_ikonica = 'icon-location2';
      kontakt_info = 'Resavska 88, Vracar, Beograd';
     
      mail_ikonica = 'icon-mail';
      mail_info = 'fotolune@eunet.rs';
     
      telefon_ikonica = 'icon-phone2';
      telefon_info = '>011/8888-888';
  }
