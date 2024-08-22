import { Routes, Route } from 'react-router-dom';
import Main from '../Pages/Main';
import SighIn from '../Pages/SignIn'
import SighUp from '../Pages/SignUp'

const Pages = () => {
    return(
        <Routes>
            <Route path='/' element={<Main />}/>
            <Route path='/signin' element={<SighIn />}/>
            <Route path='/signup' element={<SighUp />}/>
        </Routes>
    )
}

export default Pages;