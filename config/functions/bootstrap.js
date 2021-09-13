"use strict";

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */

module.exports = () => {
  let data = require("fs").readFileSync("./data/categories.json");
  let categories = JSON.parse(data);
  categories.data.categories.forEach((entry) => {
    strapi.services.categories.create({
      name: entry.name,
      icon: entry.icon,
      img: entry.img,
      slug: entry.slug,
      description: entry.description,
    });
  });
};
