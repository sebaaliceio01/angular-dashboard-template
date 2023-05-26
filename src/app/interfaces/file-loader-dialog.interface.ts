import { Observable } from "rxjs"

export interface IFileLoaderDialogOptions {
    func: () => void
    isLoading: Observable<boolean>
}