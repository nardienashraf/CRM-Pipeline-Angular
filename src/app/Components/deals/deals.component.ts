import { Component, OnInit } from '@angular/core';
import { DealsAPIService } from '../../Services/deals-api.service';
import { Ideals } from 'src/app/Models/ideals';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  allDeals: Ideals[] = [];
  // segmentsList: string[];
  finalDeals: any;
  potenialValue: any = [];
  focus: any = [];
  contactMade: any = [];
  offerSent: any = [];
  gettingReady: any = [];
  searchText: string= '';

  constructor(private dealsAPI: DealsAPIService) {
    // this.segmentsList = [
    //   "Segment A (21)",
    //   "Segment B (7)",
    //   "Segment C (14)"
    // ]
  }

  ngOnInit(): void {
    this.dealsAPI.getAllDeals().subscribe({
      next: (deals) => {
        this.finalDeals = deals['deals' as keyof typeof this.allDeals];
        this.allDeals = this.finalDeals;

        for (let i = 0; i < this.allDeals.length; i++) {
          const element = this.allDeals[i];

          switch (element.status) {
            case 'Potential Value':
              this.potenialValue.push(element)
              break;

            case 'Focus':
              this.focus.push(element)
              break;

            case 'Contact Made':
              this.contactMade.push(element)
              break;

            case 'Offer Sent':
              this.offerSent.push(element)
              break;

            case 'Getting Ready':
              this.gettingReady.push(element)
              break;

            default:
              break;
          }
        }
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  //Drop Cards
  drop(event: CdkDragDrop<Ideals[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
 
 
}
