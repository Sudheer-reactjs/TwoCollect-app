import LoginButton from "../Components/LoginButton";
import ShippingCarriersimage from "../assets/shipping-carriers.png";

const Carriers = () => {
  return (
    <>
      <section className="py-6 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[50svh] lg:px-8 text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-6">
            Shipping Carriers
          </h1>
          <p className="max-w-3xl mx-auto md:text-lg mb-8">
            We partner with trusted domestic and international carriers to
            provide you with fast, reliable, and cost-effective shipping
            solutions — all accessible through one platform.
          </p>

          {/* Logos - Node Style */}
          <div className="relative w-full max-w-[998px] mx-auto flex items-center justify-center flex-col">

            {/* Carrier Nodes */}
            <div className="">
              <img src={ShippingCarriersimage} alt="Shipping Carriers Image" className="object-contain" />
            </div>
            {/* Message */}
          <p className="mt-8 md:text-lg  ">
            These are just some of our carrier partners. We work with more
            providers behind the scenes.
          </p>
          </div>

          {/* CTA */}
          <div className="mt-8">
            <LoginButton />
          </div>
        </div>
      </section>
    </>
  );
};

export default Carriers;
