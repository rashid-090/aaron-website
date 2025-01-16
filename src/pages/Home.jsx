import React from "react";
import { Liftvid, LiftvidPost,Lft3,Lft2 } from "../assets";
import { EnquiryForm, Products, Testimonails, Services} from "../components";

const Home = () => {
  return (
    <>
      <section className="relative w-full h-full md:h-[60vh] xl:h-screen overflow-hidden">
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
        <div className="w-11/12 xl:w-10/12 mx-auto pt-40 py-10 md:pt-20 h-full grid grid-cols-1 md:grid-cols-2 gap-5 xl:gap-10 z-20 relative text-white">
          <div className="h-full flex flex-col justify-center gap-3 text-center md:text-left">
            <h1 className="text-4xl xl:text-6xl font-semibold  bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white bg-clip-text text-transparent">
              Aaron Elevators
            </h1>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate, facere pariatur? Numquam eveniet ratione commodi ullam
              in tenetur voluptate? Sed in non quibusdam repellat, deserunt
              doloribus distinctio delectus magni commodi.
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
              className="w-full h-60 xl:h-96 object-cover z-0"
              src={Lft2}
              alt=""
            />
            <img
              className="w-40 h-40 xl:w-52 xl:h-52 absolute top-[60%] -translate-y-[50%] right-0 xl:right-5 shadow-xl object-cover z-10 "
              src={Lft3}
              alt=""
            />
          </div>
          <div className="xl:col-span-2 flex flex-col gap-3 h-full justify-center">
            <div>
              <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
                About Us
              </h2>
              <div className="h-1 w-36 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              facere eaque hic iure. Laboriosam labore maxime vel deleniti
              deserunt, velit a temporibus voluptatum esse et porro ratione
              laborum suscipit? Obcaecati.
            </p>
            <button className="border-2 border-mainbtn w-fit px-3 h-10 text-mainbtn hover:bg-mainbtn hover:text-white duration-150">
              Learn more
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="w-11/12 xl:w-10/12 mx-auto">
           
          <Services/>
        </div>
      </section>
      
      <section className="bg-white py-10 ">
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


      <section className="bg-white py-10 ">
        <div className="w-11/12 xl:w-10/12 mx-auto text-center">
          <div className="mx-auto w-fit">
            <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
            Why Choose Aaron Elevators?
            </h2>
            <div className="h-1 w-full -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
          </div>
          <p className="mt-5 text-sm xl:text-base xl:w-10/12 mx-auto">As leading elevator manufacturers in Kerala, our commitment to excellence sets us apart. We've earned our reputation by delivering best house elevations in Kerala through our unwavering focus on quality and innovation. Our team of experts ensures that every project, from home lifts in Kerala to commercial installations, receives meticulous attention to detail.</p>
          <h4 className="text-mainbtn font-medium mt-3">- What Makes Us Unique Lift company in Kerala Industry -</h4>
          <div className="grid grid-cols-2 gap-3 mt-5">
                <div className="text-left border rounded-2xl p-5">
                    <h4 className="text-lg font-medium">Superior Customer Service</h4>
                    <p className="text-sm">Our dedication to customer satisfaction makes us the best lift company in Kerala. We provide comprehensive support throughout your elevator's lifecycle.</p>
                </div>
                <div className="text-left border bg-gradient-to-r from-mainbtn to-mainbtnhrv text-white rounded-2xl p-5">
                    <h4 className="text-lg font-medium">Superior Customer Service</h4>
                    <p className="text-sm">Our dedication to customer satisfaction makes us the best lift company in Kerala. We provide comprehensive support throughout your elevator's lifecycle.</p>
                </div>
                <div className="text-left border bg-gradient-to-r from-mainbtn to-mainbtnhrv text-white rounded-2xl p-5">
                    <h4 className="text-lg font-medium">Superior Customer Service</h4>
                    <p className="text-sm">Our dedication to customer satisfaction makes us the best lift company in Kerala. We provide comprehensive support throughout your elevator's lifecycle.</p>
                </div>
                <div className="text-left border rounded-2xl p-5">
                    <h4 className="text-lg font-medium">Superior Customer Service</h4>
                    <p className="text-sm">Our dedication to customer satisfaction makes us the best lift company in Kerala. We provide comprehensive support throughout your elevator's lifecycle.</p>
                </div>
          </div>
        </div>
      </section>
      

      <section className="bg-white py-10 ">
        <div className="w-11/12 xl:w-10/12 mx-auto">
          <div className="mx-auto w-fit">
            <h2 className="text-3xl xl:text-4xl font-semibold capitalize">
              What Our Clients Say
            </h2>
            <div className="h-1 w-80 -mt-1 bg-gradient-to-r from-mainbtn via-mainbtnhrv to-white"></div>
          </div>

          <Testimonails />
        </div>
      </section>
    </>
  );
};

export default Home;
