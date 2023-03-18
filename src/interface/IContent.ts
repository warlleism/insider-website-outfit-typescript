
interface Color {
    id_color?: number;
    hex?: string;
    name?: string;
}

export interface Itens {
    id: number;
    name: string;
    cor?: string;
    price: number;
    id_color?: number;
    color?: Color[];
    img1?: {
        default_color?: string;
        img_1?: string;
        img_2?: string;
        img_3?: string;
        img_4?: string;
    };
    img2?: {
        default_color?: string;
        img_1?: string;
        img_2?: string;
        img_3?: string;
        img_4?: string;
    };
    img3?: {
        default_color?: string;
        img_1?: string;
        img_2?: string;
        img_3?: string;
        img_4?: string;
    };
    img4?: {
        default_color?: string;
        img_1?: string;
        img_2?: string;
        img_3?: string;
        img_4?: string;
    };
}