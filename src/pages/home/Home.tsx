import ListaPostagens from "../../components/postagens/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagens/modalpostagem/ModalPostagem"

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
                            <div
                            >
                                <ModalPostagem />
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
            <ListaPostagens />
        </>
    )
}

export default Home