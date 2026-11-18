import { computed, Injectable, signal } from '@angular/core';
import { Tarea } from './tarea';

@Injectable({ providedIn: 'root' })
export class TareasService {
  private readonly lista = signal<Tarea[]>([
    { id: 1, texto: 'Instalar Angular CLI', hecha: true },
    { id: 2, texto: 'Crear mi primer componente', hecha: false },
    { id: 3, texto: 'Entender los signals', hecha: false },
  ]);

  private siguienteId = 4;

  readonly tareas = this.lista.asReadonly();
  readonly total = computed(() => this.lista().length);
  readonly pendientes = computed(
    () => this.lista().filter((t) => !t.hecha).length,
  );

  agregar(texto: string) {
    const limpio = texto.trim();
    if (!limpio) return;

    this.lista.update((actuales) => [
      ...actuales,
      { id: this.siguienteId++, texto: limpio, hecha: false },
    ]);
  }

  alternar(id: number) {
    this.lista.update((actuales) =>
      actuales.map((t) => (t.id === id ? { ...t, hecha: !t.hecha } : t)),
    );
  }

  eliminar(id: number) {
    this.lista.update((actuales) => actuales.filter((t) => t.id !== id));
  }
}