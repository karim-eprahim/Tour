<template>
  <!-- <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Icon</a>
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
            <router-link to="/" class="nav-link" aria-current="page"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">Tour</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Flight</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled">Reviews</a>
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
          <button class="btn btn-outline-secondary sign" type="submit">
            SignIn
          </button>
        </form>
      </div>
    </div>
  </nav> -->
  <router-view />
</template>
<script>
// import Header from "@/components/Header.vue";
export default {
  components: {
    // Header,
  },
};
</script>
<style lang="scss"></style>
