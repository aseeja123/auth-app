import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private finger: FingerprintAIO) {
    this.loginForm = this.fb.group({
      email: new FormControl(['', Validators.email]),
      password: new FormControl()
    })
  }

  ngOnInit() {
  }
  doLogin() {
    this.router.navigate(['/posts'])
  }
  showFingerPrintAuthentication() {
    this.finger.isAvailable().then((result: any) => {
      console.log(result)
      this.finger.show({
        cancelButtonTitle: 'Cancel',
        disableBackup: true,
      })
        .then((result: any) => {
          console.log(result);
        }).catch((error: any) => {
          console.log(error)
      });
    }).
      catch((error: any) => {
        console.log(error)
      });
  }
}
