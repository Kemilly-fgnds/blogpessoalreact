import { Chats } from '@phosphor-icons/react'

function Home() {
    return (
        <>
            <div className="bg-gray-200 flex justify-center">
                <div className='container grid grid-cols-2 text-amber-800'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Olá, Seja Bem Vindo!
                        </h2>
                        <p className='text-xl font-semibold text-amber-800'>
                            Expresse aqui seus pensamentos e opiniões.
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='flex items-center gap-2 rounded text-amber-700 
                                            border-amber-600 border-solid border-2 py-2 px-4 hover:bg-pink-200 font-bold'
                            >
                                <Chats size={25} weight='bold' />
                                Nova Postagem
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="https://i.imgur.com/loX6KKs.png"
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