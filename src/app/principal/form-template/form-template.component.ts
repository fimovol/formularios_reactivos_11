import { Component, OnInit } from '@angular/core';
import { Listado } from 'src/app/modelo/listado';
import { Regestrarse } from '../../modelo/registro'

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  constructor() { }

  model:Regestrarse={username:"asdasd",password:"asdasdxcxc",pais:Listado.Peru,ofertas:true}

  Enviar(){
    window.alert(`${this.model.username} ${this.model.password}`)
  }
  Cancelar(){
    this.model = {username:"",password:"",pais: Listado.Peru,ofertas:true}
  }
  paises :{text:string,value:string}[] = []
  ngOnInit(): void {
    for(let item in Listado){
      console.log(typeof item)
      console.log(item)
      if(isNaN(Number(item))){
        this.paises.push({text:item,value: Listado[item]})
      }
    }
  }
}
