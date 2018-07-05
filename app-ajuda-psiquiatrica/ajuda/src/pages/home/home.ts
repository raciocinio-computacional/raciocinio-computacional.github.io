import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalServiceProvider } from '../../providers/local-service/local-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public locais: LocalServiceProvider) {
    console.log(locais.obterEstabelecimentosPorServico("Grupo para crianças"));

  }

}
