import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-pink-300 text-amber-900'>

                <div className="container flex justify-between text-lg px-2 font-bold">
                    <Link to="/home">Blog Pessoal</Link>

                    <div className='flex gap-4 px-4 font-bold'>
                        Postagens
                        Temas
                        Cadastrar tema
                        Perfil
                        Sair
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar