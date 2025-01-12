'use client';

import moment from 'moment';
import 'moment/locale/tr';
import { Newsletter } from '@/types/newsletter';
import Link from 'next/link';

interface LastNewsProps {
    newsletters: Newsletter[];
}

export default function LastNews({ newsletters }: LastNewsProps) {
    moment.locale('tr');
    
    return (
        <div className="row g-1">
            {newsletters.map((lastNew, index) => (
                <div className="col-lg-6" key={lastNew.id || index}>
                    <div className="d-flex align-items-center bg-white p-3 h-100">
                        <div className="flex-shrink-0">
                            <span className="badge bg-danger">
                                {moment(lastNew.created_at).format("HH:mm")}
                            </span>
                        </div>
                        <div className="flex-grow-1 ms-3 fw-bold lh-sm">
                            <Link
                                href={`/haber/${lastNew.slug}`}
                                title={lastNew.title}
                            >
                                {lastNew.title}
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
} 