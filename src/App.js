import React, { useContext } from "react";

const Store = React.createContext();

export function Parent(props) {
  const data = {
    msg: "Hello!"
  };

  return <Store.Provider value={data}>{props.children}</Store.Provider>;
}

export function Child() {
  const data = useContext(Store);

  return <h1>{data.msg}</h1>;
}
