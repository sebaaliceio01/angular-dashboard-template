//CONSULTA BALANCE
export interface IBalanceConsultationBody {
    merchant: string | string[]
    currency: '(currency enum)'
}

export interface IBalanceConsultation {
    id: string //PK
    country: string | number
    totalBalance: number
    eableBalance: number
    inProgressBalance: number
}

//REGISTRO BALANCE
export interface IRegisterBalancePayload {
    merchant: string
    country: '(country enum)'
}

export interface IRegisterBalance {
    id: string //PK
    mid: number
    merchant: string
    country: string
    movement: '(enum movement)'
    movementDate: Date | string
    currency: 'currency enum'
    amount: number
    bankOpCode: number
    description: string
}

//NUEVO MOVIMIENTO
export interface INewMovementPayload {
    merchant: string
    country: string
    currency: string
    amount: number
    movementType: string
    description: string
    startDate: Date
    endDate: Date
    bankOpCode?: string | number
}

//CONSULTA DE MOVIMIENTOS
export interface IMovementConsultationPayload {
    merchant: string
    country: string
    currency: string
    startDate: Date
    endDate: Date
}

export interface IMovementConsultation {
    date: Date | string
    description: string
    currency: string
    amount: number
    balance: number
}










