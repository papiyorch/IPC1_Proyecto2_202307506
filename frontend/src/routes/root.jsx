import {Outlet} from 'react-router-dom'
import Header from '../componentes/Header'

function Root(){
    return(
        <div className='main'>
            <Header />
            <Outlet />
        </div>
    )
}
export  default Root