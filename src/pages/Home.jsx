import React from "react";
import { Liftvid, LiftvidPost,Lft3,Lft2 } from "../assets";
import { EnquiryForm, Products, Testimonails, Services, Counter, Clients, Faq, ContactForm} from "../components";
import { RiDoubleQuotesL } from "react-icons/ri";

const Home = () => {
  return (
    <>
      <section className="relative w-full h-full md:h-[60vh] xl:h-[110vh] overflow-hidden">
        {/*  */}
        <div class="custom-shape-divider-bottom-1737109029">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
        {/*  */}
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={Liftvid}
          poster={LiftvidPost}
          autoPlay
          loop
          muted
        />
        <div className="bg-black bg-opacity-60 absolute w-full h-full z-10"></div>
        {/* Content Overlay */}
        <div className="w-11/12 xl:w-10/12 mx-auto pt-32 py-20 md:pt-20 h-full grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 z-20 relative text-white">
          <div className="h-full flex flex-col justify-center gap-3 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-semibold  bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white bg-clip-text text-transparent">
            Premium Elevators in Kerala | Aaron Elevators
            </h1>
            <p className="text-sm text-justify tracking-tight">
            Transform your vertical mobility experience with Aaron Elevators, Kerala's leading elevator solution provider. As trusted elevator manufacturers in Kerala, we bring 16+ years of excellence in delivering cutting-edge elevation solutions. Our comprehensive range of elevators in Kerala combines innovation, safety, and reliability, making us the best elevator company in Kerala for all your vertical transportation needs.
            </p>
          </div>
          <div className="h-full flex flex-col justify-center items-center">
            <EnquiryForm />
          </div>
        </div>
      </section>


      <section className="bg-white py-10 xl:pt-20">
        <div className="w-11/12 xl:w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 gap-x-10">
          <div className="xl:col-span-3 pr-10 xl:pr-40 relative overflow-hidden">
            <img
              className="w-full h-60 xl:h-96 object-cover z-0 rounded-3xl"
              src={Lft2}
              alt=""
            />
            <img
              className="w-40 h-40 xl:w-52 xl:h-52 absolute top-[60%] rounded-3xl -translate-y-[50%] right-0 xl:right-5 shadow-xl object-cover z-10 "
              src={Lft3}
              alt=""
            />
          </div>
          <div className="xl:col-span-2 flex flex-col gap-3 h-full justify-center text-mainclr">
            <div>
              <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
              About Aaron Elevators
              </h2>
              <div className="h-1 w-80 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
            </div>
            <p className="text-sm text-justify">
            At Aaron Elevators, we've established ourselves as one of the premier lift manufacturers in Kerala, committed to elevating lives through superior technology and unmatched service. Our state-of-the-art manufacturing facility and team of skilled professionals ensure that every elevator we produce meets the highest standards of quality and safety. As one of the most trusted lift companies in Kerala, we take pride in our ability to blend innovative engineering with practical functionality.

            </p>
            <button className="border-2 border-mainbtn w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className=" bg-white py-10 xl:py-20 text-center">
        <div className="w-11/12 xl:w-10/12 mx-auto text-mainclr">
          <h2 className="text-2xl xl:text-4xl font-semibold capitalize ">
          Modern Elevators in Kerala<br/> for Every Need
            </h2>
            <div className="relative w-[90%] md:w-[70%] mx-auto mt-3">
              {/* <RiDoubleQuotesL className="text-8xl text-[#efb03b2d] -left-40 -top-4  absolute"/> */}
              {/* <RiDoubleQuotesL className="text-8xl text-[#efb03b2d] -right-40 -top-4 scale-x-[1] rotate-180 absolute"/> */}
              <p className=" text-sm text-justify md:text-center">As pioneering lift companies in Kerala, we understand that every project demands unique elevation solutions. Whether you're looking for home elevators in Kerala or commercial installations, our extensive portfolio caters to diverse requirements. We specialize in creating the best home elevation in Kerala, ensuring that each installation meets international safety standards while complementing your architectural vision.</p>
            </div>
          </div>
      </section>


      <section className="bg-white py-10">
        <div className="w-11/12 xl:w-10/12 mx-auto">
           
          <Services/>
        </div>
      </section>
      
      <section className="bg-white py-10  text-mainclr">
        <div className="w-11/12 xl:w-10/12 mx-auto">
          <div className="mx-auto w-fit">
            <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
              our products
            </h2>
            <div className="h-1 w-60 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
          </div>
          <Products />
        </div>
      </section>

      
      <section className="py-10 bg-white">
        <Clients/>
      </section>


      <section className="bg-white py-10 ">
        <div className="w-11/12 xl:w-10/12 grid grid-cols-1 text-mainclr xl:grid-cols-2 gap-5 xl:gap-10 mx-auto text-left">
          <div className="h-full flex flex-col justify-center">
              <div className="w-fit">
                <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
                Why Choose<br/> Aaron Elevators?
                </h2>
                <div className="h-1 w-full -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
              </div>
              <p className="mt-5 text-sm">As leading elevator manufacturers in Kerala, our commitment to excellence sets us apart. We've earned our reputation by delivering best house elevations in Kerala through our unwavering focus on quality and innovation. Our team of experts ensures that every project, from home lifts in Kerala to commercial installations, receives meticulous attention to detail.</p>
              <h4 className="text-mainbtn font-medium mt-3">What Makes Us Unique Lift company in Kerala Industry -</h4>
          </div>
          <div className=" grid grid-cols-2 gap-2 md:gap-3 mt-5">
                <div className="border bg-white h-40 xl:h-60 flex flex-col justify-center p-2 md:p-5 rounded-tl-3xl rounded-br-3xl md:rounded-tl-[3rem] md:rounded-br-[3rem]">
                    <h4 className="text-sm md:text-base xl:text-lg font-medium pb-2">Superior Customer Service</h4>
                    <p className="text-[10px] md:text-sm">Our dedication to customer satisfaction makes us the best lift company in Kerala. We provide comprehensive support throughout your elevator's lifecycle.</p>
                </div>
                <div className="border bg-gradient-to-r from-mainbtn to-mainbtnhrv2 text-white rounded-tl-3xl rounded-br-3xl md:rounded-tl-[3rem] md:rounded-br-[3rem] h-40 xl:h-60 flex flex-col justify-center p-2 md:p-5 ">
                    <h4 className="text-sm md:text-base xl:text-lg font-medium pb-2">Modernization Solutions</h4>
                    <p className="text-[10px] md:text-sm">We offer cutting-edge upgrades to existing elevators in Kerala, ensuring your systems stay current with the latest technology.</p>
                </div>
                <div className="border bg-gradient-to-r from-mainbtn to-mainbtnhrv2 text-white rounded-tl-3xl rounded-br-3xl md:rounded-tl-[3rem] md:rounded-br-[3rem] h-40 xl:h-60 flex flex-col justify-center p-2 md:p-5">
                    <h4 className="text-sm md:text-base xl:text-lg font-medium pb-2">Supply & Installation</h4>
                    <p className="text-[10px] md:text-sm">Our end-to-end service includes professional installation by certified technicians, maintaining the highest safety standards.</p>
                </div>
                <div className="border bg-white h-40 xl:h-60 flex flex-col justify-center p-2 md:p-5 rounded-tl-3xl rounded-br-3xl md:rounded-tl-[3rem] md:rounded-br-[3rem]">
                    <h4 className="text-sm md:text-base xl:text-lg font-medium pb-2">24/7 Services</h4>
                    <p className="text-[10px] md:text-sm">Round-the-clock support ensures your elevator systems operate reliably, making us the most dependable elevator company in Kerala.</p>
                </div>
          </div>
        </div>
      </section>

      <section>
        <Counter/>
      </section>

      




      <section className="py-10 bg-white">
        <Faq/>
      </section>

      <section className="bg-white py-10 ">
        <div className="w-11/12 xl:w-10/12 mx-auto text-mainclr">
          <div className="mx-auto w-fit">
            <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
              What Our Clients Say
            </h2>
            <div className="h-1 w-80 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
          </div>

          <Testimonails />
        </div>
      </section>


      <section className="pb-10 md:py-32  overflow-visible">
        <ContactForm/>
      
      </section>
    </>
  );
};

export default Home;
