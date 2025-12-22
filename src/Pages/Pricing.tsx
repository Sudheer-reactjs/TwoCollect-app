import { useState } from "react";
import { Check } from "lucide-react";

type DirhamIconProps = {
  size?: number;
  className?: string;
};
const DirhamIcon = ({ size = 26, className = "" }: DirhamIconProps) => (
  <svg width={size} height={size} className={className} viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_141_8)">
      <path d="M1.6524 7.15707C1.6072 7.15543 1.57461 7.15329 1.54202 7.15324C1.36932 7.15289 1.19656 7.15149 1.02385 7.15338C0.68855 7.15712 0.429089 7.01346 0.232962 6.74792C0.112225 6.58443 0.044109 6.39952 0.015208 6.19841C-0.00572023 6.05296 0.00439509 5.90775 0.00110636 5.76569C0.026021 5.75074 0.0378305 5.76415 0.0498393 5.77491C0.082029 5.80371 0.112774 5.83416 0.14591 5.86176C0.288621 5.98056 0.450964 6.04583 0.63897 6.04503C0.947861 6.04369 1.2568 6.04484 1.56574 6.04444C1.59136 6.04444 1.61692 6.0406 1.64094 6.03866C1.65529 5.95489 1.65708 5.07132 1.64378 4.96773C1.61622 4.94585 1.58184 4.95447 1.54995 4.95432C1.36727 4.95348 1.18455 4.95353 1.00188 4.95397C0.81387 4.95442 0.641312 4.90444 0.485795 4.79801C0.369095 4.71813 0.27432 4.61708 0.197433 4.49858C0.0731594 4.30689 0.0137131 4.09477 0.00250158 3.86874C-0.002581 3.76679 0.00165448 3.66434 0.00165448 3.56608C0.028064 3.55048 0.0391759 3.56583 0.0507362 3.57615C0.0755512 3.59822 0.0989211 3.62189 0.123786 3.64386C0.276811 3.7789 0.453605 3.84971 0.659599 3.84831C0.955236 3.84637 1.25087 3.84782 1.54651 3.84782C1.57616 3.84782 1.60586 3.84782 1.63999 3.84782C1.64467 3.82499 1.65 3.80666 1.6518 3.78797C1.65374 3.76824 1.65235 3.74816 1.65235 3.72823C1.65235 3.11039 1.65364 2.49261 1.65185 1.87478C1.6508 1.50819 1.61174 1.14583 1.51302 0.791492C1.47017 0.637719 1.41491 0.488581 1.34201 0.346219C1.29034 0.245364 1.23099 0.149742 1.15804 0.0627901C1.14593 0.0483895 1.13547 0.0325936 1.1264 0.0204353C1.13522 -0.00318374 1.15077 0.00159986 1.16272 0.00110157C1.19257 -9.43301e-05 1.22252 0.000553449 1.25242 0.000553449C2.53791 0.000553449 3.8234 0.00130089 5.1089 5.3284e-06C5.42143 -0.000293647 5.73321 0.0119643 6.04399 0.0430079C6.75824 0.114313 7.45212 0.268784 8.1115 0.559886C8.63576 0.791343 9.10993 1.09819 9.52202 1.49847C9.97905 1.94235 10.3202 2.46356 10.5619 3.05164C10.6579 3.28529 10.7345 3.52527 10.7986 3.76943C10.8052 3.7945 10.8141 3.81891 10.8232 3.84742C10.8643 3.84742 10.9006 3.84742 10.9369 3.84742C11.1794 3.84742 11.4219 3.84836 11.6644 3.84717C11.8832 3.84612 12.0747 3.91957 12.2406 4.05904C12.464 4.24695 12.5865 4.49206 12.6335 4.77698C12.658 4.92517 12.653 5.07496 12.6505 5.2244C12.6504 5.22973 12.6448 5.23501 12.6387 5.24572C12.6283 5.24014 12.6162 5.23626 12.6074 5.22858C12.5774 5.20242 12.549 5.17437 12.519 5.14816C12.3761 5.02324 12.2101 4.95367 12.02 4.95218C11.6945 4.94969 11.3689 4.95138 11.0434 4.95168C11.0273 4.95168 11.0112 4.95537 10.9891 4.95806C10.9879 4.98636 10.9845 5.01188 10.9862 5.03709C11.007 5.34573 11.0067 5.65432 10.9866 5.96297C10.9852 5.98539 10.9864 6.00801 10.9864 6.02844C11.0217 6.05151 11.0559 6.04279 11.0881 6.04294C11.2674 6.04384 11.4468 6.04439 11.6262 6.04314C11.9606 6.0408 12.2216 6.18216 12.4179 6.448C12.5407 6.61433 12.61 6.80229 12.6376 7.00714C12.6559 7.14292 12.651 7.2789 12.651 7.41499C12.651 7.42356 12.6459 7.43218 12.6412 7.44698C12.6268 7.43866 12.615 7.43417 12.606 7.4263C12.5761 7.39994 12.5482 7.37139 12.5179 7.34558C12.3712 7.22065 12.2042 7.15119 12.0084 7.15219C11.643 7.15413 11.2777 7.15274 10.9123 7.15274C10.886 7.15274 10.8598 7.15274 10.8291 7.15274C10.8185 7.18851 10.8082 7.21926 10.8003 7.25065C10.6716 7.76265 10.4791 8.24828 10.1997 8.69749C9.77934 9.37323 9.21128 9.89055 8.51148 10.2657C8.07299 10.5008 7.60848 10.6665 7.12543 10.7817C6.80224 10.8589 6.47506 10.9125 6.1444 10.9466C5.79385 10.9828 5.4426 11.0001 5.09026 11C3.81139 10.9997 2.53258 10.9998 1.25371 10.9998H1.126C1.13203 10.9823 1.13273 10.9686 1.1399 10.9609C1.32601 10.7616 1.43255 10.5196 1.50988 10.2633C1.57915 10.0338 1.61587 9.79812 1.63645 9.55924C1.6519 9.3801 1.6524 9.20102 1.6524 9.02168C1.65245 8.44042 1.6524 7.85912 1.6524 7.27786C1.6524 7.24173 1.6524 7.20556 1.6524 7.15707ZM3.30762 0.561082C3.30692 0.609915 3.30588 0.64928 3.30588 0.688645C3.30578 1.69798 3.30583 2.70737 3.30583 3.71672C3.30583 3.73994 3.30468 3.76331 3.30638 3.78643C3.30772 3.80516 3.31246 3.82365 3.31664 3.84787C3.36408 3.84787 3.40688 3.84787 3.44963 3.84787C5.23601 3.84772 7.02239 3.84757 8.80876 3.84742C8.83199 3.84742 8.85531 3.84841 8.87848 3.84702C8.89731 3.84587 8.91595 3.84179 8.94196 3.8379C8.92352 3.74173 8.90788 3.65049 8.88839 3.56005C8.80782 3.18603 8.6954 2.82238 8.53147 2.47567C8.3596 2.11217 8.13776 1.78384 7.84746 1.504C7.50688 1.17568 7.10625 0.947408 6.65963 0.797123C6.19637 0.641207 5.71776 0.568606 5.23133 0.560883C4.61389 0.551116 3.99621 0.557096 3.37863 0.556548C3.35915 0.556548 3.33951 0.558989 3.30762 0.561082ZM3.31554 10.4448C3.35685 10.4448 3.39293 10.4448 3.42896 10.4448C3.89072 10.4448 4.35249 10.4436 4.81426 10.4453C5.05702 10.4462 5.29875 10.4339 5.54027 10.4095C5.81169 10.382 6.07947 10.3356 6.34297 10.2655C6.7406 10.1597 7.11492 10.001 7.45525 9.76727C7.89739 9.46357 8.23154 9.06593 8.4772 8.59121C8.70039 8.15988 8.83627 7.69991 8.92671 7.22504C8.93075 7.20381 8.93897 7.18019 8.91859 7.15687C8.90797 7.15573 8.89507 7.15314 8.88211 7.15319C7.03181 7.15403 5.1815 7.15503 3.33119 7.15618C3.32805 7.15618 3.32451 7.15712 3.32182 7.15872C3.31908 7.16036 3.31719 7.1634 3.3149 7.16579C3.30304 7.24736 3.30194 10.3388 3.31554 10.4448ZM3.31176 4.96449C3.30971 4.98218 3.30623 4.99812 3.30623 5.01402C3.30593 5.3395 3.30593 5.66504 3.30643 5.99052C3.30643 6.00612 3.31146 6.02166 3.31385 6.03562C3.42681 6.05096 7.81995 6.05749 8.96752 6.04454C8.99368 6.04424 9.01984 6.04145 9.04331 6.04C9.06763 6.00288 9.06294 5.96536 9.06344 5.92948C9.06593 5.75682 9.06813 5.58411 9.06833 5.41141C9.06847 5.29187 9.06588 5.17228 9.06304 5.05279C9.06229 5.02055 9.06803 4.98567 9.03604 4.95238C8.99876 4.95203 8.95596 4.95123 8.91311 4.95128C7.50145 4.95213 6.08983 4.95308 4.67817 4.95392C4.263 4.95417 3.84777 4.95382 3.43259 4.95422C3.39368 4.95422 3.35361 4.94884 3.31176 4.96449Z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_141_8">
        <rect width="13" height="11" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>

);

