import { Card, Row, Col } from 'antd';
import Image from 'next/image';
import Link from "next/link";
import cpuImage from "@/assets/images/categoryImages/cpu.png";
import motherboardImage from "@/assets/images/categoryImages/motherboard.png";
import ramImage from "@/assets/images/categoryImages/ram.png";
import powersupplyImage from "@/assets/images/categoryImages/powersupply.png";
import storagedeviceImage from "@/assets/images/categoryImages/storagedevice.png";
import monitorImage from "@/assets/images/categoryImages/monitor.png";
import othersImage from "@/assets/images/categoryImages/others.png";

const Categories = () => {
  const imageStyle = {
    width: "100%",
    height: "200px",
    objectFit: "contain"
  };

  const { Meta } = Card;

  return (
    <div style={{padding: "50px 50px"}}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}
      >
        Featured Categories
      </h1>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/cpu-processor">
            <Card>
              <Meta title={"CPUs / Processors"} style={{ textAlign: 'center' }} />
              <Image style={imageStyle} src={cpuImage} alt='cpu-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/motherboard">
            <Card>
              <Meta title={"MotherBoards"} style={{ textAlign: 'center' }} />
              <Image src={motherboardImage} style={imageStyle} alt='motherboard-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/ram">
            <Card>
              <Meta title={"RAMs"} style={{ textAlign: 'center' }} />
              <Image src={ramImage} style={imageStyle} alt='ram-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/power-supply-unit">
            <Card>
              <Meta title={"Power Supplies"} style={{ textAlign: 'center' }} />
              <Image src={powersupplyImage} style={imageStyle} alt='power-supply-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/storage-device">
            <Card>
              <Meta title={"Storage Devices"} style={{ textAlign: 'center' }} />
              <Image src={storagedeviceImage} style={imageStyle} alt='storage-device-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/monitor">
            <Card>
              <Meta title={"Monitors"} style={{ textAlign: 'center' }} />
              <Image src={monitorImage} style={imageStyle} alt='monitor-image' />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Link href="/categories/others">
            <Card>
              <Meta title={"Others"} style={{ textAlign: 'center' }} />
              <Image src={othersImage} style={imageStyle} alt='others-image' />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Categories;
