import { Route } from '@angular/compiler/src/core';
import { PreloadingStrategy } from '@angular/router';
import { Observable, of } from 'rxjs';

interface CustomRoute extends Route {
  data: { [klass: string]: any };
}

export class CustomPreloader implements PreloadingStrategy {
  preload(route: CustomRoute, load: Function): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
