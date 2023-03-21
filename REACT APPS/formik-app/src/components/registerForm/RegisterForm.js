import React, { useContext } from "react";
import { Form, Field } from "formik";

import style from "./RegisterForm.module.scss";
import RegisterFormFields from "./RegisterFormFields";
import { LocalizationContext } from "../../contexts/LocalizationContext";
import { registerTranslations } from "../../constants/translations";

const RegisterForm = ({ errors, touched }) => {
  const { locale } = useContext(LocalizationContext);

  const { buyerTitle, buyerSubtitle, sellerTitle, sellerSubtitle, button } =
    registerTranslations[locale];

  return (
    <Form className={style["register-form"]}>
      <RegisterFormFields errors={errors} touched={touched} />
      <div className={style["radio-container"]}>
        <label>
          <Field type="radio" name="userType" value="buyer" required />
          {buyerTitle}
        </label>
        <p>{buyerSubtitle}</p>
      </div>
      <div className={style["radio-container"]}>
        <label>
          <Field type="radio" name="userType" value="seller" required />
          {sellerTitle}
        </label>
        <p>{sellerSubtitle}</p>
      </div>
      <button type="submit">{button}</button>
    </Form>
  );
};

export default RegisterForm;
