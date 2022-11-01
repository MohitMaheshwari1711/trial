import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./SuccessScreen.css";
import { useHistory, useParams } from "react-router";
import { Layout, Button, notification } from "antd";
import successLogo from "../../static/success.svg";
import TopNav from "../../components/TopNav/TopNav";
import { updateCouponId } from "../../containers/App/actions";
import { getCouponDetails } from "../../api/index";

const { Content } = Layout;

const SuccessScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { couponId } = useParams();

  const [couponCode, setCouponCode] = useState(null);
  const [discountPercentage, setDiscountPercentage] = useState(null);
  const [status, setStatus] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);

  const openNotificationWithIcon = (type, description) => {
    notification[type]({
      description: description,
      duration: 3,
    });
  };

  useEffect(() => {
    if (couponId) {
      dispatch(updateCouponId(couponId));
      getCouponDetails(couponId)
        .then((response) => {
          const data = response.data;
          setStatus(data.status);
          setDiscountPercentage(data.couponCode);
          setCouponCode(data.discountPercentage);
          setRestaurantId(data.restaurantId);
        })
        .catch((error) => openNotificationWithIcon("error", error.error));
    } else {
      openNotificationWithIcon("error", "Coupon ID missing")
    }
  }, []);

  return (
    <Layout>
      <TopNav restaurantId={restaurantId} />
      <Content className="site-layout marginTop72">
        <div className="site-layout-background paddingTop24 paddingLeft16 paddingRight16">
          <div className="flex justifyCenter">
            <img src={successLogo} className="successLogo" />
          </div>
          <div className="marginTop40 font-weight-500 x-large-font">Yay!</div>
          <div className="marginTop16 font-weight-300 medium-font">
            <div>
              <i>Coupon code</i> : {couponCode}
            </div>
            <div>
              <i>Discount Percentage</i> : {discountPercentage}
            </div>
            <div>
              <i>Status</i> : {status}
            </div>
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
export default SuccessScreen;
