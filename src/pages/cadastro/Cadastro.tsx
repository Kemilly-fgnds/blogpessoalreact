import './Cadastro.css'

function Cadastro() {
    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold bg-gray-200">
                <div className="fundoCadastro hidden lg:block"></div>
                <form className='flex justify-center items-center flex-col w-2/3 gap-3' >
                    <h2 className='text-pink-500 text-5xl'>Cadastrar</h2>
                    <div className="flex flex-col w-full text-pink-500">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            placeholder="Nome"
                            className="border-2 border-pink-300 rounded p-2"

                        />
                    </div>
                    <div className="flex flex-col w-full text-pink-500">
                        <label htmlFor="usuario">Usuario</label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            placeholder="Usuario"
                            className="border-2 border-pink-300 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full text-pink-500">
                        <label htmlFor="foto">Foto</label>
                        <input
                            type="text"
                            id="foto"
                            name="foto"
                            placeholder="Foto"
                            className="border-2 border-pink-300 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full text-pink-500">
                        <label htmlFor="senha">Senha</label>
                        <input
                            type="password"
                            id="senha"
                            name="senha"
                            placeholder="Senha"
                            className="border-2 border-pink-300 rounded p-2"
                        />
                    </div>
                    <div className="flex flex-col w-full text-pink-500">
                        <label htmlFor="confirmarSenha">Confirmar Senha</label>
                        <input
                            type="password"
                            id="confirmarSenha"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            className="border-2 border-pink-300 rounded p-2"
                        />
                    </div>
                    <div className="flex justify-around w-full gap-8">
                        <button className='rounded text-white bg-pink-500 
                  hover:bg-pink-600 w-1/2 py-2' >
                            Cancelar
                        </button>
                        <button
                            type='submit'
                            className='rounded text-white bg-cyan-400 
                           hover:bg-cyan-500 w-1/2 py-2
                           flex justify-center'
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Cadastro