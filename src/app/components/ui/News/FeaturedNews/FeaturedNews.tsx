import Link from "next/link";
import Image from "next/image";
import {FeaturedNewsProps} from "@/types/newsletter";

export const FeaturedNews: React.FC<FeaturedNewsProps> = ({ newsletters }) => {
    if (!newsletters || newsletters.length === 0) {
        return <div>Öne çıkan haber bulunamadı</div>;
    }

    const apiUrl = process.env.NEXT_PUBLIC_URL;

    return (
        <>
            {newsletters.map((newsletter, index) => (
                <div className="col-6 col-lg-12" key={newsletter.id || index}>
                    <div className="card border-0 rounded-0 featured-news bg-white">
                        <Link
                            href={`/haber/${newsletter.slug}`}
                            title={newsletter?.title}
                        >
                            <Image
                                src={newsletter.image?.path ? `${apiUrl}${newsletter.image.path}` : '/test/default.jpg'}
                                alt={newsletter?.title}
                                width={434}
                                height={276}
                                className="img-fluid"
                            />
                            <h4 className="mb-0 bg-light text-dark">{newsletter?.title}</h4>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};
