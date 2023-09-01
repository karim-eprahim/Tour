<template>
  <div class="flight" id="flight">
    <div class="container">
      <h3 class="special-heading">Flight with us</h3>
      <div class="content">
        <div class="double">
          <button class="active btn border rounded-pill fil">
            <font-awesome-icon icon="fa-solid fa-plane" class="pe-3" />Tour with
            Flight
          </button>
          <button class="btn border rounded-pill fil">
            <font-awesome-icon icon="fa-solid fa-bus" class="pe-3" />Tour with
            Bus
          </button>
        </div>
        <div class="chexs">
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
            <label class="form-check-label" for="inlineRadio1"
              >Return Flight</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
            <label class="form-check-label" for="inlineRadio2"
              >One-way Flight</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
            <label class="form-check-label" for="inlineRadio3"
              >Multi-City Flight</label
            >
          </div>
        </div>
        <div class="info">
          <button class="btn rounded-pill border mor">
            <font-awesome-icon icon="fa-regular fa-circle-dot" />
            <p>Coming From</p>
          </button>
          <button class="btn rounded-pill border mor">
            <font-awesome-icon icon="fa-regular fa-circle-dot" />
            <p>Coming To</p>
          </button>
          <!-- <button class="btn rounded-pill border mor">
            <font-awesome-icon icon="fa-regular fa-star" />
            <p>Class</p>
          </button> -->
          <!-- <div class="dropdown">
            <button
              class="btn rounded-pill border mor dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Class
            </button>
            <ul
              class="dropdown-menu w-75"
              aria-labelledby="dropdownMenuButton1"
            >
              <li><a class="dropdown-item" href="#">First class</a></li>
              <li><a class="dropdown-item" href="#">Business</a></li>
              <li><a class="dropdown-item" href="#">Economy</a></li>
            </ul>
          </div> -->
          <select
            class="form-select rounded-pill border mor text-center"
            aria-label="Default select example"
          >
            <option class="fw-bold" selected>Class</option>
            <option value="1">First class</option>
            <option value="2">Business</option>
            <option value="3">Economy</option>
          </select>
          <input class="btn rounded-pill border mor" type="date" />
          <input class="btn rounded-pill border mor" type="date" />
          <!-- <div class="wrapper rounded-pill mor border">
            <span @click="Subtract" class="minus">-</span>
            <span class="num">{{ num }}</span>
            <span @click="add" class="plus">+</span>
          </div> -->
          <!-- <div class="dropdown">
            <button
              class="btn rounded-pill border mor dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              No.Tickets
            </button>
            <ul
              class="dropdown-menu w-75"
              aria-labelledby="dropdownMenuButton1"
            >
              <li>
                <div class="row">
                  <div class="col">
                    <a class="dropdown-item" href=""> adult </a>
                  </div>
                  <div class="col">
                    <span
                      @click="Subtract"
                      class="minus btn badge rounded-pill border text-black"
                      >-</span
                    >
                    <span class="num px-1">{{ num }}</span>
                    <span
                      @click="add"
                      class="plus btn badge rounded-pill border text-black"
                      >+</span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div> -->
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn rounded-pill border mor"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            No.Tickets
            <font-awesome-icon icon="fa-solid fa-caret-down" />
          </button>

          <!-- Modal -->
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">No.Tickets</h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div class="row justify-content-around text-center">
                    <div class="col-8">Adult</div>
                    <div class="col-4">
                      <span
                        @click="numA--"
                        class="minus btn badge rounded-pill border text-black"
                        >-</span
                      >
                      <span class="num mx-3">{{ numA }}</span>
                      <span
                        @click="numA++"
                        class="plus btn badge rounded-pill border text-black"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="row justify-content-around text-center">
                    <div class="col-8">
                      Children
                      <span class="badge text-secondary">(Ages 2 - 12)</span>
                    </div>
                    <div class="col-4">
                      <span
                        @click="numB--"
                        class="minus btn badge rounded-pill border text-black"
                        >-</span
                      >
                      <span class="num mx-3">{{ numB }}</span>
                      <span
                        @click="numB++"
                        class="plus btn badge rounded-pill border text-black"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="row justify-content-around text-center">
                    <div class="col-8">
                      Infants
                      <span class="badge text-secondary">(Ages 0 - 2)</span>
                    </div>
                    <div class="col-4">
                      <span
                        @click="numC--"
                        class="minus btn badge rounded-pill border text-black"
                        >-</span
                      >
                      <span class="num mx-3">{{ numC }}</span>
                      <span
                        @click="numC++"
                        class="plus btn badge rounded-pill border text-black"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="row justify-content-around text-center">
                    <div class="col-8">
                      Seniors <span class="badge text-secondary">(+65)</span>
                    </div>
                    <div class="col-4">
                      <span
                        @click="numD--"
                        class="minus btn badge rounded-pill border text-black"
                        >-</span
                      >
                      <span class="num mx-3">{{ numD }}</span>
                      <span
                        @click="numD++"
                        class="plus btn badge rounded-pill border text-black"
                        >+</span
                      >
                    </div>
                  </div>
                  <div class="row justify-content-around text-center">
                    <div class="col-8">
                      Students
                      <span class="badge text-secondary">(Ages 12 - 24)</span>
                    </div>
                    <div class="col-4">
                      <span
                        @click="numE--"
                        class="minus btn badge rounded-pill border text-black"
                        >-</span
                      >
                      <span class="num mx-3">{{ numE }}</span>
                      <span
                        @click="numE++"
                        class="plus btn badge rounded-pill border text-black"
                        >+</span
                      >
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-warning"
                    data-bs-dismiss="modal"
                    @click="num = numA = numB = numC = numD = numE = 0"
                  >
                    Clear
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="btn d-block mt-5 mx-auto bg rounded-pill fs-3 fw-bold text-light"
          @click="idName ? (idName = '') : (idName = 'none')"
        >
          Search for Flight
        </button>
      </div>
      <hr />

      <div class="search-flight" :id="idName">
        <div class="parts mt-5">
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Going To</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th scope="row">
                  <img
                    src="@/assets/banks/green.png"
                    class="green rounded"
                    alt=""
                  />
                </th>
                <td class="time">
                  <small class="smal">18:00 cai</small> --->
                  <small class="smal">19:00 SSH</small>
                </td>
                <td>
                  <small class="smal">Price 1500 Le</small>
                </td>
                <td><small class="smal">view Details</small></td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="@/assets/banks/green.png"
                    class="green rounded"
                    alt=""
                  />
                </th>
                <td class="time">
                  <small class="smal">18:00 cai</small> --->
                  <small class="smal">19:00 SSH</small>
                </td>
                <td><small class="smal">Price 1500 Le</small></td>
                <td><small class="smal">view Details</small></td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="@/assets/banks/green.png"
                    class="green rounded"
                    alt=""
                  />
                </th>
                <td class="time">
                  <small class="smal">18:00 cai</small> --->
                  <small class="smal">19:00 SSH</small>
                </td>
                <td><small class="smal">Price 1500 Le</small></td>
                <td><small class="smal">view Details</small></td>
              </tr>
            </tbody>
          </table>
          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th scope="col">Return</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <th scope="row">
                  <img
                    src="@/assets/banks/1528.png"
                    class="green rounded"
                    alt=""
                  />
                </th>
                <td class="time">
                  <small class="smal">18:00 cai</small> --->
                  <small class="smal">19:00 SSH</small>
                </td>
                <td>
                  <small class="smal">Price 1500 Le</small>
                </td>
                <td><small class="smal">view Details</small></td>
              </tr>
              <tr>
                <th scope="row">
                  <img
                    src="@/assets/banks/447.png"
                    class="green rounded"
                    alt=""
                  />
                </th>
                <td class="time">
                  <small class="smal">18:00 cai</small> --->
                  <small class="smal">19:00 SSH</small>
                </td>
                <td><small class="smal">Price 1500 Le</small></td>
                <td><small class="smal">view Details</small></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <hr />
