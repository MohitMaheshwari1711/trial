import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Layout } from "antd";
import waitingLogo from "../../waiting.svg";
import TopNav from "../TopNav/TopNav";
import { getContentInfo } from "../../api";

const { Content } = Layout;

const WaitingScreen = () => {
  const history = useHistory();
  const { url } = useParams();

  const contentPolling = () => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        const reqPool = function () {
          setTimeout(() => {
            getContentInfo(url)
              .then((res) => {
                const data = res.data;
                if (data[0].status === "Processing") {
                  reqPool();
                } else {
                  return resolve(data[0]);
                }
              })
              .catch((e) => {
                return reject({
                  error: true,
                  msg: "API error",
                  code: 302,
                });
              });
          }, 1000);
        };
        reqPool();
      }, 600);
    });
  };

  useEffect(() => {
    contentPolling()
      .then((val) => {  
        if (val.status === "Approved") {
          history.push("/success")
        } else {
          history.push("/error")
        }
      })
      .catch(() => history.push("/error"));
  }, []);

  return (
    <Layout style={{ background: "#000000", height: "100vh" }}>
      <TopNav />
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
              src={waitingLogo}
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
            Please stand by
          </div>
          <div
            style={{
              marginTop: 16,
              fontWeight: 300,
              fontSize: 20,
              color: "#FFFFFF",
            }}
          >
            The restaurant will verify the URL you pasted and send you your
            reward on your email id soumikkar50@oksbi
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default WaitingScreen;
