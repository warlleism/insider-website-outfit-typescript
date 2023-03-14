import { useEffect, useState } from 'react';
import './style.scss'
import { Itens } from "../../interface/IContent"
import Carousel_component from '../../components/carousel';
import { Intagram_content } from "../../data/instagram_data"


const DetailProduct = () => {

    const [product, setProduct] = useState<Itens>()

    const [type, setType] = useState(1)

    useEffect(() => {

        const local = localStorage.getItem('item')
        if (local) {
            setProduct(JSON.parse(local))
        }

    }, [])

    return (
        <div className='container-detail'>
            <div className='container-content-grid'>

                {
                    <div className='container-imgs'>
                        <div>
                            <img src={product?.img1?.img_1} alt="" />
                            <img src={product?.img1?.img_2} alt="" />
                        </div>
                        <div>
                            <img src={product?.img1?.img_3} alt="" />
                            <img src={product?.img1?.img_4} alt="" />
                        </div>
                    </div>
                }

                <div className='container-info'>

                    <div className='container-name'>{product?.name}</div>

                    <div className='container-stars'>
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        <span className="material-symbols-outlined">
                            star
                        </span>
                        <span className="material-symbols-outlined">
                            star
                        </span>
                    </div>

                    <div className='container-price'>R$ {product?.price}</div>

                    <div className='container-color'>
                        <span>Cor :</span>
                        <div>
                            {
                                product?.color?.map((e) => {
                                    return (
                                        <div key={e?.id_color} style={{ backgroundColor: e?.hex }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className='container-size'>
                        <span>Tamanho :</span>
                        <div>
                            <div>PP</div>
                            <div>P</div>
                            <div>M</div>
                            <div>G</div>
                            <div>GG</div>
                            <div>XGG</div>
                        </div>
                    </div>

                    <div className='container-room'>
                        <div>
                            <span className="material-symbols-outlined">
                                checkroom
                            </span>
                            PROVADOR VIRTUAL</div>
                        <div>
                            <span className="material-symbols-outlined">
                                straighten
                            </span>
                            TABELA DE MEDIDAS
                        </div>
                    </div>

                    <div className='container-qtd'>

                        <span>Tamanho :</span>

                        <div className='container-values'>
                            <div style={{ cursor: 'pointer' }}>
                                -
                            </div>
                            <div>
                                2
                            </div>
                            <div style={{ cursor: 'pointer' }}>
                                +
                            </div>
                        </div>
                    </div>

                    <div className='add-to-card'>ADICIONAR AO CARRINHO</div>

                </div>

            </div>

            <Carousel_component data={Intagram_content} />
        </div>
    )
}

export default DetailProduct;
