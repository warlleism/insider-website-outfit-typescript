import { useContext, useEffect, useState } from 'react';
import './style.scss'
import { Itens } from "../../interface/IContent"
import Carousel_component from '../../components/carousel';
import { Intagram_content } from "../../data/instagram_data"
import Navbar from '../../components/navbar';
import { Context } from '../../context/provider';

interface Imagens {
    img_1?: string;
    img_2?: string;
    img_3?: string;
    img_4?: string;
}

const DetailProduct = () => {

    const [type, setType] = useState<Imagens>()
    const [product, setProduct] = useState<Itens>()
    const { object, setObject } = useContext(Context)
    const [qtd, setQtd] = useState<number>(1)

    //funcao responsavel por adicionar produto ao carrinho
    function handlerObject() {

        const data_id = object.map((e) => e.id)
        const data_cor = object.map((e) => e.cor)

        const obj = product?.id
        const cor = product?.cor

        const filter: boolean = data_cor.includes(cor)
        const filterId: boolean = obj !== undefined && data_id.includes(obj)

        console.log(filterId)

        if (filter == true && filterId == true) {
            return
        } else {
            const newState: any = [...object, product];
            setObject(newState);
        }

        if (obj !== undefined) {
            const filter: boolean = data_id.includes(obj)
            if (filter) {
                return
            } else {
                const newState: any = [...object, product];
                setObject(newState);
            }
        }
    }

    useEffect(() => {
        const local = localStorage.getItem('item')
        if (local) {
            setProduct({
                id: JSON.parse(local).id,
                name: JSON.parse(local).name,
                cor: 'Preta',
                price: JSON.parse(local).price,
                color: [
                    { id_color: 1, hex: JSON.parse(local)?.color[0]?.hex, name: JSON.parse(local)?.color[0]?.name },
                    { id_color: 2, hex: JSON.parse(local)?.color[1]?.hex, name: JSON.parse(local)?.color[1]?.name },
                    { id_color: 3, hex: JSON.parse(local)?.color[2]?.hex, name: JSON.parse(local)?.color[2]?.name },
                    { id_color: 4, hex: JSON.parse(local)?.color[3]?.hex, name: JSON.parse(local)?.color[3]?.name }
                ],
                img1: {
                    img_1: JSON.parse(local)?.img1.img_1,
                    img_2: JSON.parse(local)?.img1.img_2,
                    img_3: JSON.parse(local)?.img1.img_3,
                    img_4: JSON.parse(local)?.img1.img_4,
                },
                img2: {
                    img_1: JSON.parse(local)?.img2.img_1,
                    img_2: JSON.parse(local)?.img2.img_2,
                    img_3: JSON.parse(local)?.img2.img_3,
                    img_4: JSON.parse(local)?.img2.img_4,
                },
                img3: {
                    img_1: JSON.parse(local)?.img3.img_1,
                    img_2: JSON.parse(local)?.img3.img_2,
                    img_3: JSON.parse(local)?.img3.img_3,
                    img_4: JSON.parse(local)?.img3.img_4,
                },
                img4: {
                    img_1: JSON.parse(local)?.img4.img_1,
                    img_2: JSON.parse(local)?.img4.img_2,
                    img_3: JSON.parse(local)?.img4.img_3,
                    img_4: JSON.parse(local)?.img4.img_4,
                },
            })
        }
        alterSizeBackground()

    }, [])

    //script de anomação ao trocar de cor do produto
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
                                            <div
                                                id='color'
                                                key={e?.id_color}
                                                onClick={() => {
                                                    if (typeof e?.id_color !== 'undefined') {
                                                        handlerType(e.id_color);
                                                        console.log(e.name)
                                                    }
                                                    setProduct((product: any) => ({
                                                        ...product,
                                                        cor: e?.name
                                                    }));
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
                                <div style={{ cursor: 'pointer' }} onClick={() => {
                                    if (qtd == 0) {
                                        return
                                    } else {
                                        setQtd(qtd - 1)
                                    }
                                }}>
                                    -
                                </div>
                                <div>
                                    {qtd}
                                </div>
                                <div style={{ cursor: 'pointer' }} onClick={() => setQtd(qtd + 1)}>
                                    +
                                </div>
                            </div>
                        </div>

                        <div className='add-to-card' onClick={() => handlerObject()}
                        >ADICIONAR AO CARRINHO
                            <span className="first"></span>
                            <span className="second"></span>
                            <span className="third"></span>
                            <span className="fourth"></span>
                        </div>

                    </div>

                </div>

                <Carousel_component data={Intagram_content} />
            </div >
        </>
    )
}

export default DetailProduct;
