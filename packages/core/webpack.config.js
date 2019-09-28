const path = require("path");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";

  const output = {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "extCore",
    libraryTarget: "umd",
  };

  const externals = {
    react: {
      commonjs: "react", commonjs2: "react",
      amd: "react", root: "React",
    },
  };

  const ruleTs = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  }

  const rules = [ruleTs]

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
