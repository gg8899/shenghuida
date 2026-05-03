import Image from "next/image";
import Link from 'next/link';
import contact01 from '@/public/contact01.jpg'
import contact02 from '@/public/contact02.jpg'

import './index.css'

export default function Page() {
    return (

        <div className="float-service">
            <Link href="tel:19733702617" className="float-tel">
                <Image src={contact02} alt="一键拨号" />
            </Link>
            <Link href="/consultation" className="float-kefu">
                <Image src={contact01} alt="在线客服" />
            </Link>
        </div>

    );
}
