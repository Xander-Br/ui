import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Invitation} from "../dto/invitation";
import {VerificationRequest} from "../dto/verification-request";
import {License} from "../dto/license";

@Injectable({
  providedIn: 'root'
})
export class LicenceService {

  constructor(private http: HttpClient) { }

  getInvitation() {
    return this.http.get<Invitation>('http://localhost:8085/api/v1/licence/invitation');
  }

  getConnection(connectionId: string){
    return this.http.get<string>('http://localhost:8085/api/v1/licence/connection/' + connectionId);
  }



  verifyProcess(verificationRequest: VerificationRequest){
    return this.http.post<string>('http://localhost:8085/api/v1/licence/verify', verificationRequest);
  }

  verifyProcessState(processId: string){
    return this.http.get<string>('http://localhost:8085/api/v1/licence/verify/' + processId + "/state");
  }

  getLicence(processId: string){
    return this.http.get<License>('http://localhost:8085/api/v1/licence/verify/' + processId +'licence/' + processId);
  }

  getLicenceByUserId(userId: string){
    return this.http.get<License>('http://localhost:8085/api/v1/licence/' + userId);
  }


  getLicenceRest() {
    return this.http.get<License>('http://localhost:8085/api/v1/licence/rest');

  }
}
