// gallery.js
$(document).ready(function() {
    $('.photos').magnificPopup({
        delegate: 'a.gallery-item',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
