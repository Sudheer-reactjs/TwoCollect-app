import LoginButton from "../Components/LoginButton";
import StoreIntegratImg from "../assets/store-integrations-img.png";
import TransparentPricing from "../assets/transparent-pricing.svg"
import Wallet from "../assets/wallet.svg"
import SimpleFlexible from "../assets/simple-flexible.svg"
import PayShip from "../assets/pay-ship.svg"
import RealTimeTracking from "../assets/real-time-tracking.svg"
import SafeReliable from "../assets/safe-reliable.svg"

const StoreIntegrations = () => {
    return (
        <>
            <section className="py-6 md:py-14 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6  lg:px-8 text-center flex flex-col items-center justify-center">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-6">
                        Store Integrations
                    </h1>
                    <p className="max-w-3xl mx-auto md:text-lg mb-8">Connect your e-commerce store with TwoCollect in just a few clicks. We support popular platforms like Shopify, WooCommerce, and more, making shipping automation effortless.</p>
                    {/* Logos - Node Style */}
                    <div className="relative w-full mx-auto flex items-center justify-center flex-col">

                        {/* Carrier Nodes */}
                        <div className="">
                            <img src={StoreIntegratImg} alt="Aramex" className="object-contain" />
                        </div>

                    </div>
                    {/* CTA */}

                </div>
            </section>
            <section className="pb-4 md:pb-6 pt-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-3 text-center ">
                        Payment & Wallet Options
                    </h2>
                    <p className="max-w-3xl mx-auto md:text-lg mb-8 md:mb-14">At TwoCollect, we make it simple and secure for you to manage your shipping payments. Our wallet system ensures smooth transactions without delays or hidden charges.</p>
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-8 w-full ">

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={Wallet}
                                        alt="Wallet Top-Up"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4"> Wallet Top-Up</h2>
                                <p>Easily add funds to your TwoCollect Wallet using your preferred payment method. Once your wallet is topped up, you can instantly pay for shipments without entering card details each time.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={SimpleFlexible}
                                        alt="Simple & Flexible"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Simple & Flexible</h2>
                                <p>Add any amount you need, whenever you need it. Your balance is always available for immediate use.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={PayShip}
                                        alt="Pay as You Ship"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Pay as You Ship</h2>
                                <p>All shipping charges are automatically deducted from your wallet balance. No need to handle multiple invoices or repeated payments.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={RealTimeTracking}
                                        alt="Real-Time Tracking"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Real-Time Tracking</h2>
                                <p>View your wallet balance anytime. Track all top-ups and deductions directly in your dashboard.</p>
                            </div>
                        </div>

                        <div className="w-full md:w-[33.333%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                    <img
                                        src={SafeReliable}
                                        alt="Safe & Reliable"
                                        className="w-full mx-auto"
                                    />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Safe & Reliable</h2>
                                <p>Your payments are secured with industry-leading encryption. Only you control when and how funds are added.</p>
                            </div>
                        </div>

                    </div>
                  <p className="max-w-xl mx-auto md:text-lg mt-8 md:mt-14">With the TwoCollect Wallet, you stay in full control of your shipping expenses — fast, simple, and transparent.</p>
                </div>
            </section>
            <div className="mt-8">
                <LoginButton />
            </div>
        </>
    );
}

export default StoreIntegrations;
