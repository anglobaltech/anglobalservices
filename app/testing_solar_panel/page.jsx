"use client";
import Image from "next/image";
import { useRef, useState } from "react";


export default function GoldHallmarkingPage() {


  return (
    <main className="w-full bg-white">
      <section
        className="relative w-full h-60 md:h-65 flex items-center justify-center"
        style={{
          backgroundImage: "url('/service/isi/about.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#0a3d62]/70" />

        <h1 className="relative z-10 text-white text-2xl md:text-4xl font-bold text-center px-4 leading-snug">
          TESTING SOLAR PANEL
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 pt-16 md:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-12 items-start">
          <div className="flex flex-col gap-6">
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
              <Image
                src="/service/solar-panel-testing.png"
                alt="BIS Certification"
                width={420}
                height={520}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="pt-5">
              <h2 className="text-xl font-bold text-gray-900">
                How to Test Solar Panels - Accurately Measuring Solar Panel
                Output
              </h2>
              <div className="w-170 h-0.5 bg-[#0072b1] mt-2 mb-4" />

              <p className="text-gray-500 text-[15px] leading-7 text-justify pb-5">
                Taking the time to test your solar panels is one of the best
                ways you can get a true reading of their actual power output.
                Given that the output and efficiency of your solar panels will
                have a drastic impact on the overall power capabilities of your
                solar power system, it makes sense that many people test their
                solar panels on a fairly regular basis.
              </p>

              <p className="text-gray-500 text-[15px] leading-7 text-justify">
                If you would like to know how to test solar panels, you have
                come to the right place! We will explain how you would go about
                measuring both solar panel amperage and current. We will also
                explain how you can use a multimeter to test the voltage of your
                solar panels
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 space-y-10">
        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Why is it Important to Test Your Solar Panels?
          </h2>
          <div className="w-110 h-0.5 bg-[#0072b1] mt-2 mb-6 " />

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
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            How to Test Solar Panel Output
          </h2>
          <div className="w-76 h-0.5 bg-[#0072b1] mt-2 mb-6" />

          <p className="text-gray-500 text-[15px] leading-7 text-justify">
            Test your solar panels, you will need to perform a fairly simple
            calculation. Basically, you will need to multiply the volts and
            amps, as this will give you an accurate total wattage:Volts x Amps =
            watts So, to determine the power that your solar panel is
            generating, you will need to first measure the amperage and voltage.
          </p>
        </div>

        <div>
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Start by Noting the Power Rating:
          </h2>
          <div className="w-80 h-0.5 bg-[#0072b1] mt-2 mb-6" />

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
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Measure the Solar Panel Amperage:
          </h2>
          <div className="w-85 h-0.5 bg-[#0072b1] mt-2 mb-6" />

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
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Measure the Solar Panel Current:
          </h2>
          <div className="w-80 h-0.5 bg-[#0072b1] mt-2 mb-6" />

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
          <h2 className="text-xl md:text-xl font-semibold text-gray-900">
            Calculating Solar Panel Output:
          </h2>
          <div className="w-75 h-0.5 bg-[#0072b1] mt-2 mb-6" />

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

    </main>
  );
}
