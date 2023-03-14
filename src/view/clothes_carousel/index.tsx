import './style.scss'
import { Shirts_Male } from '../../data/data';
import { Shirts_Female } from '../../data/data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
    const [typeSkins, setTypeSkins] = useState(true);
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null);
    const navigate = useNavigate()
    const [grab, setGrab] = useState(true)

    function handleGrabFalse() {
        setTimeout(() => {
            setGrab(false)
        }, 100)
    }
    function handleGrabTrue() {
        setTimeout(() => {
            setGrab(true)
        }, 100)
    }

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    //permanecendo dado no localstorage
    function setLocalStorage(object: any) {
        localStorage.setItem('item', JSON.stringify(object))
        if (grab == true) {
            navigate('/detalhar')
        }
    }

    //script para animação de opacity no carousel
    function handlerOpacity(value: boolean) {
        const itens = document?.querySelectorAll<HTMLElement>('#item')

        if (typeSkins == true && value == true) {
            return
        } else if (typeSkins == false && value == false) {
            return
        } else {
            for (let i = 0; i < itens.length; i++) {
                itens[i].style.opacity = '0'
            }
            setTimeout(() => {
                for (let i = 0; i < itens.length; i++) {
                    setTypeSkins(value)
                    itens[i].style.opacity = '1'
                }
            }, 1000)
        }
    }

    //script de troca de image ao passar mouse em cima do card
    function handlerImage(event: React.MouseEvent<HTMLElement>, type: boolean) {
        if (type) {
            const image = event.target as HTMLElement;
            const secondChild = image.children[1] as HTMLElement;
            if (secondChild) {
                secondChild.style.opacity = '1';
            }
        } else {
            const image = event.target as HTMLElement;
            const secondChild = image.children[1] as HTMLElement;
            if (secondChild) {
                secondChild.style.opacity = '0';
            }
        }
    }

    return (
        <div className='container-carousel'>
            <div className='container-change-skin-gener'>
                <div onClick={() => handlerOpacity(true)} style={{ color: typeSkins ? "#1f1f1faf" : "black" }}>HOMEM</div>
                <div>|</div>
                <div onClick={() => handlerOpacity(false)} style={{ color: typeSkins ? "black" : "#1f1f1faf" }}>MULHER</div>
            </div>
            <motion.div
                ref={carousel}
                className='carousel'
                whileTap={{ cursor: "grabbing" }}
                onMouseDown={handleGrabFalse}
                onMouseUp={handleGrabTrue}
            >
                <motion.div
                    className='inner'
                    drag="x"
                    animate={{ x: 0 }}
                    initial={{ x: 100 }}
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {
                        typeSkins
                            ?
                            Shirts_Male?.map((itens) => {
                                return (
                                    <motion.div
                                        key={itens.id}
                                        className='item'
                                        id='item'
                                        onMouseEnter={(event) => handlerImage(event, true)}
                                        onMouseLeave={(event) => handlerImage(event, false)}
                                        onClick={() => setLocalStorage(itens)}
                                    >
                                        <img src={itens?.img1?.img_1} alt="" />
                                        <img src={itens?.img1?.img_2} alt="" />
                                        <div style={{ fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>{itens.name}</div>
                                    </motion.div>

                                )
                            })
                            :
                            Shirts_Female?.map((itens) => {
                                return (
                                    <motion.div
                                        draggable="true"
                                        key={itens.id}
                                        className='item'
                                        id='item'
                                        onMouseEnter={(event) => handlerImage(event, true)}
                                        onMouseLeave={(event) => handlerImage(event, false)}
                                        onClick={() => setLocalStorage(itens)}
                                    >
                                        <img src={itens?.img1?.img_1} alt="" />
                                        <img src={itens?.img1?.img_2} alt="" />
                                        <div style={{ fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>{itens.name}</div>
                                    </motion.div>

                                )
                            })
                    }

                </motion.div>
            </motion.div>
        </div >
    )
}

export default Carousel;