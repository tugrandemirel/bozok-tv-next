import Link from "next/link";
import Image from "next/image";
import {FeaturedNewsProps} from "@/types/newsletter";
import ROUTES, { createNewsPath } from "@/constants/routes";

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
                            href={createNewsPath(newsletter.slug)}
                            title={newsletter?.title}
                            prefetch={false}
                        >
                            <Image
                                src={newsletter.image?.path ? `${apiUrl}${newsletter.image.path}` : '/test/default.jpg'}
                                alt={newsletter?.title || 'Haber görseli'}
                                width={434}
                                height={276}
                                className="img-fluid"
                                loading="lazy"
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDAR"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={75}
                            />
                            <h4 className="mb-0 bg-light text-dark line-clamp-2">{newsletter?.title}</h4>
                        </Link>
                    </div>
                </div>
            ))}
        </>
    );
};
