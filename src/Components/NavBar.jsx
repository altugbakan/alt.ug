import { useState, useEffect, useRef } from "react";
import Logos from "../utils/Logos";

const NavBar = () => {
    const [hidden, setHidden] = useState(true);
    const ref = useRef();

    const handleHideMenu = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setHidden(true);
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleHideMenu, true);
        document.addEventListener('scroll', handleHideMenu, true);
        return () => {
            document.removeEventListener('mousedown', handleHideMenu, true);
            document.removeEventListener('scroll', handleHideMenu, true);
        };
    }, []);

    return (
        <div className="relative" ref={ref}>
            <nav className="flex flex-row items-center justify-between w-full">
                <a href="https://alt.ug/">
                    <img src="/logo512.png" alt="Website Logo" className="h-10 w-10 mt-3" />
                </a>
                <div className="hidden md:flex md:flex-row md:visible">
                    {
                        Logos.map((logo) => {
                            return (
                                <a key={logo.href} href={logo.href} target="_blank" rel="noreferrer" className="ml-4 mt-2">
                                    <svg className={`fill-zinc-400 hover:scale-125 w-8 h-8 ${logo.color}`} viewBox={logo.viewBox}>
                                        <path d={logo.path} />
                                    </svg>
                                </a>
                            );
                        })
                    }
                </div>
                <div className="md:hidden">
                    <button onClick={() => setHidden(!hidden)}>
                        <svg className="w-8 h-8 fill-zinc-400 hover:fill-white" viewBox="0 -4 32 28">
                            <path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className={`${hidden ? "hidden" : "flex"} flex-col justify-center text-center fixed right-1 w-3/5 bg-zinc-700 text-zinc-400 rounded-md`}>
                {
                    <ul className="mb-8 mt-8 divide-y-2 divide-zinc-600">
                        {
                            Logos.map((logo) => {
                                return (
                                    <li key={logo.name}>
                                        <a href={logo.href} target="_blank" rel="noreferrer">
                                            <div className="flex flex-row items-center mt-2 mb-2 justify-center">
                                                <svg className="h-8 w-8 fill-zinc-400 mr-2" viewBox={logo.viewBox}>
                                                    <path d={logo.path} />
                                                </svg>
                                                <span>{logo.name}</span>
                                            </div>
                                        </a>
                                    </li>
                                );
                            })
                        }
                    </ul>
                }
            </div>
        </div>
    );
}

export default NavBar;