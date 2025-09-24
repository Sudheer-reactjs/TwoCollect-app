
import LoginButton from '../Components/LoginButton';

const PressAndMedia = () => {
    return (
        <>
            <section className="py-6 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 min-h-[50svh] lg:px-8 text-center flex flex-col items-center justify-center">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl !leading-[1.4] font-bold mb-6">
            Press and Media
          </h1>
          <p className="max-w-3xl mx-auto md:text-lg mb-8">
            Stay updated with the latest news, announcements, and media coverage about TwoCollect. For press and editorial inquiries, please contact us at <a href="mailto:marketing@twocollect.com" className="underline"> marketing@twocollect.com</a>
          </p>
          {/* CTA */}
          <div className="mt-0">
            <LoginButton />
          </div>
        </div>
      </section>
        </>
    );
}

export default PressAndMedia;
