var app = angular.module('app', []);

app.directive('uiSource', function () {
    return {
        compile: function (elem) {
            var escape = function (content) {
                return content.replace(/\</g, '&lt;')
                    .replace(/\>/g, '&gt;');
            };
            var pre = angular.element('<pre class="prettyprint"></pre');
            var pretty = prettyPrintOne(escape(elem.html()));
            console.log(pretty);
            pre.append(pretty);
            elem.replaceWith(pre);
        }
    };
});