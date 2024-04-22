import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import img1 from "../../assets/img-13.jpeg";
import { useEffect, useState } from "react";

export default function ProductOff() {
    const [width,setWidth]=useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    }, []);

    const handleResize = () => {
        setWidth(window.innerWidth);
    };

  const product = [
    {
      id: 1,
      name: "Gorra1",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra2",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra3",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra4",
      off: "15",
    },
    {
      id: 1,
      name: "Gorra5",
      off: "15",
    },
    {
        id: 1,
        name: "Gorra6",
        off: "15",
      },
    {
        id: 1,
        name: "Gorra7",
        off: "15",
      
    }
  ];
//   slidesPerView={width <768 ? 2 : width < 992 && width >= 768? 3 : 5}
//   spaceBetween={width <768 ? 6 :10}

  return (
    <>
      <section className="seccions m-auto px-3 px-lg-4 mt-3 mt-md-5">
        <h2>Local-marketplace ofertas</h2>
        <Swiper
          slidesPerView={width <768 ? 2.2 : width < 992 && width >= 768? 3 : 5}
          spaceBetween={width <768 ? 6 :10}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {
            product.map((item) => {
                return (
                  <SwiperSlide key={item.name}>
                    <div className="cp card ">
                      <img
                        className=""
                        src={img1}
                        alt=""
                      />
                      <p className=" m-0 text-center">{item.name}</p>
                    </div>
                  </SwiperSlide>
                );
              })
          }
        </Swiper>
      </section>
    </>
  );
}
