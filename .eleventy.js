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
            /**
             * Small SNAFU. 1/1/1990 - 1/1/2024 (both in ms, converted to years) is 33.9, NOT 34
             * - Can't do 3.9 --> 4.0, that'll make inaccurate calculations
             * It should just not,,, use milliseconds right?
             */
            const birthdate = new Date(birthdateStr);
            const deathdate = new Date(deathdateStr);
            let ageInYears = deathdate.getFullYear() - birthdate.getFullYear();
            if (
                birthdate.getMonth() >= deathdate.getMonth() &&
                birthdate.getDate() > deathdate.getDate()
            ) {
                ageInYears -= 1;
            } 
            return ageInYears;
        }
    )
}

