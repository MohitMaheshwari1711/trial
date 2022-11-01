import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./ErrorScreen.css";
import { useHistory, useParams } from "react-router";
import { Layout, Button, notification } from "antd";
import errorLogo from "../../static/error.svg";
import TopNav from "../../components/TopNav/TopNav";
import { updatePostContentId } from "../PostShare/actions";
import { getContentInfo } from "../../api/index";

const { Content } = Layout;

const ErrorScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { contentId } = useParams();

  const [comment, setComment] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);

  const openNotificationWithIcon = (type, description) => {
    notification[type]({
      description: description,
      duration: 3,
    });
  };

  useEffect(() => {
    if (contentId) {
      dispatch(updatePostContentId(contentId));
      getContentInfo(contentId)
        .then((response) => {
          const data = response.data;
          if (data.status === "Rejected") {
            setComment(data.comment);
            setRestaurantId(data.restaurantId);
          }
        })
        .catch((error) => openNotificationWithIcon("error", error.error));
    } else {
      openNotificationWithIcon("error", "Content ID missing")
    }
  }, []);

  return (
    <Layout>
      <TopNav restaurantId={restaurantId} />
      <Content className="site-layout marginTop72">
        <div className="site-layout-background paddingTop24 paddingLeft16 paddingRight16">
          <div className="flex justifyCenter">
            <img src={errorLogo} className="errorLogo" />
          </div>
          <div className="marginTop40 font-weight-500 medium-font">
            Your reward couldn’t be generated as the restaurant found your URL
            to be irrelevant
          </div>
          <div className="marginTop16 font-weight-400 normal-font commentContainer paddingTop8 paddingBottom8 paddingLeft12 paddingRight12">
            {comment}
          </div>
          <Button
            type="primary"
            style={{ marginTop: 24 }}
            onClick={() => history.push(`/restaurantId=${restaurantId}`)}
          >
            Go to home
          </Button>
        </div>
      </Content>
    </Layout>
  );
};
export default ErrorScreen;
