'use strict';

/**
 * dota-hero service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dota-hero.dota-hero');
