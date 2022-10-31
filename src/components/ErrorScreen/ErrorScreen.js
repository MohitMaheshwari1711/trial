import React from "react";
import { useHistory } from "react-router";
import { Layout, Button } from "antd";
import errorLogo from "../../static/error.svg";
import TopNav from "../TopNav/TopNav";

const { Content } = Layout;

const ErrorScreen = () => {
  const history = useHistory();

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
              src={errorLogo}
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
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            Your reward couldn’t be generated as the restaurant found your URL
            to be irrelevant
          </div>
          <div
            style={{
              marginTop: 16,
              fontWeight: 400,
              fontSize: 16,
              background: "#F5F5F5",
              color: "#D9D9D9",
              paddingTop: 8,
              paddingBottom: 8,
              paddingLeft: 12,
              paddingRight: 12,
            }}
          >
            Lorem ipsum. Lorem ipsum. Lorem ipsum. Lorem ipsum.Lorem ipsum.
            Lorem ipsum.Lorem ipsum. Lorem ipsum.
          </div>
          <Button
            type="primary"
            style={{ marginTop: 24 }}
            onClick={() => history.push("/")}
          >
            Go to home
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
export default ErrorScreen;
