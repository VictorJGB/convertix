import type { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { finalize, Observable } from 'rxjs';

// services
import { LoadingService } from '@services/loading.service';

export function loadingInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  // printing request URL
  const loadingService = inject(LoadingService)

  // Initiate loading
  loadingService.setLoading(true)

  return next(req).pipe(
    finalize(() => {
      loadingService.setLoading(false);
    })
  )
}
