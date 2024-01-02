import logo from './assets/image/Asiacanteenlogo.png'
import menu from './assets/image/menu.png'
import ourGoal from './assets/image/our-goal.png'
import location from './assets/image/locatio.png'

import { useState } from 'react'

export default function Header() {

    const [hovered, setHover] = useState('');

    return (
        <>
            <section>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginBottom: 5 }}>
                        <figure>
                            <img style={{ maxWidth: 500 }} src={logo} alt="Logo" />
                        </figure>
                    </div>
                    <div id='header-menu' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <img style={{ width: 100, height: 32, padding: 7, borderBottom: hovered == 'menu' ? '3px solid #D82740' : 'none'}} onMouseEnter={() => setHover('menu')} onMouseLeave={() => setHover('')} src={menu} alt="menu text" />
                        <img style={{ width: 140, height: 50, borderBottom: hovered == 'location' ? '3px solid #D82740' : 'none'}} onMouseEnter={() => setHover('location')} onMouseLeave={() => setHover('')} src={location} alt="location text" />
                        <img style={{ width: 140, height: 50, borderBottom: hovered == 'goal' ? '3px solid #D82740' : 'none'}} onMouseEnter={() => setHover('goal')} onMouseLeave={() => setHover('')} src={ourGoal} alt="our goal text" />
                    </div>
                </div>
            </section>
        </>
    )
}