import React, { useState } from "react";
import "./RegisterForm.css";
import Header from "./Header";
import imgIcon from "../images/img-icon.png";
import { BsFillPlusCircleFill } from "react-icons/bs";
import ChildInfo from "./ChildInfo";

const RegisterForm = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <>
      <Header />
      <div className="form-controls">
        <h3 className="register__heading">بيانات ولي الامر المساهم</h3>
        <div className="form-control">
          <input type="text" placeholder="الأسم" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="الرقم المدني" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="رقم الصندوق" />
        </div>

        <h3 className="register__heading">المنطقة</h3>

        <div className="form-control__radio">
          <div>
            <input type="radio" id="1" name="drone" value="rawda" />
            <label htmlFor="1">الروضه</label>
          </div>
          <div>
            <input type="radio" id="2" name="drone" value="hawly" />
            <label htmlFor="2">حولي</label>
          </div>
        </div>
        <h3 className="register__heading">صورة البطاقة المدنيه</h3>
        <div className="form-control__upload">
          <div className="form-control__upload__box">
            <label htmlFor="file-upload" className="form-control__upload__img">
              <img src={imgIcon} alt="" />
            </label>
            <input id="file-upload" type="file" />
            <label className="form-control__upload__label">
              الوجه الامامي للبطاقة
            </label>
          </div>

          <div className="form-control__upload__box">
            <label htmlFor="file-upload" className="form-control__upload__img">
              <img src={imgIcon} alt="" />
            </label>
            <input id="file-upload" type="file" />
            <label className="form-control__upload__label">
              الوجه الامامي للبطاقة
            </label>
          </div>
        </div>
        <div className="form-control">
          <input type="text" placeholder="رقم الهاتف" />
        </div>
        <hr />
        <div className="form-control__add">
          <h3 className="register__heading">
            بيانات الابناء المتفوقين و الفائيقات
          </h3>
          <button onClick={handleOpen}>
            <BsFillPlusCircleFill />
          </button>
        </div>
        {
          open && <ChildInfo />
        }
      </div>
    </>
  );
};

export default RegisterForm;
