import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Job List';
  CompanyJobList: any;
  allData: any;
  jobRoleList: any;
  technologyList: any;
  experienceList: any;
  selectedJobRoles: any[];
  selectedTechnologys: any[];
  selectedExperience: any[];
  constructor(private http: HttpClient) {
    this.getUser().subscribe((data: any) => {
      console.log('data',data);
      this.allData =  JSON.parse(JSON.stringify(data));
      this.CompanyJobList = data;
      this.jobRoleList = data.role;
      this.technologyList = data.technology;
      this.experienceList = data.experience;
    })
  }

  onJobChange(selectedJobRoles: any){
    console.log('selectedJobRoles',selectedJobRoles);
    var filterValue = this.allData.data.filter((value: any) => 
    { 
      return this.selectedJobRoles.includes(value.role); 
    
    }
    
    )
    this.CompanyJobList.data = filterValue;
  }

  onTechChange(selectedTechnologys: any){
    console.log('selectedJobRoles',selectedTechnologys);
    var filterValue = this.allData.data.filter((value: any) => 
    { 
      return this.selectedTechnologys.some(arr => {
        return value.technology.includes(arr);
      });
    
    }
    
    )
    this.CompanyJobList.data = filterValue;
  }

  onExpChange(selectedExperience: any){
    console.log('selectedJobRoles',selectedExperience);
    var filterValue = this.allData.data.filter((value: any) => 
    { 
      return this.selectedExperience.includes(value.experience); 
    
    }
    
    )
    this.CompanyJobList.data = filterValue;
  }

  ngAfterViewInit() {}

  ngOnInit(): void {}

  getUser(){
    return this.http.get('https://codejudge-question-artifacts-dev.s3.amazonaws.com/q-1710/data.json');
  }

}
