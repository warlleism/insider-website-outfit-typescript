
interface Color {
    id_color?: number;
    hex?: string;
}

export interface Itens {
    id: number;
    name: string;
    price: number;
    id_color?: number;
    color?: Color[];
    img1?: {
        img_1: string;
        img_2: string;
        img_3: string;
        img_4: string;
    };
    img2?: {
        img_1: string;
        img_2: string;
        img_3: string;
        img_4: string;
    };
    img3?: {
        img_1: string;
        img_2: string;
        img_3: string;
        img_4: string;
    };
    img4?: {
        img_1: string;
        img_2: string;
        img_3: string;
        img_4: string;
    };
}