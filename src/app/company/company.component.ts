import { Component, OnInit, Input } from '@angular/core';
import { Cmpdetail } from './cmpdetail';

import { CmpService } from './cmp.service';
import { NgForm } from '@angular/forms';
import { MessageService, MenuItem } from 'primeng/api';
// import {TableModule} from 'primeng/table';
// import {DataTableModule, SharedModule, InputTextModule} from 'primeng/primeng';


@Component({
  selector: 'app-Company',
  templateUrl: './Company.component.html',
  styleUrls: ['./Company.component.css']
})
export class companyComponent implements OnInit {
     items:MenuItem[];
     Company:Cmpdetail[]=[];
     cmpid:number;
     Companyname:string;
     department:string;
     i1:number;
     p:number=1;


  constructor(private _data:CmpService,private msg:MessageService ) { }


  ngOnInit() {

    this.items = [
      {
          label: 'File',
          items: [{
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {label: 'Project'},
                      {label: 'Other'},
                  ]
              },
              {label: 'Open'},
              {label: 'Quit'}
          ]
      },
      {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
              {label: 'Delete', icon: 'pi pi-fw pi-trash'},
              {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
          ]
      }
  ];

    this._data.getAllCompany().subscribe(
       (data:Cmpdetail[])=>
       {
        this.Company=data
       }

     );
  }

   onCompanyDelete(id:number)

      {

       if (confirm("do you really want to delete??")) {
     this._data.deletCompany(id).subscribe(
      (data:any)=>{

        this._data.getAllCompany().subscribe(
          (data:Cmpdetail[])=>
          {
           this.Company=data
          }

        );

        this.msg.add({severity: 'success', summary: 'success Message', detail: 'deleted succesfully'});
      } );
  }
}

  onCompanySave(f:NgForm)
  {
    this._data.addCompany(f.value).subscribe((data:any) => {
      this._data.getAllCompany().subscribe(
        (data:Cmpdetail[])=>
        {
         this.Company=data
        }

      );
      this.msg.add({severity: 'success', summary: 'success Message', detail: 'added succesfully'});
    });
  }


  SearchCompany(value) {
    if (value != "") {
      this.Company = this.Company.filter(x => x.name.indexOf(value) != -1);
    } else {
      this._data.getAllCompany().subscribe(
        (data: Cmpdetail[]) => {
          this.Company = data;
        },
        function(error) {
          alert(error);
        },
        function() {}
      );
    }
  }

  editCompanyget(myModal,UPDATE,i,rowData)
  {
     this.cmpid= rowData.id;
    this.Companyname=rowData.name;
    this.department=rowData.description;
    this.i1=i;
  }

  UpdateCompany(f1)
  {
      var req={
        id:f1.value.id,
        organizationId:this.Company[this.i1].organizationId,
        name:f1.value.name,
        description:f1.value.description,
        isactive:this.Company[this.i1].isactive,
        createdby:this.Company[this.i1].createdby,
        createddate:this.Company[this.i1].createddate,
        modifiedby:this.Company[this.i1].modifiedby,
        modifieddate:this.Company[this.i1].modifieddate
      }
      this._data.addCompany(req).subscribe((data:any) => {
        this._data.getAllCompany().subscribe(
          (data:Cmpdetail[])=>
          {
           this.Company=data
          }

        );
        this.msg.add({severity: 'success', summary: 'success Message', detail: 'updated succesfully'});
      });
  }

}
