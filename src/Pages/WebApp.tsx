import ShipPackages from "../assets/ship-packages.png";
import LoginButton from "../Components/LoginButton";
const WebApp = () => {
const ShipPackagesItem = [
    { title: "Examine carrier prices", desc: "Obtain current rates from many carriers to determine the optimal fit." },
    { title: "Reduce delivery costs", desc: "Get the greatest deals on carriers." },
    { title: "Simple integration", desc: "Get the greatest deals on carriers." },
    { title: "Create labels automatically", desc: "Obtain current rates from many carriers to determine the optimal fit." },
    { title: "CSV import", desc: "Get the greatest deals on carriers." },
    { title: "Address validation", desc: "Use our integrated global address validation to prevent unsuccessful deliveries." },
    { title: "Plan your pickups.", desc: "Arrange a carrier pickup using carriers." },
  ];

const PersonalizeDeliveryItem = [
    { title: "Shipping labels and packing slips", desc: "Select from a range of label formats and packing slips based on how you operate." },
    { title: "Branded tracking pages", desc: "Tailor your tracking pages to provide your clients with the ideal brand experience" },
    { title: "Email notifications of shipment", desc: "Send branded shipment emails that tell your story" },
    { title: "An intelligent shipping network", desc: "Orders can be processed more quickly by using rules, preferences, and history when creating labels." }, 
  ];

 const TurnBecomeItem = [
    { title: "Printing labels in bulk", desc: "Print labels for several parcels at once in order to handle a spike in orders." },
    { title: "Manifests", desc: "Produce daily manifests and SCAN forms in order to meet carrier specifications." },
    { title: "Reporting and analytics", desc: "A quick overview of your shipping expenses and effectiveness" },
    { title: "Returns", desc: "To cut expenses, ask for reimbursement for any wasted labels." },
  ];

 const TwoMethodsItem = [
    { title: "Easy-to-use Web App", desc: "Make a tech stack shipping solution that is unique." },
    { title: "Customizable API", desc: "Create a customized shipping solution for your tech stack." },
  ];

    return (
        <>
            <section className="pt-6 md:pt-14 pb-9 min-h-[90svh] flex items-center justify-center">
                <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className="text-4xl md:text-6xl !leading-[1.4] font-bold  w-full ">
                        Create Shipping Labels with TwoCollect
                    </h2>
                    <p className="text-xl md:text-2xl">The shipping solution that automates and streamlines your process to save you time and money.</p>
                    <a href="start-free" className="cartoon-btn bg-[#a7bd37] inline-block text-white px-8 py-4 rounded-full  transition-colors duration-200 font-medium">START FOR FREE</a>
                </div>
            </section>
            
              {/* Ship Your Packages in Minutes */}
            <section className="py-8 md:py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className="text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">
                        Ship Your Packages in Minutes
                    </h2>
                    <p className="text-xl md:text-3xl font-medium !leading-snug">Quickly and seamlessly create labels for your packages</p>
                    <img
                            src={ShipPackages}
                            alt="Ship Packages"
                            className="mx-auto mt-5 "
                        />
                </div>
            </section>
            
              {/* ShipPackagesItem */}
            <section className="py-8 md:pb-16 pt-8 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full">
                    {ShipPackagesItem.map((item, index) => ( 
                        <div key={index} className="w-full md:w-[50%] lg:w-[25%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3  md:min-h-[72px]">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* Personalize Your Delivery */}
            <section className=" ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12  text-center flex flex-col gap-4 items-center">
                    <h2 className="text-4xl md:text-6xl !leading-[1.4] font-bold  w-full 
                     bg-gradient-to-r from-[#156ab0] via-[#0235a8] to-[#156ab0] 
  bg-clip-text text-transparent">
                        Personalize Your Delivery
                    </h2>
                    <p className="text-xl md:text-2xl font-medium max-w-md !leading-snug">Customize customer notifications, shipping labels, and other materials to provide a distinctive, branded experience.</p>
                </div>
            </section>

            {/* ShippingLabelsItem */}
            <section className="py-8 md:pb-16 pt-8 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full">
                    {PersonalizeDeliveryItem.map((item, index) => ( 
                        <div key={index} className="w-full md:w-[50%] lg:w-[25%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3 md:min-h-[72px]">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* Personalize Your Delivery */}
            <section className=" ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12  text-center flex flex-col gap-4 items-center">
                    <h2 className="text-4xl md:text-6xl !leading-[1.4] font-bold  w-full 
                     bg-gradient-to-r from-[#156ab0] via-[#0235a8] to-[#156ab0] 
  bg-clip-text text-transparent">
                        Turn become a Power Shipper
                    </h2>
                    <p className="text-xl md:text-2xl font-medium !leading-snug">Make advantage of strong shipping instruments. Easily handle consumer requests and orders</p>
                </div>
            </section>

            {/* TurnBecomeItem */}
            <section className="py-8 md:pb-16 pt-8 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full">
                    {TurnBecomeItem.map((item, index) => ( 
                        <div key={index} className="w-full md:w-[50%] lg:w-[25%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3  md:min-h-[72px]">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section> 

                        {/* Personalize Your Delivery */}
            <section className=" ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 md:pb-12  text-center flex flex-col gap-4 items-center">
                    <h2 className="text-4xl md:text-6xl !leading-[1.4] font-bold  w-full 
                     bg-gradient-to-r from-[#156ab0] via-[#0235a8] to-[#156ab0] 
  bg-clip-text text-transparent">
                       Two Methods to Apply TwoCollect
                    </h2>
                    <p className="text-xl md:text-2xl font-medium !leading-snug">We offer two ways to integrate shipping with your order fulfillment flow so you can choose the best option for your business</p>
                </div>
            </section>

            {/* TurnBecomeItem */}
            <section className="py-8 md:pb-16 pt-8 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-12 w-full">
                    {TwoMethodsItem.map((item, index) => (  
                        <div key={index} className="w-full md:w-[50%] lg:w-[25%] px-[15px] flex flex-col">
                            <h2 className="text-xl md:text-3xl font-bold mb-3  md:min-h-[72px]">{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>
           <LoginButton />
        </>
    );
}

export default WebApp;
