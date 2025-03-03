import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

export default {
	input: "src/index.ts",
	output: [
		{
			file: "dist/cjs/index.js",
			format: "cjs",
			sourcemap: true,
		},
		{
			file: "dist/esm/index.js",
			format: "esm",
			sourcemap: true,
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		typescript({ useTsconfigDeclarationDir: true }),
		postcss({
			extensions: [".css"],
		}),
	],
	external: ["react", "react-dom"],
};
