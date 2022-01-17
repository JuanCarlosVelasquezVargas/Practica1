import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Practica1';

  nombreEstudiante: string = 'Juan Velásquez';
  edadEstudiante: number = 33;
  horaActual: Date;
  colors: IColor[] = [
    {redSocial: 'Whatsapp', color: '#25D366'},
    {redSocial: 'Facebook', color: '#4267B2'},
    {redSocial: 'Twitter', color: '#1DA1F2'},
    {redSocial: 'Youtube', color: '#FF0000'}
  ];

  mostrarHora(evento: any){
    console.log(evento);

    this.horaActual = new Date();

    const {target} = evento;
    target.innerHTML = `Cambio la hora - ${this.horaActual.getSeconds()}`;
  }
}

interface IColor {
  redSocial: string;
  color: string;
}