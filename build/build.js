var nexe = require("nexe");

nexe.compile({
  output: "example",
  target: "win32-x86-8.11.3",
  resources: [""],
  ico: "./build/icon.png",
  build: true
});
