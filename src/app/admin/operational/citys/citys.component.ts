import { Component, OnInit } from '@angular/core';
import { Citys } from './citys';
import { OperationalService } from '../operational.service';
import { Subject } from 'rxjs/Subject';
declare var AdminLTE: any;
@Component({
  selector: 'app-citys',
  templateUrl: './citys.component.html',
  styleUrls: ['./citys.component.css']
})
export class CitysComponent implements OnInit {
  loading: boolean;

  
  public citys: Citys[];
  public config;
  public error;
  public selectedCity: Citys;
  public totalRecords = 1000;
    
  public displayDialog: boolean;
  constructor(private operationalService: OperationalService) { }

  ngOnInit() {
 this.loading = true;
    AdminLTE.init();
    this.operationalService.pathUrl = 'cidades'   
    this.getList();
  }

  getList(){
    this.operationalService.getList().subscribe((data) => this.citys = data.result.you_response )
    this.loading = false;
  }
  delete(id?) {
    this.operationalService.confirmationService.confirm({
        message: 'Deseja excluir este registro?',
        header: 'Confirmar a operação',
        icon: 'fa fa-trash',
        accept: () => {
            this.loading = true;
            this.operationalService.delete(id).subscribe((data)=>{
                this.getList()

                this.operationalService.messageService.add({severity:data.result.type, summary:'Confirmed', detail:data.result.msg});  
            });
        },
        reject: () => {
            this.operationalService.messageService.add({severity:'info', summary:'Rejected', detail:'Operação cancelada!'});
        }
    });
}
selectCity(city: Citys) {
    this.selectedCity = city;
    this.displayDialog = true;
}

onDialogHide() {
    this.selectedCity = null;
}

}
