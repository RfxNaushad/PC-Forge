import RootLayout from '@/components/Layout/RootLayout';
import { Button, Card, Col, Row } from 'antd';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import cpuImage from "../assets/images/categoryImages/cpu.png";
import motherboardImage from "../assets/images/categoryImages/motherboard.png";
import monitorImage from "../assets/images/categoryImages/monitor.png";
import ramImage from "../assets/images/categoryImages/ram.png";
import powersupplyImage from "../assets/images/categoryImages/powersupply.png";
import storagedeviceImage from "../assets/images/categoryImages/storagedevice.png";
import othersImage from "../assets/images/categoryImages/others.png";
import Image from 'next/image';

const PcBuilder = () => {
    const cpuComponent = useSelector((state) => state.cpu);
    const monitorComponent = useSelector((state) => state.monitor);
    const motherboardComponent = useSelector((state) => state.motherboard);
    const powersupplyComponent = useSelector((state) => state.powersupply);
    const ramComponent = useSelector((state) => state.ram);
    const storagedeviceComponent = useSelector((state) => state.storagedevice);
    const othersComponent = useSelector((state) => state.others);

    const casing = othersComponent?.selectedComponent?.filter(pd=>pd.category.toLowerCase()==='casing')
    


    let totalComponentsAdded = 0;
    totalComponentsAdded += Object.keys(cpuComponent).filter(key => cpuComponent[key] != null).length;
    totalComponentsAdded += Object.keys(monitorComponent).filter(key => monitorComponent[key] != null).length;
    totalComponentsAdded += Object.keys(motherboardComponent).filter(key => motherboardComponent[key] != null).length;
    totalComponentsAdded += Object.keys(powersupplyComponent).filter(key => powersupplyComponent[key] != null).length;
    totalComponentsAdded += Object.keys(ramComponent).filter(key => ramComponent[key] != null).length;
    totalComponentsAdded += Object.keys(storagedeviceComponent).filter(key => storagedeviceComponent[key] != null).length;
    totalComponentsAdded += Object.keys(casing).filter(key => casing[key] != null).length;
    
    console.log(totalComponentsAdded);
    

//   cpuComponent.length + psCoponent

  const handleCompleteBuild = () => {
    window.alert('Build completed successfully!');
  };

  const { Meta } = Card;

  const imageStyle = {
    height: "100px",
    width: "100%",
    objectFit: "contain"
  };
  
    return (
        <div>
          <div style={{marginBottom:"100px"}}>
          <h1 style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}>Build Your PC</h1>
              <Row gutter={[16, 16]} justify="center">
                <Col xs={24} sm={12} md={8} lg={6}>
                  <Link href="/categories/cpu-processor">
                    <Card>
                      <Meta title={"CPUs / Processors"} style={{ textAlign: 'center' }} />
                      <Image src={cpuImage} style={imageStyle} alt='cpu-image' />
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
        <div style={{textAlign:"center", paddingTop:"50px"}}>
          <h1 style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}>Components Added to Builder:</h1>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={cpuComponent?.selectedComponent?.productName || "CPU not Added"} style={{ textAlign: 'center' }} />
                    <img src={cpuComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='cpu-image' />
                  </Card>
              </Col>              
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={monitorComponent?.selectedComponent?.productName || "Monitor not Added"} style={{ textAlign: 'center' }} />
                    <img src={monitorComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='monitor-image' />
                  </Card>
              </Col>              
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={motherboardComponent?.selectedComponent?.productName || "MotherBoard not Added"} style={{ textAlign: 'center' }} />
                    <img src={motherboardComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='motherboard-image' />
                  </Card>
              </Col>              
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={powersupplyComponent?.selectedComponent?.productName || "Power Supply not Added"} style={{ textAlign: 'center' }} />
                    <img src={powersupplyComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='power-supply-image' />
                  </Card>
              </Col>              
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={ramComponent?.selectedComponent?.productName || "RAM not Added"} style={{ textAlign: 'center' }} />
                    <img src={ramComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='ram-image' />
                  </Card>
              </Col>              
              <Col xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={storagedeviceComponent?.selectedComponent?.productName || "Storage Device not Added"} style={{ textAlign: 'center' }} />
                    <img src={storagedeviceComponent?.selectedComponent?.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='storage-device-image' />
                  </Card>
              </Col>
              {
                othersComponent?.selectedComponent?.map(pd=>
                  <Col key={pd._id} xs={24} sm={12} md={8} lg={6}>
                  <Card>
                    <Meta title={pd.productName || "Others not Added"} style={{ textAlign: 'center' }} />
                    <img src={pd.image || "https://cdn-icons-png.flaticon.com/512/16/16096.png"} style={imageStyle} alt='others-image' />
                  </Card>
              </Col>
                )
              }
            </Row>
            <Button
        style={{
          margin: "50px 0",
         
        }}
        onClick={handleCompleteBuild}
        disabled={totalComponentsAdded <= 5}
        size="large" 
      >
        Complete Build
      </Button>
        </div>

      </div>
    );
  };

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};