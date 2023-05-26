export interface IBalanceConsultationWidget {
    country: string,
    totalBalanceAmount: IBalanceConsultationWidgetPayload
    availableBalanceAmount: IBalanceConsultationWidgetPayload
    inProgressBalanceAmount: IBalanceConsultationWidgetPayload
}

interface IBalanceConsultationWidgetPayload {
    currency: string
    amount: number
}