import { Card, Col, Row, Typography, Rate } from "antd";
import Link from "next/link";

const { Title, Text } = Typography;


const Allproduct = ({ product }) => {
    

     const imageStyle = {
        height: "350px",
        width: "100%",
        objectFit: "contain"
      
      }
   
      return (
        <div style={{padding:"50px 50px"}}>
          <h1 style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}>
            Featured Products
          </h1>
          <Row gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
             justify="center">
            {product?.data?.slice(0,6).map((pd) => (
              <Col key={pd._id}  xs={24} sm={24} md={12} lg={8}>
                <Link href={`/categories/product/${pd?._id}`}>
                <Card
                  hoverable
                  style={{ width: "100%", borderRadius: "12px", marginBottom:"30px" }}
                  cover={
                    <img src={pd?.image} style={imageStyle} alt="product-image" />
                  }
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Title level={4} style={{ margin: 0 }}>
                      {pd?.productName}
                    </Title>
                    <Rate disabled defaultValue={pd?.averageRating} />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      margin: "10px 0",
                    }}
                  >
                    <Text type="secondary">
                      Category: {pd?.category} <br/> Status: {pd?.status}
                    </Text>
                    <Text type="secondary">Price: ${pd?.price}</Text>
                  </div>
                </Card>
                </Link>
              </Col>
            ))}
          </Row>
        </div>
      );
};

export default Allproduct;


