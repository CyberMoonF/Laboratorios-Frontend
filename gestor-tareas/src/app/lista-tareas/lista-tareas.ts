import { Component, inject } from '@angular/core';
import { TareaItem } from '../tarea-item/tarea-item';
import { TareasService } from '../tareas-service';

@Component({
  selector: 'app-lista-tareas',
  imports: [TareaItem],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css',
})
export class ListaTareas {
  private readonly servicio = inject(TareasService);

  protected readonly tareas = this.servicio.tareas;
  protected readonly total = this.servicio.total;
  protected readonly pendientes = this.servicio.pendientes;

  protected agregar(texto: string) {
    this.servicio.agregar(texto);
  }

  protected alternar(id: number) {
    this.servicio.alternar(id);
  }

  protected eliminar(id: number) {
    this.servicio.eliminar(id);
  }
}