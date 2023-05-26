export interface IConfirmationDialogOptions {
    data: { title: string, message: string }
    callback: () => void
    closeAfterConfirm?: boolean
}