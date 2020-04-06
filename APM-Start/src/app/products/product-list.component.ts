 import {Component, OnInit} from '@angular/core'
 import {IProduct} from './IProduct'
import { ProductService } from './product-services';

 @Component({
     selector:'pm-products',
     templateUrl:'./product-list.component.html',
     styleUrls:['./product-list.component.css']
 })

 export class ProductListComponent implements OnInit{

     pageTitle:string='Product List'
     imageWidth:number = 40;
     imageMargin:number=2;
     displayImage:boolean=false;
     _ListofFilter:string;
      errorMessage:string;
     filteredProducts:IProduct[];
     get listFilter():string{
       return this._ListofFilter;
     }
     set listFilter(value:string){
       this._ListofFilter=value;
       this.filteredProducts=this.listFilter ? this.performFilter(this.listFilter) : this.products;
     }

     products:IProduct[];

      /**
       *
       */
      constructor(private productService:ProductService) {

        this._ListofFilter="";
        
      }

      // onRatingClicked(message:string):void{
      //   this.pageTitle='Product List: '+message;
      // }

      toogleImage():void{
          this.displayImage =!this.displayImage;
      }

      ngOnInit(): void {
        this.productService.getProducts().subscribe(
          {next: products=>{this.products=products
            this.filteredProducts=this.products;
          },
            error: err=>this.errorMessage=err
          }
        );

      }
      
      performFilter(filterBy:string):IProduct[]{
        filterBy =filterBy.toLocaleLowerCase();
        return this.products.filter((product:IProduct)=>product.productName.toLocaleLowerCase().indexOf(filterBy)!==-1);
      }
 }