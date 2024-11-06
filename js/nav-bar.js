$.get("/pages/nav-bar.html", function (data) {
    $("#nav-placeholder").replaceWith(data);
});