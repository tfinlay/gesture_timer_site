import {build} from "esbuild";

await build({
    outfile: "./public/dist/index.js",
    entryPoints: ["./src/index.js"],
    bundle: true,
    minify: true,
    platform: 'browser'
})