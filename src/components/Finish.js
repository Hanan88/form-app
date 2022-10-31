import React from "react";
import "./Finish.css";
import img from "../images/correct-img.png";
import Footer from "./Footer";

const Finish = () => {
  return (
    <>
      <div className="finish">
        <div>
          <img src={img} alt="" />
        </div>
        <h3 className="finish__heading">
          اسم المساهم - تم استلام طلب تسجيل ابنائكم و بناتكم الفائقين و الفائقات
          بنجاح، سوف يتم مراجعة طلبكم من قبل الإدارة و التواصل معاكم قريباً
        </h3>
      </div>
      <Footer />
    </>
  );
};

export default Finish;
