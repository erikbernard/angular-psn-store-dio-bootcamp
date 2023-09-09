import { Data } from './data';
import { Injectable, Injector } from "@angular/core";
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';
import { Observable, of } from "rxjs";
const URl = window.location.href;
@Injectable()
export class BackendInterceptor implements HttpInterceptor {

	constructor(private injector: Injector, private mockdata: Data) { }
	intercept(request: HttpRequest<any>, next: HttpHandler):
		Observable<HttpEvent<any>> {
		if (request.method === "GET" && request.url === `${URl}/games`) {
			return of(new HttpResponse({ status: 200, body: this.mockdata.games }));
		}
		return next.handle(request)
	}
}
