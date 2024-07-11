import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {
  producto: any;

  constructor(private route: ActivatedRoute, private productosService: ProductosService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productId = params.get('id');
      if (productId) {
        this.productosService.obtenerProductoPorId(productId)
          .subscribe(productoResponse => {
            this.producto = productoResponse;
            this.productosService.obtenerDescripcionPorId(productId)
              .then(descripcion => {
                this.producto.description = descripcion;
              });
          });
      }
    });
  }
}