</template>
<script>
export default {
  name: "flight",
  data() {
    return {
      idName: "none",
      num: 0,
      numA: 0,
      numB: 0,
      numC: 0,
      numD: 0,
      numE: 0,
    };
  },
  methods: {
    add() {
      return this.num++;
    },
    Subtract() {
      if (this.num != 0) {
        return this.num--;
      }
    },
  },
};
</script>

<style scoped>
.flight {
  padding: 40px 0px;
}
.special-heading {
  font-size: 50px;
  color: #000;
  padding-bottom: 10px;
}
.active {
  background-color: #804518 !important;
  color: #fff !important;
}
.double {
  margin-top: 80px;
  display: flex;
  gap: 25px;
}
.fil {
  width: 300px;
  font-size: 22px;
  transition: 0.3s;
}
.fil:hover {
  background-color: #804518;
  color: #fff;
}
.chexs {
  margin-top: 50px;
  width: 60%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 22px;
}
.info {
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(292px, 1fr));
  /* grid-template-rows: repeat(auto-fill, minmax(257px, 1fr)); */
  grid-gap: 50px;
  justify-items: center;
}
.border {
  border-color: #000 !important;
}
.mor {
  width: 300px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.4s;
}
.mor:hover {
  background-color: #804518;
  color: #fff;
}
.bg {
  background-color: #f35300;
  transition: 0.4s;
  width: 330px;
  height: 60px;
}
.bg:hover {
  background-color: #9c4011;
  border-radius: var(--bs-border-radius-pill) !important;
}
.table {
  font-weight: 600;
}
img.green {
  width: 70px;
  height: 60px;
}
.smal {
  display: flex;
  width: 50px;
  flex-wrap: wrap;
  text-align: center;
  margin: auto;
}
.time {
  display: flex;
  height: 76px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
#none {
  height: 0;
  overflow: hidden;
  transition: 0.4s;
}
/* Google fonts import link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #343f4f;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
}
.wrapper span {
  width: 100%;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  user-select: none;
}
.wrapper span.num {
  font-size: 30px;
  border-right: 2px solid rgba(0, 0, 0, 0.2);
  border-left: 2px solid rgba(0, 0, 0, 0.2);
  pointer-events: none;
}

@media (max-width: 767px) {
  .special-heading {
    font-size: 40px;
    padding-bottom: 0px;
  }
  .chexs {
    width: 100%;
  }
  .fil {
    width: 220px;
    font-size: 15px;
  }
  .info {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
    margin-top: 40px;
  }
  .mor {
    width: 136px;
    font-size: 14px;
  }
  .mor p {
    font-size: 12px;
  }
  .bg {
    width: 280px;
    height: 50px;
  }
  .wrapper span,
  .wrapper span.num {
    font-size: 20px;
  }
}
</style>
