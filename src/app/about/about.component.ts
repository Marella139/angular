import { Component, OnInit } from '@angular/core';
import { AboutService} from '../about.service';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
  
})
export class AboutComponent implements OnInit   {

  services;

  constructor(private service: AboutService) { }


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

     //property-binding
 title = 'O nama';
 tekst1 = 'Ko od nas bar jednom nije pozeleo da zaustavi vreme, da poseban trenutak zadrzi zauvek u secanju? Tempo zivota nas prestize, porodice se menjaju, deca rastu, brakovi se sklapaju, najstariji nas napustaju.... Pravljenje svih vrsta fotografija je nesto cemu sam posvetio svoj zivot. Ja sam profesionalni fotograf, ali vaznije od toga, ja sam kao i Vi....porodicni čovek.';
 tekst2 = 'Mnoga poznata lica javne scene prelazila su nas prag. U nameri da odrzimo tradiciju i kvalitet, od nedavno stupamo u tesnu saradnju sa mladom i perspektivnom firmom "Foto-Lune", cime u potpunosti zaokruzujemo polje bavljenja fotografijom i svime sto je sa njom povezano.';
 tekst3 = 'Od svadbi, rodjendana, krstenja, preko promocija, specijalnih dogadjaja i porodicnih portreta, do fotografija za dokumenta i ostalih usluga koje pruzamo u foto radnji. I vise od toga – pozovite nas, dodjite, sigurno cemo uspeti da se dogovorimo.';
 







}

  


