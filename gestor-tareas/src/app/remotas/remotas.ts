import { Component } from '@angular/core';
import { httpResource } from '@angular/common/http';

interface TareaRemota {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-remotas',
  imports: [],
  templateUrl: './remotas.html',
  styleUrl: './remotas.css',
})
export class Remotas {
  protected readonly remotas = httpResource<TareaRemota[]>(
    () => 'https://jsonplaceholder.typicode.com/todos?_limit=5',
  );
}