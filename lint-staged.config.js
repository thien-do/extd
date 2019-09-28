module.exports = {
  "**/*.ts?(x)": files => {
    const target = files.length > 10
      ? "./packages/*/src/"
      : files.join(" ");
    return `eslint ${target} --ext ts,tsx --max-warnings 0`;
  },
};
