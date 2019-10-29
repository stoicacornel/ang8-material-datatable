import {Component, OnInit,ViewChild} from '@angular/core';
import dataTable from '../../../assets/json/dataSource.json';
import {MatTableDataSource, MatPaginator} from "@angular/material";
import {ApiService} from "../../services/api/api.service";

// We can Inject the ApiService here, or have the Injectable providedIn: 'root' inside the service itself

@Component({
    selector: 'app-datatable',
    templateUrl: './datatable.component.html',
    styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {
    displayedColumns: any;
    dataSource = new MatTableDataSource(dataTable);
    apiService: ApiService;
    @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


    constructor(apiService: ApiService) {
        // TODO: Get this info from the endpoint
        this.displayedColumns = ["stage", "process", "cuttingPlan", "workOrder", "productionWorkOrderContractId"];
        this.apiService = apiService;
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    getData() {
        this.apiService.GetData().subscribe(res => {
            console.log("New data should be pulled from Back-end");
            // this.displayedColumns = res;
        }, error => {
            console.log("Error in getting the data");

            // TODO: Implement a nice logger here.
            console.log(error);
        });

    }

}
