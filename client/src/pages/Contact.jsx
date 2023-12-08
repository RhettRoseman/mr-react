import React from "react";
import Header from '../components/Header/index'
import Lottie from 'lottie-react';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faHtml5, faCss3, faJsSquare, faReact, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import '../pages/css/contact.css'


export default function Contact() {

    return (

        // <div className="contact">
        //     <h2>Contact Us below</h2>
        //     <div>
        //         <div>
        //             <h4>Phone:</h4>
        //             <h6>980-867-5309</h6>
        //         </div>
        //         <div>
        //             <h4>Email:</h4>
        //             <h6>rosetech@email.com</h6>
        //         </div>
        //         <div>
        //             <form action="input">
        //                 <label htmlFor="form">
        //
        //                 </label>
        //
        //             </form>
        //         </div>
        //     </div>
        // </div>




        <section className="contactSection">
            <h2>LETS TALK</h2>
            <div className="formContainer">
                <form

                    name="contact"
                    method="POST"
                    onSubmit="submit"
                    action=""
                    className="contactForm"
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            required
                            aria-required="true"
                        />
                    </label>

                    <label htmlFor="email">
                        Email
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            aria-required="true"
                        />
                    </label>

                    <label>
                        Message
                        <textarea
                            name="message"
                            rows="4"
                            required
                            aria-required="true"
                        ></textarea>
                    </label>

                    <button type="submit">Send</button>
                </form>
            </div>
        </section>


    )
}