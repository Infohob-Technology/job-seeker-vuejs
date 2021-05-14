<template>
  <div class="payment-container">
    <div class="box">
      <div class="select-otr child">
        <select>
          <option value="volvo">Select Recruiter</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <img alt="" class="arrow" src="./arrow.png">
      </div>
      <div class="input-outer child">
        <input class="input" placeholder="Amount Paid" type="text">
        <img alt="n-icon" class="search-icon" src="./n-icon.png">
      </div>
      <div class="input-outer child">
        <input class="input" placeholder="Transaction Number" type="text">
      </div>
      <div class="last-li list child">
        <div class="action">
          <a class="action-btn cancel-btn" href="">Cancel</a>
          <a class="action-btn approve-btn" href="">Add Payment</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Payments_2',
};
</script>

<style scoped>
.payment-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

a:hover {
  text-decoration: none;
}

li {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul {
  padding: 0;
  margin: 0;
}

p {
  padding: 0;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  padding: 0;
  margin: 0;
}

.box {
  margin: 130px 20px;
  width: 576px;
  background-color: white;
  border-radius: 8px;
  padding: 32px 48px;
  border: 1px solid #8B90A0;
}

.box .select-otr {
  position: relative;
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  width: 100%;
}

.box .child:not(:last-child) {
  margin-bottom: 20px;
}

.box .select-otr select {
  width: 100%;
  border-radius: 4px;
  color: #8B90A0;
  background: #FFFFFF;
  padding: 12px 16px;
  border: none;
  appearance: none;
}

.box select:focus {
  outline: none;
}

.box .select-otr .arrow {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}


.input-outer {
  position: relative;
  width: 100%;
}

.box .input-outer .input {
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.box .input-outer .input::placeholder {
  color: #8B90A0;
}

.box .input-outer .search-icon {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}

.box .input-outer .input {
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.box .last-li .action {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.box .last-li .action .cancel-btn {
  padding: 12px 0;
  width: 100%;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
  margin-right: 10px;
}

.box .last-li .action .approve-btn {
  padding: 12px 0;
  width: 100%;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
}

.box .last-li .action .action-btn {

}

@media screen and (max-width: 576px) {
  .box {
    width: 80%;

  }
}
</style>
