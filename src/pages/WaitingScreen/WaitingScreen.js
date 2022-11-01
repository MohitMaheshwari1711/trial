import React, { useEffect } from "react";
import "./WaitingScreen.css";
import { useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Layout, notification } from "antd";
import waitingLogo from "../../static/waiting.svg";
import TopNav from "../../components/TopNav/TopNav";
import { getContentInfo } from "../../api";
import { updatePostContentId } from "../PostShare/actions";
import { updateCouponId } from "../../containers/App/actions";

const { Content } = Layout;

const WaitingScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { contentId } = useParams();

  const openNotificationWithIcon = (type, description) => {
    notification[type]({
      description: description,
      duration: 3,
    });
  };

  const contentPolling = (contentId) => {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        const reqPool = function () {
          setTimeout(() => {
            getContentInfo(contentId)
              .then((res) => {
                const data = res.data;
                if (data.status === "Processing") {
                  reqPool();
                } else {
                  return resolve(data);
                }
              })
              .catch((e) => {
                return reject({
                  error: true,
                  msg: e.error,
                  code: 500,
                });
              });
          }, 1000);
        };
        reqPool();
      }, 600);
    });
  };

  useEffect(() => {
    if (contentId) {
      dispatch(updatePostContentId(contentId));
      contentPolling(contentId)
        .then((val) => {
          if (val.status === "Approved") {
            dispatch(updateCouponId(val.couponId));
            history.push(`/success/couponId=${val.couponId}`);
          } else {
            dispatch(updateCouponId(null));
            history.push(`/error/contentId=${val.contentId}`);
          }
        })
        .catch((err) => openNotificationWithIcon("error", err.msg));
    } else {
      openNotificationWithIcon("error", "Content ID missing")
    }
  }, []);

  return (
    <Layout>
      <TopNav />
      <Content className="site-layout marginTop72">
        <div className="site-layout-background paddingTop24 paddingLeft16 paddingRight16">
          <div className="flex justifyCenter">
            <img src={waitingLogo} className="waitingLogo" />
          </div>
          <div className="marginTop40 font-weight-500 x-large-font">
            Please stand by
          </div>
          <div className="marginTop16 font-weight-300 medium-font">
            The restaurant will verify the URL you pasted and send you your
            reward on your email id soumikkar50@oksbi
          </div>
        </div>
      </Content>
    </Layout>
  );
};
export default WaitingScreen;
