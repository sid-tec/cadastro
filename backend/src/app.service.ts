import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      nome: "Sedinir"
    };
  }
}
/* 
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello SID';
  }
} */
