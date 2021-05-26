<template>
  <div class="container-fluid" style="margin: 64px 0px">
    <div class="row padding">
      <div class="col-md-7 pl-sm-0 mb-3">
        <h1 class="top-heading">Frequently Asked Questions</h1>
        <div>
          <a-collapse
            default-active-key="1"
            :bordered="false"
            class="quesiton-collapse"
          >
            <a-collapse-panel key="1" header="This is panel header 1">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel
              key="2"
              header="This is panel header 2"
              :disabled="false"
            >
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel
              key="4"
              header="This is panel header 4"
              :disabled="false"
            >
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="5" header="This is panel header 5">
              <p>{{ text }}</p>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
      <div class="col-md-5">
        <div class="card">
          <div class="card-body">
            <h3>Send Your Feedback/Question</h3>
            <p>
              Please use the form below to contact our support. We will get back
              to you within a few working days.
            </p>

            <input
              type="text"
              placeholder="Message Title"
              class="tite-input mb-3"
            />

            <textarea
              name=""
              id=""
              rows="6"
              placeholder="Enter your Message"
              class="form-control t-area"
            ></textarea>

            <div style="float: right; margin: 20px 0px">
              <span class="submit-button text-center">Send Message</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "contact-us",
  data() {
    return {
      text:
        "A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.",
    };
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style scoped>
.input-field input {
  border: 1px solid #a1a4b1;
  border-radius: 4px;
  height: 48px;
  background: none;
  padding: 0 16px;
  width: 350px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
.input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;
}
.input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;
}

.input-field input:focus {
  outline: none;
}

.input-field input::-webkit-input-placeholder {
  /* Edge */
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.input-field input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

.input-field input::placeholder {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
.card-body {
  padding: 32px;
  background-color: #0084f4;
  border-radius: 8px;
}
.card-body p {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  color: #ffffff;
}
.card-body h3 {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: capitalize;
  color: #ffffff;
}
.submit-button {
  background: white;
  border-radius: 1px;
  padding: 10px 16px;
  cursor: pointer;
  font-family: "Open Sans", sans-serif;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  color: #354255;
  justify-content: center;
  width: 200px;
  height: 48px;
  border-radius: 4px;

}
.quesiton-collapse {
  background-color: white !important;
}
.quesiton-collapse p {
  line-height: 32px;
  font-size: 16px;
  color: #8b90a0;
}
.tite-input {
  display: block;
  width: 100%;
  height: 56px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: white;
  background-color: #0084f4;
  background-clip: padding-box;
  border: 1px solid white;
  border-radius: 0.25rem;
  -webkit-transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    -webkit-box-shadow 0.15s ease-in-out;
}

.tite-input:focus {
  outline: none;
}
textarea::-webkit-input-placeholder {
  color: white !important;
}

textarea:-moz-placeholder {
  /* Firefox 18- */
  color: white !important;
}

textarea::-moz-placeholder {
  /* Firefox 19+ */
  color: white !important;
}

textarea:-ms-input-placeholder {
  color: white !important;
}

textarea::placeholder {
  color: white !important;
}
.t-area {
  background-color: #0084f4;
}
::placeholder {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
}

:-ms-input-placeholder {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
}

::-ms-input-placeholder {
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
}
.top-heading {
font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 44px;
line-height: 52px;
color: #505565;

}
.padding {
  padding: 10px 100px;
}
@media only screen and (max-width: 767px) {
  .padding {
    padding: 10px 20px;
  }
  .top-heading {
    font-size: 30px;
    line-height: 42px;
  }
  .card-body{
      padding: 22px 12px;
  }
}

@media only screen and (max-width: 450px) {
  .padding {
    padding: 10px 0;
  }
}
</style>