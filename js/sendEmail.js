function sendMail(contactForm) {
    emailjs.send("service_nk0ii1j", "boderg", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "subject": contactForm.subject.value,
            "message": contactForm.message.value
        })
        .then(
            function (response) {
                // console.log("SUCCESS", response);
                var toastHTML = `<span>
                                    <i class="material-icons deep-orange-text">thumb_up</i>
                                    Your email was successfully sent to me! 
                                    <br> 
                                    I'll get back to you as soon as possible.
                                </span>`;
                M.toast({html: toastHTML, displayLength: 7500, 
                    classes: 'amber-text text-accent-2 myToast', inDuration: 300, outDuration: 375});
                contactForm.reset();
            },
            function (error) {
                // console.log("FAILED", error);
                var toastHTML = `<span>
                                    <i class="material-icons deep-orange-text">thumb_down</i>
                                    Your email was not sent to me! 
                                    <br> 
                                    Please try again later.
                                </span>`;
                M.toast({html: toastHTML, displayLength: 7500, 
                    classes: 'amber-text text-accent-2 myToastError', inDuration: 300, outDuration: 375});
                contactForm.reset();
            }
        );
    return false;
}