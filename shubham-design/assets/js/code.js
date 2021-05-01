const showSection = (sectionId) => {
    console.log(sectionId);

    if (sectionId === "home") {
        $('#screenshots').removeClass('active_menu_link');
        $('#screenshots_section').hide();

        $('#contact').removeClass('active_menu_link');
        $('#contact_section').hide();

        $('#home').addClass('active_menu_link');
        $('#home_section').fadeIn(1000);
    }
    else if (sectionId === "screenshots") {
        $('#home').removeClass('active_menu_link');
        $('#home_section').hide();

        $('#contact').removeClass('active_menu_link');
        $('#contact_section').hide();

        $('#screenshots').addClass('active_menu_link');
        $('#screenshots_section').fadeIn(1000);
    }
    else if (sectionId === "contact") {
        $('#screenshots').removeClass('active_menu_link');
        $('#screenshots_section').hide();

        $('#home').removeClass('active_menu_link');
        $('#home_section').hide();

        $('#contact').addClass('active_menu_link');
        $('#contact_section').fadeIn(1000);
    }
}