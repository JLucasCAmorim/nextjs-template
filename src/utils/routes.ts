export interface IRoutes {
  path: string
  name: string
  icon: string
  layout: string
}

const routes: IRoutes[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    icon: 'ni ni-tv-2 text-primary',
    layout: '/admin',
  },
]
export default routes
