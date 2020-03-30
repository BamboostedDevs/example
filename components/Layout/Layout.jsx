import React from "react";
import props from "prop-types";
import Head from "next/head";

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>{title && <title>{title}</title>}</Head>
      {children}
    </>
  );
};

Layout.propTypes = {
  title: props.string,
  children: props.object
};

export default Layout;
