import { ChevronDown } from "lucide-react";


export default function BecomePartner() {

    return (
        <>
            <section className="py-6 md:py-14 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[50svh] lg:px-8 text-center flex flex-col items-center justify-center">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-6">
                        Become a Partner
                    </h1>
                    <form className="space-y-5 text-left">
                        {/* First Row - Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div>
                                <label className="block text-sm  mb-2">
                                    First Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm  mb-2">
                                    Last Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>

                        {/* Second Row - Email and Mobile */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm  mb-2">
                                    Business Email*
                                </label>
                                <input
                                    type="email"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your business email"
                                />
                            </div>
                            <div>
                                <label className="block text-sm  mb-2">
                                    Mobile Number*
                                </label>
                                <input
                                    type="tel"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your mobile number"
                                />
                            </div>
                        </div>

                        {/* Third Row - Job Title and Company Name */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm  mb-2">
                                    Job Title*
                                </label>
                                <input
                                    type="text"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your job title"
                                />
                            </div>
                            <div>
                                <label className="block text-sm  mb-2">
                                    Company Name*
                                </label>
                                <input
                                    type="text"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your company name"
                                />
                            </div>
                        </div>

                        {/* Fourth Row - Website and Company Location */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm  mb-2">
                                    Website Link
                                </label>
                                <input
                                    type="url"
                                    className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600"
                                    placeholder="Enter your website URL"
                                />
                            </div>
                            <div>
                                <label className="block text-sm  mb-2">
                                    Company Location*
                                </label>
                                <div className="relative">
                                <select className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600 text-gray-500">
                                    <option value="">Please Select</option>
                                    <option value="north-america">North America</option>
                                    <option value="europe">Europe</option>
                                    <option value="asia">Asia</option>
                                    <option value="australia">Australia</option>
                                    <option value="south-america">South America</option>
                                    <option value="africa">Africa</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Fifth Row - Company Type and Shipments */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm  mb-2">
                                    Company Type*
                                </label>
                                <div className="relative">
                                <select className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600 text-gray-500">
                                    <option value="">Please Select</option>
                                    <option value="shipper">Shipper</option>
                                    <option value="forwarder">Freight Forwarder</option>
                                    <option value="carrier">Carrier</option>
                                    <option value="3pl">3PL Provider</option>
                                    <option value="broker">Customs Broker</option>
                                    <option value="other">Other</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm  mb-2">
                                    Number Of Shipments (Monthly)*
                                </label>
                                 <div className="relative">
                                <select className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600 text-gray-500">
                                    <option value="">Please Select</option>
                                    <option value="1-10">1-10 shipments</option>
                                    <option value="11-50">11-50 shipments</option>
                                    <option value="51-100">51-100 shipments</option>
                                    <option value="101-500">101-500 shipments</option>
                                    <option value="500+">500+ shipments</option>
                                </select>
                                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="block text-sm  mb-2">
                                Your Message
                            </label>
                            <textarea
                                rows={6}
                                className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 focus:outline-none focus:border-blue-600 resize-vertical"
                                placeholder="Enter your message here..."
                            />
                        </div>

                        {/* Terms and Conditions */}
                        <div className="text-sm text-gray-600">
                            By clicking Submit, you consent to receive updates, newsletters, promotional offers, and other information from TwoCollect. You also acknowledge and agree to TwoCollect’s{" "}
                            <a href="privacy" className="text-bluecustom hover:underline">
                               Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="terms" className="text-bluecustom hover:underline">
                                Terms & Conditions
                            </a>
                            .
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                className="bg-bluecustom text-white px-4 py-3 w-full max-w-44 rounded-full hover:bg-bluecustomhover transition-colors duration-200 font-medium"
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