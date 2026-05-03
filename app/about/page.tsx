import Image from "next/image";

import about from '@/public/about.jpg'
import './index.css'

export default function Page() {
    return (
        <div className="section about" id="about">
            <div className="container">
                <div className="section-title">
                    <h2>关于我们</h2>
                    <p>专注工业叉车电池服务，打造湖南本土专业品牌</p>
                </div>
                <div className="about-content">
                    <div className="about-img">
                        <Image src={about} alt="湖南晟辉达新能源科技有限公司" />
                    </div>
                    <div className="about-text">
                        <p>湖南晟辉达新能源科技有限公司，深耕叉车电池服务领域多年，对标贝朗斯、火炬等行业头部品牌，专注为湖南及周边地区工厂、物流园、叉车租赁企业，提供铅酸及锂电池销售、维修、租赁、回收、以旧换新、以旧换旧一站式服务。
                        </p>
                        <p>公司拥有专业技术团队与完善服务体系，承接工厂电动叉车电池维保、叉车租赁商电池合作业务，始终坚持诚信、专业、高效、环保的经营理念，为客户提供高性价比、全生命周期的电池解决方案，是您值得信赖的叉车电池服务专家。
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
