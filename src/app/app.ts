import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapComponent } from './features/map/map';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapComponent],
  template: `
    <main>
      <app-map />
      <router-outlet />
    </main>
  `,
  styles: [
    `
      main {
        width: 100vw;
        height: 100vh;
        overflow: hidden;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly title = signal('object-orbiting-earth');
}
