$(document).ready(function() {
    $("a[href='#']").click(function(event) {
        event.preventDefault();
        Android.showToast("Comming Soon...");
    });
});
