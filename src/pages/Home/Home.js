import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Button, Divider, notification } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { updateRestaurantId } from "../../containers/App/actions";
import logo from "../../static/brand-logo.svg";
import socialLogo from "../../static/social.svg";
import instagramLogo from "../../static/instagram.svg";
import { fetchRestaurantById } from "../../api";
import { isMobileBrowser } from "../../utils";
import OverlaySheet from "../../components/OverlaySheet/OverlaySheet";
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const dividerStyle = {
  color: "#FFFF",
  border: "1px rgba(255, 255, 255, 0.45)",
};

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const [open, setOpen] = useState(false);
  const [restaurantName, setRestaurantName] = useState(null);

  const showDrawer = () => {
    setOpen(!open);
  };

  const openInstagram = () => {
    if (isMobileBrowser() === "Android") {
      window.location.href =
        "intent://instagram.com/#Intent;package=com.instagram.android;scheme=https;end";
    } else if (isMobileBrowser() === "iOS") {
      window.location.href = "instagram://";
    } else {
      window.location.href = "https://www.instagram.com";
    }
  };

  const openNotificationWithIcon = (type, description) => {
    notification[type]({
      description: description,
      duration: 3,
    });
  };

  useEffect(() => {
    if (restaurantId) {
      dispatch(updateRestaurantId(restaurantId));
      fetchRestaurantById(restaurantId)
        .then((response) => {
          const data = response.data;
          setRestaurantName(data.restaurantName);
        })
        .catch((error) =>
          openNotificationWithIcon(
            "error",
            error?.message || "Something went wrong"
          )
        );
    } else {
      openNotificationWithIcon("error", "Restaurant ID is missing");
    }
  }, []);

  return (
    <>
      <div className="flexColumn justifySpaceBetween">
        <div>
          <div className="flex mainContainer">
            <div className="primaryWidthContainer backgroundImageContainer">
              {restaurantName && (
                <div className="imageOverlayContainer paddingTop16 paddingRight16 paddingLeft16 paddingBottom8">
                  <img src={socialLogo} width={48} height={48} />
                  <div className="robotoFont font-weight-700 small-font marginTop8 primaryTextColor">
                    Welcome to
                  </div>
                  <div className="robotoFont font-weight-500 large-font primaryTextColor">
                    {restaurantName}
                  </div>
                </div>
              )}
            </div>
            <div className="secondaryWidthContainer">
              <img
                src={logo}
                width={48}
                height={48}
                className="marginLeft8 marginRight16 marginTop16"
              />
            </div>
          </div>
          <div className="flex">
            <div className="primaryWidthContainer paddingLeft16 paddingTop24">
              <div className="robotoFont normal-font font-weight-500 primaryTextColor">
                Get rewarded for your influence
              </div>
              <div className="marginTop12 marginBottom24">
                <Button
                  ghost
                  icon={<QuestionCircleOutlined />}
                  onClick={showDrawer}
                >
                  How it works
                </Button>
              </div>
            </div>
            <div className="secondaryWidthContainer" />
          </div>
          <div className="buttonContainer">
            <div className="medium-font font-weight-300 primaryTextColor">
              {`Create a post or story about your experience in ${restaurantName}`}
            </div>
            <Button
              type="primary"
              className="buttonHeight instagramButton normal-font"
              onClick={() => openInstagram()}
            >
              <img src={instagramLogo} className="instagramLogo" />
              <span>Go to instagram</span>
            </Button>
            <Divider style={dividerStyle} dashed>
              or if you have already posted
            </Divider>
            <Button
              type="primary"
              className="buttonHeight normal-font"
              onClick={() =>
                history.push(`/share-post/restaurantId=${restaurantId}`)
              }
            >
              Continue to claim reward
            </Button>
          </div>
        </div>
        <Footer />
      </div>
      <OverlaySheet show={open} toggle={setOpen} title={"How it works"}>
        <ol>
          <li>Go to your Instagram</li>
          <li>Create a post or story about your current visit</li>
          <li>Copy the Instagram post/ story's URL</li>
          <li>Come back here and continue to claim reward</li>
          <li>Submit the copied URL</li>
          <li>Receive your reward</li>
        </ol>
      </OverlaySheet>
    </>
  );
};

export default Home;
