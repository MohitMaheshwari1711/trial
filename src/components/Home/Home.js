import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Divider, Drawer, Space } from "antd";
import { QuestionCircleOutlined, CloseCircleFilled } from "@ant-design/icons";
import logo from "../../brand-logo.svg";
import socialLogo from "../../social.svg";
import instagramLogo from "../../instagram.svg";
import { fetchRestaurantById } from "../../api";
import { isMobileBrowser } from "../../utils";
import "./Home.css";

const Home = () => {
  const history = useHistory();
  const { restaurantId } = useParams();
  const [open, setOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState("Noida Social");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (restaurantId) {
      sessionStorage.setItem("restaurantId", restaurantId)
      fetchRestaurantById(restaurantId).then((response) => {
        const data = response.data;
        setRestaurantName(data.restaurantName);
      });
    }
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-between",
          background: "#000000",
        }}
      >
        <div>
          <div style={{ display: "flex", width: "100%", height: "45vh" }}>
            <div className="temp">
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.45)",
                  paddingTop: 16,
                  paddingRight: 16,
                  paddingLeft: 16,
                  paddingBottom: 8,
                }}
              >
                <img src={socialLogo} style={{ width: 48, height: 48 }} />
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    fontSize: 14,
                    marginTop: 8,
                    color: "#FFFFFF",
                  }}
                >
                  Welcome to
                </div>
                <div
                  style={{
                    fontFamily: "Roboto",
                    fontWeight: 500,
                    fontSize: 30,
                    color: "#FFFFFF",
                  }}
                >
                  {restaurantName}
                </div>
              </div>
            </div>
            <div
              style={{
                background: "#000000",
                borderLeft: "1px solid rgba(255, 255, 255, 0.45)",
                borderBottom: "1px solid rgba(255, 255, 255, 0.45)",
              }}
            >
              <img
                src={logo}
                style={{
                  width: 48,
                  height: 48,
                  marginLeft: 8,
                  marginRight: 16,
                  marginTop: 16,
                }}
              />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              background: "#000000",
            }}
          >
            <div
              style={{
                width: "calc(100% - 72px)",
                paddingLeft: 16,
                paddingTop: 24,
              }}
            >
              <div
                style={{
                  fontFamily: "Roboto",
                  fontWeight: 500,
                  fontSize: 16,
                  color: "#FFFFFF",
                }}
              >
                Get rewarded for your influence
              </div>
              <Button
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  marginTop: 12,
                  marginBottom: 24,
                }}
                icon={<QuestionCircleOutlined />}
                onClick={showDrawer}
              >
                How it works
              </Button>
            </div>
            <div
              style={{
                width: 72,
                borderLeft: "1px solid rgba(255, 255, 255, 0.45)",
              }}
            />
          </div>
          <div
            style={{
              background: "#3B3B3B",
              paddingTop: 24,
              paddingBottom: 24,
              paddingLeft: 16,
              paddingRight: 16,
            }}
          >
            <div
              style={{
                color: "#FFFFFF",
                fontWeight: 300,
                fontSize: 20,
              }}
            >
              {`Create a post or story about your experience in ${restaurantName}`}
            </div>
            <button
              style={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                justifyContent: "center",
                border: "1px solid #D9D9D9",
                borderRadius: 2,
                marginTop: 12,
              }}
              onClick={() => {
                if (isMobileBrowser() === "Android") {
                  window.location.href =
                    "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
                } else if (isMobileBrowser() === "iOS") {
                  window.location.href = "instagram://";
                } else {
                  window.location.href = "https://www.instagram.com";
                }
              }}
            >
              <img
                src={instagramLogo}
                style={{ width: 14, height: 14, marginRight: 10 }}
              />
              <span
                style={{
                  fontSize: 16
                }}
              >
                Go to instagram
              </span>
            </button>
            <Divider
              dashed
              style={{
                color: "#FFFF",
                border: "1px rgba(255, 255, 255, 0.45)",
              }}
            >
              or if you have already posted
            </Divider>
            <Button
              type="primary"
              style={{
                color: "#FFFFFF",
                width: "100%",
              }}
              onClick={() => history.push("/share-post")}
            >
              Continue to claim reward
            </Button>
          </div>
        </div>
        <div
          style={{
            background: "#000000",
            paddingTop: 40,
            paddingLeft: 16,
            paddingRight: 16,
            paddingBottom: 16,
          }}
        >
          <div style={{ color: "#FFFFFF", fontSize: 12, fontWeight: 400 }}>
            © 2023 by Populencer
          </div>
          <div>
            <span
              style={{
                color: "rgba(255, 255, 255, 0.45)",
                fontSize: 12,
                fontWeight: 400,
              }}
            >
              Proudly created in India
            </span>{" "}
            🇮🇳
          </div>
        </div>
      </div>
      <Drawer
        title={<span style={{ color: "#FFFFFF" }}>How it works</span>}
        placement={"bottom"}
        width={500}
        onClose={onClose}
        open={open}
        closable={false}
        headerStyle={{
          background: "#000000",
          color: "#FFFFFF",
          borderBottomColor: "#000000",
        }}
        bodyStyle={{
          background: "#3B3B3B",
          color: "#FFFFFF",
          fontWeight: 500,
          fontSize: 20,
          paddingLeft: 16,
          paddingRight: 16,
          paddingTop: 16,
          paddingBottom: 24,
        }}
        extra={
          <Space>
            <CloseCircleFilled onClick={onClose} />
          </Space>
        }
      >
        <ol style={{ paddingInlineStart: 22 }}>
          <li>Go to your Instagram</li>
          <li>Create a post or story about your current visit</li>
          <li>Copy the Instagram post/ story's URL</li>
          <li>Come back here and continue to claim reward</li>
          <li>Submit the copied URL</li>
          <li>Receive your reward</li>
        </ol>
      </Drawer>
    </>
  );
};

export default Home;
