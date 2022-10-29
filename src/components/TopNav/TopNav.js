import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Layout } from "antd";
import socialLogo from "../../social.svg";
import backIcon from "../../back.svg";
import homeIcon from "../../Home.svg";

const { Header } = Layout;

const TopNav = ({ showHomeIcon = false }) => {
  const history = useHistory();
  const [appHistory, setAppHistory] = useState(0);

  useEffect(() => {
    if (history.action === "PUSH") {
      setAppHistory(appHistory + 1);
    } else if (history.action === "POP") {
      setAppHistory(appHistory > 0 ? appHistory - 1 : 0);
    } else if (history.action === "REPLACE") {
      // do nothing
    }
  }, [history.action]);

  return (
    <Header
      style={{
        position: "fixed",
        zIndex: 99,
        width: "100%",
        background: "#000000",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4,
        height: 72,
        borderBottom: "1px solid rgba(255, 255, 255, 0.45)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 48, textAlign: "center", marginRight: 8 }}>
          {appHistory > 0 && !showHomeIcon ? (
            <img
              src={backIcon}
              style={{ width: 24 }}
              onClick={() => history.goBack()}
            />
          ) : (
            <img
              src={homeIcon}
              style={{ width: 24 }}
              onClick={() => history.push("/")}
            />
          )}
        </div>
        <img src={socialLogo} style={{ width: 48 }} />
      </div>
    </Header>
  );
};
export default TopNav;
