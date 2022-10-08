#!/usr/bin/env node

const $RefParser = require("@apidevtools/json-schema-ref-parser");
const fs = require("fs/promises");
const path = require("path");

fs.mkdir(path.join("public", "v3"), { recursive: true })
  .then(() => $RefParser.bundle("v3/schema/device.schema.yml"))
  .then(JSON.stringify)
  .then(schema => fs.writeFile("public/v3/device.schema.json", schema));
