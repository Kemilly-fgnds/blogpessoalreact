import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

    const navigate = useNavigate()

    const { handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        alert("O Usuario foi deslogado!")
        navigate('/')
    }

    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-pink-300 text-amber-900'>

                <div className="container flex justify-between text-lg px-2 font-bold">
                    <Link to="/home">Blog Pessoal</Link>

                    <div className='flex gap-3 px-2 font-bold'>
                        Postagens
                        <Link to='/temas' className='hover:underline'>Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                        Perfil
                        <Link to='' onClick={logout} className='hover:underline'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar