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

    // See https://www.11ty.dev/docs/languages/liquid/#multiple-filter-arguments
    eleventyConfig.addLiquidFilter(
        "calculateAge", function(birthdateStr, deathdateStr) {
            const ageInMs = Date.parse(deathdateStr) - Date.parse(birthdateStr);
            return ageInMs / 31556952000;  // 31.556.952.000 milliseconds in a year
        }
    )
}

