import logo from './assets/image/Asiacanteenlogo.png'
import menu from './assets/image/menu.png'
import ourGoal from './assets/image/our-goal.png'
import location from './assets/image/locatio.png'

import { useState } from 'react'

export default function Header() {

    const [hovered, setHover] = useState('');

    return (
        <>
            <section style={{ width: '100%'}}>
                <div style={{ height: 350, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', flexDirection: 'column', position: 'absolute', zIndex: 1 }}>
                    <div style={{ marginBottom: 5 }}>
                        <figure>
                            <img style={{ maxWidth: 500 }} src={logo} alt="Logo" />
                        </figure>
                    </div>
                    <div id='header-menu' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img style={{ width: 100, height: 32, padding: 7, borderBottom: hovered == 'menu' ? '3px solid white' : 'none'}} onMouseEnter={() => setHover('menu')} onMouseLeave={() => setHover('')} src={menu} alt="menu text" />
                        <img style={{ width: 140, height: 50, borderBottom: hovered == 'location' ? '3px solid white' : 'none'}} onMouseEnter={() => setHover('location')} onMouseLeave={() => setHover('')} src={location} alt="location text" />
                        <img style={{ width: 140, height: 50, borderBottom: hovered == 'goal' ? '3px solid white' : 'none'}} onMouseEnter={() => setHover('goal')} onMouseLeave={() => setHover('')} src={ourGoal} alt="our goal text" />
                    </div>
                </div>
                <div className="hf-wrapimg" style={{ height: '100%', width: '100%', backgroundImage: 'url(https://t3.ftcdn.net/jpg/04/02/01/78/360_F_402017867_lK95Sff724B35wAQ76OzaMoRbP70Z14B.jpg)', backgroundSize: 'cover', filter: 'blur(2.5px) opacity(.5)', boxShadow: 'rgba(0, 0, 0, 0.25) 0px 0px 15px 4px inset', backgroundAttachment: 'fixed' }}>
                </div>
                </div>
                
            </section>
        </>
    )
}