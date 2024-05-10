import { Component, Inject } from '@angular/core';
import { DataSouthPark } from '../../common/data-south-park';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  personajes!: DataSouthPark;

  private data: DataService = Inject(DataService);

  constructor(){
    this.cargarSouthPark();

  }



  private cargarSouthPark(){
    this.data.loadSouthPark().subscribe({
      next: (datos: DataSouthPark) => {
        this.personajes = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
  });
}
cambiarPag(pag: string){
  switch(pag){
case "first":
break;
case "prev":
break;   
case "next":
break;   
case "last":
break;         
default:
  break;
  }
}
}

