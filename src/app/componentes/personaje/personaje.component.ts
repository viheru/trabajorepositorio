import { Component, inject } from '@angular/core';
import { Personaje } from '../../common/data-south-park';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personaje',
  standalone: true,
  imports: [],
  templateUrl: './personaje.component.html',
  styleUrl: './personaje.component.css'
})
export class PersonajeComponent {
  personaje!: Personaje;

  private data: DataService = inject(DataService);
  private ActivatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private Router: Router = inject(Router);

  constructor(
  ){
    this.cargarSouthPark();
  }

  private cargarSouthPark(){
    const id = this.ActivatedRoute.snapshot.params["id"]
    this.data.loadChar(id).subscribe({
      next: (datos: Personaje) => {
        this.personaje = datos;
      },
      error: (err: string) => {
        console.log(err);
      },
      complete: () => {
        console.log("Complete");
      }
  });
  }

  cambiarChar(id: number){
    if(id>0 && id<208){
      this.Router.navigateByUrl("/personejes/" + id).then(() => this.cargarSouthPark());

    }
  }
}
