import './style.scss'
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const Carousel_component = (props: any) => {
    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    return (
        <div className='container-carousel'>
            <motion.div ref={carousel} className='carousel' whileTap={{ cursor: "grabbing" }}>
                <motion.div className='inner'
                    drag="x"
                    animate={{ x: 0 }}
                    initial={{ x: 100 }}
                    dragConstraints={{ right: 0, left: -width }}
                >
                    {
                        props.data?.map((itens: any) => {
                            return (
                                <motion.div
                                    key={itens.id}
                                    className='item'
                                    id='item'
                                >
                                    <img src={itens.img} alt="" />
                                </motion.div>
                            )
                        })
                    }
                </motion.div>
            </motion.div>
        </div >
    )
}

export default Carousel_component;