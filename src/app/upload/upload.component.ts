import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import {User} from '../user/user';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  url = environment.baseUrl + '/videos/uploadFile';
  form: FormGroup;
  currentUser: User;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: [''],
      title: ['']
    });
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  upload(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }


    onSubmit() {
      const uploadHTML = document.getElementById('uploadResponse');
      uploadHTML.innerHTML = "<h5> Uploading, please wait... </h5>"


      const formData = new FormData();
      formData.append('file', this.form.get('profile').value);
      formData.append('title', this.form.get('title').value);


      this.httpClient.post<any>(this.url, formData).subscribe(
        () => uploadHTML.innerHTML = "<h5> Video uploaded successfully! </h5>",
        () => uploadHTML.innerHTML = "<h5> An error occurred. Please try again. </h5>"
      );
    }

}
