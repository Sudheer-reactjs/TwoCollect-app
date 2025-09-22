import LoginButton from "../Components/LoginButton";
import StoreIntegratImg from "../assets/store-integrations-img.png";

const StoreIntegrations = () => {
    return (
        <>
            <section className="py-6 md:py-14 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[50svh] lg:px-8 text-center flex flex-col items-center justify-center">
                    {/* Heading */}
                    <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-6">
                        Store Integrations
                    </h1>
                    <p className="max-w-3xl mx-auto md:text-lg mb-8">Connect your e-commerce store with TwoCollect in just a few clicks. We support popular platforms like Shopify, WooCommerce, and more, making shipping automation effortless.</p>
                    {/* Logos - Node Style */}
                    <div className="relative w-full max-w-md mx-auto flex items-center justify-center flex-col">

                        {/* Carrier Nodes */}
                        <div className="">
                            <img src={StoreIntegratImg} alt="Aramex" className="object-contain" />
                        </div>

                    </div>
                    {/* CTA */}
                    <div className="mt-8">
                        <LoginButton />
                    </div>
                </div>
            </section>
        </>
    );
}

export default StoreIntegrations;
