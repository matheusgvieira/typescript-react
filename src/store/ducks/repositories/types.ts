// Action types
export enum  RepositoriesTypes {
    LOAD_REQUEST = '@repositories/LOAD_REQUEST',
    LOAD_SUCESS = '@repositories/LOAD_SUCESS',
    LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}


// Data types

export interface Repository{
    id: number
    name: string
}

//  State Type

export interface RepositoriesState {
    readonly data: Repository[]
    readonly loading: boolean
    readonly error: boolean
}
