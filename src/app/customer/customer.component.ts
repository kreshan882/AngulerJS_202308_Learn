import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})


export class CustomerComponent  {
  
    CustomerArray : any[] = [];
    isResultLoaded = false;
    isUpdateFormActive = false;
  
    customername: string ="";
    customeraddress: string ="";
    mobile: Number =0;
  
    currentCustomerID = "";


    constructor(private http: HttpClient ) {
      this.getAllCustomer();
    }

    //get All Customer List k
    getAllCustomer(){ 
      this.http.get("http://localhost:8084/api/v1/customer/getAllCustomer") 
      .subscribe((resultData: any)=>
      {
          this.isResultLoaded = true;
          console.log(resultData);
          this.CustomerArray = resultData;
      });
    }
 
    //Add record step 2
    register(){
      let bodyData = {
        "customername" : this.customername,
        "customeraddress" : this.customeraddress,
        "mobile" : this.mobile
      };
  
      this.http.post("http://localhost:8084/api/v1/customer/save",bodyData,{responseType: 'text'})
      .subscribe((resultData: any)=>{

          console.log(resultData);
          alert("Employee Registered Successfully:"+resultData);
          this.getAllCustomer();
          this.customername = '';
        this.customeraddress = '';
          this.mobile  = 0;
      });
    }

    //Edit Record
    setUpdate(data: any)
    {
    this.customername = data.customername;
    this.customeraddress = data.customeraddress;
    this.mobile = data.mobile;
    this.currentCustomerID = data.customerid;
    }
 
    //update record
    UpdateRecords(){
      let bodyData = {
        "customerid" : this.currentCustomerID,
        "customername" : this.customername,
        "customeraddress" : this.customeraddress,
        "mobile" : this.mobile
      };
   
      this.http.put("http://localhost:8084/api/v1/customer/update",bodyData,{responseType: 'text'})
      .subscribe((resultData: any)=>{
          console.log(resultData);
          alert("Employee Registered Updateddd:"+resultData)
          this.getAllCustomer();
          
          this.customername = '';
          this.customeraddress = '';
          this.mobile  = 0;
      });
    }
 
    //Add +Update (Save Button click)
    save(){
      //console.warn(">>>>>"+this.currentCustomerID);
      if(this.currentCustomerID == ''){
          this.register();   // add recore
      }
      else{
        this.UpdateRecords();  // Update recort
      }      
  
    }
 


    setDelete(data: any){
      this.http.delete("http://localhost:8084/api/v1/customer/deletecustomer"+ "/"+ data.customerid,{responseType: 'text'})
      .subscribe((resultData: any)=>{
          console.log(resultData);
          alert("Employee Deletedddd")
          this.getAllCustomer();
          this.customername = '';
        this.customeraddress = '';
          this.mobile  = 0;
    
      });
    }

    
}
