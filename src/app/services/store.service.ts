import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Nullable<T> = T | null;

@Injectable()
export class StateStoreService<T> {
  private readonly stateSubject = new BehaviorSubject<Nullable<T>>(null);

  get state() {
    return this.stateSubject.asObservable();
  }

  getState(): Nullable<T> {
    return this.stateSubject.getValue();
  }

  updateState(newState: Nullable<T> | ((x: Nullable<T>) => Nullable<T>)) {
    this.stateSubject.next(
      // @ts-ignore
      typeof newState === 'function' ? newState(this.getState()) : newState
    );
  }
}
