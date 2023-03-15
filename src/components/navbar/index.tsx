import femaleImage1 from '../../images/navbar/female-casual1.png';
import femaleImage2 from '../../images/navbar/female-casual2.png';
import maleImage1 from '../../images/navbar/male-casual1.png';
import maleImage2 from '../../images/navbar/male-casual2.png';
import { Link } from 'react-router-dom';
import './style.scss'
import { useEffect } from 'react';


const Navbar = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const handdlerContent = (param: string, type: boolean) => {

        const elements: NodeListOf<Element> | null = document.querySelectorAll('#content-navbar');
        const htmlElements: HTMLElement[] = Array.from(elements) as HTMLElement[];

        if (type == true) {
            if (param == 'man') {
                htmlElements[0].style.pointerEvents = 'all';
                htmlElements[0].style.display = 'flex';
                htmlElements[1].style.pointerEvents = 'none';

                setTimeout(() => {
                    htmlElements[0].style.opacity = '1';
                    htmlElements[1].style.opacity = '0';
                }, 100)

            } else {
                htmlElements[0].style.pointerEvents = 'none';
                htmlElements[1].style.pointerEvents = 'all';
                htmlElements[1].style.display = 'flex';


                setTimeout(() => {
                    htmlElements[0].style.opacity = '0';
                    htmlElements[1].style.opacity = '1';
                }, 100)

            }
        } else {
            htmlElements[0].style.opacity = '0';
            htmlElements[1].style.opacity = '0';
            htmlElements[0].style.pointerEvents = 'none';
            htmlElements[1].style.pointerEvents = 'none';
            setTimeout(() => {
                htmlElements[0].style.display = 'none';
                htmlElements[1].style.display = 'none';
            }, 100)
        }
    }

    return (

        <div style={{ marginBottom: 100 }}>
            <div className='container-navbar-content'>
                <Link to={'/'} className='container-logo'>INSIDER.</Link>

                <div className='container-navbar-links'>
                    <div onMouseOver={() => handdlerContent('man', true)}>HOMEM</div>
                    <div onMouseOver={() => handdlerContent('women', true)}>MULHER</div>
                    <div>ACESSÓRIOS</div>
                    <div>SEMANA DO CONSUMIDOR</div>
                </div>

                <div className='container-icons-navbar'>
                    <span className="material-symbols-outlined">
                        shopping_bag
                    </span>
                    <span className="material-symbols-outlined">
                        person
                    </span>
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </div>
            </div>

            <div id='content-navbar' className='container-content-navbar-default' onMouseLeave={() => handdlerContent('man', false)}>
                <ul>
                    <li style={{ fontWeight: 900 }}>TOPS</li>
                    <li>Tech T-Shirt</li>
                    <li>Tech T-Shirt Gola V</li>
                    <li>Daily T-Shirt</li>
                    <li>Performance T-Shirt 2.0</li>
                    <li>Tech T-Shirt Long Sleeve</li>
                    <li>Oversized T-Shirt</li>
                    <li>T-Shirt Sportee</li>
                    <li>T-Shirt Sportee Long Sleeve</li>
                    <li>Urban Cap</li>
                    <li>Heavy Hoodie</li>
                </ul>
                <ul>
                    <li style={{ fontWeight: 900 }}>BOTTOMS</li>
                    <li>Future Shorts</li>
                    <li>Tech T-Shirt Gola V</li>
                    <li>Meias</li>
                </ul>
                <ul>
                    <li style={{ fontWeight: 900 }}>UNDERWEAR</li>
                    <li>Undershirt</li>
                    <li>Cueca Performance</li>
                    <li>Cueca Slip</li>
                </ul>
                <div className='container-images-navbar'>
                    <img src={maleImage1} alt="roupas casuais masculinas" />
                    <img src={maleImage2} alt="roupas casuais masculinas" />
                </div>
            </div>

            <div id='content-navbar' className='container-content-navbar-default' onMouseLeave={() => handdlerContent('women', false)} >
                <ul>
                    <li style={{ fontWeight: 900 }}>TOPS</li>
                    <li>Tech T-Shirt</li>
                    <li>Tech T-Shirt Gola V</li>
                    <li>Daily T-Shirt</li>
                    <li>Performance T-Shirt 2.0</li>
                    <li>Tech T-Shirt Long Sleeve</li>
                    <li>Oversized T-Shirt</li>
                    <li>T-Shirt Sportee</li>
                    <li>T-Shirt Sportee Long Sleeve</li>
                    <li>Urban Cap</li>
                    <li>Heavy Hoodie</li>
                </ul>
                <ul>
                    <li style={{ fontWeight: 900 }}>BOTTOMS</li>
                    <li>Future Shorts</li>
                    <li>Tech T-Shirt Gola V</li>
                    <li>Meias</li>
                </ul>
                <ul>
                    <li style={{ fontWeight: 900 }}>UNDERWEAR</li>
                    <li>Undershirt</li>
                    <li>Cueca Performance</li>
                    <li>Cueca Slip</li>
                </ul>
                <div className='container-images-navbar'>
                    <img src={femaleImage1} alt="roupas casuais masculinas" />
                    <img src={femaleImage2} alt="roupas casuais masculinas" />
                </div>
            </div>
        </div>


    )
}

export default Navbar;