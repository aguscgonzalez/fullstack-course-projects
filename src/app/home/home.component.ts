import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productos: any[] = [];

  constructor(private router: Router, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.productosService.obtenerProductos()
      .subscribe(response => {
        this.productos = response.results;
      });
  }

  detalleProducto(id: string): void {
    this.router.navigate(['/detalle-producto', id]);
  }
}

