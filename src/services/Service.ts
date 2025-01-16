import axios from "axios";

const api = axios.create({
    baseURL: 'https://blogpessoal-0zm7.onrender.com/' //roda aplicação local ou remota no render//
})

export const cadastrarUsuario = async (url: string, dados: Object, setDados: Function) => {//async é metodo assíncrono, ele envia a requisição e espera pelo retorno//
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}

export const login = async (url: string, dados: Object, setDados: Function) => {
    const resposta = await api.post(url,dados)
    setDados(resposta.data)
}