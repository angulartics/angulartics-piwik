# angulartics-piwik

[![Bower version](https://badge.fury.io/bo/angulartics-piwik.svg)](https://badge.fury.io/bo/angulartics-piwik)

Piwik plugin for [angulartics](http://angulartics.github.io)

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/angulartics/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-piwik
```

### Bower

```shell
bower install angulartics-piwik
```
Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-piwik/dist/angulartics-piwik.min.js"></script>
```

Then add `angulartics.piwik` to your module

    angular.module('myApp', ['angulartics', 'angulartics.piwik'])

Set piwik tracker code as you would normally with piwik somewhere on your page, but make
sure that you remove or comment the initial pageview tracking line (Angulartics will track the page when the first state is loaded).

    <!-- Piwik -->
    <script type="text/javascript">
      var _paq = _paq || [];
      // _paq.push(['trackPageView']);
      _paq.push(['enableLinkTracking']);
      (function() {
        var u="//piwik.yourdomain.com/";
        _paq.push(['setTrackerUrl', u+'piwik.php']);
        _paq.push(['setSiteId', 1]);
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    <noscript><p><img src="//piwik.yourdomain.com/piwik.php?idsite=1" style="border:0;" alt="" /></p></noscript>
    <!-- End Piwik Code -->

That's it! Refer to the [angulartics](http://angulartics.github.io) docs for more details on the basic tracking functions

## API

piwik specific trackers. For more details on this functions, see the [piwik JavaScript Tracking Client API docs](http://developer.piwik.org/api-reference/tracking-javascript)

###setCustomVariable(index, name, value, [scope])

Set a custom variable. scope can be either 'visit' or 'page'. Defaults to 'page'.


###trackSiteSearch(keyword, [category], [count])

Log an internal site search for a specific keyword, in an optional category, specifying the optional count of search results in the page.


###trackGoal(goalID, [revenue])

Manually log a conversion for the numeric goal ID, with an optional numeric custom revenue customRevenue


###setUsername(username)

Default angulartics page and event tracking

### Unsupported angulartics trackers

The following angulartics tracker functions have no piwik equivalent, and as such, are not supported.

    $analytics.setAlias(alias)
    $analytics.setUserProperties(properties)
    $analytics.setSuperProperties(properties)

## What else?

See more docs and samples at [http://angulartics.github.io](http://angulartics.github.io "http://angulartics.github.io").

# Development

### Build
grunt uglify

## License

[MIT](LICENSE)
