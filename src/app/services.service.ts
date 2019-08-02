import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

@Injectable()
export class ServicesService {
    constructor(private service: HttpClient) {

    }

    dohvatiServices() {
        var services = this.service.get("http://localhost:4200/assets/jsons/services.json");
        return services;
    }
}