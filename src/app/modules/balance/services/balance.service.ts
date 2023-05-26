import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, take, throwError } from 'rxjs';
import { IPaginatedRequest } from '../../../interfaces/paginated-request.interface';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(
    private http: HttpClient,
  ) { }

  public get error(): Error {
    return new Error()
  }

  // balanceConsultation(data: IBalanceConsultationBody): Observable<IBalanceConsultation[]> {
  //   return this.http.post<IBalanceConsultation[]>(`${environment.API_URL}balance/consulta-balance`, data)
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

  balanceConsultation(data: any): Observable<IPaginatedRequest<any>> {
    return this.http.get<IPaginatedRequest<any>>('assets/mock/balanceConsultation.json')
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

  // createBalanceRegister(data: INewMovementPayload): Observable<IRegisterBalance> {
  //   return this.http.post<IRegisterBalance>(`${environment.API_URL}balance/rew-register`, data)
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

  createBalanceRegister(data: any): Observable<any> {
    return this.http.get<any>('assets/mock/createBalanceRegister.json')
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

  // updateMovement(data: { bankOpCode: number, descriptionType: string }, balanceId: string): Observable<IRegisterBalance> {
  //   return this.http.put<IRegisterBalance>(`${environment.API_URL}balance/${balanceId}`, data)
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

  updateMovement(data: any, pagination: any): Observable<IPaginatedRequest<any>> {
    return this.http.get<IPaginatedRequest<any>>('assets/mock/createBalanceRegister.json')
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

  // getBalanceRegister(data: IRegisterBalancePayload, { pageSize, page }: IPaginationOptions): Observable<IPaginatedRequest<IRegisterBalance>> {
  //   return this.http.post<IPaginatedRequest<IRegisterBalance>>(`${environment.API_URL}balance/register?page=${page}&pageSize=${pageSize}`, data)
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

  getBalanceRegister(data: any, pagination: any): Observable<IPaginatedRequest<any>> {
    return this.http.get<IPaginatedRequest<any>>('assets/mock/balanceRegister.json')
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

  // movementConsultation(data: IMovementConsultationPayload, { pageSize, page }: IPaginationOptions): Observable<IPaginatedRequest<IMovementConsultation>> {
  //   return this.http.post<IPaginatedRequest<IMovementConsultation>>(`${environment.API_URL}balance/register?page=${page}&pageSize=${pageSize}`, data)
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

  movementConsultation(data: any, data2: any): Observable<IPaginatedRequest<any>> {
    return this.http.get<IPaginatedRequest<any>>('assets/mock/movementConsultation.json')
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
}
