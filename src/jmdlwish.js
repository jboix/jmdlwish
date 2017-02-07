(function($) {
    /*$(document).ready(function() {
        $.ajax('resources/data.json').done(function(data) {
            // Check errors and shit
            if (data && data.presents && data.presents.length > 0) {
                var parent = $('.item-list');
                data.presents.forEach(function(item) {
                    parent.append($(
                        '<div class="item">' +
                            '<div class="title-row">' +
                                '<i class="fa fa-gift" aria-hidden="true"></i> ' + item.title +
                                '<a href="' + item.location + '" target="_blank"><i class="fa fa-map" aria-hidden="true"></i></a>' +
                            '</div>' +
                            '<div class="picture-row"' +
                                 'style="background: url(' + item.image + ')' + 
                                       ' no-repeat center center; background-size: cover;">' +
                            '</div>' +
                            '<div class="footer-row">' +
                                '<span>' + item.price + '</span>' +
                                '<a href="' + item.link + '" target="_blank">Acheter en ligne</a>' +
                            '</div>' +
                            '<div class="info-row">' +
                              '<div class="description">' + item.notes + '</div>' +
                            '</div>' +
                        '</div>'));
                });
            }
        });
    });*/
}(window.jQuery));