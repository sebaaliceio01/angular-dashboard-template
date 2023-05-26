import moment from "moment";
import { IColumns } from "src/app/interfaces";

export const registerBalanceColumns: IColumns[] = [
    {
        caption: 'ID', field: {
            key: 'id',
        }
    },
    {
        caption: 'MID', field: {
            key: 'mid'
        }
    },
    {
        caption: 'Merchant', field: {
            key: 'merchant'
        }
    },
    {
        caption: 'Country', field: {
            key: 'country'
        }
    },
    {
        caption: 'Movement', field: {
            key: 'movement'
        }
    },
    {
        caption: 'Movement Date', field: {
            key: 'movementDate',
            parseElement: (date: string) => moment(date).format('DD/MM/YYYY hh:mm')
        }
    },
    {
        caption: 'Currency', field: {
            key: 'currency'
        }
    },
    {
        caption: 'Amount', field: {
            key: 'amount'
        }
    },
    {
        caption: 'Bank OpCode', field: {
            key: 'bankOpCode'
        }
    },
    {
        caption: 'Description', field: {
            key: 'description'
        }
    },
]