import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from './model/products';
import { environment } from './../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VideoService {
  public productSubject: BehaviorSubject<Product>;
  public productValue: Observable<Product>;

  constructor(private http: HttpClient) {
    this.productSubject = new BehaviorSubject<Product>(null);
    this.productValue = this.productSubject.asObservable();
  }
  
  public product(): any {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Source', 'Web');
    return this.http.get<Product>(`${environment.apiUrl}getVideos`, { headers, observe: 'response' });
  }

}