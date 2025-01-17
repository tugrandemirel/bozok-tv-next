import { SpecialNewsProps } from "@/types/newsletter";
import Link from "next/link";
import Image from "next/image";

export const SpecialNews = ({ newsletters }: SpecialNewsProps) => {

    if (!newsletters) {
        return (
            <main className="single">
                <div className="container">
                    <h1>Haber Bulunamadı</h1>
                    <p>Aradığınız haber bulunamadı veya yayından kaldırılmış olabilir.</p>
                </div>
            </main>
        );
    }

    const apiUrl = process.env.NEXT_PUBLIC_URL;

    return (
        <>
            <div className="section-title d-flex justify-content-between mb-3 align-items-center">
                <h2 className="lead flex-shrink-1 text-te-color m-0 fw-bold">Dünya</h2>
                <div className="flex-grow-1 title-line mx-3" />
            </div>
            <div className="row g-3">
                {newsletters.map((newsletter, index) => {
                    if (index === 0) {
                        return (
                            <div className="col-12" key={index}>
                                <Link
                                    href="/"
                                    title={newsletter?.title}
                                >
                                    <Image
                                        src={apiUrl + newsletter?.image?.path}
                                        width={375}
                                        height={640}
                                        className="img-fluid"
                                        loading="lazy"
                                        alt={newsletter?.title || "Haber görseli"}
                                    />
                                    <div className="h4 mb-0 text-te-color mt-2">{newsletter?.title}</div>
                                </Link>
                            </div>
                        )
                    }

                    if (index > 0) {
                        return (
                            <div className="col-lg-12" key={index}>
                                <div className="row g-3">
                                    <div className="col-12">
                                        <Link
                                            href="/"
                                            title={newsletter?.title}
                                        >
                                            <div className="d-flex bg-te-color p-2">
                                                <div className="flex-shrink-0">
                                                    <Image
                                                        src={apiUrl + newsletter?.image?.path}
                                                        width={150}
                                                        height={250}
                                                        loading="lazy"
                                                        alt={newsletter?.title || "Haber görseli"}
                                                        className="img-fluid"
                                                    />
                                                </div>
                                                <div className="flex-grow-1 ms-3 align-self-center">
                                                    <div className="h4 mb-0 text-white title-4-line">
                                                        {newsletter?.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
        </>
    );
};
