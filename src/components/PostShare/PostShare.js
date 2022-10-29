import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Layout, Divider, Button, Input } from "antd";
import { LinkOutlined, DeleteOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import carouselFirstLogo from "../../carousel-1.svg";
import carouselSecondLogo from "../../carousel-2.svg";
import "./PostShare.css";
import TopNav from "../TopNav/TopNav";

import { saveContent } from "../../api";

const { Content } = Layout;
const contentStyle = {
  height: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
  width: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
  color: "#fff",
  lineHeight: "216px",
  textAlign: "center",
  background: "#364d79",
};

const PostShare = () => {
  const history = useHistory();
  const [showInput, toggleShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");

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
          <div>
            <Carousel autoplay>
              <div className="container">
                <img src={carouselFirstLogo} style={contentStyle} />
              </div>
              <div className="container">
                <img src={carouselSecondLogo} style={contentStyle} />
              </div>
            </Carousel>
            <div
              style={{
                marginTop: 40,
                color: "#FFFFFF",
                textAlign: "center",
                fontWeight: 500,
                fontSize: 20,
              }}
            >
              Copy your post or story's URL
            </div>
            <Divider
              dashed
              style={{
                color: "#FFFF",
                border: "1px rgba(255, 255, 255, 0.45)",
              }}
            >
              and
            </Divider>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                type="primary"
                icon={<LinkOutlined />}
                disabled={inputValue}
                onClick={() => toggleShowInput(true)}
              >
                {inputValue ? "Link pasted" : "Paste URL"}
              </Button>
            </div>
            {showInput && (
              <>
                <div style={{ display: "flex", marginTop: 24 }}>
                  <Input
                    style={{
                      marginRight: 8,
                      fontWeight: 400,
                      color: "rgba(0, 0, 0, 0.25)",
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onPaste={(e) => e.clipboardData.getData("text")}
                  />
                  <Button
                    type="primary"
                    danger
                    icon={<DeleteOutlined />}
                    onClick={() => setInputValue("")}
                  />
                </div>
                <Button
                  type="primary"
                  style={{ width: "100%", marginTop: 16 }}
                  onClick={() =>
                    saveContent({
                      userId: "anujk",
                      url: inputValue,
                    }).then((response) => {
                      const data = response.data;
                      if (data.status === "Processing") {
                        history.push(`/waiting/${encodeURIComponent(inputValue)}`);
                      }
                    })
                  }
                >
                  Submit URL and claim reward
                </Button>
              </>
            )}
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default PostShare;
