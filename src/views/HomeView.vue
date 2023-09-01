<template>
  <Header></Header>
  <div class="home">
    <div class="main-image w-100">
      <div class="tell container">
        <h1>Welcom</h1>
        <h1>Explor Egypt</h1>
        <h1 class="bord">With Us</h1>
        <p>Take only memories, leave only footprints</p>
      </div>
    </div>
  </div>

  <About id="about"></About>

  <Tour id="tour"></Tour>

  <Flight id="flight"></Flight>

  <Review id="review"></Review>

  <Footer id="footer"></Footer>
</template>

<script>
// @ is an alias to /src
import About from "@/components/About.vue";
import Tour from "@/components/Tour.vue";
import Flight from "@/components/Flight.vue";
import Review from "@/components/Review.vue";
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";
export default {
  name: "HomeView",
  components: {
    About,
    Tour,
    Flight,
    Review,
    Footer,
    Header,
  },
};
</script>

<style scoped>
.main-image {
  background-image: url(@/assets/first.jpeg);
  background-size: cover;
  background-position: center;
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.tell {
  /* padding: 0 0 0 40px; */
  text-align: left;
  font-weight: bold;
  font-size: 40px;
  color: #fff;
}
.bord {
  border-bottom: 3px solid rgb(255, 149, 10);
  width: 140px;
}
.tell {
  font-weight: 300;
  font-size: 22px;
}
</style>
