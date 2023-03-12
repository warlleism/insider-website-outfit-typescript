import './style.scss'
import { Shirts_Male } from '../../data/data';
import { Shirts_Female } from '../../data/data';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Carousel = () => {
    const [typeSkins, setTypeSkins] = useState(true);
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

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
                <div onClick={() => setTypeSkins(true)} style={{ color: typeSkins ? "#1f1f1faf" : "black" }}>HOMEM</div>
                <div>|</div>
                <div onClick={() => setTypeSkins(false)} style={{ color: typeSkins ? "black" : "#1f1f1faf" }}>MULHER</div>
            </div>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div className='inner'
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
                                        className='item'
                                        id='item'
                                        onMouseEnter={(event) => handlerImage(event, true)}
                                        onMouseLeave={(event) => handlerImage(event, false)}
                                    >
                                        <img src={itens.img.img_1} alt="" />
                                        <img src={itens.img.img_2} alt="" />
                                        <div style={{ fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>{itens.name}</div>
                                    </motion.div>

                                )
                            })
                            :
                            Shirts_Female?.map((itens) => {
                                return (
                                    <motion.div
                                        className='item'
                                        id='item'
                                        onMouseEnter={(event) => handlerImage(event, true)}
                                        onMouseLeave={(event) => handlerImage(event, false)}
                                    >
                                        <img src={itens.img.img_1} alt="" />
                                        <img src={itens.img.img_2} alt="" />
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