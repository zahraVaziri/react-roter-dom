import Blog from "./component/Blog"
import NotFound from "./NotFound"
import AboutUs from "./Pages/AboutUs"
import Bloges from "./Pages/Bloges"
import HomePage from "./Pages/HomePage"
import Post from "./Pages/Post"
import Profile from "./Pages/Profile"


const routers = [
    {component:Blog,path:'/bloges/:id'},
    {component:Bloges,path:'/bloges'},
    {component:HomePage,path:'/',exact: true},
    {component:AboutUs,path:'/about-us'},
    {component:Profile,path:'/profile'},
    {component:Post,path:'/post/:id([0-9]+)?'}, //([0-9]) ([A-Z])
    {component:NotFound}
]

export default routers
