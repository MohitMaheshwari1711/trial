import React from "react";
import { Layout, Carousel, Button, Divider } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import logo from "./brand-logo.svg";
import socialLogo from "./social.svg";
import instagramLogo from "./instagram.svg";
import "antd/dist/antd.css";
import "./App.css";

const { Header, Content, Footer } = Layout;

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

// const App = () => (
//   <Layout>
//     <Header
//       style={{
//         position: "fixed",
//         zIndex: 1,
//         width: "100%",
//       }}
//     >
//       <div className="logo" />
//     </Header>
//     <Content
//       className="site-layout"
//       style={{
//         marginTop: 64,
//       }}
//     >
//       <div
//         className="site-layout-background"
//         style={{
//           padding: 24,
//           minHeight: 380,
//         }}
//       >
//         <Carousel autoplay>
//           <div>
//             <h3 style={contentStyle}>1</h3>
//           </div>
//           <div>
//             <h3 style={contentStyle}>2</h3>
//           </div>
//           <div>
//             <h3 style={contentStyle}>3</h3>
//           </div>
//           <div>
//             <h3 style={contentStyle}>4</h3>
//           </div>
//         </Carousel>
//         <p>long content</p>
//         {
//           // indicates very long content
//           Array.from({ length: 100 }, (_, index) => (
//             <React.Fragment key={index}>
//               {index % 20 === 0 && index ? "more" : "..."}
//               <br />
//             </React.Fragment>
//           ))
//         }
//       </div>
//     </Content>
//     <Footer
//       style={{
//         textAlign: "center",
//       }}
//     >
//       Ant Design ©2018 Created by Ant UED
//     </Footer>
//   </Layout>
// );

// $col-1: $col;
// $col-2: calc(calc(calc(100vw - 72px) / 6 * 2) + 8px);
// $col-3: calc(calc(calc(100vw - 72px) / 6 * 3) + 16px);
// $col-4: calc(calc(calc(100vw - 72px) / 6 * 4) + 24px);
// $col-5: calc(calc(calc(100vw - 72px) / 6 * 5) + 32px);
// $col-6: calc(calc(calc(100vw - 72px) / 6 * 6) + 40px);
const App = () => {
  return (
    <div>
      <div style={{ display: "flex", width: "100%" }}>
        <div className="temp">
          <div
            style={{
              background: "rgba(0, 0, 0, 0.45)",
              marginTop: 138,
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
              NOIDA SOCIAL
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
          Create a post or story about your experience in Noida Social
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
          onClick={() => window.location.href = "http://instagram.com/"}
        >
          <img
            src={instagramLogo}
            style={{ width: 14, height: 14, marginRight: 10 }}
          />
          <span
            style={{
              fontSize: 16,
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
        >
          Continue to claim reward
        </Button>
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
  );
};

export default App;
