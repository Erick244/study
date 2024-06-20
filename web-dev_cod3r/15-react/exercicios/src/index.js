import React from 'react';
import ReactDOM from 'react-dom';

import Pai from './componentes/Pai';
import Filho from './componentes/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Carlos" sobrenome="Henrique">
            <Filho nome="Pedro"/>
            <Filho nome="Paulo" sobrenome="Silva"/>
            <Filho nome="Carla" sobrenome="Silva"/>
        </Pai>
    </div>    
, document.getElementById('root'));