import React, { Component } from "react";
import Counter from "../containers/example";
import Example from "../components/Example/Example";
import Layout from "../components/Layout";

const Main = () => {
  return (
    <Layout title="Page">
      <Counter.Provider>
        <Example />
        <Counter.Provider initialState={2}>
          <div>
            <div>
              <Example />
            </div>
          </div>
        </Counter.Provider>
      </Counter.Provider>
    </Layout>
  );
};

export default Main;
