import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../contact';


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css'],
  providers: [EmpleadoService]
})
export class EmpleadosComponent implements OnInit {
  empleados: Empleado[];
  empleado: Empleado;   
  nombre: string;
  tipo: string;

  constructor(private empleadoService: EmpleadoService) { }

  addEmpleado()
  {
    const newEmpleado ={
      nombre: this.nombre,
      tipo: this.tipo
    }
    
    this.empleadoService.addEmpleado(newEmpleado).subscribe(empleado=>{
      console.log(empleado)
      this.empleados.push(empleado);
    });
  }

  deleteEmpleado(id:any)
  {
    var empleados = this.empleados;
    this.empleadoService.deleteEmpleado(id).subscribe(data=>
      {
        if(data.n==1)
        {
         for(var i = 0 ; i < empleados.length; i++)
         {
           if(empleados[i]._id == id)
           {
             empleados.splice(i,1);
           }
         }
      }
    })
  }

  ngOnInit() {
    this.empleadoService.getEmpleados().subscribe( empleados => this.empleados=empleados);
  }

}

