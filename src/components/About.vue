<template>
  <div class="about" id="about">
    <div class="container">
      <h3 class="special-heading text-center">About Us</h3>
      <div class="content">
        <div class="text">
          <p>We offer a wide range o tours and online booking of flights.</p>
          <p>
            Any of your whims will be fulfille. Whatever it's a party or
            relaxing getaway, deserts or
          </p>
          <p class="mt">white sand, the choice is yours.</p>
        </div>
        <hr />
        <div class="text">
          <h3 class="special-heading text-center">Why We Are?</h3>

          <div class="container mt-5">
            <div class="cent">
              <div class="col text-center icon">
                <img
                  src="@/assets/aboutImg/customer-service.png"
                  class="cardImg"
                />
                <h4>24 Hours support</h4>
              </div>
              <div class="col text-center icon">
                <img
                  src="@/assets/aboutImg/loyal-customer.png"
                  class="cardImg"
                />
                <h4>Best Service</h4>
              </div>
              <div class="col text-center icon">
                <img
                  src="@/assets/aboutImg/discount-photo.png"
                  class="cardImg"
                />
                <h4>Discount to our constant clients</h4>
              </div>
              <div class="col text-center icon">
                <img src="@/assets/aboutImg/wallet.png" class="cardImg" />
                <h4>Best Price</h4>
              </div>
              <div class="col text-center icon">
                <img src="@/assets/aboutImg/group.png" class="cardImg" />
                <h4>Team of professionals</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "about",
};
</script>

<style scoped>
.about {
  margin-top: 35px;
  padding: 70px 0px;
}
.special-heading {
  font-size: 30px;
  color: #8f4d1b;
  padding-bottom: 10px;
}
.content p {
  text-align: center;
}
.mt {
  margin-top: -10px;
}
.content hr {
  width: 70%;
  height: 10px;
  color: #000;
  margin: 40px auto 20px;
}
.icon {
  width: 100px !important;
}
.icon h4 {
  font-size: 15px !important;
  margin-top: 15px;
}
.cent {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1vw;
  justify-items: center;
}
.cardImg {
  width: 60%;
}
@media (max-width: 767px) {
  .cent {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }
}
</style>
