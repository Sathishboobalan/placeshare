import React, { useState, useContext } from "react";

import "./Auth.css";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE
} from "../../shared/components/Util/Validator";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import Button from "../../shared/components/FormElements/Button";
import { AuthContext } from "../../shared/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false
      },
      password: {
        value: "",
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmit = event => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmit}>
        {!isLoginMode && (
          <Input
            id="name"
            type="text"
            element="input"
            label="User Name"
            placeholder="Enter the User Name"
            errTxt="Enter the valid user name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
          ></Input>
        )}
        <Input
          id="email"
          type="email"
          label="Email"
          placeholder="Type your Email here...."
          element="input"
          errTxt="Enter valid Email Address"
          validators={[VALIDATOR_EMAIL()]}
          onInput={inputHandler}
        ></Input>
        <Input
          id="password"
          type="password"
          label="Password"
          placeholder="Type your Password here...."
          element="input"
          errTxt="Enter valid Password Address (Min 8 Characters)"
          validators={[VALIDATOR_MINLENGTH(8)]}
          onInput={inputHandler}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? "Login" : "Sign Up"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        Switch to {!isLoginMode ? "Login" : "Sign Up"}
      </Button>
    </Card>
  );
};

export default Auth;
