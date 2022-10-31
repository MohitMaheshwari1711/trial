import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Layout, Divider, Button, Input, Form, Carousel, Row, Col } from "antd";
import { DeleteOutlined, FacebookFilled } from "@ant-design/icons";
import carouselFirstLogo from "../../static/carousel-1.svg";
import carouselSecondLogo from "../../static/carousel-2.svg";
import loginLogo from "../../static/login.svg";
import TopNav from "../../components/TopNav/TopNav";
import OverlaySheet from "../../components/OverlaySheet/OverlaySheet";
import { saveContent } from "../../api";
import { updatePostUrl } from "./actions";
import "./PostShare.css";

const { Content } = Layout;

const contentStyle = {
  height: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
  width: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
  color: "#fff",
  lineHeight: "216px",
  textAlign: "center",
  background: "#364d79",
};

const dividerStyle = {
  color: "#FFFF",
  border: "1px rgba(255, 255, 255, 0.45)",
};

const PostShare = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const { restaurantId } = useSelector((state) => state.shellReducer);
  const [openLogin, toggleLogin] = useState(false);

  const submitContent = () =>
    saveContent({
      userId: "anujk",
      url: form.getFieldValue("postUrl"),
      restaurantId,
    })
      .then((response) => {
        const data = response.data;
        if (data.status === "Processing") {
          toggleLogin(false);
          history.push(`/waiting`);
        }
      })
      .catch(() => toggleLogin(false));

  return (
    <Layout>
      <TopNav />
      <Content className="site-layout marginTop72">
        <div className="site-layout-background paddingTop24 paddingLeft16 paddingRight16">
          <div>
            <Carousel autoplay>
              <div className="container">
                <img src={carouselFirstLogo} style={contentStyle} />
              </div>
              <div className="container">
                <img src={carouselSecondLogo} style={contentStyle} />
              </div>
            </Carousel>
            <div className="marginTop40 textCenter medium-font font-weight-500">
              Copy your post or story's URL
            </div>
            <Divider style={dividerStyle} dashed>
              and
            </Divider>

            <Form
              form={form}
              onFinish={() => {
                dispatch(updatePostUrl(form.getFieldValue("postUrl")));
                toggleLogin(!openLogin);
              }}
            >
              <Row wrap={false} className="marginTop24">
                <Col flex="auto" className="marginRight8">
                  <Form.Item
                    name={"postUrl"}
                    rules={[
                      {
                        required: true,
                        message: "Please enter post url!",
                      },
                    ]}
                  >
                    <Input
                      className="inputContainer"
                      onPaste={(e) => e.clipboardData.getData("text")}
                    />
                  </Form.Item>
                </Col>
                <Col flex="none">
                  <Form.Item>
                    <Button
                      type="primary"
                      danger
                      className="deleteBtn"
                      icon={<DeleteOutlined />}
                      onClick={() =>
                        form.setFields([
                          {
                            name: "postUrl",
                            value: "",
                          },
                        ])
                      }
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Button
                      type="primary"
                      className="submitBtn"
                      htmlType="submit"
                    >
                      Submit URL and claim reward
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Content>
      <OverlaySheet
        show={openLogin}
        toggle={toggleLogin}
        title={"Login to continue"}
      >
        <div className="flexColumn alignCenter">
          <img src={loginLogo} className="loginLogo" />
          <Button
            type="primary"
            className="submitBtn"
            icon={<FacebookFilled />}
            onClick={() => submitContent()}
          >
            Login with Facebook
          </Button>
        </div>
      </OverlaySheet>
    </Layout>
  );
};
export default PostShare;

// form.setFields([
//   {
//     name: "postUrl",
//     value: "",
//     errors: ["Please enter the post url"],
//   },
// ])
