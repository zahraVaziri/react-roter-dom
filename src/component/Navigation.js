import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const Navigation = () => {
  const items = [
    {name:'home',to:'/',exact: true},
    {name:'about us',to:'/about-us'},
    {name:'profile',to:'/profile'},
    {name:'bloges',to:'/bloges'},
    {name:'post',to:'/post'}
  ]
  return (
        <nav>
            <ul>
                <li>
                    {items.map((item)=>{
                      return <NavLink to={item.to}
                      activeClassName={'activeCls'}
                      exact={item.exact || false}
                      >
                        {item.name}
                      </NavLink>
                    })}
                </li>
            </ul>
        </nav>
  )
}

export default withRouter(Navigation)
