import { Injectable } from '@angular/core';
import * as Constants from '../../constant/app.constatnt'
import { RajeevhttpService } from '../http/rajeevhttp.service';

@Injectable({
  providedIn: 'root'
})
export class PubService {

  constructor(
    private svjHttp: RajeevhttpService
  ) { }
  async applyProgram(formData: any) {
    const url = Constants.COMMON_API_PATH + 'apply_program';
    const apiResp = await this.svjHttp.post(url, formData);
    return apiResp;
  }

}