import React, { useState, useEffect } from "react";
import LoginCompound from "../../components/user/login/Login";
import { LoginLayout } from "../../components/user/login/LoginLayout";

const Login = () => {
      return (
            <LoginLayout>
                  <LoginCompound />
            </LoginLayout>
      );
};

export default Login;
