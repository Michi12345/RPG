$(document).ready(function () { //пишем так, чтобы сначала загрузился весь документ, а потом выполнялись следующие js команды
    var arrowAppearButton = $("#sidebarAppearButtonDiv");
    var arrowHideButton = $("#sidebarHideButton");
    var sidebarDiv = $("#sidebarDiv");

    arrowHideButton.click(function () {
        sidebarDiv.hide();
        arrowAppearButton.show();
    });

    arrowAppearButton.click(function () {
        sidebarDiv.show();
        arrowAppearButton.hide();
    })


});