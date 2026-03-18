import { useState, useEffect } from "react";

function Navbar(){
    const [active, setactive] = useState("home");
    const [scrolled, setscrolled] = useState(false);

    useEffect(()=>{
        const handlescroll = () =>{
            setscrolled(window.scrollY>20)
        }

        window.addEventListener('scroll', handlescroll);
        return() => window.removeEventListener('scroll', handlescroll);
    },[])

    const links = [
        {name:'home', href:'#home'},
        {name:'about me', href:'#about'},
        {name:'projects', href:'#projects'},
        {name:'contact me', href:'#contact'},
    ]

    return(
        <nav style={{
            position: 'fixed',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '2vh',
            width: 'fit-content',
            height: '7vh',
            backgroundColor: 'rgba(224, 225, 221, 0.1)',
            backdropFilter: 'blur(20px)',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding:'0 8px'
        }}>
            <ul style={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: 'fit-content',
                height: 'fit-content',
                gap:'10px',
                listStyle: 'none',
                margin: 0,
                boxSizing: 'border-box',
            }}>
                {links.map((link) => (
                    <li key={link.name} style={{ listStyle: 'none' }}>
                        <a 
                            href={link.href}
                            onClick={() => setactive(link.name)}
                            style={{
                                color: active === link.name ? '#E0E1DD' : '#1B263B',
                                backgroundColor: active === link.name ? '#1B263B' : 'transparent',
                                padding: '8px 24px',
                                borderRadius:'1000px',
                                fontSize: '14px',
                                fontWeight: '500',
                                transition: 'all 0.2s ease',
                                textDecoration: 'none',
                                whiteSpace: 'nowrap',
                                display: 'inline-flex',
                                textAlign:'center',
                                justifyContent:'center',
                                lineHeight: 1,
                            }}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )

}

export default Navbar;