import { Carousel, Col, Row, Typography } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import Image from 'next/image';
import bannerImage1 from '@/assets/images/bannerImages/banner1.png';
import bannerImage2 from '@/assets/images/bannerImages/banner2.png';
import bannerImage3 from '@/assets/images/bannerImages/banner3.png';
import bannerImage4 from '@/assets/images/bannerImages/banner4.png';

const { Title, Text } = Typography;

const contentStyle = {
  minHeight: '75vh',
  textAlign: 'center',
  background: '#ebe8e2',
  padding: '20px 0',
};

const imageStyle = {
  width: '100%',
  maxHeight: '600px',
  objectFit: 'contain',
};

const Banner = () => (
  <div style={{ marginBottom: '50px' }}>
    <Carousel autoplay>
      <div>
        <Row style={contentStyle}>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <Title level={2}>Buy The Cheapest PC From PC Builder Hub!</Title>
              <Title level={1}>Dell PC</Title>
              <Text type="secondary">Discover a wide range of affordable PCs</Text>
            </div>
          </Col>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={imageStyle} src={bannerImage1} alt="banner-img1" width={500} height={400} />
          </Col>
        </Row>
      </div>
      <div>
        <Row style={contentStyle}>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <Title level={2}>Buy The Exclusive PC From PC Builder Hub!</Title>
              <Title level={1}>Acer PC</Title>
              <Text type="secondary">Explore our collection of exclusive PCs</Text>
            </div>
          </Col>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={imageStyle} src={bannerImage2} alt="banner-img2" width={500} height={400} />
          </Col>
        </Row>
      </div>
      <div>
        <Row style={contentStyle}>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <Title level={2}>Build The Most Powerful PC From PC Builder Hub!</Title>
              <Title level={1}>ALL Imported</Title>
              <Text type="secondary">Create your dream PC with top-quality components</Text>
            </div>
          </Col>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={imageStyle} src={bannerImage3} alt="banner-img3" width={500} height={400} />
          </Col>
        </Row>
      </div>
      <div>
        <Row style={contentStyle}>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <Title level={2}>Buy The Best Motherboard From PC Builder Hub!</Title>
              <Title level={1}>ASUS Motherboard</Title>
              <Text type="secondary">Explore our premium motherboard selection</Text>
            </div>
          </Col>
          <Col xs={24} sm={12} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={imageStyle} src={bannerImage4} alt="banner-img4" width={500} height={400} />
          </Col>
        </Row>
      </div>
    </Carousel>
  </div>
);

export default Banner;
