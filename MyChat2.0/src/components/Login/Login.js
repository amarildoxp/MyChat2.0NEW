import React from 'react';
import Api from '../../Api';

import imglogoGoogle from '../../image/pesquisa.png';
import imgAmarildo from '../../image/logo.svg';

import './Login.css';

export default ({onReceiveGoogle}) => {

    const actionLoginGoogle = async () => {
        let result = await Api.googleLogar();

        if(result) {
            onReceiveGoogle(result.user);
        } else {
            alert("Erro;");
        }
    }

    return (
        <div className="login">
            <div>
                <img src={imgAmarildo} style={{width: '140px', borderRadius: '50%'}} alt="MyChat" />
            </div>
            <h1>Bem-vindo</h1>
            <button onClick={actionLoginGoogle}>
            <i className="bi bi-google"></i>
            <img src={imglogoGoogle} style={{ width: '25px' }} alt="logo"/>
                <div className="center">Logar com o Gmail</div>
            </button>
        </div>
        
    )
}