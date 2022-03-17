import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

api_key = environment.api_key

getChannels(channelName: any){
return this.http.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${channelName}&type=channel&key=${this.api_key}&maxResults=50`)
}

}



