import { ChevronDown, Globe, Search, ShieldAlert, ShoppingBag, Truck } from "lucide-react";
import { useState } from "react";

const cities = [
  "Dubai",
  "Sharjah",
  "Abu Dhabi",
  "Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

const StartFree = () => {
  const [tab, setTab] = useState("domestic");
  const [unit, setUnit] = useState("g");

  // City search popup states
  const [showPopup, setShowPopup] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    setShowPopup(false);
    setSearch("");
  };


    return (
        <>
             <section>
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center py-10 md:py-16">
            <div className="grid md:grid-cols-2 gap-6 ">
              {/* Origin & Destination */}
              <div className="bg-white shadow-md rounded-xl p-6 ">
                <h2 className="text-2xl font-medium mb-4">Select Origin & Destination</h2>
                <div className="flex gap-3 mb-6 bg-[#f0f4f8] p-2 rounded-md">
                  <button
                    onClick={() => setTab("domestic")}
                    className={`flex items-center px-4 py-2 rounded-md text-center justify-center  border border-bluecustom w-full gap-2 ${tab === "domestic"
                        ? "bg-bluecustom text-white"
                        : " "
                      }`}
                  >
                    <ShoppingBag className="w-4" /> Domestic
                  </button>
                  <button
                    onClick={() => setTab("international")}
                    className={`flex items-center px-4 py-2 rounded-md text-center justify-center  border border-bluecustom w-full gap-2 ${tab === "international"
                        ? "bg-bluecustom text-white"
                        : ""
                      }`}
                  >
                    <Globe className="w-4" /> International
                  </button>
                </div>

                <div className="space-y-3">
                  {/* Origin */}
                  <div className="">
                    <label className="block text-base mb-2">Origin</label>
                     <div className="relative">
                    <select className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0">
                      <option>Dubai</option>
                      <option>Sharjah</option>
                      <option>Abu Dhabi</option>
                    </select>
                     <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  </div>

                  {/* Destination */}
                  <div>
                    <label className="block text-base mt-4 mb-2">
                      {tab === "domestic" ? "Destination City" : "Destination Address"}
                    </label>
                     
                    <label className="block text-sm  mb-2">Country</label>
                    <div className="relative">
                    <select className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0">
                      <option>United Arab Emirates</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  </div>

                  {/* City search input with popup */}
                  <div>
                    <label className="block text-sm  mb-2">City</label>
                    <input
                      type="text"
                      value={selectedCity}
                      readOnly
                      placeholder="Select City..."
                      onClick={() => setShowPopup(true)}
                      className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0 cursor-pointer"
                    />

                    {/* Popup */}
                    {showPopup && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 z-20">
                        <div className="bg-white rounded-lg shadow-lg w-80 p-4">
                          {/* Search Input */}
                          <div className="flex items-center border rounded-md px-2 mb-3">
                            <input
                              type="text"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Type city name..."
                              className="w-full p-2 outline-none text-sm"
                              autoFocus
                            />
                            <span className="text-gray-400"><Search className="w-5" /></span>
                          </div>

                          {/* Results */}
                          <ul className="max-h-48 overflow-y-auto">
                            {filteredCities.length > 0 ? (
                              filteredCities.map((city) => (
                                <li
                                  key={city}
                                  onClick={() => handleSelectCity(city)}
                                  className="p-2 hover:bg-blue-100 cursor-pointer rounded-md text-sm"
                                >
                                  {city}
                                </li>
                              ))
                            ) : (
                              <li className="p-2  w-full text-center">No cities found</li>
                            )}
                          </ul>

                          {/* Cancel Button */}
                          <button
                            onClick={() => setShowPopup(false)}
                            className="mt-3 w-full bg-gray-200 hover:bg-gray-300 rounded-md py-2 text-gray-700"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Parcel Dimensions */}
              <div className="bg-white shadow-md rounded-xl p-6">
                <h2 className="text-2xl font-medium mb-4">Parcel Dimensions</h2>
                <div className="flex gap-3 items-center bg-[#f0f4f8] p-2 rounded-md text-sm text-bluecustom  mb-6">
                  <ShieldAlert className="w-6" /> <p>Maximum allowed size:<br />Length 120cm × Width 80cm × Height 60cm</p>
                </div>

                <div className="space-y-4">
                  {/* Weight */}
                  <div>
                    <label className="block text-sm mb-2">
                      Weight (required)
                    </label>
                    <div className="flex gap-4">
                      <input
                        type="text"
                        required
                        className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                        placeholder=""
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => setUnit("kg")}
                          className={`px-6 py-2 border border-bluecustom rounded-lg min-w-[71px] ${unit === "kg" ? "bg-bluecustom text-white" : ""
                            }`}
                        >
                          KG
                        </button>
                        <button
                          onClick={() => setUnit("g")}
                          className={`px-6 py-2 border border-bluecustom rounded-lg min-w-[71px] ${unit === "g" ? "bg-bluecustom text-white" : ""
                            }`}
                        >
                          G
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Shipment Value */}
                  <div>
                    <label className="block text-sm mb-2">
                      Shipment Value (AED) (required)
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                      placeholder=""
                    />
                  </div>

                  {/* Manual Entry */}
                  <div>
                    <label className="block text-sm mb-2">
                      Manual Entry
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="">
                        <label className="block text-xs mb-2">
                          Length (required)
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          required
                          className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                        />
                      </div>
                      <div className="">
                        <label className="block text-xs mb-2">
                          Width (required)
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          required
                          className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                        />
                      </div>
                      <div className="">
                        <label className="block text-xs mb-2">
                          Height (required)
                        </label>
                        <input
                          type="text"
                          placeholder=""
                          required
                          className="w-full text-sm bg-[#f0f4f8] border border-bluecustom rounded-md p-2 py-3 focus:ring-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 w-full text-center">
              <button className="bg-bluecustom hover:bg-bluecustomhover text-white font-semibold px-6 py-3 rounded-full shadow-md transition w-full max-w-xs mx-auto">
                Calculate Estimated Rates
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-10 md:pb-16">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <div className="bg-bluecustom w-24 h-24 rounded-full  flex items-center justify-center p-3 mx-auto">
                <Truck name="truck" size="40" className="text-white" />
              </div>
              <h2 className="text-xl font-semibold mt-4">Rate Your Delivery</h2>
              <hr className="h-[6px] bg-bluecustom rounded-lg m-3" />
              <p className="text-center">Get rates of carriers for your package!</p>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default StartFree;