const Pricing = () => {
  const [billing, setBilling] = useState("annual");

  const plans = [
    {
      name: "Basic",
      description: "Perfect for individuals or small sellers just getting started.",
      price: "FREE",
      priceSubtext: "",
      isPopular: false,
      buttonText: "Start Now",
      features: [
        "Unlimited shipments using TwoCollect’s best discounted rates",
        <>
          Up to <strong>30 orders/month</strong> without fees using your own contracts
          <br />
          <div className="flex flex-wrap center gap-[3px] items-center"> Additional orders at <DirhamIcon size={12} className="relative top-[-1px]" />{" "}
            <strong>0.9 each</strong></div>
        </>,
        "1 sales channel and 1 carrier integration",
        "Shipping calculator and label printing",
        "Email support",
      ],
    },
    {
      name: "Growth",
      description: "Ideal for small businesses managing moderate shipping volumes.",
      monthlyPrice: "79",
      annualOld: "79",
      annualPrice: "66",
      annualDisplay: "792 / year",
      priceSubtext: "Per month",
      isPopular: false,
      buttonText: "Subscribe",
      features: [
        "All features from the Free plan",
        <>
          Up to <strong>200 orders/month</strong> without fees using your own contracts <em>(or better TwoCollect rates than the Free plan if no contracts)</em>
          <br />
          <div className="flex flex-wrap center gap-[3px] items-center"> Additional orders at <DirhamIcon size={12} className="relative top-[-1px]" />{" "}
            <strong>0.7 each</strong></div>
        </>,
        "Up to 3 sales channels and 3 carrier integrations",
        "Priority email support",
      ],
    },
    {
      name: "Professional",
      description: "Designed for growing businesses with higher shipping volumes.",
      monthlyPrice: "199",
      annualOld: "199",
      annualPrice: "166",
      annualDisplay: "1,992 / year",
      priceSubtext: "Per month",
      isPopular: true,
      buttonText: "Subscribe",
      features: [
        "All features from the Growth plan",
        <>
          Up to <strong>500 orders/month</strong> without fees using your own contracts <em>(or better TwoCollect rates than the Free and Growth plan if no contracts)</em>
          <br />
          <div className="flex flex-wrap center gap-[3px] items-center">Additional orders at <DirhamIcon size={12} className="relative top-[-1px]" />{" "}
            <strong>0.5 each</strong></div>
        </>,
        <>Advanced features including:<br />• Optimized shipping tools<br />• Analytics dashboard </>,
        "Email and chat support",
      ],
    },
  ];

  return (
    <section className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-8 text-center md:mb-16">
          Pricing
        </h1>

        {/* Toggle (no CSS change, only logic) */}
        <div className="flex justify-center mb-10">
          <div className="flex justify-center bg-white rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-7 py-3 rounded-full ${billing === "monthly" ? "bg-bluecustom text-white" : ""
                }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-7 py-3 rounded-full ${billing === "annual" ? "bg-bluecustom text-white" : ""
                }`}
            >
              Annual
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {plans
            .map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col relative rounded-2xl py-8 px-4 md:p-4 md:py-12 shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${plan.isPopular
                  ? "bg-yellow-400"
                  : "bg-white border border-gray-200"
                  }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-bluecustom text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most popular
                    </div>
                  </div>
                )}
                <div className={`flex flex-col ${billing === "annual" ? "md:min-h-[168px]" : ""}`}>
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold">
                      {plan.name} Plan
                    </h3>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    {plan.name === "Basic" ? (
                      <div className={`text-3xl font-bold ${billing === "annual" ? "md:mt-[30px]" : ""}`}>FREE</div>
                    ) : billing === "monthly" ? (
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 text-3xl font-bold">
                          <DirhamIcon /> {plan.monthlyPrice}
                        </div>
                        <div className="text-base  max-w-16 font-medium leading-4 text-gray-700">
                          Per month
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="text-red-600 line-through text-[20px] flex items-center gap-1">
                          <DirhamIcon size={16} /> {plan.annualOld}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <div className="flex items-center gap-1 text-3xl font-bold">
                            <DirhamIcon /> {plan.annualPrice}
                          </div>
                          <div className="text-base  max-w-16 font-medium leading-4 text-gray-700">
                            Per month
                          </div>
                        </div>
                        <div className="text-[15px] font-medium flex items-center gap-1">
                          Save 2 months <DirhamIcon size={14} /> {plan.annualDisplay}
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <button className="w-full py-3 px-4 rounded-full font-semibold text-white bg-bluecustom hover:bg-bluecustomhover transition-all duration-200 mb-8">
                  {plan.buttonText}
                </button>

                <div className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.isPopular ? "bg-white" : "bg-gray-100"
                          }`}
                      >
                        <Check
                          className={`w-3 h-3 ${plan.isPopular
                            ? "text-yellow-400"
                            : "text-gray-600"
                            }`}
                        />
                      </div>
                      <span className="text-sm leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

          {/* Enterprise */}
          <div className="text-center rounded-2xl p-8 shadow-inner bg-gray-100 text-gray-500 flex flex-col justify-center border border-gray-300 opacity-70">
            <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
            <p className="text-base">Coming Soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
