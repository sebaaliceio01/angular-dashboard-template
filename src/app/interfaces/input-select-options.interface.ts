import { FormControl } from "@angular/forms"
import { ICustomSelectModel } from "./custom-select.interface"

export interface IInputSelectOptions {
    default_value: string | null
    valueOptions: ICustomSelectModel[]
    value: FormControl
    label?: string
    classOptions: {
        [key: string]: boolean
    }
}