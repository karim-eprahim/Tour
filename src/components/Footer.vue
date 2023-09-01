<template>
  <div class="footer">
    <div class="footer-photo">
      <img src="@/assets/footer.jpeg" alt="" />
      <div class="footer-content">
        <ul class="links">
          <li>Home</li>
          <li>About us</li>
          <li>Tours</li>
          <li>Flight</li>
          <li>Reviews</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Contact us</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>

<style scoped>
.footer {
  padding: 40px 0px 0px 0;
}
.footer-photo img {
  width: 100%;
  height: 600px;
  /* position: relative; */
}
.footer-photo {
  position: relative;
}
.footer-content {
  width: 100%;
  height: 7vh;
  background-color: #2d2d2d;
  position: absolute;
  bottom: 0px;
}
.links {
  height: 100%;
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  font-size: 20px;
}
@media (max-width: 767px) {
  .footer-content {
    height: 12vh;
  }
  .links {
    flex-wrap: wrap;
  }
  .links li {
    width: 24%;
    font-size: 12px;
  }
  .footer-photo img {
    height: 400px;
  }
}
</style>
