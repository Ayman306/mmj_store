import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  //behaviour subject for categories
  categories = new BehaviorSubject<any>('');

 getData<T>(key: string, fetchFunction: () => Observable<T>): Observable<T> {
    const cachedData: string | null = sessionStorage.getItem(key);
    if (cachedData !== null) {
      return of(JSON.parse(cachedData));
    } else {
      return fetchFunction().pipe(
        tap(data => sessionStorage.setItem(key, JSON.stringify(data)))
      );
    }
  }
}
