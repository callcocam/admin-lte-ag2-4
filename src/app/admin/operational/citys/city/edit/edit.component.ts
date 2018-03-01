import { Component, OnInit } from '@angular/core';
import { OperationalService } from '../../../operational.service';
import { Citys } from '../../citys';
import {ActivatedRoute, Router} from "@angular/router";

declare var AdminLTE: any;
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private operationalService: OperationalService, private router: Router,private route: ActivatedRoute) { }
  public inputFilter={};
  public city={};
  public disabled= false;
  ngOnInit() {
            AdminLTE.init()
            this.getItem();
}
getItem(){
  this.route.params.subscribe(params => {
    if (params.hasOwnProperty('id')) {
        this.operationalService.getItem(+params['id']).subscribe((data)=>this.city = data.result.you_response)
    }
    else{
      this.router.navigate['/admin/operacional/cidades']
    }
  });
}
save(data){
  this.disabled = true;
  this.operationalService.pathUrl = 'cidades'
  this.route.params.subscribe(params => {
    if (params.hasOwnProperty('id')) {
      this.operationalService.update(data,+params['id']).toPromise().then(
        (response) => {      
            if(response.result.zf_validate){
                this.inputFilter = response.result.zf_validate
                for (let Filter in this.inputFilter) {
                 $(document.getElementsByName(Filter)).parent('div').addClass('has-error');
                }     
            }
            else{
              this.operationalService.messageService.add({severity:'success', summary:'Resultado', detail:response.result.msg});
            }
            console.log(response)
            this.disabled = false
          }
      ).then((response) =>  {
        this.disabled = false 
        console.log(response)
      } )
        this.operationalService.getItem(+params['id']).subscribe((data)=>this.city = data.result.you_response)
    }
    else{
      this.router.navigate['/admin/operacional/cidades']
    }
  });
 
}
}
