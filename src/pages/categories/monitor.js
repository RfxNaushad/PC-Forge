import { Button, Card, Col, Row, Typography, Rate } from "antd";
import Link from "next/link";
import { ArrowRightOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { addComponent } from "@/redux/monitorReducer";
import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";

const { Title, Text } = Typography;

const imageStyle = {
  height: "350px",
  width: "100%",
  objectFit: "contain",
};

const Monitor = ({ product }) => {
  const cpus = product?.data?.filter(
    (p) => p.category.toLowerCase() === "monitor"
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToBuilder = (component) => {
    dispatch(addComponent(component));
    router.push("/pc-builder");
  };

  return (
    <div>
      <Head>
        <title>Monitor</title>
      </Head>
      <h1 style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px",
        }}>
        Category: Monitor
      </h1>
      <Row gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
         //justify="center"
         style={{padding:"0 50px"}}
         >
        {cpus.map((pd) => (
          <Col key={pd._id} xs={24} sm={24} md={12} lg={8}>
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
              <div className="flex-change" style={{ display: "flex", justifyContent: "space-around" }}>
                <Link href={`/categories/product/${pd?._id}`}>
                  <Button className="button-space" type="primary" icon={<ArrowRightOutlined />}>
                    View More Details
                  </Button>
                </Link>
                <Button
                className="button-space"
                  type="primary"
                  onClick={() => handleAddToBuilder(pd)}
                  icon={<PlusOutlined />}
                >
                  Add To Builder
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Monitor;


Monitor.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};






export async function getStaticProps() {
   
    const res = await fetch('https://pc-builder-server-nu.vercel.app/product');
    const data = await res.json();
    //console.log(data)
  
   
    return {
      props: {
        product: data,
      },
    };
  }