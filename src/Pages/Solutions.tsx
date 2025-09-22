import Business from "../assets/business.svg"
import developers from "../assets/developers.svg"
import EnterpriseClients from "../assets/enterprise-clients.svg"
import LoginButton from "../Components/LoginButton";

const Solutions = () => {
    return (
        <>
            <section className="py-6 md:py-14 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-14">
                            Solutions
                        </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7">
                        {/* Small businesses */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={Business}
                                    alt="Business"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 md:min-h-[72px]">For E-Commerce Businesses</h3>
                            <p className="leading-relaxed">
                               Automate your entire shipping flow with direct integrations to your store. TwoCollect connects
with leading e-commerce platforms and marketplaces, enabling seamless order import, shipping
rate selection, label generation, and tracking — all without manual steps.
                            </p>
                        </div>

                        {/* Developers */}
                        <div className="flex flex-col items-center text-center ">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={developers}
                                    alt="developers"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 md:min-h-[72px]">For Small Businesses</h3>
                            <p className="leading-relaxed">
                                Run your logistics like a pro without hiring a team. TwoCollect offers simple tools to help you
ship more efficiently: compare courier rates, generate labels, track deliveries, and manage
returns with just a few clicks. Ideal for growing brands.

                            </p>
                        </div>

                        {/* E-commerce platforms and 3PLs */}
                        <div className="flex flex-col items-center text-center">
                            <div className="mb-3 md:mb-6">
                                <img
                                    src={EnterpriseClients}
                                    alt="Enterprise Clients"
                                    className="max-w-[60px] md:max-w-[80px] mx-auto"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-5  max-w-80 md:min-h-[72px]">
                                For Enterprise Clients
                            </h3>
                            <p className="leading-relaxed">
                               Powerful shipping automation for high-volume merchants, manufacturers. Access our API,
onboard multiple locations or brands, and manage thousands of shipments per day with
scalability, speed, and centralized control. Custom onboarding and carrier negotiation available.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <LoginButton />
        </>
    );
}

export default Solutions;
