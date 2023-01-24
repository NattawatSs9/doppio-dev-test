export interface OrganizationResponse {
    data: OrganizationInfo[]
}

interface OrganizationInfo {
    id: number
    name: string
    rec_status: number
    timestamp: string
    created_by: string
}