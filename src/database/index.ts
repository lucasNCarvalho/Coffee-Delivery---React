import type_expresso_tradicional from '../assets/type coffee/type_expresso_tradicional.svg'
import type_americano from '../assets/type coffee/type_americano.svg'
import type_expresso_cremoso from '../assets/type coffee/type_expresso_cremoso.svg'
import type_cafe_leite from '../assets/type coffee/type_cafe_leite.svg'
import type_latte from '../assets/type coffee/type_latte.svg'
import type_capuccino from '../assets/type coffee/type_capuccino.svg'
import type_machiato from '../assets/type coffee/type_machiato.svg'
import type_mocaccino from '../assets/type coffee/type_mocaccino.svg'
import type_chocolate_quente from '../assets/type coffee/type_chocolate_quente.svg'
import type_cubano from '../assets/type coffee/type_cubano.svg'
import type_havaiano from '../assets/type coffee/type_havaiano.svg'
import type_arabe from '../assets/type coffee/type_arabe.svg'
import type_irlandes from '../assets/type coffee/type_irlandes.svg'
import type_cafe_gelado  from '../assets/type coffee/type_cafe_gelado.svg'

import { v4 as uuidv4 } from 'uuid';


export const coffeeDataBase = [
    {   
        id: uuidv4(),
        img: type_expresso_tradicional,
        label: ['TRADICIONAL'],
        title: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_americano,
        label: ['TRADICIONAL'],
        title: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_expresso_cremoso,
        label: ['TRADICIONAL'],
        title: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_cafe_gelado,
        label: ['TRADICIONAL', 'GELADO'],
        title: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_cafe_leite,
        label: ['TRADICIONAL', 'COM LEITE'],
        title: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional com leite vaporizado',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_latte,
        label: ['TRADICIONAL', 'COM LEITE'],
        title: 'Latte',
        description: 'Um dose de café expresso com o dobro de leite e espuma cremosa',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_capuccino,
        label: ['TRADICIONAL', 'COM LEITE'],
        title: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_machiato,
        label: ['TRADICIONAL', 'COM LEITE'],
        title: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_mocaccino,
        label: ['TRADICIONAL', 'COM LEITE'],
        title: 'Mocaccino',
        description: 'Café expresso com calda de chcolate, pouco leite e espuma',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_chocolate_quente,
        label: ['ESPECIAL', 'COM LEITE'],
        title: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_cubano,
        label: ['ESPECIAL', 'COM LEITE', 'GELADO'],
        title: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_havaiano,
        label: ['ESPECIAL'],
        title: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_arabe,
        label: ['ESPECIAL'],
        title: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
        price: 9.90,
    },
    {   
        id: uuidv4(),
        img: type_irlandes,
        label: ['ESPECIAL', 'ALCOÓLICO'],
        title: 'Irlandês',
        description: 'Bebida a base de café, uisque irlandês, açúcar e chantilly',
        price: 9.90,
    },


] 