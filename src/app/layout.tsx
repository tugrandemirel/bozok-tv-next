import "./globals.css";
import "../../public/assets/css/app.css";
import "../../public/assets/css/bootstrap.min.css";
import Script from "next/script";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import {Header} from "@/app/components/layout/Header/Header";
import {Footer} from "@/app/components/layout/Footer/Footer";
import {ThirdPartyScripts} from "@/app/components/utils/ThirdPartyScripts";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="tr">
        <body className="d-flex flex-column min-vh-100">
            <ReactQueryProvider>
                <Header />
                {children}
                <Footer />
            </ReactQueryProvider>
            <ThirdPartyScripts />
            <Script async src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
            <Script async src="/assets/js/moment.js" strategy="beforeInteractive" />
            <Script async src="/assets/js/menu.min.js" strategy="afterInteractive" />
            <Script async src="/assets/js/custom.js" strategy="lazyOnload" />
        </body>
        </html>
    );
}
