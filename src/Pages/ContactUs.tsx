import HelpCenter from "../assets/help-center.svg"
import ContactUsIcon from "../assets/contact-us-icon.svg"

const ContactUs = () => {
    return (
        <>
            <section className="py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-14">
                        Contact Us
                    </h1>
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-8 w-full ">

                        <div className="w-full md:w-[50%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={HelpCenter}
                                        alt="Help Center"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4"> Help Center</h2>
                                <p>Access our knowledge base to get answers to frequently asked questions on billing,
                                    shipping, platform features, integrations.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[50%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={ContactUsIcon}
                                        alt="Contact Us Icon"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Contact Us</h2>
                                <p>Need help or have a question? Reach out to our support team via email <a href="mailto:support@twocollect.com" className="underline"> (support@twocollect.com)</a>  or through our <b>Contact Form</b>. We aim to respond within 24 hours on business days.</p>
                            </div>
                        </div>

                    </div>
                    <form className="space-y-3 bg-white shadow-md rounded-xl p-6 text-left w-full max-w-3xl mt-10">
                        <div>
                            <label className="block text-sm mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Phone Number</label>
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm mb-1">Message</label>
                            <textarea
                                placeholder="Message"
                                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 h-40"
                                required
                            />
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="w-full bg-bluecustom text-white text-base font-medium py-4 px-4 rounded-full hover:opacity-90 transition"
                            >
                                Submit
                            </button>
                        </div>
                    </form>

                </div>
            </section>

        </>
    );
}

export default ContactUs;
