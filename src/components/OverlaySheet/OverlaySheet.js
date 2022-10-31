import React from "react";
import "./OverlaySheet.css";
import PropTypes from "prop-types";
import { Drawer, Space } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

const bodyStyle = {
  background: "#3B3B3B",
  fontWeight: 500,
  fontSize: 20,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 16,
  paddingBottom: 24,
};

const OverlaySheet = (props) => {
  const { title, placement, show, toggle, children } = props;
  return (
    <Drawer
      title={title && <span className="primaryTextColor">{title}</span>}
      placement={placement}
      open={show}
      closable={false}
      bodyStyle={bodyStyle}
      extra={
        <Space>
          <CloseCircleFilled onClick={() => toggle(!show)} />
        </Space>
      }
    >
      {children}
    </Drawer>
  );
};

OverlaySheet.propTypes = {
  title: PropTypes.string,
  placement: PropTypes.string,
  show: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.instanceOf(Object).isRequired,
};

OverlaySheet.defaultProps = {
  show: false,
  placement: "bottom",
};

export default OverlaySheet;
