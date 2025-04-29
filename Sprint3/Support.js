$(document).ready(function () {
    // Phone input mask
    $('#phone').mask('(000) 000 00 00');

    // Datepicker setup (single instance)
    $("#appointmentDate").datepicker({
        minDate: 0,
        maxDate: "+2M",
        showButtonPanel: true,
        dateFormat: "dd-mm-yy"
    });

    // Contact form submission handler
    $(".contact form").submit(function (e) {
        e.preventDefault();

        const name = $(this).find("input[placeholder='Name']").val();
        const email = $(this).find("input[type='email']").val();
        const phone = $("#phone").val();
        const message = $(this).find("textarea").val();

        if (name && email && phone && message) {
            $("#dialogContent").text(`Thank you ${name}! Your message has been sent. We will contact you soon.`);
            $("#dialog").dialog("open");
            $(this).find("input, textarea").val(""); // Clear form
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Initialize tooltips
    $(".contact input, .contact textarea").tooltip({
        position: {
            my: "left+15 center",
            at: "right center"
        },
        show: {
            effect: "fadeIn",
            delay: 200
        }
    });

    // Insert appointment section if needed
    if (!$(".appointment-section").length) {
        $(`
            <div class='appointment-section'>
                <h2>Schedule an Appointment</h2>
                <form>
                    <input type='text' id='appointmentDate' placeholder='Select Date' name='date'>
                    <input type='text' name='name' placeholder='Your Name'>
                    <button type='submit' class='submit-btn'>Submit Appointment</button>
                </form>
            </div>
        `).insertAfter(".contact");
    }

    // Dialog init (but do not open)
    $("#dialog").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            "OK": function () {
                $(this).dialog("close");
            }
        }
    });

    // Handle appointment form submission
    $(".appointment-section form").submit(function (e) {
        e.preventDefault(); // Prevent actual form submission

        const name = $(this).find("input[name='name']").val();
        const date = $("#appointmentDate").val();

        if (name && date) {
            $("#dialogContent").text(`Hello ${name}, your appointment is scheduled for ${date}.`);
            $("#dialog").dialog("open");
            $(this).find("input").val(""); // Clear form
        } else {
            alert("Please fill in both your name and date.");
        }
    });
});
