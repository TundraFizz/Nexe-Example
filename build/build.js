var nexe = require("nexe");

nexe.compile({
  output: "example",
  target: "windows-x86-9.11.1",
  resources: [""],
  ico: "./build/icon.png",
  build: true
});
