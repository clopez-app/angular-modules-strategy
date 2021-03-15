import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject();
  text: string;
  title: string;
  constructor(private service: LayoutService) {}

  ngOnInit(): void {
    this.service.text
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((text) => (this.text = text));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  changeText(): void {
    const newText = new Date();
    this.service.newText = newText.toString();
  }

  onClick(): void {
    console.log(this.text, this.title);
  }
}
