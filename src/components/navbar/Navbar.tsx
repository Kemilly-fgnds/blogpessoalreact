import { Butterfly } from '@phosphor-icons/react'

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-purple-700 text-purple-950'>

                <Butterfly size={30} weight='bold' />
                <div className="container flex justify-between text-lg px-2 font-bold">
                    Blog Pessoal

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