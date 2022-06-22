import React, { Children, createContext, useState } from "react";
export const ContextApiProvider = createContext();

const ContextApi = ({ children }) => {
 let [name, setName] = useState("");
 let [details, setDetails] = useState("");
 let [password, setPassword] = useState("");

//  let [loading] = useState(false);
//   const handleSubmit = e => {
//     e.preventDefault();
//     console.log(make);
//   };

  return (
    <ContextApiProvider.Provider
      value={{ name, setName , details , setDetails, password , setPassword }}
    >
      {children}
    </ContextApiProvider.Provider>
  );
};

export default ContextApi;
