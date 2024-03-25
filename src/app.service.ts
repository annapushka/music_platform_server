import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
    getUsers() {
        return 'GET ALL USERS';
    }
}
