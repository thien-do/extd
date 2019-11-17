const path = require("path");

// Rules

const rules = [];

rules.push({
  test: /\.css$/,
  loader: "css-loader",
});

rules.push({
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
});

// Peer dependencies

const externals = {};

externals.react = {
  commonjs: "react", commonjs2: "react",
  amd: "react", root: "React",
};

// Output

const output = {
  filename: "index.js",
  path: path.resolve(__dirname, "dist"),
  library: "extCore",
  libraryTarget: "umd",
};

// Main

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  return ({
    watch: isDev,
    mode: isDev ? "development" : "production",
    entry: "./src/index.ts",
    output: output,
    externals: externals,
    module: { rules: rules },
    resolve: { extensions: [".tsx", ".ts", ".js", ".jsx"] },
    devtool: isDev ? "inline-source-map" : undefined,
  });
};
