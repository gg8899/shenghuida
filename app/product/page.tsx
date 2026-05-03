import Image from "next/image";

import product01 from '@/public/product01.jpg'
import product02 from '@/public/product02.jpg'
import product03 from '@/public/product03.jpg'


import './index.css'

export default function Page() {
    return (
        <div className="section product" id="product">
            <div className="container">
                <div className="section-title">
                    <h2>产品中心</h2>
                    <p>甄选高品质叉车电池，适配各类工业电动叉车</p>
                </div>
                <div className="product-list">
                    <div className="product-item">
                        <Image src={product01} alt="铅酸蓄电池" />
                        <div className="product-info">
                            <h3>叉车专用铅酸蓄电池</h3>
                            <p>24V/48V/80V全系列，工业级品质，续航持久，适用于各类电动叉车，质保两年</p>
                            <a href="#form" className="product-btn">咨询报价</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <Image src={product02} alt="叉车锂电池" />
                        <div class="product-info">
                            <h3>叉车专用锂离子电池</h3>
                            <p>快充长续航、免维护，支持铅酸改锂电，BMS智能保护，循环寿命超3000次</p>
                            <a href="#form" className="product-btn">咨询报价</a>
                        </div>
                    </div>
                    <div className="product-item">
                        <Image src={product03} alt="电池配件" />
                        <div className="product-info">
                            <h3>电池配套产品</h3>
                            <p>专用智能充电机、电池连接线、电池箱、维修配件，一站式配齐，品质保障</p>
                            <a href="#form" className="product-btn">咨询报价</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
