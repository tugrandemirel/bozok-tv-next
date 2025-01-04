
import MainMenu from "@/app/component/Header/Menu/MainMenu";
import Navbar from "./Menu/Navbar";


export const Header = () => {
    return (
        <>
            <header className="header-8">
                <Navbar isDisabled={false} />
                <MainMenu />
            </header>

        </>
    );
};
