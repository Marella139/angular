import { trigger, transition, style, animate, useAnimation, query, animateChild, group, stagger, state, keyframes } from '@angular/animations';

export const expandCollapse = trigger('expandCollapse', [
  transition('* => move',
  animate('2000ms', keyframes([
    style({transform: 'translateX(0)    rotateY(0)',        offset: 0}),
    style({transform: 'translateX(50%)  rotateY(90deg)',    offset: 0.33}),
    style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
    style({transform: 'translateX(-100%)',                  offset: 1.0})
  ])
)),
    state('collapsed', style({
      height:0,
      paddingTop:0,
      paddingBottom:0,
      opacity: 0
    })),
    transition('collapsed => expanded', [
      animate('100ms ease-out', style({
        height:0,
        paddingTop:0,
        paddingBottom:0
      })),
      animate('0s', style({ opacity:1}))
    ]),
    transition('expanded => collapsed', [
      animate('100ms ease-in')
    ])
  ])