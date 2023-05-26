export interface IReport {
    id: string //PK
    mid: number
    merchant: string
    orderId: number
    bankCode: number
    payoutId: number
    date: Date
    status: string
    benefitDocType: string
    benefitDocNumber: number
}

export interface IExportReportResponse {
    [key: string]: any
}