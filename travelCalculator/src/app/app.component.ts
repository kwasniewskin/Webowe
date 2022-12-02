import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CalculatorPodrozy-NK';
  kosztWycieczki:number = 0;
  kosztPodrozySamolotem: number = 800;
  kosztPodrozyPociagiem: number = 1000;
  kosztPodrozyAutokarem: number = 1200;
  kosztPodrozyTransportWlasny: number = 0;
  kosztZaDzien: number = 70;

  wybranySrodekTransportu: string = "samolot";
  wybraneMiejsce:string = "mazury";
  iloscOsob:number = 0;
  iloscDni:number = 0;

  public onSelectedTransport(value:string){
    this.wybranySrodekTransportu = value;
  }

  public onSelectedMiejsce(value:string){
    this.wybraneMiejsce = value;
  }

  public onChangeIloscOsob(value:string){
    this.iloscOsob = Number(value);
  }

  public onChangeIloscDni(value:string){
    this.iloscDni = Number(value);
  }

  public oblicz(){
    this.kosztWycieczki = 0;

    switch (this.wybranySrodekTransportu) {
      case "samolot":
        this.kosztWycieczki += this.kosztPodrozySamolotem; 
        break;
      case "pociag" :
        this.kosztWycieczki += this.kosztPodrozyPociagiem;
        break;
      case "autokar" :
        this.kosztWycieczki += this.kosztPodrozyAutokarem;
        break;
      case "wlasnyTransport" :
        this.kosztWycieczki += this.kosztPodrozyTransportWlasny;
        break;
    }

    this.kosztWycieczki = this.kosztWycieczki + this.kosztZaDzien * this.iloscDni;
    this.kosztWycieczki = this.kosztWycieczki*this.iloscOsob;
  }
}
