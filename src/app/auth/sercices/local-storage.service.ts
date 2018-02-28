import { Injectable } from '@angular/core';
import { DefaultRequestOptionsService } from './default-request-options.service';

@Injectable()
export class LocalStorageService {

  public USER_KEY = "user";
  public BASE_URL = "http://localhost:8585/";
  constructor() { }

        set(key, value) {

          window.localStorage[key] = value;

          return this;

        }



        get(key, defaultValue = null) {

            return window.localStorage[key] || defaultValue;

        }



        setObject(key, value:Object) {

            window.localStorage[key] = JSON.stringify(value);

            return this;

        }



        getObject(key) {

            return JSON.parse(window.localStorage.getItem(key));

        }



        remove(key) {

            window.localStorage.removeItem(key);

            return this;

        }
}
