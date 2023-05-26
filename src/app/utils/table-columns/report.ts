import moment from "moment";
import { IColumns } from "src/app/interfaces";

export const reportColumns: IColumns[] = [
    {
        caption: 'ID',
        field: {
            key: 'id',
        }
    },
    {
        caption: 'MID',
        field: {
            key: 'mid'
        }
    },
    {
        caption: 'Merchant',
        field: {
            key: 'merchant'
        }
    },
    {
        caption: 'Order',
        field: {
            key: 'orderId'
        }
    },
    {
        caption: 'Bank',
        field: {
            key: 'bankCode'
        }
    },
    {
        caption: 'Payout',
        field: {
            key: 'payoutId'
        }
    },
    {
        caption: 'Date', field: {
            key: 'date',
            parseElement: (date: string) => moment(date).format('DD/MM/YYYY hh:mm')
        }
    },
    {
        caption: 'Status',
        field: {
            key: 'status'
        }
    },
    {
        caption: 'Benefit Doc Type',
        field: {
            key: 'benefitDocType'
        }
    },
    {
        caption: 'Benefit Doc Number',
        field: {
            key: 'benefitDocNumber'
        }
    },
]