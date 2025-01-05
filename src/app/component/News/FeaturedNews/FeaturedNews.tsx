import Link from "next/link";
import Image from "next/image";
import {FeaturedNewsProps} from "@/types/newsletter";

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ newsletters }) => {
    const publicUrl = process.env.NEXT_PUBLIC_URL
    return (
        <>
            {newsletters && newsletters.map((newletter, index) => (
                <div className="col-6 col-lg-12" key={index} >
                    <div className="card border-0 rounded-0 featured-news bg-white">
                        <Link
                            href="/"
                            title={newletter?.title}
                            target="_self"
                        >
                            <Image
                                src={newletter?.image?.path ? `${publicUrl}${newletter?.image?.path}` : '/test/yozgat-20.jpg'}
                                alt={newletter?.title}
                                loading="lazy"
                                width={434} // Genişlik belirleniyor
                                height={276} // Yükseklik belirleniyor
                                className="img-fluid"
                            />
                            <h4 className="mb-0 bg-light text-dark">{newletter?.title}</h4>
                        </Link>
                    </div>
                </div>
            ))}

        </>
    );
};
