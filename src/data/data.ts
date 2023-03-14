import { Itens } from "../interface/IContent"

import T_shirt_1 from "../images/tech-tShirt/img1.png"
import T_shirt_2 from "../images/tech-tShirt/img2.png"
import T_shirt_3 from "../images/tech-tShirt/img3.png"
import T_shirt_4 from "../images/tech-tShirt/img4.png"

import Cueca_confort_1 from "../images/cueca-confort/img1.png"
import Cueca_confort_2 from "../images/cueca-confort/img2.png"

import Cueca_performance_1 from "../images/cueca-performance/img1.png"
import Cueca_performance_2 from "../images/cueca-performance/img2.png"

import Undershirt_anti_suor_1 from "../images/undershirt-anti-suor/img1.png"
import Undershirt_anti_suor_2 from "../images/undershirt-anti-suor/img2.png"

import Tech_t_shirt_gola_1 from "../images/tech-t-shirt-gola-v/img1.png"
import Tech_t_shirt_gola_2 from "../images/tech-t-shirt-gola-v/img2.png"
import Tech_t_shirt_gola_3 from "../images/tech-t-shirt-gola-v/img3.png"
import Tech_t_shirt_gola_4 from "../images/tech-t-shirt-gola-v/img4.png"

import Everyday_shorts_1 from "../images/everyday-shorts/img1.png"
import Everyday_shorts_2 from "../images/everyday-shorts/img2.png"

import Daily_t_shirt_1 from "../images/daily-tshirt/img1.png"
import Daily_t_shirt_2 from "../images/daily-tshirt/img2.png"
import Daily_t_shirt_3 from "../images/daily-tshirt/img3.png"
import Daily_t_shirt_4 from "../images/daily-tshirt/img4.png"

import Performance_t_shirt_2_1 from "../images/performance-t-shirt-2.0/img1.png"
import Performance_t_shirt_2_2 from "../images/performance-t-shirt-2.0/img2.png"
import Performance_t_shirt_2_3 from "../images/performance-t-shirt-2.0/img3.png"
import Performance_t_shirt_2_4 from "../images/performance-t-shirt-2.0/img4.png"

import Tshirt_female_1 from "../images/tech-tShirt/img6.png"
import Tshirt_female_2 from "../images/tech-tShirt/img7.png"
import Tshirt_female_3 from "../images/tech-tShirt/img8.png"
import Tshirt_female_4 from "../images/tech-tShirt/img9.png"


export const Shirts_Male: Itens[] = [
    {
        id: 1,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: T_shirt_1,
            img_2: T_shirt_2,
            img_3: T_shirt_3,
            img_4: T_shirt_4,
        }
    },
    {
        id: 2,
        name: 'Cueca Comfort',
        price: 130.00,
        img1: {
            img_1: Cueca_confort_1,
            img_2: Cueca_confort_2,
            img_3: T_shirt_3,
            img_4: T_shirt_4,
        }
    },
    {
        id: 3,
        name: 'Cueca Performance',
        price: 130.00,
        img1: {
            img_1: Cueca_performance_1,
            img_2: Cueca_performance_2,
            img_3: T_shirt_3,
            img_4: T_shirt_4,
        }
    },
    {
        id: 4,
        name: 'Tech T-Shirt Gola V',
        price: 130.00,
        color: [
            { id_color: 1, hex: '#696969' },
            { id_color: 2, hex: '#33405b' },
            { id_color: 3, hex: '#f0f0ee' },
            { id_color: 4, hex: '#525041' }
        ],
        img1: {
            img_1: Tech_t_shirt_gola_1,
            img_2: Tech_t_shirt_gola_2,
            img_3: Tech_t_shirt_gola_3,
            img_4: Tech_t_shirt_gola_4,
        },
        img2: {
            img_1: Undershirt_anti_suor_1,
            img_2: Undershirt_anti_suor_1,
            img_3: Undershirt_anti_suor_2,
            img_4: Undershirt_anti_suor_2,
        },
        img3: {
            img_1: Tech_t_shirt_gola_1,
            img_2: Tech_t_shirt_gola_2,
            img_3: Tech_t_shirt_gola_3,
            img_4: Tech_t_shirt_gola_4,
        },
        img4: {
            img_1: Tech_t_shirt_gola_1,
            img_2: Tech_t_shirt_gola_2,
            img_3: Tech_t_shirt_gola_3,
            img_4: Tech_t_shirt_gola_4,
        }
    },
    {
        id: 5,
        name: 'Undershirt Anti Suor',
        price: 130.00,
        img1: {
            img_1: Undershirt_anti_suor_1,
            img_2: Undershirt_anti_suor_2,
            img_3: T_shirt_3,
            img_4: T_shirt_4,
        }
    },
    {
        id: 6,
        name: 'Everyday Shorts',
        price: 130.00,
        img1: {
            img_1: Everyday_shorts_1,
            img_2: Everyday_shorts_2,
            img_3: T_shirt_3,
            img_4: T_shirt_4,
        }
    },
    {
        id: 7,
        name: 'Daily T-Shirt',
        price: 130.00,
        img1: {
            img_1: Daily_t_shirt_1,
            img_2: Daily_t_shirt_2,
            img_3: Daily_t_shirt_3,
            img_4: Daily_t_shirt_4
        }
    },
    {
        id: 8,
        name: 'Performance T-Shirt 2.0',
        price: 130.00,
        img1: {
            img_1: Performance_t_shirt_2_1,
            img_2: Performance_t_shirt_2_2,
            img_3: Performance_t_shirt_2_3,
            img_4: Performance_t_shirt_2_4,
        }
    }
]

export const Shirts_Female: Itens[] = [
    {
        id: 1,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    },
    {
        id: 2,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    },
    {
        id: 3,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    },
    {
        id: 4,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    },
    {
        id: 5,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    },
    {
        id: 6,
        name: 'Tech T-Shirt',
        price: 130.00,
        img1: {
            img_1: Tshirt_female_1,
            img_2: Tshirt_female_2,
            img_3: Tshirt_female_3,
            img_4: Tshirt_female_4,
        }
    }
]

