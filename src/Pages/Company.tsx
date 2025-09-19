import AboutUsIcon from "../assets/about-us.png"
import CareersIcon from "../assets/careers-icon.png"
import PressMediaIcon from "../assets/press-media.png"
const Company = () => {
    return (
        <>
  <section className="py-6 md:py-14 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-14">
                            Company
                        </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                        {/* Small businesses */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={AboutUsIcon}
                                    alt="About Us Icon"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 ">About Us</h3>
                            <p className="leading-relaxed">
                               TwoCollect is a UAE-based shipping technology company designed to streamline logistics for
businesses of all sizes. We bridge the gap between carriers and merchants by offering a modern
aggregator platform with real-time access to multiple shipping services.
                            </p>
                        </div>

                        {/* Developers */}
                        <div className="flex flex-col items-center text-center ">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={CareersIcon}
                                    alt="Careers Icon"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 ">Careers</h3>
                            <p className="leading-relaxed">
                                We’re building the future of shipping — and we need talented people to join us. Explore open
roles across tech, operations, and customer success, and become part of a fast-growing, impactdriven team.

                            </p>
                        </div>

                        {/* E-commerce platforms and 3PLs */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={PressMediaIcon}
                                    alt="Press Media Icon"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 ">
                                Press and Media
                            </h3>
                            <p className="leading-relaxed">
                               Stay up-to-date with our latest announcements, media mentions, and thought leadership.
Download our press kit or contact us for interviews and media inquiries
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    );
}

export default Company;
