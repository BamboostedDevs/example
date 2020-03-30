import React from "react";
import "../fonts";
/* [ global CSS imports here ] */

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {/* [ preload images here ]
          <div style={{ display: "none" }}>
            <img src="/images/og.png" />      
          </div>  
        */}
    </>
  );
}
