import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  channels:any;
  input: any = '';

constructor(private service: DataService) {}

ngOnInit(){
this.service.getChannels('programming').subscribe((data: any) => {
this.channels = data.items
console.log(data)
})
}

downloadVideo() {
this.service.getChannels(this.input).subscribe((data: any) => {
this.channels = data.items
})
}

}
