import { environment } from "src/environments/environment.development";
import { ISidebarRoutes } from "../interfaces/sidebar-routes.interface";

export const SidebarRoutes: ISidebarRoutes[] = [
    {
        module: 'Report',
        // iconTitle: './assets/icon/list.svg',
        iconTitle: 'list',
        roles: [environment.roles.admin, environment.roles.adminGeneral, environment.roles.manager],
        actions: [
            {
                label: 'Report',
                route: '/dashboard/report',
                roles: [environment.roles.admin, environment.roles.adminGeneral, environment.roles.manager],
            },
        ]
    },
    {
        module: 'Balance',
        // iconTitle: './assets/icon/dashboard.svg',
        iconTitle: 'balance',
        roles: [environment.roles.admin, environment.roles.adminGeneral, environment.roles.manager],
        actions: [
            {
                label: 'Consulta de balance',
                route: '/dashboard/balance/balance-consultation',
                roles: [environment.roles.admin, environment.roles.adminGeneral, environment.roles.manager],
            },
            {
                label: 'Registro de balance',
                route: '/dashboard/balance/balance-register',
                roles: [environment.roles.admin, environment.roles.adminGeneral],
            },
            {
                label: 'Consulta de movimientos',
                route: '/dashboard/balance/movement-consultation',
                roles: [environment.roles.admin, environment.roles.adminGeneral, environment.roles.manager],
            }
        ]
    }
]