export interface ISidebarRoutes {
    module: string
    iconTitle: string
    roles: string[]
    actions: {
        roles: string[]
        label: string
        route: string
    }[]
}