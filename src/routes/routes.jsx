import EventList from "../pages/EventList/EventList"
import FilterEvents from "../pages/FilterEvents/FilterEvents"
import EventDetail from "../pages/EventDetails/EventDetails"
import Login from "../pages/Login/Login"
import Register from "../pages/Register/Register"

export const routes = [
  {path:'/home',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetail/>},
  {path:'/',element:<Login/>},
  {path:'/register',element:<Register/>},
]