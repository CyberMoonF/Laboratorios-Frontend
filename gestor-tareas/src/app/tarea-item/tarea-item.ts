import { Component, input, output } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-tarea-item',
  imports: [],
  templateUrl: './tarea-item.html',
  styleUrl: './tarea-item.css',
})
export class TareaItem {
  tarea = input.required<Tarea>();
  alternada = output<number>();
  eliminada = output<number>();
}