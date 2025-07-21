const fs = require("fs");
const path = require("path");
const sass = require("sass");

const getComponents = () => {
  let allComponents = [];

  const types = ["atoms", "molecules"];

  types.forEach((type) => {
    const allFiles = fs.readdirSync(`src/${type}`).map((file) => ({
      input: `src/${type}/${file}`,
      output: `lib/${file.replace(/\.scss$/, ".css")}`,
    }));

    allComponents = [...allComponents, ...allFiles];
  });

  return allComponents;
};

const compile = (inputPath, outputPath) => {
  const result = sass.compile(path.resolve(inputPath), {
    style: "expanded",
    loadPaths: [path.resolve("src")],
  });

  fs.writeFileSync(path.resolve(outputPath), result.css);
};

try {
  fs.mkdirSync(path.resolve("lib"), { recursive: true });
} catch (e) {
  console.error("Error creating lib directory:", e);
}

compile("src/global.scss", "lib/global.css");

getComponents().forEach((component) => {
  compile(component.input, component.output);
});
