import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ProgressComponent } from './progress/progress.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  testForm = new UntypedFormGroup({
    food: new UntypedFormControl('', Validators.required),
    comment: new UntypedFormControl('', Validators.required),
  });
  ngOnInit() {}

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event) {
    console.log(event);
  }

  ngAfterViewInit() {}
}
