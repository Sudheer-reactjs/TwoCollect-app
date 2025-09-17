import platform from "../assets/platform-page.png"
import OneIntegration from "../assets/one-integration.png"
import BuiltScale from "../assets/built-scale.png"
import DeveloperFriendly from "../assets/developer-friendly.png"
const Platform = () => {
    return (
        <>
            <section className="py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <p className="text-xl md:text-3xl !leading-[1.4]  font-medium ">
                            TwoCollect’s flexible API helps you automate shipping across multiple carriers — from label creation to tracking and returns. Connect, scale, and simplify your logistics at every step.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={platform}
                            alt="vnimc"
                            className="w-full "
                        />
                    </div>
                </div>
            </section>

            <section className=" ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16 text-white text-center flex flex-col gap-4 items-center bg-black">
                    <h2 className="text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">
                        Connect to Leading Carriers — with One Integration
                    </h2>
                    <p className="text-xl md:text-2xl font-medium !leading-snug">TwoCollect gives your business access to top domestic and international shipping providers through a single API.<br /> Maximize speed, reduce cost per shipment, and improve customer experience without managing multiple integrations</p>
                </div>
            </section>

            <section className="py-8 md:py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5 md:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">
                       Rate Comparison
                    </h2>
                    <p className="text-xl  font-medium !leading-snug">Instantly fetch and compare rates from multiple carriers in real time — pick the best option for every shipment.</p>
                   </div>
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full ">

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3">Shipment Tracking</h2>
                            <p>Provide real-time tracking updates to your customers, directly from your system.</p>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3">Easy Returns</h2>
                            <p>Simplify the return process with automated return label generation and reverse tracking.</p>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3">Add “Label generator” </h2>
                            <p>Create and print carrier-compliant labels, with bulk and custom options for fast processing</p>
                        </div>

                    </div>
                </div>
            </section>

                        <section className="py-8 md:py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5 md:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">
                       Why Choose the TwoCollect API?
                    </h2>
                    </div>
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full ">

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                             <img
                            src={OneIntegration}
                            alt="vnimc"
                            className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                        />
                            <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">One Integration, Many Carriers</h2>
                            <p>Access a growing network of domestic and international carriers through a single, unified API.</p>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                                       <img
                            src={BuiltScale}
                            alt="vnimc"
                            className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                        />
                            <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">Built for Scale</h2>
                            <p>Whether you're shipping 10 or 10,000 packages, our platform scales with your needs — no extra complexity.</p>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col">
                                       <img
                            src={DeveloperFriendly}
                            alt="vnimc"
                            className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                        />
                            <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">Developer-Friendly </h2>
                            <p>Enjoy clear documentation, test environments, and fast integration with support when you need it.</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Platform;
