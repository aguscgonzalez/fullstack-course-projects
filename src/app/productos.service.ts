import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { lastValueFrom,map } from 'rxjs';
import { DetalleCompletoProducto } from './productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  obtenerProductos(): Observable<any> {
    return this.http.get<any>('https://api.mercadolibre.com/sites/MLA/search?q=drone');  
  }

  obtenerProductoPorId(id: string): Observable<DetalleCompletoProducto> {
  return this.http.get<DetalleCompletoProducto>(`https://api.mercadolibre.com/items/${id}`);

  }
  obtenerDescripcionPorId(id: string): Promise<string> {
    return lastValueFrom(
      this.http
        .get(`https://api.mercadolibre.com/items/${id}/description`)
        .pipe(map((response: any) => response.plain_text))
    );
  }
}