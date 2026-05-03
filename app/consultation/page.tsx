import { Input } from 'antd'
import './index.css'

export default function Page() {
    return (
        <div className="section form-section" id="form">
            <div className="container">
                <div className="form-wrap">
                    <div className="form-left">
                        <h3>立即在线咨询</h3>
                        <p>填写您的需求，我们将第一时间与您联系，提供专属解决方案<br />
                            业务咨询 | 报价申请 | 上门检测 | 合作洽谈</p>
                    </div>
                    <div className="form-right">
                        <form>
                            <div className="form-group">
                                <Input type="text" name="name" placeholder="请输入您的姓名" required />
                            </div>
                            <div className="form-group">
                                <Input type="tel" name="tel" placeholder="请输入您的联系电话" required />
                            </div>
                            <div className="form-group">
                                <Input type="text" name="demand" placeholder="请输入您的业务需求" />
                            </div>
                            <div className="form-group">
                                <textarea name="content" placeholder="请详细描述您的需求"></textarea>
                            </div>
                            <button type="submit" className="submit-btn">提交咨询</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
