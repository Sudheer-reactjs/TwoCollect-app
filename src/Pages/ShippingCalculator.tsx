import EstimateShippingCosts from "../assets/estimate-shipping-costs.svg"
import TransparentPricing from "../assets/transparent-pricing.svg"
const ShippingCalculator = () => {

  return (
    <>
     <section className="py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                       <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-14">
                           Shipping calculator
                        </h1>
                    <div className="flex flex-wrap justify-center mx-[-15px] gap-y-4 md:gap-y-8 w-full ">

                        <div className="w-full md:w-[50%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                 <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={EstimateShippingCosts}
                                    alt="Estimate Shipping Costs"
                                    className="w-full mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4"> Estimate Shipping Costs</h2>
                                <p>Use our dynamic shipping calculator to get real-time rate estimates based on package dimensions, weight, destination, and preferred carrier service. Save time quoting customers or planning logistics with instant access to live rates.
                                </p>
                            </div>
                        </div>
                         <div className="w-full md:w-[50%] px-[15px] flex flex-col pt-[35px]">
                            <div className="bg-white px-4 py-8 rounded-lg flex  items-center flex-col md:min-h-[100%] shadow-md">
                                  <div className="rounded-full max-w-[60px] md:max-w-[80px] mt-[-70px]">
                                <img
                                    src={TransparentPricing}
                                    alt="Transparent Pricing"
                                    className="w-full mx-auto"
                                />
                                </div>
                                <h2 className="text-xl md:text-3xl font-bold mt-4 mb-4">Transparent Pricing, No Surprises</h2>
                                <p>Compare costs from multiple domestic and international carriers before you book. Whether it’s sameday delivery within the UAE or international express shipping worldwide, TwoCollect’s calculator gives
you a clear breakdown of pricing, transit times, and carrier options.</p>
                            </div>
                        </div>

                    </div>
                  
                </div>
            </section>
                   <section className="py-10 md:py-14 !pt-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  w-full text-center">
                 <a href="start-free" className="cartoon-btn bg-[#a7bd37] inline-block text-white px-8 py-4 rounded-full  transition-colors duration-200 font-medium">
                    Calculate Rate
                </a>
            </div>
        </section>
    </>
  );
};

export default ShippingCalculator;
