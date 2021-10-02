export type ResponseError = {
    error: string
    message: string
    status: number
    path: string
}

export type BaseState = {
    loading: boolean
    error: ResponseError | null
}