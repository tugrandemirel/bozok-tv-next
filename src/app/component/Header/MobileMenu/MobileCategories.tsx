import Link from "next/link";
import React from "react";

export const MobileCategories = ({ categories }) => {
    return (
        <>
            <ul className="mobile-categories d-lg-none list-inline bg-white">
                {categories && categories.map((item, index) => (
                    <li className="list-inline-item" key={index}>
                        <Link href={item.link} className="text-dark" target="_self" title={item.title}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
