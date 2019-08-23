import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable()
export class UserIdInterceptor implements HttpInterceptor {
    constructor(){
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var userId = localStorage.getItem('userId');
        if (userId) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer token`,
                }
            });
        }

        return next.handle(request);
    }
}