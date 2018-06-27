import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LogService } from '@app/core/log/log.service';
import * as StackTrace from 'stacktrace-js';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private injector: Injector) {
    super();
  }

  public handleError(error) {
    const logService: LogService = this.injector.get(LogService);
    const message = error.message ? error.message : error.toString();

    if (error.status) {
      error = new Error(message);
    }

    StackTrace.fromError(error).then((stackframes) => {
      const stackString = stackframes
        .splice(0, 10)
        .map(function(sf) {
          return sf.toString();
        })
        .toString();

      const errorTraceStr = `Error message: ${message}. Stack trace: ${stackString}`;

      logService.logError(errorTraceStr);

      throw error;
    });
  }
}
