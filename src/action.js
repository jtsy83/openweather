const fetch = require("node-fetch");
const fs = require("fs");
const core = require("@actions/core");

const FILE_NAME = "./README.md";
const ENCODING = "utf8";
const TAG_OPEN = `<!-- FEED-START -->`;
const TAG_CLOSE = `<!-- FEED-END -->`;

async function fetchWeather() {
  const API_KEY = '5e04154da653da90a3325c16aa04c462'
  const lat = '1.290270'
  const lon = '103.85195'
  const URL = `api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`;
  return fetch(URL)
    .then((response) => response.text())
    .then((html) => html);
}

async function run() {
  const readme = fs.readFileSync(FILE_NAME, ENCODING);
  const indexBefore = readme.indexOf(TAG_OPEN) + TAG_OPEN.length;
  const indexAfter = readme.indexOf(TAG_CLOSE);
  const before = readme.substring(0, indexBefore);
  const after = readme.substring(indexAfter);
  const input = (await fetchWeather()).replace(/<script.*>.*<\/script>/ims, "");
  const edited = `
${before}
${input}
${after}`;
  fs.writeFileSync(FILE_NAME, edited.trim());
  console.log(edited);
}

try {
  run();
} catch (error) {
  console.log(error);
}
