import music1 from './audio/1.mp3'
import music2 from './audio/2.mp3'
import music3 from './audio/3.mp3'
import music4 from './audio/4.mp3'
import music5 from './audio/5.mp3'
import music6 from './audio/6.mp3'
import music7 from './audio/7.mp3'
import music8 from './audio/8.mp3'
import music9 from './audio/9.mp3'

const listaMusica = {
    q : {
        name : 'Q',
        enlace : music1,
        tecla : '113',
    },
    w : {
        name : 'W',
        enlace : music2,
    tecla : '119',
    },
    e : {
        name : 'E',
        enlace : music3,
        tecla : '101',

    },
    a : {
        name : 'A',
        enlace : music4,
        tecla : '97,'

    },
    s : {
        name : 'S',
        enlace : music5,
        tecla : '115',

    },
    d : {
        name : 'D',
        enlace : music6,
        tecla : '100',

    },
    z : {
        name : 'Z',
        enlace : music7,
        tecla : '122',

    },
    x : {
        name : 'X',
        enlace : music8,
        tecla : '120',

    },
    c : {
        name : 'C',
        enlace : music9,
        tecla : '199',

    },

}


const reproduce = (aud)=>{
    const audio = new Audio( listaMusica[aud].enlace)
    audio.play();
 
}

export {listaMusica, reproduce}
