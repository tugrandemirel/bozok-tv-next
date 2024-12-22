import Head from "next/head";
import { Header } from "@/app/component/Header/Header";
import { Footer } from "@/app/component/Footer/Footer";
import "./globals.css";

// CSS dosyalarını doğru yolla import edin
import "../../public/assets/css/app.css";
import "../../public/assets/css/bootstrap.min.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

    return (
        <html lang="tr">
        <body className="d-flex flex-column min-vh-100">
        <Header />
        {children}
        <Footer />

        {/* Script dosyalarını doğru yolla ekleyin */}

        <script async src="/assets/js/custom.js"></script>
        <script async src="/assets/js/jquery.min.js"></script>
        {/*<script async src="/assets/js/infinite-scroll.min.js"></script>*/}
        {/*<script async src="/assets/js/app.min.js"></script>*/}
        <script async src="/assets/js/moment.js"></script>
        <script async src="/assets/js/menu.min.js"></script>
        {/*<script async src="/assets/js/theme.js"></script>*/}
        </body>
        </html>
    );
}
