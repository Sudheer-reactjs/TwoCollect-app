import platform from "../assets/platform-page.png"
import OneIntegration from "../assets/one-integration.svg"
import BuiltScale from "../assets/built-scale.svg"
import DeveloperFriendly from "../assets/developer-friendly.svg"
import ContactImg from "../assets/connect.svg"
import RateComparison from "../assets/rate-comparison.svg"
import LabelGenerator from "../assets/label-generator.svg"
import ShipmentTracking from "../assets/shipment-tracking.svg"
import EasyReturns from "../assets/easyreturns.svg"
const Platform = () => {
    return (
        <>
            <section className="py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <p className="text-xl md:text-3xl !leading-[1.4]  font-medium ">
                            TwoCollect&rsquo;ble API helps you automate shipping across multiple carriers from label creation to tracking and returns. Connect, scale, and simplify your logistics at every step.
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

            <section className="">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-5 md:gap-4 items-center">
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-8 w-full ">

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={ContactImg}
                                    alt="Contact"
                                    className="w-full  mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">Connect to Leading Carriers with One Integration</h2>
                                <p>TwoCollect gives your business access to top domestic and international shipping providers through a single API.<br />
                                    Maximize speed, reduce cost per shipment, and improve customer experience without managing
                                    multiple integrations
                                </p>
                            </div>
                        </div>
                         <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={RateComparison}
                                    alt="Rate Comparison"
                                    className="w-full mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[108px]">Rate Comparison</h2>
                                <p>Instantly fetch and compare rates from multiple carriers in real time, pick the best option for every shipment</p>
                            </div>
                        </div>
                         <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={LabelGenerator}
                                    alt="Label Generator"
                                    className="w-full  mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[108px]">Add “Label generator”  </h2>
                                <p>Create and print carrier-compliant labels, with bulk and custom options for fast processing.</p>
                            </div>
                        </div>
                         <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                 <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={ShipmentTracking}
                                    alt="Shipment Tracking"
                                    className="w-full  mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">Shipment Tracking</h2>
                                <p>Provide real-time tracking updates to your customers, directly from your system.</p>
                            </div>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={EasyReturns}
                                    alt="Easy Returns"
                                    className="w-full mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-3 md:min-h-[72px]">Easy Returns</h2>
                                <p>Simplify the return process with automated return label generation and reverse tracking.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="pt-6 pb-9 md:pt-14 md:pb-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
                    <h2 className="text-3xl md:text-5xl !leading-[1.4]  font-bold mx-auto max-w-80 md:max-w-md text-center w-full mb-12 
  bg-gradient-to-r from-[#156ab0] via-[#0235a8] to-[#156ab0] 
  bg-clip-text text-transparent">
                        Why Choose the TwoCollect API?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 md:mt-[-140px]">
                
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={OneIntegration}
                                    alt="One Integration"
                                    className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-14 max-w-80 md:min-h-[72px]">One Integration, Many Carriers</h3>
                            <p className="leading-relaxed">
                                Access a growing network of domestic and international carriers through a single, unified API.
                            </p>
                        </div>

                
                        <div className="flex flex-col items-center text-center md:mt-[160px]">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={BuiltScale}
                                    alt="Built Scale"
                                    className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-14 max-w-80 ">Built for Scale</h3>
                            <p className="leading-relaxed">Whether you're shipping 10 or 10,000 packages, our platform scales with your needs — no extra complexity.</p>
                        </div>

                   
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={DeveloperFriendly}
                                    alt="vnimc"
                                    className="w-full max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5 md:mb-14 max-w-80 md:min-h-[72px]">
                                Developer-Friendly
                            </h3>
                            <p className="leading-relaxed">
                                Enjoy clear documentation, test environments, and fast integration with support when you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Platform;
