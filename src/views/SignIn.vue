<template>
  <div class="form-contanier">
    <div class="form-box">
      <h2>sign in</h2>
      <form>
        <input type="text" placeholder="User Name" />
        <input type="email" placeholder="Email" />
        <div class="forget">
          <router-link to="/forgetpassword" class="btn text-light"
            >Forget Password ?</router-link
          >
          <div class="remeber-me">
            Remeber Me
            <input type="checkbox" />
          </div>
        </div>
        <button>Submit</button>
        <div class="line">
          <hr />
          OR
          <hr />
        </div>
        <div class="icon">
          <font-awesome-icon
            icon="fa-brands fa-square-facebook"
            class="btn-primary btn face"
          />
          <font-awesome-icon
            icon="fa-solid fa-envelope"
            class="btn btn-danger"
          />
          <font-awesome-icon icon="fa-brands fa-apple" class="btn btn-dark" />
        </div>
        <div class="login">
          Don't Have an account ?
          <router-link to="/signup" class="login">Sing Up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "signin",
};
</script>

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
  height: 60vh;
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
  text-transform: uppercase;
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

::placeholder {
  color: #fff;
}
.form-contanier .form-box form .forget {
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  color: #fff;
}
.form-contanier .form-box form .forget .remeber-me {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.form-contanier .form-box form .forget input {
  width: 2vw;
  height: 2vh;
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
  border-radius: 20px;
}
.form-contanier .form-box form button:hover {
  background-color: #d54d09;
}
.form-contanier .form-box .line {
  width: 100%;
  height: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
}
.form-contanier .form-box .line hr {
  width: 45%;
  border: 1px solid #fff;
}
.form-contanier .form-box .icon {
  width: 60%;
  height: 12vh;
  /* background-color: coral; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.form-contanier .form-box .icon img {
  width: 30%;
  height: 60%;
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
  font-weight: bold;
  text-decoration: none;
  padding-left: 5px;
  width: fit-content;
}
.icon .btn {
  font-size: 30px !important;
  padding: 5px 9px;
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
  .form-contanier .form-box form .forget {
    width: 90%;
    height: 6vh;
  }
  .form-contanier .form-box form .forget .remeber-me {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    font-size: 16px;
  }
  .form-contanier .form-box form .forget input {
    width: 4vw;
    height: 4vh;
  }
}
@media screen and (max-width: 576px) {
  .form-contanier .form-box form input {
    width: 100%;
    height: 7vh;
  }

  .form-contanier .form-box form button {
    font-size: 16px;
  }
  .login {
    font-size: 14px;
  }
}
</style>
