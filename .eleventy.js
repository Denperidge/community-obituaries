import yaml from "js-yaml";

export const config = {
    dir: {
        input: "src",
        output: "dist",
    }
};

export default function(eleventyConfig) {
    eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
    eleventyConfig.addPassthroughCopy("src/static/");
}

