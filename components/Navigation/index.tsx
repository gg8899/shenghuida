import Image from 'next/image';
import Logo from '../../public/logo.jpg'
import Link from 'next/link';

import './index.css'

export default function Home() {
    return (
        <div className="container header-wrap">
            <div className="logo">
                <Image src={Logo} alt="晟辉达LOGO" width={40} height={40} />
                <span className="logo-text">湖南晟辉达新能源科技有限公司</span>
            </div>
            <div className="nav">
                <Link href="/">首页</Link>
                <Link href="/business">核心业务</Link>
                <Link href="/product">产品中心</Link>
                <Link href="/about">关于我们</Link>
                <Link href="/consultation">在线咨询</Link>
                <Link href="/contact">联系我们</Link>
                <Link href="tel:19733702617" className="tel-btn">一键拨号</Link>
            </div>
        </div>
    )
}