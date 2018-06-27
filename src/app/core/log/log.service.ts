import { Injectable } from '@angular/core';
import { LogFields } from '@app/core/log/log-data.interface';
import { Logger } from '@app/core/log/logger';
import { environment } from 'environments/environment';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logger: Logger;

  constructor(private userId: string) {}

  public initialize() {
    this.logger = new Logger(environment.appName, environment.endpoints.elasticSearchEndpoint);
  }

  public logHttpInfo(info: any, elapsedTime: number, requestPath: string) {
    // TODO: create and set correlation id
    const url = location.href;
    const logFields: LogFields = {
      environment: environment.env,
      userId: this.userId,
      requestPath,
      elapsedTime,
      url,
    };

    this.logger.log('Information', `${info}`, logFields);
  }

  public logError(errorMsg: string) {
    const url = location.href;

    const logFields: LogFields = {
      environment: environment.env,
      userId: this.userId,
      requestPath: '',
      elapsedTime: 0,
      url: url,
    };

    this.logger.log('Error', errorMsg, logFields);
  }

  public logInfo(info: any) {
    const url = location.href;

    const logFields: LogFields = {
      environment: environment.env,
      userId: this.userId,
      requestPath: '',
      elapsedTime: 0,
      url,
    };

    this.logger.log('Information', info, logFields);
  }
}
