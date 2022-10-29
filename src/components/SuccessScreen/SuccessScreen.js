import React from "react";
import { useHistory } from "react-router";
import { Layout, Button } from "antd";
import successLogo from "../../success.svg";
import TopNav from "../TopNav/TopNav";

const { Content } = Layout;

const SuccessScreen = () => {
  const history = useHistory();

  console.log('-------ggggg')
  return (
    <Layout style={{ background: "#000000", height: "100vh" }}>
      <TopNav showHomeIcon={true} />
      <Content
        className="site-layout"
        style={{
          marginTop: 72,
        }}
      >
        <div
          className="site-layout-background"
          style={{
            paddingTop: 24,
            paddingLeft: 16,
            paddingRight: 16,
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src={successLogo}
              style={{
                width: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
                height: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
              }}
            />
          </div>
          <div
            style={{
              marginTop: 40,
              fontWeight: 500,
              fontSize: 38,
              color: "#FFFFFF",
            }}
          >
            Yay!
          </div>
          <div
            style={{
              marginTop: 16,
              fontWeight: 300,
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            Your reward has been sent to your email id and phone number
          </div>
          <Button type="primary" style={{ marginTop: 24 }} onClick={() => history.push("/")}>
            Go to home
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
export default SuccessScreen;
