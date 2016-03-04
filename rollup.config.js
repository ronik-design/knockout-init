import babel from "rollup-plugin-babel";

export default {
  entry: "lib/knockout-init.js",
  plugins: [babel()],
  dest: "dist/knockout-init.js",
  format: "cjs"
};
