import React from "react";
import { useHistory } from "react-router-dom";
import { Drawer, Space } from "antd";
import { FacebookFilled, CloseCircleFilled } from "@ant-design/icons";
import { Layout, Button } from "antd";
import loginLogo from "../../static/login.svg";
import { saveContent } from "../../api";

const LoginDrawer = ({ open, onClose, inputValue }) => {
  const history = useHistory();

  const submitContent = () =>
    saveContent({
      userId: "anujk",
      url: inputValue,
    })
      .then((response) => {
        const data = response.data;
        if (data.status === "Processing") {
          onClose();
          history.push(`/waiting/${encodeURIComponent(inputValue)}`);
        }
      })
      .catch(() => onClose());

  return (
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={loginLogo}
          style={{
            width: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
            height: "calc(calc(calc(100vw - 72px) / 6 * 4) + 24px)",
          }}
        />
        <Button
          type="primary"
          style={{ width: "100%" }}
          icon={<FacebookFilled />}
          onClick={() => submitContent()}
        >
          Login with Facebook
        </Button>
      </div>
    </Drawer>
  );
};
export default LoginDrawer;
