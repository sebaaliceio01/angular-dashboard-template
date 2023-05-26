export interface IPaginatedRequest<T> {
    [key: string]: T[]
    totalCount: any
}