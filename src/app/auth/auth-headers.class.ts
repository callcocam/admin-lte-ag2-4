import { JwtTokenService } from './sercices/jwt-token.service';
import { HttpHeaders } from '@angular/common/http';
export class HeadersService {
    constructor(private jwtToken: JwtTokenService) { }

    headers() {
        const headers = new HttpHeaders()
            .append('Authorization', `Bearer ${this.jwtToken.token}`)
            .append('Content-Type', 'application/json');
        return headers;
    }
}