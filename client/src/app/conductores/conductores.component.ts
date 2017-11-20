import { Component, OnInit } from '@angular/core';
import { ConductorService } from '../conductor.service';
import { Conductor } from '../contact';


@Component({
  selector: 'app-conductores',
  templateUrl: './conductores.component.html',
  styleUrls: ['./conductores.component.css'],
  providers: [ConductorService]
})
export class ConductoresComponent implements OnInit {
  conductores: Conductor[];
  conductor: Conductor;   
  nombre: string;

  constructor(private conductorService: ConductorService) { }

  addConductor()
  {
    const newConductor ={
      nombre: this.nombre,
    }
    
    this.conductorService.addConductor(newConductor).subscribe(conductor=>{
      console.log(conductor)
      this.conductores.push(conductor);
    });
  }

  deleteConductor(id:any)
  {
    var conductores = this.conductores;
    this.conductorService.deleteConductor(id).subscribe(data=>
      {
        if(data.n==1)
        {
         for(var i = 0 ; i < conductores.length; i++)
         {
           if(conductores[i]._id == id)
           {
             conductores.splice(i,1);
           }
         }
      }
    })
  }

  ngOnInit() {
    this.conductorService.getConductores().subscribe( conductores => this.conductores=conductores);
  }

}

