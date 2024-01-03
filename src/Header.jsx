import logo from './assets/image/Asiacanteenlogo.png'
import menu from './assets/image/menu.png'
import ourGoal from './assets/image/our-goal.png'
import location from './assets/image/locatio.png'

import { useState } from 'react'

export default function Header() {

    const [hovered, setHover] = useState('');
    const [set, setSet] = useState('');

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
                            <p className='menu-item' style={{ borderBottom: hovered == 'home' || set == 'home' ? '2px solid white' : 'none' }} onMouseEnter={() => setHover('home')} onMouseLeave={() => setHover('')} onClick={() => setSet('home')}>HOME</p>
                            <p className='menu-item' style={{ borderBottom: hovered == 'about' || set == 'about' ? '2px solid white' : 'none' }} onMouseEnter={() => setHover('about')} onMouseLeave={() => setHover('')} onClick={() => setSet('about')}>ABOUT</p>
                            <p className='menu-item' style={{ borderBottom: hovered == 'menu' || set == 'menu' ? '2px solid white' : 'none' }} onMouseEnter={() => setHover('menu')} onMouseLeave={() => setHover('')} onClick={() => setSet('menu')}>MENU</p>
                            <p className='menu-item' style={{ borderBottom: hovered == 'contact' || set == 'contact' ? '2px solid white' : 'none' }} onMouseEnter={() => setHover('contact')} onMouseLeave={() => setHover('')} onClick={() => setSet('contact')}>CONTACT</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}