import Image from "next/image";
import Link from "next/link";
import {MobileCategories} from "@/app/component/Header/MobileCategories";
import {Menu} from "@/app/component/Header/Menu";
import {Navbar} from "@/app/component/Header/Navbar";
export const Header = () => {
    return (
        <>
            <header className="header-8">
                <Navbar/>
                <Menu />
                <MobileCategories/>
            </header>
        </>
    );
};
