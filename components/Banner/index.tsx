
import Link from 'next/link';
import './index.css'

export default function Banner() {
    return (
        <div className="banner" id="home">
            <div className="banner-slide">
                <div className="banner-item banner-item1">
                    <div className="banner-text">
                        <h1>叉车电池全生命周期一站式服务商</h1>
                        <p>铅酸&锂电池 | 销售·维修·租赁·回收·以旧换新·维保</p>
                        <Link href="/consultation" className="banner-btn">立即咨询</Link>
                        <Link href="/product" className="banner-btn">查看产品</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}