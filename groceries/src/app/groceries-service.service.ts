import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {
  items: any = [];
  dataChanged$: Observable<boolean>;
  private dataChangedSubject: Subject<boolean>;
  baseURL = "http://localhost:8080";
  constructor(public http: HttpClient) {
    this.dataChangedSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangedSubject.asObservable();
  }
  removeItem(index) {
    // this.items.splice(index, 1);
    this.http.delete(this.baseURL + '/api/groceries' + index).subscribe(res => {
      this.items = res;
      this.dataChangedSubject.next(true);
    });
  }
  editItem(item, index) {
    // this.items[index] = item;
    this.http.put(this.baseURL+'/api/groceries'+item.id,item).subscribe(res=>{
      this.items=res;
      this.dataChangedSubject.next(true);
    })
  }
  addItem(item) {
    // this.items.push(item);
    this.http.post(this.baseURL+'/api/groceries',item).subscribe(res=>{
      this.items=res;
      this.dataChangedSubject.next(true);}
      );
  }
  getItem(): Observable<any> {
    return this.http.get(this.baseURL + '/api/groceries').pipe(
      map(this.extradata),
      catchError(this.handleError)
    );
  }
  private extradata(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError(error: Response | any) {
    let errmsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errmsg = `${error.status}-${error.statusText || ''} ${err}`;
    } else {
      errmsg = error.message ? error.message : error.toString();
    }
    console.log(errmsg);
    return Observable.throw(errmsg);
  }
}
