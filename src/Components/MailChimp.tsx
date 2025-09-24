import { useState } from "react";

const MailChimpEmbedSimple = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("EMAIL", email);
        formData.append("b_3afb514da55f4852794aba252_ab3fec2e02", ""); // hidden field

        try {
            await fetch(
                "https://twocollect.us17.list-manage.com/subscribe/post-json?u=3afb514da55f4852794aba252&id=ab3fec2e02&c=?",
                {
                    method: "POST",
                    body: formData,
                    mode: "no-cors", // needed for Mailchimp
                }
            );
            setMessage("Thank you for subscribing!");
            setEmail("");
        } catch {
            setMessage("Oops! Something went wrong.");
        }
    };

    return (
        <div className="flex flex-col w-full max-w-md mx-auto gap-2">
            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="px-4 py-3 text-sm w-full rounded-full bg-[#f0f4f8] text-[#0c0c0c] outline-none"
                />

                <div style={{ marginTop: 8 }} className="w-full">
                    <button type="submit" className="bg-[#0235a8] w-full rounded-full px-6 py-3 text-white text-sm hover:bg-[#156ab0] transition">
                        Subscribe
                    </button>
                </div>
                {message && <p className="text-center w-full" style={{ marginTop: 10 }}>{message}</p>}


            </form>
        </div>
    );
};

export default MailChimpEmbedSimple;
