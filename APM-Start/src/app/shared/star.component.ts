import { Component,OnChanges, Input, Output ,EventEmitter} from "@angular/core";
import { templateSourceUrl } from '@angular/compiler';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class StarComponent{
    @Input() rating:number;
    starWidth:number; 
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    
    ngOnChanges():void{
        this.starWidth=this.rating * 75/5;
    }
    onClick():void{
        this.ratingClicked.emit(`The Rating ${this.rating} `)
    }

}

