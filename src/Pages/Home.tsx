import vnimc from "../assets/vnimc_1.png"
import smallbusniess from "../assets/small-businesses.png"
import developers from "../assets/developers.png"
import commerceplatforms from "../assets/e-commerce-platforms.png"
const Home = () => {
    return (
        <>
            <section className="py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl !leading-[1.4] font-bold mb-2">
                            Simplify your Shipping with One Platform
                        </h1>
                        <h3 className="text-2xl md:text-3xl  mb-6">A Technology Showcase</h3>
                        <p className="text-xl md:text-2xl !leading-[1.4] ">
                            TwoCollect offers you scalable shipping solutions, the best rates,
                            and top-notch service, whether you use our app for shipping or our
                            API to drive your logistics operation.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={vnimc}
                            alt="vnimc"
                            className="w-full "
                        />
                    </div>
                </div>
            </section>

            <section className="pt-6 md:pt-14 pb-9">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-5xl !leading-[1.4]  font-bold mx-auto max-w-80 md:max-w-md text-center w-full mb-12 
  bg-gradient-to-r from-[#156ab0] via-[#0235a8] to-[#156ab0] 
  bg-clip-text text-transparent">
                        Solutions for Every Shipping Need
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 md:mt-[-140px]">
                        {/* Small businesses */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-5">
                                <img
                                    src={smallbusniess}
                                    alt="smallbusniess"
                                    className="max-w-[80px] md:max-w-[110px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-20 max-w-80">Small Businesses</h3>
                            <p className="leading-relaxed">
                                Connect your store, print labels instantly, and access competitive rates from trusted domestic and international carriers.<br />
                                Give your customers real-time tracking and smooth return options — all without technicalcomplexity.
                            </p>
                        </div>

                        {/* Developers */}
                        <div className="flex flex-col items-center text-center md:mt-[160px]">
                            <div className="mb-3 md:mb-5">
                                <img
                                    src={developers}
                                    alt="developers"
                                    className="max-w-[80px] md:max-w-[110px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-20 max-w-80">Developers</h3>
                            <p className="leading-relaxed">
                                Build custom shipping experiences with TwoCollect&rsquo;s robust API and detailed documentation.
                                Manage complex operations securely, integrate with multiple carriers, and launch faster with
                                our dedicated developer support.

                            </p>
                        </div>

                        {/* E-commerce platforms and 3PLs */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-5">
                                <img
                                    src={commerceplatforms}
                                    alt="commerceplatforms"
                                    className="max-w-[80px] md:max-w-[110px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-20 max-w-80">
                                E-Commerce and Enterprise
                            </h3>
                            <p className="leading-relaxed">
                                Streamline high-volume shipping with automated label generation, rate comparison, and carrier
                                integrations.<br />
                                Scale confidently while delivering reliable tracking and return experiences to your customers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home; 
