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

    const formData = {
        name: $(this).find("input[placeholder='Name']").val(),
        email: $(this).find("input[type='email']").val(),
        phone: $("#phone").val(),
        message: $(this).find("textarea").val(),
        date: new Date().toLocaleString()
    };

    // First AJAX call to JSONPlaceholder
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        type: 'POST',
        data: JSON.stringify(formData),
        contentType: 'application/json',
        success: function(response) {
            // Second AJAX call to get user data
            $.ajax({
                 url: `https://jsonplaceholder.typicode.com/users/${Math.floor(Math.random() * 3) + 1}`,
                type: 'GET',
                success: function(userData) {
                    const supportAgents = [
                        {
                            name: "Ali Kayra Ilhan",
                            position: "Senior Support Agent",
                            department: "Customer Service"
                        },
                        {
                            name: "Fatih Mehmet Unal",
                            position: "Technical Support Specialist",
                            department: "Technical Support"
                        }
                    ];

                    const randomAgent = supportAgents[Math.floor(Math.random() * supportAgents.length)];
                    const referenceId = Math.floor(Math.random() * 9000) + 1000;

                    $("#dialogContent").html(`
                        <p>Your message has been sent successfully!</p>
                        <p>Reference ID: KDR-${referenceId}</p>
                        <p>Date: ${formData.date}</p>
                        <p>Support Agent: ${randomAgent.name}</p>
                        <p>Position: ${randomAgent.position}</p>
                        <p>Department: ${randomAgent.department}</p>
                        <p>Assigned Manager: ${userData.name}</p>
                        <p>Manager Email: ${userData.email}</p>
                    `);
                    $("#dialog").dialog("open");
                    $(".contact form").trigger("reset");
                    
                    console.group('Form Submission Results');
                    console.log('Form Data:', formData);
                    console.log('First API Response:', response);
                    console.log('Second API Response:', userData);
                    console.groupEnd();
                }
            });
        },
        error: function(xhr, status, error) {
            $("#dialogContent").html(`
                <p>An error occurred!</p>
                <p>Please try again.</p>
            `);
            $("#dialog").dialog("open");
            console.error('Error:', error);
        }
    });
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
