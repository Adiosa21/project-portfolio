document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Home Page CTA Alert Action
    const ctaButton = document.getElementById("cta-btn");
    if(ctaButton) {
        ctaButton.addEventListener("click", function() {
            alert("Thank you for choosing Adiosa! We will contact you soon.");
        });
    }

    // 2. WhatsApp Form Routing
    const contactForm = document.getElementById("contact-form");
    if(contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Stop the browser from reloading the page
            event.preventDefault();
            
            // Extract all the data fields from your form
            const clientName = document.getElementById("userName").value;
            const clientPhone = document.getElementById("userPhone").value;
            const clientMessage = document.getElementById("userMessage").value;
            
            // REPLACE THIS NUMBER WITH YOUR OWN WHATSAPP NUMBER
            // Use Uganda country code 256, but do NOT put a plus (+) sign
            const myWhatsAppNumber = "256772482481"; 
            
            // Format the text message clearly
            const typedText = "Hello Adiosa! My name is " + clientName + 
                              ". My phone number is " + clientPhone + 
                              ". I want to request a project: " + clientMessage;
            
            // Turn spaces and symbols into safe web text code
            const encodedText = encodeURIComponent(typedText);
            
            // Create the final click-to-chat web link
            const whatsAppLink = "https://wa.me/" + myWhatsAppNumber + "?text=" + encodedText;
            
            // Open WhatsApp in a brand new browser tab
            window.open(whatsAppLink, '_blank');
            
            // Clear out the form input boxes automatically
            contactForm.reset();
        });
    }
});
