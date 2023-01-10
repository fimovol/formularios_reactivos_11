import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  constructor(
    private formBuilder:FormBuilder,
    ) 
    { }
  formLogin = this.formBuilder.group(
    {
      
      password:["",
      [
        // Validators.required,
        // Validators.minLength(6)
      ]],
      terms:[false,[
        // Validators.required,
        // Validators.requiredTrue
      ]],
      nombre:["",[
        Validators.required,
        Validators.minLength(10)
      ]],
      mensaje:["",[
        Validators.required,
        Validators.maxLength(500)
      ]],
      email:["",
      [
        Validators.required,
        Validators.email
      ]],
    }
  )
  

  ngOnInit(): void {
    this.loadApi()
  }
  loadApi():any{
    const response = {
      email: "",
      password: "asdasdasd",
      terms: false
    }
    this.formLogin.patchValue(
      {
        email:response.email,
        password:response.password,
        terms: response.terms
      }
    )
  }
  
  send():any{
    console.log(this.formLogin.value)
  }
}
