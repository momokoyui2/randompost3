jQuery(document).ready(function (e) {
    e(".random-post").each(function () {
        e.ajax({
            url: "/feeds/posts/default?alt=json-in-script",
            type: "get",
            dataType: "jsonp",
            success: function (m) {
                m = m.feed.entry.length - 3, m = Math.floor(Math.random() * (m - 0 + 1)) + 0, 0 == m && (m = Math.floor(Math.random() * (m - 0 + 1)) + 1), m == 0 && (m == 1), e.ajax({
                    url: "/feeds/posts/default?alt=json-in-script&start-index=" + m + "&max-results=1",
                    type: "get",
                    dataType: "jsonp",
                    success: function (n) {
                        var p = "";
                        var q = "";
                        for (var i = 0; i < n.feed.entry.length; i++) {
                            for (var j = 0; j < n.feed.entry[i].link.length; j++) {
                                if (n.feed.entry[i].link[j].rel == "alternate") {
                                    p = n.feed.entry[i].link[j].href;
                                    break
                                }
                            };
                            q += "<a class=\"rdn-icon\" href=\"" + p + "\"></a>"
                        };
                        e(".random-post").html(q)
                    }
                })
            }
        })
    })
});
