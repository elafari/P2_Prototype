import {Component} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './test.component.html'
})
export class TestComponent {
  title = 'Firebase connection-test';

  users: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.users = af.database.list('users');
  }
}
