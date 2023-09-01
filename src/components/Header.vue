<template>
  <nav class="navbar navbar-expand-lg navbar-dark shadow fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img class="logo rounded-circle" src="@/assets/logo-image.jpeg" alt=""
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse text-center"
        id="navbarTogglerDemo02"
      >
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
            <router-link to="/" class="nav-link" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">About</a>
            <!-- <router-link to="/about" class="nav-link">About</router-link> -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#tour">Tour</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#flight">Flight</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#reviews">Reviews</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary" type="submit">Search</button>
          <router-link to="/signIn" class="btn btn-outline-secondary sign"
            >SignIn</router-link
          >
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "header",
};
</script>

<style scoped>
.navbar {
  background-color: #d89c78 !important;
  color: #fff !important;
  width: 100%;
  font-size: 21px;
  font-weight: 600;
}
.logo {
  width: 40px;
  width: 40px;
}
.form-control {
  background-color: #ffffff52 !important;
}
.nav-link:focus,
.nav-link:hover {
  color: #fff !important;
}
.sign {
  width: 136px;
  margin: 0px 22px;
}
.nav-link {
  width: 100px;
  margin: auto;
}
a.router-link-active.router-link-exact-active.nav-link {
  border-bottom: 2px solid #804518;
  color: #fff !important;
  width: 100px;
  margin: auto;
}
/* @media (max-width: 1000px) {
  .navbar {
    background-color: #d28b61de !important;
  }
} */
</style>
