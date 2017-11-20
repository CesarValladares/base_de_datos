import { Component, OnInit } from '@angular/core';
import { PaqueteService } from '../paquete.service';
import { Paquete } from '../contact';


@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.css'],
  providers: [PaqueteService]
})
export class PaquetesComponent implements OnInit {
  paquetes: Paquete[];
  paquete: Paquete;   
  peso: string; 
  tamaño: string;


  constructor(private paqueteService: PaqueteService) { }

  addPaquete()
  {
    const newPaquete ={
      peso: this.peso, 
      tamaño: this.tamaño
    }
    
    this.paqueteService.addPaquete(newPaquete).subscribe(paquete=>{
      console.log(paquete)
      this.paquetes.push(paquete);
    });
  }

  deletePaquete(id:any)
  {
    var paquetes = this.paquetes;
    this.paqueteService.deletePaquete(id).subscribe(data=>
      {
        if(data.n==1)
        {
         for(var i = 0 ; i < paquetes.length; i++)
         {
           if(paquetes[i]._id == id)
           {
             paquetes.splice(i,1);
           }
         }
      }
    })
  }

  ngOnInit() {
    this.paqueteService.getPaquetes().subscribe( paquetes => this.paquetes=paquetes);
  }

}

