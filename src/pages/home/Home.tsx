import { Chats } from '@phosphor-icons/react'


function Home() {
    return (
        <>
            <div className="bg-purple-300 flex justify-center">
                <div className='container grid grid-cols-2 text-purple-900'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Olá, Seja Bem Vindo!
                        </h2>
                        <p className='text-xl'>
                            Expresse aqui seus pensamentos e opiniões.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='flex items-center gap-2 rounded text-purple-900 
                                            border-purple-900 border-solid border-2 py-2 px-4 hover:bg-purple-500 font-bold'
                            >
                                <Chats size={25} weight='bold' />
                               Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://ik.imagekit.io/dpprdb2sk/foto%20menina.PNG?updatedAt=1736972684071"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home