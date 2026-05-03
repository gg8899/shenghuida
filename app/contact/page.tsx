import Image from "next/image";

import contact01 from '@/public/contact01.jpg'
import contact02 from '@/public/contact02.jpg'


import './index.css'

export default function Page() {
    return (

        <div className="section contact" id="contact">
            <div className="container">
                <div className="section-title">
                    <h2>联系我们</h2>
                    <p>24小时在线服务，湖南区域上门服务</p>
                </div>
                <div className="contact-info">
                    <div className="contact-item">
                        <Image src={contact01} alt="王经理" />
                        <h4>王经理</h4>
                        <p>19733702617</p>
                    </div>
                    <div className="contact-item">
                        <Image src={contact01} alt="许经理" />
                        <h4>许经理</h4>
                        <p>19733702917</p>
                    </div>
                    <div className="contact-item">
                        <Image src={contact02} alt="公司地址" />
                        <h4>公司地址</h4>
                        <p>湖南省长沙市长沙县黄兴大道</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
