import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Vector2} from "three";

const assetPrefix = '' // process.env.NODE_ENV === 'production' ? '/superhash-www' : ''

export interface MenuItemProps {
    label: string
    link: string
    bg: string
    isExternal?: boolean,
    position: Vector2
}

const navItems: MenuItemProps[] = [
    {
        link: "/",
        label: "Home",
        bg: "rgb(0, 128, 255)",
        position: new Vector2(Math.PI/2, Math.PI)
    },
    {
        link: "/about",
        label: "About us",
        bg: "rgba(0, 130, 86, 1)",
        position: new Vector2(0.28954543554578, -3.0958929892579636)
    },
    {
        link: "/team",
        label: "Team",
        bg: "rgba(138, 51, 237, 1)",
        position: new Vector2(1.6108026979843542, -1.5224233589260143)
    },
    {
        link: "/works",
        label: "Past Works",
        bg: "rgba(146, 47, 182, 1)",
        position: new Vector2(2.6193535756433874, -2.6626795305392528)
    },
    {
        label: "Blog",
        isExternal: true,
        link: "https://medium.com/superhash",
        bg: "radial-gradient(circle, rgb(129 180 250) 0%, rgb(0, 128, 255) 50%)",
        position: new Vector2(2.185390122350354, 0.51223)
    },
    {
        label: "Careers",
        isExternal: true,
        link: "https://linkedin.com/company/superhash",
        bg: "radial-gradient(circle, rgb(129 180 250) 0%, rgb(0, 128, 255) 50%)",
        position: new Vector2(1.6900118403979274, 2.4420858914535675)
    },
    {
        link: "/contact",
        label: "Contact us",
        bg: "rgba(138, 51, 237, 1)",
        position: new Vector2(1.2175745648800957, 0.5460913990571082)
    }
]



const useValue = () => {
    const [isPageOpen, setIsPageOpen] = useState(false);
    const [activePageProps, setActivePageProps] = useState<MenuItemProps>();
    const [prev, setPrev] = useState(false);
    const [hover, setHover] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState("");

    return {
        isPageOpen,
        setIsPageOpen,
        navItems,
        assetPrefix,
        prev,
        setPrev,
        activePageProps,
        setActivePageProps,
        hover,
        setHover,
        hoveredMenuItem,
        setHoveredMenuItem
    }

}

export const AppContext = React.createContext({} as ReturnType<typeof useValue>);

function Context({ children }:any) {
    const [isPageOpen, setIsPageOpen] = useState(false);
    const [activePageProps, setActivePageProps] = useState<MenuItemProps>();
    const [prev, setPrev] = useState(false);
    const [hover, setHover] = useState(false);
    const [hoveredMenuItem, setHoveredMenuItem] = useState("");

    const router = useRouter()

    useEffect(()=>{
        setIsPageOpen(router.asPath!=="/")
        setActivePageProps(navItems.find(item=>item.link===router.asPath))
    }, [router.asPath])



    return (
        <AppContext.Provider value={{hoveredMenuItem, setHoveredMenuItem, hover, setHover, isPageOpen, setIsPageOpen, navItems, assetPrefix, prev, setPrev, activePageProps, setActivePageProps}}>
            {children}
        </AppContext.Provider>
    );
}

export default Context;
