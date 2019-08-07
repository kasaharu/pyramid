import { Injectable } from '@angular/core';

// FIXME: localStorage のテストの書き方を調査して追加する
/* istanbul ignore next */
@Injectable({
  providedIn: 'root',
})
export class WebStorageInfrastructure {
  constructor() {}

  get(keyName: string) {
    return localStorage.getItem(keyName);
  }

  set(keyName: string, value: string) {
    return localStorage.setItem(keyName, value);
  }
}
