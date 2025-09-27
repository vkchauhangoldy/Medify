import { Box, Container } from "@mui/material";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer1 from "../../../assets/offer1.png";
import offer2 from "../../../assets/offer2.png";

const offers = [offer1, offer2, offer1, offer2, offer1, offer2]; // Array of offers

export default function Offers() {
  return (
    <Box py={6}>
      <Container maxWidth="xl">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            767: {
              slidesPerView: 3,
            },
          }}
        >
          {offers.map((offer, index) => (
            <SwiperSlide key={index}>
              <Box
                component="img"
                src={offer}
                alt={`Offer ${index + 1}`}
                sx={{ width: 1, height: "auto" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
}
