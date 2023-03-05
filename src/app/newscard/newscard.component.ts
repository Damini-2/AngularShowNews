import { Component } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.css']
})
export class NewscardComponent {
  // data:any[]=[]
  articles:any[]=[]
  totalresults:number=0
  query:String="All"
  lan:String="hi"
  searchdata:String=""

  constructor(private dservice:DataService, private ar:ActivatedRoute)
  {  
    this.ar.queryParams.subscribe((mydata:any)=>
    {
      console.log(mydata);
      if(mydata.q){
        this.query=mydata.q
        this.searchdata=""
      }
      else if(mydata.language)
        this.lan=mydata.language
      else if(mydata.searchbox)
      {        
        console.log(mydata.searchbox);        
        this.searchdata=mydata.searchbox
      }
      this.dservice.getAPIData({queries:this.query,lang:this.lan,search:this.searchdata}).subscribe(
        (apidata:any)=>
        {
          // console.log(apidata);
            this.totalresults=apidata.totalResults
            this.articles=apidata.articles
            .filter((i:any)=>
              i.description
            )
        }
        )
      }
    )
  }
}