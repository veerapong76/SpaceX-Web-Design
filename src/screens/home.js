import { Col, Container, Row } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const Home = () => {
    return(
        <div class="row bgweb">
            <div class="col-lg-6" style={{display:'flex', justifyContent:'center', alignItems: 'center', paddingLeft:'5%', paddingRight:'5%'}}>
                <p style={{color:'white'}}>&nbsp;&nbsp;&nbsp;&nbsp;เป็นบริษัทเอกชนทางด้านธุรกิจการขนส่งทาง<ylt>อวกาศ</ylt> ประเทศสหรัฐอเมริกา สำนักงานใหญ่อยู่ที่เมืองฮาวโทรน, รัฐแคลิฟอร์เนีย สหรัฐอเมริกา ก่อตั้งขึ้นเมื่อปี <ylt>พ.ศ. 2545</ylt> โดยมีเป้าหมายเพื่อลดค่าใช้จ่ายในการส่งจรวดสำหรับการตั้งอาณานิคมที่ดาวอังคารในอนาคต บริษัทนี้ได้พัฒนาจรวดขนส่ง 2 แบบ คือ <ylt>ฟัลคอน 1</ylt> และ <ylt>ฟัลคอน 9</ylt> โดยออกแบบโครงสร้างให้สามารถนำกลับมาใช้ใหม่ได้อีก และพัฒนายานอวกาศดรากอน สำหรับใช้กับจรวดแบบฟัลคอน 9 เพื่อส่งสินค้าสนับสนุนการปฏิบัติภารกิจบนสถานีอวกาศนานาชาติ ส่วนยานดรากอนแบบที่สามารถขนส่งมนุษย์ได้อยู่ในระหว่างการพัฒนา</p>
            </div>
            <div class="col-lg-6">
                <img src="/home2.jpg" height='100%' width='100%'></img>
            </div>
        </div>
    )
}
export default Home