<template>
  <div class="form-contanier">
    <div class="form-box">
      <h2>Forget Passwoard</h2>
      <p>please enter a code</p>
      <form>
        <div class="code">
          <input type="text" class="rounded" />
          <input type="text" class="rounded" />
          <input type="text" class="rounded" />
          <input type="text" class="rounded" />
          <input type="text" class="rounded" />
          <input type="text" class="rounded" />
        </div>
        <!-- <button>next</button> -->
        <button>
          <router-link to="/forgetpassword/SendCode/resetpassword" class="login"
            >next</router-link
          >
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.login {
  width: 100%;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
}
.login a {
  color: #f35300;
  text-decoration: none;
  padding-left: 5px;
  font-weight: bold;
  width: fit-content;
  text-decoration: none;
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
  height: 52vh;
  background-color: rgba(250, 250, 250, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 15px;
}
.form-contanier .form-box form .code {
  width: 100%;
  height: 10vh;
  /* background-color: #fff; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.form-contanier .form-box form .code input {
  width: 15%;
  height: 80%;
  border: 2px solid #fff;
}
.form-contanier .form-box h2 {
  font-size: 35px;
  color: #fff;
}
.form-contanier .form-box p {
  font-size: 22px;
  color: #fff;
  width: 70%;
}
.form-contanier .form-box form {
  width: 70%;
  height: 45%;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.form-contanier .form-box form label {
  font-size: 30px;
  text-align: left;
  width: 100%;
  color: #fff;
  text-transform: capitalize;
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
@media screen and (max-width: 767px) {
  .form-contanier .form-box {
    width: 95vw;
    height: 55vh;
  }

  .form-contanier .form-box form {
    width: 95%;
    height: 40%;
  }
  .form-contanier .form-box form input {
    padding: 2vw;
    font-size: 15px;
    border-radius: 10px;
  }
}
@media screen and (max-width: 576px) {
  .form-contanier .form-box form input {
    width: 100%;
    height: 8vh;
  }

  .form-contanier .form-box form button {
    font-size: 16px;
  }

  .form-contanier .form-box h2 {
    font-size: 25px;
    color: #fff;
  }
  .form-contanier .form-box form label {
    font-size: 20px;
    text-align: left;
    width: 100%;
    color: #fff;
    text-transform: capitalize;
  }
  .form-contanier .form-box p {
    font-size: 20px;
    color: #fff;
    width: 80%;
  }
}
</style>
