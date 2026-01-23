/* PostHog initialization script (client-side) */
(function(){
  var s = document.createElement('script');
  s.src = 'https://cdn.posthog.com/posthog.js';
  s.async = true;
  var head = document.getElementsByTagName('head')[0];
  head.insertBefore(s, head.firstChild);
  s.onload = function(){
    if (window.posthog && typeof window.posthog.init === 'function') {
      window.posthog.init('phc_3Vl1Y5XrRgpIBPfyG0asHFsvNc1ZAtlJtGii1Xw2Ngj', {
        api_host: 'https://app.posthog.com'
      });
    }
  };
})();
