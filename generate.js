const fs = require("fs");
const config = require("./package.json");

const browserconfig =
  '<?xml version="1.0" encoding="utf-8"?><browserconfig><msapplication><tile><square70x70logo src="/icons/ms-icon-70x70.png"/><square150x150logo src="/icons/ms-icon-150x150.png"/><square310x310logo src="/icons/ms-icon-310x310.png"/><TileColor>' +
  config.configuration.color +
  "</TileColor></tile></msapplication></browserconfig>";

const manifest = {
  short_name: config.configuration.shortName,
  name: config.configuration.title,
  description: config.description,
  icons: [
    {
      src: "/icons/android-icon-36x36.png",
      sizes: "36x36",
      type: "image/png",
      density: "0.75"
    },
    {
      src: "/icons/android-icon-48x48.png",
      sizes: "48x48",
      type: "image/png",
      density: "1.0"
    },
    {
      src: "/icons/android-icon-72x72.png",
      sizes: "72x72",
      type: "image/png",
      density: "1.5"
    },
    {
      src: "/icons/android-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
      density: "2.0"
    },
    {
      src: "/icons/android-icon-144x144.png",
      sizes: "144x144",
      type: "image/png",
      density: "3.0"
    },
    {
      src: "/icons/android-icon-192x192.png",
      sizes: "192x192",
      type: "image/png",
      density: "4.0"
    }
  ],
  start_url: "/",
  background_color: config.configuration.color,
  display: "standalone",
  scope: "/",
  theme_color: config.configuration.color,
  orientation: "portrait"
};

fs.writeFile(__dirname + "/public/browserconfig.xml", browserconfig, function (
  err
) {
  if (err) {
    return console.log(err);
  }
  console.log("browserconfig.xml created");
});

fs.writeFile(
  __dirname + "/public/manifest.json",
  JSON.stringify(manifest),
  function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("manifest.json created");
  }
);
