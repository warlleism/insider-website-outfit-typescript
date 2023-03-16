import { useContext, useEffect, useState } from 'react';
import './style.scss'
import { Itens } from "../../interface/IContent"
import Carousel_component from '../../components/carousel';
import { Intagram_content } from "../../data/instagram_data"
import Navbar from '../../components/navbar';
import { Context } from '../../context/provider';

interface Imagens {
    img_1: string;
    img_2: string;
    img_3: string;
    img_4: string;
}

const DetailProduct = () => {

    const [product, setProduct] = useState<Itens>()

    const [type, setType] = useState<Imagens>()

    const { object, setObject } = useContext(Context)

    function handlerObject() {
        const newState = [...object, product];
        setObject(newState);
    }


    useEffect(() => {
        const local = localStorage.getItem('item')
        if (local) {
            setProduct(JSON.parse(local))
        }
        alterSizeBackground()
    }, [])



    function handlerType(value: number) {

        const data = document?.getElementById('container-image') as HTMLElement
        data.style.opacity = '0'

        setTimeout(() => {
            if (value == 1) {
                setType(product?.img1)
            } else if (value == 2) {
                setType(product?.img2)
            }
            else if (value == 3) {
                setType(product?.img3)

            } else if (value == 4) {
                setType(product?.img4)
            }
        }, 1000)

        setTimeout(() => {
            data.style.opacity = '1'
        }, 1000)
    }

    //Função responsável por alterar o background do botao de size
    function alterSizeBackground() {
        const divs = document.querySelectorAll('#tamanho');
        for (let i = 0; i < divs.length; i++) {
            divs[i].addEventListener('click', function (this: HTMLElement) {
                for (let j = 0; j < divs.length; j++) {
                    divs[j].classList.remove('selected');
                }
                this.classList.add('selected');
            });
        }
    }

    return (
        <>
        {console.log(object.length)}
            <Navbar />
            <div className='container-detail'>
                <div className='container-content-grid'>
                    {
                        type
                            ?
                            <div className='container-imgs' id='container-image'>
                                <div>
                                    <img src={type?.img_1} alt="" />
                                    <img src={type?.img_2} alt="" />
                                </div>
                                <div>
                                    <img src={type?.img_3} alt="" />
                                    <img src={type?.img_4} alt="" />
                                </div>
                            </div>
                            :
                            <div className='container-imgs' id='container-image'>
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
                                            <div key={e?.id_color} onClick={() => {
                                                if (typeof e?.id_color !== 'undefined') {
                                                    handlerType(e.id_color);
                                                }
                                            }} style={{ backgroundColor: e?.hex }}></div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div className='container-size'>
                            <span>Tamanho :</span>
                            <div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>PP</div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>P</div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>M</div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>G</div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>GG</div>
                                <div id='tamanho' onClick={() => alterSizeBackground()}>XGG</div>
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

                        <div className='add-to-card' onClick={() => handlerObject()}
                        >ADICIONAR AO CARRINHO</div>

                    </div>

                </div>

                <Carousel_component data={Intagram_content} />
            </div >
        </>
    )
}

export default DetailProduct;
