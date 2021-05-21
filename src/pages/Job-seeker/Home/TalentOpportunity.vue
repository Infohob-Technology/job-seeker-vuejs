<template>
  <div class="card-container">
    <div class="card-child text-center">
      <div><span class="category-box">Companies</span></div>
      <div class="mt-40 need-talent-text">
        <span> need talent? </span>
      </div>
      <div class="mt-30">
        <button class="get-started-now">Get Started Now</button>
      </div>
    </div>
    <div class="vertical"></div>
    <div class="card-child text-center">
      <div><span class="category-box">Talent</span></div>
      <div class="mt-40 need-talent-text">
        <span> want opportunities? </span>
      </div>
      <div class="mt-30">
        <button class="get-started-now">Get Started Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vertical {
  border-left: 1px solid #f0f1f3;
  height: 200px;
  position: absolute;
  left: 50%;

}

.get-started-now {
  height: 48px;
  width: 260px;
  vertical-align: text-top;
  background: #0385f3;
  border-radius: 4px;
  border: 1px solid #0385F3;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  /* identical to box height, or 16px */
  align-items: center;
  text-align: center;
  color: #ffffff;
}

.mt-30 {
  margin-top: 30px;
}

.display-flex {
  display: flex;
}

.justtify-content-space-around {
  justify-content: space-around;
}

.mt-60 {
  margin-top: 97px;
}

.mb-100 {
  margin-bottom: 100px;
}

.mt-40 {
  margin-top: 40px;
}

.need-talent-text {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 120%;
  /* identical to box height, or 58px */
  letter-spacing: 1px;
  text-transform: capitalize;
  color: #222222;
}

.category-box {
  background: rgba(90, 170, 223, 0.1);
  border-radius: 2px;
  padding: 10px 20px;
  color: #8b90a0;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */
  letter-spacing: 0.04em;
  text-transform: capitalize;

  color: #0084f4;
}

@media only screen and (min-width: 320px) and (max-width: 479px) {
}

.card-container {
  padding: 60px 0;
  margin: 20px 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card-child {
  margin: 10px;
  flex: 1 1 250px;
}

@media only screen and (max-width: 767px) {
  .vertical {
    display: none;
  }
}

@media only screen and (max-width: 768px) and (max-width: 991px) {
  .need-talent-text span {
    font-size: 20px;
  }

  .get-started-now {
    width: 144px;
    font-size: 12px;
  }

  .category-box {
    font-size: 13px;
  }
}

@media only screen and (max-width: 992px) and (max-width: 1025px) {
  .need-talent-text {
    font-size: 20px;
  }

  .get-started-now {
    width: 144px;
    font-size: 12px;
  }

  .category-box {
    font-size: 13px;
  }
}

@media only screen and (min-width: 68px) {

}
</style>
