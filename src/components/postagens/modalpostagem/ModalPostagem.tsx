import { Chats } from '@phosphor-icons/react'
import Popup from 'reactjs-popup';
import FormPostagem from '../formpostagem/FormPostagem';

import 'reactjs-popup/dist/index.css';
import './ModalPostagem.css'

function ModalPostagem() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='flex items-center gap-2 rounded text-amber-700 
                                            border-amber-600 border-solid border-2 py-2 px-4 font-bold hover:bg-pink-200 transition-all'>
                                                 <Chats size={25} weight='bold' />
                        Nova Postagem
                    </button>
                }
                modal
            >
                <FormPostagem />
            </Popup>
        </>
    );
}

export default ModalPostagem;