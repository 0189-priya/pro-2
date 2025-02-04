// Toggle menu icon and header visibility on menu button click
$('#menu').click(function () {
    $(this).toggleClass('fa-times'); // Toggles the 'fa-times' class on the menu button (changes icon to "X")
    $('header').toggleClass('toggle'); // Toggles the 'toggle' class on the header (shows/hides the header)
});

// Remove menu icon and header toggle on scroll or page load
$(window).on('scroll load', function () {
    $('#menu').removeClass('fa-times'); // Removes the 'fa-times' class from the menu button
    $('header').removeClass('toggle'); // Removes the 'toggle' class from the header
});



