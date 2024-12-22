import Head from "next/head";
import { Header } from "@/app/component/Header/Header";
import { Footer } from "@/app/component/Footer/Footer";
import "./globals.css";

// CSS dosyalarını doğru yolla import edin
import "../../public/assets/css/app.css";
import "../../public/assets/css/bootstrap.min.css";
import {MobileMenu} from "@/app/component/Header/Menu/MobileMenu";
import Script from "next/script";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="tr">
        <body className="d-flex flex-column min-vh-100">
            <Header />
            {children}
            <Footer />
            <MobileMenu />
            <Script async src="/assets/js/jquery.min.js"/>
            <Script async src="/assets/js/moment.js" />
            <Script async src="/assets/js/menu.min.js" />
            <Script async src="/assets/js/custom.js" />
        </body>
        </html>
    );
}
