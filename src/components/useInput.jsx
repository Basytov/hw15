import { useState } from "react";

export function useInput() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const validate = () => {
    if (!input.email) {
      return false;
    }

    if (!input.password) {
      return false;
    }

    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      return;
    }
  };

  return {
    input,
    error,
    onInputChange: (event) => {
      setInput({ ...input, [event.target.name]: event.target.value });
    },
    onSubmit: handleSubmit,
  };
}
