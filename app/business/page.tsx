import Image from "next/image";
import business01 from '@/public/business01.jpg'
import business02 from '@/public/business02.jpg'
import business03 from '@/public/business03.jpg'
import business04 from '@/public/business04.jpg'
import business05 from '@/public/business05.jpg'
import business06 from '@/public/business06.jpg'
import business07 from '@/public/business07.jpg'

import './index.css'

export default function Business() {
    return (
        <div className="section business" id="business">
            <div className="container">
                <div className="section-title">
                    <h2>核心业务</h2>
                    <p>全方位覆盖叉车电池全场景需求，专业高效一站式解决</p>
                </div>
                <div className="business-list">
                    <div className="business-item">
                        <Image src={business01} alt="电池销售" />
                        <h3>电池销售</h3>
                        <p>铅酸、锂电池全品类现货，适配合力、林德等全品牌叉车，上门安装</p>
                    </div>
                    <div className="business-item">
                        <Image src={business02} alt="电池维修" />
                        <h3>专业维修</h3>
                        <p>铅酸电池修复、锂电BMS维修，不限品牌，24小时应急上门</p>
                    </div>
                    <div className="business-item">
                        <Image src={business03} alt="电池租赁" />
                        <h3>电池租赁</h3>
                        <p>短租/长租/以租代买，含维护保养，适配物流旺季、临时项目</p>
                    </div>
                    <div className="business-item">
                        <Image src={business04} alt="电池回收" />
                        <h3>电池回收</h3>
                        <p>合规回收废旧铅酸、锂电池，上门清运，提供正规回收凭证</p>
                    </div>
                    <div className="business-item">
                        <Image src={business05} alt="以旧换新" />
                        <h3>以旧换新/换旧</h3>
                        <p>旧电池折价抵款，铅酸换锂电、旧换优质二手电池，性价比高</p>
                    </div>
                    <div className="business-item">
                        <Image src={business06} alt="工厂维保" />
                        <h3>工厂叉车维保</h3>
                        <p>驻厂巡检、定期保养、应急维修，降低设备停机率，延长电池寿命</p>
                    </div>
                    <div className="business-item">
                        <Image src={business07} alt="租赁商合作" />
                        <h3>租赁商合作</h3>
                        <p>批量供货、长期租赁、专属维保，灵活账期，互利共赢长期合作</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
