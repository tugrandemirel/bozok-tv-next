import Link from "next/link";
import Image from "next/image";

export const FeaturedNews = () => {

    const featuredNews = [
        {
            link: '/',
            imgSrc: "/test/yozgat-20.jpg",
            title: "Ankara'da Arabaşı Etkinliğinde hasret giderilecek",
        },
        {
            link: '/',
            imgSrc: "/test/yozgat-20.jpg",
            title: "Ankara'da Arabaşı Etkinliğinde hasret giderilecek2",
        },
    ]

    return (
        <>
            {featuredNews && featuredNews.map((featuredNew, index) => (
                <div className="col-6 col-lg-12" key={index} >
                    <div className="card border-0 rounded-0 featured-news bg-white">
                        <Link
                            href={featuredNew.link}
                            title={featuredNew.title}
                            target="_self"
                        >
                            <Image
                                src={featuredNew.imgSrc}
                                loading="lazy"
                                width={425}
                                height={246}
                                className="img-fluid"
                                alt={featuredNew.title}
                            />
                            <h4 className="mb-0 bg-light text-dark">{featuredNew.title}</h4>
                        </Link>
                    </div>
                </div>
            ))}

        </>
    );
};
