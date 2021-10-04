import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  id: string;
  location: string;
  activeTab: boolean = true;
  friends: any[] = [];
  form: FormGroup;
  firstName = new FormControl("", Validators.compose([Validators.required]));
  lastName = new FormControl("", Validators.compose([Validators.required]));
  address = new FormControl("", Validators.compose([Validators.required]));
  contact = new FormControl("", Validators.compose([Validators.required]));
  constructor(public route: ActivatedRoute, public router: Router, public formBuilder: FormBuilder, public toastr: ToastrService, private api: ApiService) {
    this.form = this.createForm(formBuilder);
    
    const url = this.route.snapshot;
    this.id = url.params.id;
    this.location = this.id ? url.url[2].path : url.url[1].path;
    console.log(this.location);
    console.log(this.id);
    
  }

  ngOnInit(): void {
    this.openUser(this.location, this.id)
    
  }

  openUser(loc, id){
    const data = this.api.getUser().find(item => item.id === parseInt(id)); 
    console.log(data);
     
    if(loc === 'view' && id){
      this.form.patchValue({firstName: data.firstName, lastName: data.lastName, address: data.address, contact: data.contact});
      this.friends = data.friends;
      this.form.disable();
    }
  }

  createForm(formBuilder: FormBuilder){
    return formBuilder.group({
      firstName: this.firstName,
      lastName: this.lastName,
      address: this.address,
      contact: this.contact
    })

  }

  back(){
    this.router.navigate(['/sampleApp'])
  }

  tab(event){
  this.activeTab = event;
  }

  submit() {
    const {...etc} = this.form.value;
    const friends = this.friends;
    const result = {...etc, friends};
    console.log(result)
    this.form.valid ? this.toastr.success('Added user successfully!') : "";
    // this.api.post('endpoint', result).then(item => {
    //   this.toastr.success('Added user successfully!')
    // });
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

  receiveFriend(event){
    this.friends = event;
  }

}
