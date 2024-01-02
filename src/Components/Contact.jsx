import React from "react";
import "./Contact.css";

const Contact = () => {

    return(
        <div class="contactus-form-container">
            <div class="container">
                <h1 class="contactus-heading" id="contactme">Contact Me</h1>
                <h3 class="contactus-sub-heading">
                    Questions, thoughts,or just want to say hello?
                </h3>

                <div class="contactus-form-container">
                    <form class="form" action="">
                        <div class="form-field-container">
                            <input class="formfield"
                            type="text"
                            name="name"
                            id=""
                            placeholder="Enter your Name"/>
    
                            <input class="formfield"
                            type="email"
                            name="email"
                            id=""
                            placeholder="Enter your Email Address"/>
                        
                            <input class="formfield"
                            type="text"
                            name="subject"
                            id=""
                            placeholder="Enter your Subject"/>

                            <textarea name="message" 
                            id="" cols="30" rows="10"
                            class="formfield formfield-textarea"
                            placeholder="Enter your Message"></textarea>

                        </div>

                        <div>
                            <button type="submit" class="btn-pink border-none" id="submit-btn">
                                Send Message <i class="submit-icon fa-solid fa-paper-plane"></i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;