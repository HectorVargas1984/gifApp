import { GifsService } from './../../gifs/service/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  ngOnInit(): void {}

  buscar(personaje: string) {
    this.gifsService.buscarGifs(personaje);
  }
}
