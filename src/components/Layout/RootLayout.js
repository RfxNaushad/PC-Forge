import {
    FacebookFilled,
    LinkedinFilled,
    GoogleSquareFilled,
    TwitterSquareFilled,
  } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const {  Content, Footer } = Layout;
  import styles from "@/styles/Home.module.css";
  import Link from "next/link";
import CategoryDropdown from "../Dropdown";
import { useSession, signOut } from "next-auth/react";
import Image from 'next/image';
import logoPic from '@/assets/images/pcLogo.png';


const imageStyle = {
  height: "100px",
  width: "100px",
  objectFit: "contain",
};
  


import { useState, useEffect } from "react";
import { Dropdown } from "antd";
import {
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const RootLayout = (props) => {
  const router = useRouter();
  const [menuMode, setMenuMode] = useState("inline");
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  const { data: session } = useSession();
  const showMainMenu = () => {
    return (
      <Menu
        mode={menuMode}
        defaultSelectedKeys={["Home"]}
        style={menuMode === "inline" ? { width: "50vw" } : { padding: "0 50px", background: "transparent" }}
        onClick={() => setMenuVisible(false)}
      >
        {menuMode === "inline" && (
          <Menu.Item
            key="close"
            style={{ textAlign: "right" }}
            onClick={() => setMenuVisible(false)}
          >
            <CloseOutlined />
          </Menu.Item>
        )}
        <Menu.Item key="Home">
            <Link href="/pc-builder">
              <Button type="button" className="menu-button">PC Builder</Button>
            </Link>
        </Menu.Item>
        <Menu.Item key="Home">
        <CategoryDropdown />
        </Menu.Item>
        <Menu.Item key="Home">
            <Link href="/contact-us">
              <Button type="button" className="menu-button">Contact Us</Button>
            </Link>
        </Menu.Item>
        <Menu.Item key="Home">
            {session?.user ? (
              <Button onClick={() => signOut()} className="menu-button">
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button type="button" className="menu-button">Login</Button>
              </Link>
            )}
        </Menu.Item>

        

        

        {props.menuList &&
          props.menuList.map((menu, index) => {
            return menu.child.length > 0 ? (
              <SubMenu key={index} title={menu.caption}>
                {menu.child.map((child, childIndex) => {
                  return (
                    <Menu.Item key={child.caption + childIndex}>
                      <Link href={child.url}>
                        <a>{child.caption}</a>
                      </Link>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            ) : (
              <Menu.Item key={index}>
                <Link href={menu.url ? menu.url : ""}>
                  <a>{menu.caption}</a>
                </Link>
              </Menu.Item>
            );
          })}
        {showLoginMenu()}
      </Menu>
    );
  };

  const showLoginMenu = () => {
  };

  const checkWindowSize = () => {
    if (window.innerWidth > 599) {
      setMenuMode("horizontal");
    } else {
      setMenuMode("inline");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    checkWindowSize();
    return () => window.removeEventListener("resize", checkWindowSize);
  }, [menuMode, setMenuMode]);

  return (

    <Layout>
    <div style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      textAlign:"center",
      //   padding: "20px 10px",
    }}>
      <Link href="/" > <Image style={imageStyle} src={logoPic} alt="logo" /></Link>
      {menuMode === "inline" ? (
        <Dropdown overlay={showMainMenu()} visible={menuVisible}>
          <a
            className="ant-dropdown-link"
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick();
            }}
          >
            <MenuOutlined style={{ margin: "20px" }} />
          </a>
        </Dropdown>
      ) : (
        showMainMenu()
      )}
    </div>


        <Content
          style={{
            minHeight: "100vh",
          }}
        >
          {props.children}
        </Content>

       <Footer
          style={{
            textAlign: "center",
            paddingTop:"100px",
          }}
        >
          <div className={styles.line}></div>
          <h2
            style={{
              fontSize: "28px",
            }}
          >
            PC Builder Hub
          </h2>
          <p className={styles.social_icons}>
            <Link href="https://www.facebook.com/AtharTasdiq" target="_blank">
              <FacebookFilled />
            </Link>
            <Link href="www.twitter.com" target="_blank">
              <TwitterSquareFilled />
            </Link>
            <Link href="https://google.com" target="_blank">
              <GoogleSquareFilled />
            </Link>
            <Link href="https://www.linkedin.com/in/athar-tasdiq-2615231b8/" target="_blank">
              <LinkedinFilled />
            </Link>
          </p>
          PC Builder Hub ©2023 Created by Atahar Ali Khan
        </Footer>
    </Layout>
  );
};

export default RootLayout;



