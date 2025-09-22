import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals or small sellers just getting started.",
      price: "FREE",
      priceSubtext: "",
      isPopular: false,
      buttonText: "Subscribe",
      features: [
        "Unlimited shipments using TwoCollect’s best discounted rates",
        "Up to **30 orders/month** without fees using your own contracts Additional orders at **AED 0.9 each**",
        "Additional orders at AED 0.9 each",
        "1 sales channel and 1 carrier integration",
        "Shipping calculator and label printing",
        "Email support"
      ]
    },
    {
      name: "Growth",
      description: "Ideal for small businesses managing moderate shipping volumes.",
      price: "AED 79",
      priceSubtext: "Per month",
      isPopular: false,
      buttonText: "Subscribe",
      features: [
        "Up to **200 orders/month** without fees using your own contracts Additional orders at **AED 0.7 each**",
        "Up to 3 sales channels and 3 carrier integrations",
        "Priority email support"
      ]
    },
    {
      name: "Professional",
      description: "Designed for growing businesses with higher shipping volumes.",
      price: "AED 199",
      priceSubtext: "Per month",
      isPopular: true,
      buttonText: "Subscribe",
      features: [
        "Up to **500 orders/month** without fees using your own contracts – Additional orders at **AED 0.5 each**",
        "Advanced features including:<br/>• Optimized shipping tools<br/>• Analytics dashboard",
        "Email and chat support"
      ]
    }
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-16">
          Pricing
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl py-8 px-4 md:p-4 md:py-12 shadow-lg transition-all duration-500 hover:scale-[1.03]  ${
                plan.isPopular
                  ? 'bg-yellow-400'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-bluecustom text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-3">{plan.name} Plan</h3>
              </div>

              {/* Price */}
              <div className="mb-6 flex items-center gap-2">
                <div className="text-3xl font-bold mb-1">{plan.price}</div>
                {plan.priceSubtext && (
                  <div
                    className={`text-base max-w-16 font-medium leading-4 ${
                      plan.isPopular ? 'text-gray-700' : 'text-gray-500'
                    }`}
                  >
                    {plan.priceSubtext}
                  </div>
                )}
              </div>

              {/* Subscribe Button */}
              <button className="w-full py-3 px-4 rounded-full font-semibold text-white bg-bluecustom hover:bg-bluecustomhover transition-all duration-200 mb-8">
                {plan.buttonText}
              </button>

              {/* Features */}
              <div className="space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.isPopular ? 'bg-white' : 'bg-gray-100'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.isPopular ? 'text-yellow-400' : 'text-gray-600'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm leading-relaxed ${
                        feature.startsWith('•') ? 'ml-4' : ''
                      }`}
                      dangerouslySetInnerHTML={{
                        __html: feature.replace(
                          /\*\*(.*?)\*\*/g,
                          '<strong>$1</strong>'
                        ),
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Enterprise Plan (Coming Soon) */}
          <div className="text-center rounded-2xl p-8 shadow-lg transition-all duration-500 hover:scale-[1.03] bg-gray-200 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">Enterprise Plan (Coming Soon)</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
