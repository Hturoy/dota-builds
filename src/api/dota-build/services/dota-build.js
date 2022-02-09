'use strict';

/**
 * dota-build service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dota-build.dota-build');
