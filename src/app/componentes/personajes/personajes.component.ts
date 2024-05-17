import { Component, inject } from '@angular/core';
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

  private data: DataService = inject(DataService);

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
  this.loadPag("https://spapi.dev/api/characters?page=1");
break;
case "prev":
  this.loadPag(this.personajes.links.prev);
break;   
case "next":
  this.loadPag(this.personajes.links.next);
break;   
case "last": 
this.loadPag("https://spapi.dev/api/characters?page=" + 22);
break;         
default:
  break;
  }
}

private loadPag(_pag: string): void{
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
}

