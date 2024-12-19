import Head from "next/head";
import {Header} from "@/app/component/Header/Header";
import {Footer} from "@/app/component/Footer/Footer";

export default function RootLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="tr">
        <Head>
            {/* Bootstrap ve kendi CSS dosyalarını doğru şekilde dahil ediyoruz */}
            <link rel="stylesheet" href="/assets/css/app.css"/>
            <link rel="stylesheet" href="/assets/css/bootstrap.min.css"/>
            <style>
                {`
            :root {
              --te-link-color: #333;
              --te-link-hover-color: #000;
              --te-font: "Gibson";
              --te-secondary-font: "Gibson";
              --te-h1-font-size: 60px;
              --te-color: #e30813;
              --te-hover-color: #bd0f18;
            }
          `}
            </style>
        </Head>
        <body>
        <Header/>
        {children}
        <Footer/>
        {/* jQuery'yi doğru şekilde dahil ediyoruz */}
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/theme.js"></script>
        </body>
        </html>
    );
}
