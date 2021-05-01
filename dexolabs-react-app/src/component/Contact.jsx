import React from 'react';
import './css/Contact.css';

const Contact = () => {

    return (
        <>
            <section>
                <div className="container mt-3">

                    {/* Services Heading */}
                    <div className="row">
                        <h3 className="text-center">Contact Us</h3>
                    </div>

                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <form action="#" name="contact_form" onSubmit={ (event) => event.preventDefault()}>

                                {/* Full Name */}
                                <div className="form-group">
                                    <label for="full_name">Full Name</label>
                                    <input type="text" className="form-control"
                                        name="full_name" id="full_name"
                                        placeholder="Full Name..." required
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="form-group">
                                    <label for="contact_number">Contact Number</label>
                                    <input type="number" className="form-control"
                                        name="contact_number" id="contact_number" required
                                        placeholder="Contact Number..." maxLength="10" minLength="10"
                                    />
                                </div>

                                {/* Email Address */}
                                <div className="form-group">
                                    <label for="email_address">Email Address</label>
                                    <input type="mail" className="form-control" name="email_address"
                                        id="email_address" placeholder="Email Address..." required
                                    />
                                </div>

                                {/* Message */}
                                <div className="form-group">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" name="message" id="message" rows="4"
                                        placeholder="Type Your Message...">
                                    </textarea>
                                </div>

                                {/* Submit & Reset Button */}
                                <div className="form-group row">
                                    <div className="col-6">
                                        <button type="reset" className="btn btn-reset btn-block py-2">Reset</button>
                                    </div>
                                    <div className="col-6">
                                        <button type="submit" className="btn btn-submit btn-block py-2">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;