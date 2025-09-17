import shippingInsuranceImg from "../assets/shipping-insurance.png"
import shippingInsuranceStep from "../assets/shipping-insurance-step.png"
import LogoGroup from "../assets/logo-group.png"
import ProtectPackages from "../assets/protect-packages.png"
import { CheckCircle } from "lucide-react";
const ShippingInsurance = () => {
    const benefits = [
        {
            title: "Simple Claims Procedure",
            description:
                "File a claim fast and conveniently with an electronic claims process. Additionally, you can monitor the progress of your claim through an online portal.",
        },
        {
            title: "Quick Compensation",
            description:
                "Recover your claims fast with an electronic transfer. Avoid waiting around for payment, and maintain a consistent cash flow.",
        },
        {
            title: "Inexpensive Premiums",
            description:
                "Maintain low insurance costs for both your company and your clients. As little as 1.25% of the order's total amount will be your payment.",
        },
    ];
    return (
        <>
            <section className="py-10 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold w-full mb-3">
                            Ship with assurance thanks to shipping insurance
                        </h1>
                        <p className="text-xl md:text-2xl !leading-[1.4]  mb-8">
                            Every day, more than 1.7 million parcels are lost nationwide, 10% of shipments arrive damaged, and an increasing number of buyers indicate they won't likely make another purchase after a negative delivery experience. By including shipping insurance with your shipments, you can protect purchases and give customers a better experience.
                        </p>
                        <a href="#" className="bg-bluecustom text-white px-4 py-3 rounded-full hover:bg-bluecustomhover transition-colors duration-200 font-medium">START FOR FREE</a>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={shippingInsuranceImg}
                            alt="Shipping Insurance"
                            className="w-full "
                        />
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16 !pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={shippingInsuranceStep}
                            alt="Shipping shippingInsurance Step "
                            className="w-full "
                        />
                    </div>
                    <div className="flex gap-4 md:gap-8 flex-col">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 md:gap-6">
                                <CheckCircle className="w-10 h-10 md:w-20 md:h-20 text-bluecustom flex-shrink-0" />
                                <div>
                                    <h3 className="text-xl md:text-3xl font-bold mb-3">{item.title}</h3>
                                    <p className="">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16 !pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <h2 className="text-xl md:text-5xl !leading-[1.4] font-bold w-full mb-3">
                            Providing a very high level of service
                        </h2>
                        <p className="mb-8">
                            With our third-party insurance provider, we allow you to add shipping insurance to any label. In order to provide your customers extra attention and white-glove service at a reduced cost, third- party insurance providers are only concerned with paying the full reported value of your packages. Almost all shipping companies in the globe, including these significant carriers, are covered for orders.
                        </p>
                        <a href="#" className="bg-bluecustom text-white px-4 py-3 rounded-full hover:bg-bluecustomhover transition-colors duration-200 font-medium">START FOR FREE</a>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={LogoGroup}
                            alt="Logo Group "
                            className="w-full max-w-[500px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="py-10 md:py-16 !pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={ProtectPackages}
                            alt="Shipping shippingInsurance Step "
                            className="w-full "
                        />
                    </div>
                    <div className="text-center flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="#0039A6">
                            <circle cx="12" cy="12" r="12" fill="#0039A6" />
                            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="white" />
                        </svg>

                        <h2 className="text-xl md:text-5xl !leading-[1.4] font-bold w-full mt-3 mb-3 max-w-80">
                            Protect Your Packages
                        </h2>
                        <p className="mb-8">
                            Whether your orders are worth $15 or $1500, using Shippo to add shipping insurance will keep them safe and improve the customer experience. By following this one procedure, you may quickly get your money back and safeguard your company from lost, stolen, or damaged deliveries.
                        </p>
                    </div>
                </div>
            </section>
            <section className=" pb-12 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className="max-w-[420px] mx-auto text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">Obtain Insurance by Using Our API</h2>
                    <p>Use the twocollect API to programmatically insure your shipments to protect yourself from financial loss due to misplaced or damaged goods. You can buy insurance directly from the carriers or through our third-party insurance provider using our built-in insurance service. View the documentation for information about our dependable, adaptable, and 99.99% uptime API.</p>
                </div>
            </section>
        </>
    );
}

export default ShippingInsurance;
