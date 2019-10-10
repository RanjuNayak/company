import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { companyComponent } from './Company.component';
// import { CompanyComponent } from './Company.component';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
  providedIn: 'root'
})
export class CmpService {
 url:string='https://59f28050.ngrok.io/api/Settings/GetDesignations';
 deleteUrl:string='https://59f28050.ngrok.io/api/Settings/DeleteDesignation?DesignationId=';
 insupUrl:string='https://59f28050.ngrok.io/api/Settings/InsUpdateDesignation';
  constructor(private _http:HttpClient) {}

  getAllCompany()
  {
      return this._http.get(this.url);
  }

  deletCompany(id)
  {
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.deleteUrl+id,{headers:head});
  }

  addCompany(item)
  {
    let body=JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.insupUrl,body,{headers:head});
  }
  editCompany(item)
  {
    let body=JSON.stringify(item);
    let head = new HttpHeaders().set("Content-Type", "application/json");
    return this._http.post(this.insupUrl,body,{headers:head});
  }


}
