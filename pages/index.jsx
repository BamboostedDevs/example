import React from "react";
import Counter from "../containers/example";
import Example from "../components/Example/Example";
import Layout from "../components/Layout";
import Link from "next/link";

const Main = () => {
  return (
    <Layout title="Page">
      <Link href="/login">Login</Link>
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
