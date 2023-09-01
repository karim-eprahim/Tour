<template>
  <div class="form-contanier">
    <div class="form-box">
      <h2>Sing UP</h2>
      <form>
        <input type="text" placeholder="User Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="password" />
        <input type="text" placeholder="Location" />
        <div class="chack-box">
          <input type="checkbox" />
          <b>I agree with <a href="">Terms</a> and <a href="">Privacy</a></b>
        </div>
        <button>next</button>
        <div class="login">
          Already have an account ?
          <!-- <a href="">log in</a> -->
          <router-link to="/signin" class="login">Sing in</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.form-contanier {
  width: 100vw;
  height: 100vh;
  background-color: brown;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(@/assets/forms/WhatsApp\ Image\ 2022-12-19\ at\ 12.19.43\ AM.jpeg);
  background-position: center;
  background-size: cover;
}
.form-contanier .form-box {
  width: 60vw;
  height: 80vh;
  background-color: rgba(250, 250, 250, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
}
.form-contanier .form-box h2 {
  font-size: 35px;
  color: #fff;
}
.form-contanier .form-box form {
  width: 70%;
  height: 80%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.form-contanier .form-box form input {
  width: 100%;
  height: 7vh;
  background-color: transparent;
  border: 3px solid #fff;
  outline: #fff;
  padding: 1vw;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  border-radius: 15px;
}
.form-contanier .form-box .chack-box {
  width: 100%;
  height: 5vh;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.form-contanier .form-box .chack-box input {
  width: 3vw;
  height: 3vh;
  background-color: transparent;
  border: 3px solid #fff;
  outline: #fff;
}
::placeholder {
  color: #fff;
}
.form-contanier .form-box .chack-box b {
  width: 70%;
  font-size: 18px;
  color: #fff;
}
.form-contanier .form-box .chack-box b a {
  color: orange;
  text-decoration: none;
}
.form-contanier .form-box form button {
  width: 100%;
  height: 6vh;
  background-color: #f35300;
  border: none;
  outline: none;
  color: #fff;
  font-size: 20px;
  text-transform: uppercase;
  border-radius: 10px;
}
.form-contanier .form-box form button:hover {
  background-color: #d54d09;
}
.login {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
}
.login a {
  color: #f35300;
  text-decoration: none;
  padding-left: 5px;
  font-weight: bold;
  width: fit-content;
}

@media screen and (max-width: 767px) {
  .form-contanier .form-box {
    width: 95vw;
  }
  .form-contanier .form-box form {
    width: 95%;
    height: 90%;
  }
  .form-contanier .form-box form input {
    padding: 2vw;
    font-size: 15px;
    border-radius: 10px;
  }
  .form-contanier .form-box .chack-box input {
    width: 6vw;
    height: 6vh;
    margin-right: 10px;
    background-color: transparent;
    border: 3px solid #fff;
    outline: #fff;
  }
}
@media screen and (max-width: 576px) {
  .form-contanier .form-box form input {
    width: 100%;
    height: 7vh;
  }
  .form-contanier .form-box .chack-box b {
    width: 70%;
    font-size: 15px;
    color: #fff;
  }
  .form-contanier .form-box form button {
    font-size: 16px;
  }
  .login {
    font-size: 14px;
  }
}
</style>
