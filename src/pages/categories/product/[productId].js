import { Col, Row, Typography, Divider, Rate } from "antd";
import {
  UserOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import RootLayout from "@/components/Layout/RootLayout";
import Head from "next/head";

const { Title, Text } = Typography;

const imageStyle = {
  height: "500px",
  width: "100%",
  objectFit: "contain",
};

const ProductDetailPage = ({ product }) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
      <Head>
        <title>{product?.productName}</title>
      </Head>
    <div style={{ maxWidth: "1200px", width: "100%" }}>
      <Row
        style={{ marginTop: "80px", alignItems: "center" }}
        justify="center"
      >
        <Col xs={24} md={12} lg={12}>
          <img
            alt="product-image"
            src={product?.image}
            style={imageStyle}
            responsive
          />
        </Col>
        <Col xs={24} md={12} lg={12} style={{ paddingLeft: "20px" }}>
      <Title level={2}>{product?.productName}</Title>
      <div style={{ display: "flex", alignItems: "center" }}>
        <UserOutlined style={{ marginRight: 8 }} />
        <Text>{product?.category}</Text>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <ProfileOutlined style={{ marginRight: 8 }} />
        <Text>{product?.status}</Text>
      </div>
      <Divider />
      <div>
        <Title level={4}>Description</Title>
        <p>{product?.description}</p>
      </div>
      <Divider />
      <div>
  <Title level={4}>Key Features</Title>
  <ul>
    {product?.keyFeatures &&
      Object.values(product.keyFeatures).map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
  </ul>
</div>
      <Divider />
      <div>
        <Title level={4}>Ratings</Title>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text>Individual Rating:</Text>
          <Rate disabled defaultValue={product?.individualRating} />
          <Text>({product?.individualRating} Stars)</Text>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text>Average Rating:</Text>
          <Rate disabled defaultValue={product?.averageRating} />
          <Text>({product?.averageRating} Stars)</Text>
        </div>
      </div>
      <Divider />
      <div>
        <Title level={4}>Reviews</Title>
        {product?.reviews.map((review, index) => (
          <div key={index}>
            <Rate disabled defaultValue={review.rating} /><br/>
            <Text strong>{review.reviewerName}</Text>
            <p>{review.reviewerText}</p>
          </div>
        ))}
      </div>
    </Col>
  </Row>
  </div>
  </div>
);

export default ProductDetailPage;


ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("https://pc-builder-server-nu.vercel.app/product");
  const products = await res.json();

  const paths = products?.data?.map((pd) => ({
    params: { productId: pd._id },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
    const productId = params.productId;
    const res = await fetch(`https://pc-builder-server-nu.vercel.app/product/${productId}`);
    const product = await res.json();
  
    return {
      props: {
        product,
      },
    };
  }


