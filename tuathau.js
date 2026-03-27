'use strict';
browser.webRequest.onBeforeRequest.addListener(
  (details) => details.url.indexOf('-small') > 0 ?
    { redirectUrl: details.url.replace('small', 'medium') } : {},
  {
    urls: ["*://avatars.plurk.com/*"],
    types: ['image']
  },
  ['blocking']
);
