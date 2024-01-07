import logo from './assets/image/Asiacanteenlogo.png'
import menu from './assets/image/menu.png'
import ourGoal from './assets/image/our-goal.png'
import location from './assets/image/locatio.png'

import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Header() {

    const [hovered, setHover] = useState('');
    const [set, setSet] = useState('');
    
    const hoveredOver = (name) => {
        return {
            borderBottom: hovered === name || set === name ? '2px solid white' : 'none'
        };
    };

    return (
        <>
            <section style={{ width: '100%' }}>
                <div id='header-hold' style={{ height: 120, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#ca2405', backgroundImage: 'url(https://i.pinimg.com/564x/00/c0/9d/00c09de812b0d3610e938c468b911dae.jpg)', backgroundSize: 'cover' }}>
                    <div id='header-content-hold' style={{ width: '80%', display: 'flex', justifyContent: 'space-around' }}>
                        <div>
                            <figure>
                                <img style={{ maxWidth: 250 }} src={logo} alt="Logo" onClick={() => setSet('home')} />
                            </figure>
                        </div>
                        <div id='header-menu' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '40%' }}>
                            <p className='menu-item' style={hoveredOver('home')} onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')} onClick={() => setSet('home')}><Link className='header-anc' to={'/'}>HOME</Link></p>
                            <p className='menu-item' style={hoveredOver('about')} onMouseEnter={() => setHover('about')} onMouseLeave={() => setHover('')} onClick={() => setSet('about')}><Link className='header-anc' to={'/about'}>ABOUT</Link></p>
                            <p className='menu-item' style={hoveredOver('menu')} onMouseEnter={() => setHover('menu')} onMouseLeave={() => setHover('')} onClick={() => setSet('menu')}><Link className='header-anc' to={'/menu'}>MENU</Link></p>
                            <p className='menu-item' style={hoveredOver('contact')} onMouseEnter={() => setHover('contact')} onMouseLeave={() => setHover('')} onClick={() => setSet('contact')}><Link className='header-anc' to={'/contact'}>CONTACT</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}