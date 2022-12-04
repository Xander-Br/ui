import {Component} from '@angular/core';
import {LicenceService} from "../../../services/licence.service";
import {delay} from "rxjs";
import {VerificationRequest} from "../../../dto/verification-request";
import {Invitation} from "../../../dto/invitation";
import {Router} from "@angular/router";
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from "@techiediaries/ngx-qrcode";

@Component({
  selector: 'app-add-licence',
  templateUrl: './add-licence.component.html',
  styleUrls: ['./add-licence.component.scss']
})
export class AddLicenceComponent {

  qrShowed: boolean = false;
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.techiediaries.com/';
  constructor(private licenceService: LicenceService, private router: Router) {


  }
 async addLicence() {
    this.licenceService.getInvitation().subscribe(invitation => {

    }, error => {
      console.log(error.text)
      this.value = error.error.text;
      this.qrShowed = true;
      console.log(error)
      console.log(this.qrShowed)
    })
   await delay(5000);
   this.licenceService.getLicenceRest().subscribe(licence => {
      this.router.navigate(['/student/home']);
   })
  }


}
