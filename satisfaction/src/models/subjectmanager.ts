import { Subject } from 'rxjs';

export class SubjectManager<T> {
  private subject = new Subject<T>();

  get getSubject() { //unicast
    return this.subject.asObservable();
  }

  set setSubject(value: T) {
    this.subject.next(value);
  }
}