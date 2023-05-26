import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import moment from 'moment';
import { catchError, map, Observable, take, tap, throwError } from 'rxjs';
import { IExportReportResponse, IPaginationOptions, IReport } from '../../../interfaces';
import { IPaginatedRequest } from '../../../interfaces/paginated-request.interface';
import { FileService } from '../../shared/services/file.service';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(
    private http: HttpClient,
    private fileService: FileService,
  ) { }

  // getReport(data: IReport, paginationOptions: IPaginationOptions): Observable<IPaginatedRequest<IReport>> {
  //   return this.http.post<IPaginatedRequest<IReport>>(`${environment.API_URL}?page=${paginationOptions.page}&pageSize=${paginationOptions.pageSize}`, data)
  //     .pipe(
  //       take(1),
  //       map((result) => {
  //         return result
  //       }),
  //       catchError((err: Error) => {
  //         return throwError(() => { return err })
  //       })
  //     )
  // }

  getReport(data: IReport, paginationOptions: IPaginationOptions): Observable<IPaginatedRequest<IReport>> {
    return this.http.get<IPaginatedRequest<IReport>>('assets/mock/getReport.json')
      .pipe(
        take(1),
        map((result) => {
          return result
        }),
        catchError((err: Error) => {
          return throwError(() => { return err })
        })
      )
  }

  exportReport(data: string): Observable<IExportReportResponse> {
    return this.http.get(`./assets/files/report.txt`, { responseType: 'arraybuffer' })
      .pipe(
        take(1),
        map((result) => {
          const contenidoArchivo = data
          const blob = new Blob([contenidoArchivo], { type: 'text/plain' });
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Report-${moment().format('DD/MM/yyyy')}.txt`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          window.URL.revokeObjectURL(url);
          return result
        }),
        catchError((err: Error) => {
          return throwError(() => { return err })
        })
      )
  }
}
