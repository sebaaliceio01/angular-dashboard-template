export interface IBaseTable<T> {
    dataSource: T[]
    columns: IColumns[]
    actions?: ITableActions<T>[]
    paginateOptions?: IPaginationOptions
}

export interface ITableActions<T> {
    icon: string
    name: string
    element?: T
    role?: string[]
    action: (element: T) => void
}

export interface IColumns {
    caption: string
    field: IFieldOptions
}

interface IFieldOptions {
    key: string
    parseElement?: (element: string) => string
}

export interface IPaginationOptions {
    totalCount?: number
    pageSize?: number
    pageSizeOptions?: number[]
    page?: number
}