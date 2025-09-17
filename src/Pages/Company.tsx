import RedefiningLogistics from "../assets/redefining-logistics.png"
const Company = () => {
    return (
        <>
            <section className=" py-10 md:py-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className="max-w-[570px] mx-auto text-3xl md:text-5xl !leading-[1.4] font-bold  w-full ">Redefining Logistics in the Digital Age</h2>
                </div>
            </section>
            <section className="py-10 md:py-16 !pt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-10 items-center">
                    <div>
                        <p className="text-xl md:text-2xl !leading-[1.4] ">
                            At TwoCollect, we are dedicated to reshaping the landscape of shipment and logistics, introducing a seamless blend of technology and innovation. Our company was founded by a dynamic team of four visionaries, with three of our partners based in the bustling city of Dubai and one in the heart of Paris.
                        </p>
                    </div>
                    <div className="flex justify-center md:justify-end">
                        <img
                            src={RedefiningLogistics}
                            alt="Logo Group "
                            className="w-full max-w-[500px] mx-auto"
                        />
                    </div>
                </div>
            </section>

            <section className="pb-10 md:pb-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className=" mx-auto text-3xl md:text-5xl !leading-[1.4] font-bold w-full ">Our Mission</h2>
                    <h3 className="mx-auto text-xl md:text-3xl !leading-[1.4] font-bold  w-full ">Simplifying Shipment, Empowering Businesses</h3>
                    <p>In an era defined by digital advancements, twocollect stands at the forefront of the logistics revolution. We understand the challenges businesses face in the ever-evolving world of shipment, especially in the Middle East. Our mission is clear - to build the Shipping Platform for the 21st Century, catering to the unique needs of both individual senders and businesses, including e-commerce stores</p>
                </div>
            </section>

            <section className=" pb-10 md:pb-16 flex items-center justify-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col gap-4 items-center">
                    <h2 className=" mx-auto text-3xl md:text-5xl !leading-[1.4] font-bold w-full ">Tech-Driven Solutions for Effortless Shipping</h2>
                    <p>What sets twocollect apart is our relentless commitment to integrating technology seamlessly into the shipment process. Whether you're an individual sending a package or a business managing an e-commerce store, our platform serves as the bridge between shippers and shipping companies, ensuring a hassle-free experience. We enable our clients to connect their e-commerce stores effortlessly, providing instant access to shipping rates from a variety of carriers, allowing them to choose the best rates with unparalleled convenience.</p>
                </div>
            </section>
        </>
    );
}

export default Company;
