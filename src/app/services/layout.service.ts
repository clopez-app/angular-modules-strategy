import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LayoutService {
  text$ = new BehaviorSubject('text');
  title$ = new BehaviorSubject('New Title');

  constructor() {}

  get text(): Observable<string> {
    return this.text$.asObservable();
  }

  set newText(text: string) {
    this.text$.next(text);
  }

  get title(): Observable<string> {
    return this.title$.asObservable();
  }
}
