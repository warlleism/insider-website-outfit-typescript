import './style.scss'
import { Intagram_content } from "../../data/instagram_data";
import Carousel_component from "../../components/carousel";

const Poster = () => {
    return (
        <>
            <div className='container-poster'>
                <div className='container-text-buttom'>
                    <div><strong style={{ color: '#5f5f5f', fontWeight: 400 }}>T</strong>HE PERFECT TOP</div>
                    <div>SHOP</div>
                </div>
            </div>
            <div className='container-instagram'>
                <div className='titulo-instagram' style={{ fontWeight: 300, fontSize: '2rem', textAlign: 'center' }}>DIRETO DO <strong style={{ fontWeight: 400 }}>INSTAGRAM</strong></div>
                <Carousel_component data={Intagram_content} />
            </div>
        </>

    )
}

export default Poster;