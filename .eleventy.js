import fs from "fs";

import yaml from "js-yaml";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime.js";

dayjs.extend(relativeTime);

export const config = {
    dir: {
        input: "src",
        output: "dist",
    }
};

export default function(eleventyConfig) {
    eleventyConfig.addDataExtension("yml,yaml", (contents) => yaml.load(contents));
    eleventyConfig.addPassthroughCopy("src/static/");


    const dateFormats = yaml.load(fs.readFileSync(eleventyConfig.directories.data + "config.yaml", {encoding: "utf-8"})).date_formats;
    console.log(dateFormats)
    // See https://www.11ty.dev/docs/languages/liquid/#multiple-filter-arguments
    eleventyConfig.addLiquidFilter(
        "calculateAge", function(birthdateStr, deathdateStr) {
            /**
             * Small SNAFU. 1/1/1990 - 1/1/2024 (both in ms, converted to years) is 33.9, NOT 34
             * - Can't do 3.9 --> 4.0, that'll make inaccurate calculations
             * It should just not,,, use milliseconds right?
             */
            const birthdate = dayjs(birthdateStr, dateFormats);
            const deathdate = dayjs(deathdateStr, dateFormats);

            console.log(birthdateStr)
            console.log(birthdate)

            return birthdate.from(deathdate, true)

            return
            /*
            const birthdate = new Date(birthdateStr);
            const deathdate = new Date(deathdateStr);
            let ageInYears = deathdate.getFullYear() - birthdate.getFullYear();
            if (birthdate.getMonth() >= deathdate.getMonth()) {
                if (birthdate.getDate() > deathdate.getDate()) {

                }
            } 
            console.log(deathdate)
            return ageInYears
            */
            return ageInMs / 31556952000;  // 31.556.952.000 milliseconds in a year
        }
    )
}

