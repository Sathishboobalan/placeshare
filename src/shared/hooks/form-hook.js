import { useCallback, useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        //   console.log(inputId,action.inputId);
        if(!state.inputs[inputId]){
            continue;
        }
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
          //   console.log(formIsValid,action.isValid);
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
          //   console.log(formIsValid,action.isValid);
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid }
        },
        isValid: formIsValid
      };
    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid
      };
    default:
      return state;
  }
};

export const useForm = (initialInput, initialFormValidity) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInput,
    isValid: initialFormValidity
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      isValid: isValid,
      value: value
    });
  }, []);

  const setFormData = useCallback((inputData, formValidity) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
