import Image from "next/image";
export const revalidate = 86400

export const metadata = {
  title: "Solar Panel Testing Services under BIS Certification | AN Global Services",
  description:
    "AN Global Services provides professional Solar Panel Testing services under BIS Certification. We assist with performance testing, power output evaluation, voltage and current measurement, and compliance with applicable Indian Standards for solar panels.",
};

export default function TestingSolarPanelPage() {


  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-65 flex items-center justify-center"
        style={{ backgroundImage: "url('/service/pages-of-services-dash-1.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/40" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-extrabold text-center px-4 leading-snug tracking-wide drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
          TESTING SOLAR PANEL
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-14 items-start">
          <div className="w-full max-w-[550px] mx-auto xl:max-w-none xl:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-md bg-white">
              <Image
                src="/testings/solar-panel-testing-services-1.webp"
                alt="Solar Panel Testing Services"
                width={800}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div>
            <div className="inline-block">
              <h2 className="text-xl font-bold text-gray-900">
                How to Test Solar Panels - Accurately Measuring Solar Panel <br />
                Output
              </h2>
              <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-4" />
            </div>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Taking the time to test your solar panels is one of the best
                ways you can get a true reading of their actual power output.
                Given that the output and efficiency of your solar panels will
                have a drastic impact on the overall power capabilities of your
                solar power system, it makes sense that many people test their
                solar panels on a fairly regular basis.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                If you would like to know how to test solar panels, you have
                come to the right place! We will explain how you would go about
                measuring both solar panel amperage and current. We will also
                explain how you can use a multimeter to test the voltage of your
                solar panels. Accurate diagnostics at this stage help you identify 
                underperforming modules, ensuring your commercial or residential 
                solar array achieves maximum energy yield and long-term financial returns.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                Furthermore, precise solar panel testing is critical for securing mandatory 
                BIS certification in India. Whether you are a domestic manufacturer or an 
                international importer, comprehensive testing ensures your modules meet strict 
                quality, durability, and safety standards. Accurate laboratory evaluations not 
                only guarantee compliance but also build consumer trust by confirming that 
                your solar panels will perform reliably under extreme weather conditions over 
                their projected lifespan.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-12">
        {/* IMPORTANCE */}
        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              Why is it Important to Test Your Solar Panels?
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            The power rating of a solar panel is given by the manufacturer and
            the number simply represents the amount of power that solar panel is
            capable of producing under the most ideal conditions. However, in
            reality, solar panels are rarely exposed to ideal conditions for
            more than a few hours per day.
          </p>

          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            Solar panel efficiency and power production can differ due to a
            variety of factors, including the number of peak sun hours in a day,
            shading issues, the outside temperature, the direction the solar
            panels are facing, the geographic location of the solar panels, and
            the particular season when the solar panels are being used.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            Testing your solar panels allows you to get an accurate reading of
            how much solar power they are really generating. Not only would this
            allow you to adjust your expectations to more accurately reflect the
            true potential of your solar panels, it will let you know if you
            need to invest in more solar panels, or simply reposition the ones
            you are currently using.
          </p>
          <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
            Essentially, testing your solar panels will allow you to make sure
            that they are generating enough power to meet your needs and let you
            know if you need to reinstall them so you can optimize their
            performance and get the highest possible amount of solar electricity
            out of your system.
          </p>
        </div>

        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              How to Test Solar Panel Output
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Test your solar panels, you will need to perform a fairly simple
            calculation. Basically, you will need to multiply the volts and
            amps, as this will give you an accurate total wattage:Volts x Amps =
            watts So, to determine the power that your solar panel is
            generating, you will need to first measure the amperage and voltage.
          </p>
        </div>

        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              Start by Noting the Power Rating:
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            One of the first things you will want to take note of is the actual
            power rating of your solar panels. As discussed above, this wattage
            rating will not necessarily reflect the amount of electricity your
            solar panels can generate, as plenty of variables can influence
            performance, but it is still useful information to have, as it will
            give you an idea of how well your solar panels are performing in
            relation to their maximum potential.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
            When solar panels are given a power rating, the number is based off
            a laboratory test, where the solar panel is exposed to an hour of
            simulated sunlight that measures 1,000 watts per square meter.
            During these tests, the solar panels are also kept at a constant
            temperature of 77ï‚° F, as temperature fluctuations can also impact
            performance.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-7 text-justify">
            So, if a solar panel has a power rating of 300W, that means it
            produced 300 watts of electricity after being tested in ideal
            conditions. Again, if you were to purchase this same 300W solar
            panel, it would likely produce less power than this, which is why it
            is important to test its performance for yourself.
          </p>
        </div>

        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              Measure the Solar Panel Amperage:
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            To measure the amperage of your solar panel, you will need to use
            what is known as an amp meter. These are fairly affordable devices
            and they can be purchased at most hardware and automotive stores.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            Once you have one, simply attach the meter to the positive and
            negative terminals of your solar panels. When testing, you will want
            to make sure that your solar panel is receiving the same amount of
            sunlight it would under normal conditions, so try not to move it
            from where it would normally be positioned.
          </p>
        </div>

        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              Measure the Solar Panel Current:
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            To measure the current, you can use a multimeter. Again, these
            devices are affordable and worth investing in if you are running a
            solar power system. They can also be found at most hardware and
            automotive stores.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            If you want to make sure you are getting an accurate reading, you
            will also need to use a variable resistor box. These devices allow
            you to get readings at different levels of resistance.
          </p>
        </div>

        <div>
          <div className="inline-block">
            <h2 className="text-xl md:text-xl font-semibold text-gray-900">
              Calculating Solar Panel Output:
            </h2>
            <div className="w-full h-0.5 bg-[#0072b1] mt-2 mb-6" />
          </div>

          <p className="text-gray-500 text-[15px] leading-8 text-justify">
            As mentioned above, you will now want to make a quick calculation to
            get the power output for your solar panel. Simply use the amperage
            and voltage readings your earlier tests revealed and perform the
            following equation: Volts x Amps = watts.
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            Once you have calculated the real wattage of your solar panels, you
            can multiply this number by the average hours of sunlight you get
            per day: Solar panel watts x average hours of sunlight = daily
            watt-hours
          </p>

          <p className="mt-6 text-gray-500 text-[15px] leading-8 text-justify">
            Most people then take 75% of this total, as it helps account for the
            fact that the directness of the sunlight will not be consistent
            throughout the day. Sunlight tends to be at its most powerful and
            direct in the hours just before and after noon.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-gray-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-3">
          {[
            {
              q: "Why is it important to test solar panels?",
              a: "Testing ensures your panels are operating at their specified capacity, helping you optimize energy output, detect defects, and ensure long-term ROI on your solar investment.",
            },
            {
              q: "Can I test my solar panels myself?",
              a: "Yes, basic output testing can be done using a multimeter to measure voltage and amperage. However, comprehensive diagnostics like EL imaging require professional laboratory equipment.",
            },
            {
              q: "How often should solar panels be tested?",
              a: "It is recommended to test your system at least once a year, or whenever you notice an unexplained drop in your daily energy production.",
            },
            {
              q: "Does weather affect solar panel testing?",
              a: "Yes. For the most accurate baseline readings, you should test your panels under direct sunlight during peak sun hours on a clear day.",
            },
          ].map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-5 cursor-pointer"
            >
              <summary className="flex justify-between items-center font-medium text-gray-900 text-[16px]">
                {item.q}
                <span className="text-[#0072b1] text-xl group-open:rotate-45 transition">
                  +
                </span>
              </summary>

              <p className="mt-3 text-gray-600 text-[15px] leading-7">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
