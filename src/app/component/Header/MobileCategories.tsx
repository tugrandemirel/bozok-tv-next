import Link from "next/link";

export const MobileCategories = () => {
    return (
        <>
            <ul  className="mobile-categories d-lg-none list-inline bg-white">
                <li className="list-inline-item">
                    <Link href="asayis.html" className="text-dark" target="_self" title="Asayiş">
                        Asayiş
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="dunya.html" className="text-dark" target="_self" title="Dünya">
                        Dünya
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="egitim.html" className="text-dark" target="_self" title="Eğitim">
                        Eğitim
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="ekonomi.html" className="text-dark" target="_self" title="Ekonomi">
                        Ekonomi
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="gundem.html" className="text-dark" target="_self" title="Gündem">
                        Gündem
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="resmi-ilanlar.html" className="text-dark" target="_self" title="Resmi İlanlar">
                        Resmi İlanlar
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="saglik.html" className="text-dark" target="_self" title="Sağlık">
                        Sağlık
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="siyaset.html" className="text-dark" target="_self" title="Siyaset">
                        Siyaset
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="spor.html" className="text-dark" target="_self" title="Spor">
                        Spor
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="teknoloji.html" className="text-dark" target="_self" title="Teknoloji">
                        Teknoloji
                    </Link>
                </li>
                <li className="list-inline-item">
                    <Link href="yasam.html" className="text-dark" target="_self" title="Yaşam">
                        Yaşam
                    </Link>
                </li>
            </ul>
        </>
    );
};
