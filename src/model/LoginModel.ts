export interface LoginRequestModel {
    username: string
    password: string
}

export interface LoginResponseModel {
    username: string
    user_id: string
    status: string
    organization: organization
    token: string
}

interface organization {
    ID: number
    name: string
}