async function ApiHelperFunction1() {
  const res = await axios.get("./api1");
  console.log("helper function 1", res.data);
  return res.data;
}

async function ApiHelperFunction2() {
  const res = await axios.get("./api2");
  console.log("helper function 2", res.data);
  return res.data;
}

async function ApiHelperFunction3() {
  const res = await axios.get("./api3");
  console.log("helper function 3", res.data);
  return res.data;
}

const button_1 = document.getElementById("button_1");

const button_2 = document.getElementById("button_2");

button_1.addEventListener("click", async () => {
  var startTime = performance.now();
  console.log("Simple method started");
  const dataApi1 = await ApiHelperFunction1();
  const dataApi2 = await ApiHelperFunction2();
  const dataApi3 = await ApiHelperFunction3();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("simple method ended");
  var endTime = performance.now();
  alert(`Simple method took ${endTime - startTime} milliseconds`);
});

button_2.addEventListener("click", async () => {
  var startTime2 = performance.now();
  console.log("Promise all started");
  const res = await Promise.all([
    axios.get("./api1"),
    axios.get("./api1"),
    axios.get("./api1"),
  ]);
  const [dataApi1, dataApi2, dataApi3] = res.map((res) => res.data).flat();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("Promisse all ended");
  var endTime2 = performance.now();
  alert(`Promisse all took ${endTime2 - startTime2} milliseconds`);
});

// expresss

async function ApiHelperFunction1Express() {
  const res = await axios.get("http://localhost:3000/ap1");
  console.log("helper function 1", res.data);
  return res.data;
}

async function ApiHelperFunction2Express() {
  const res = await axios.get("http://localhost:3000/ap2");
  console.log("helper function 2", res.data);
  return res.data;
}

async function ApiHelperFunction3Express() {
  const res = await axios.get("http://localhost:3000/ap3");
  console.log("helper function 3", res.data);
  return res.data;
}

const button_3 = document.getElementById("button_3");

const button_4 = document.getElementById("button_4");

button_3.addEventListener("click", async () => {
  var startTime = performance.now();
  console.log("Simple method started");
  const dataApi1 = await ApiHelperFunction1Express();
  const dataApi2 = await ApiHelperFunction2Express();
  const dataApi3 = await ApiHelperFunction3Express();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("simple method ended");
  var endTime = performance.now();
  alert(`Simple method Express took ${endTime - startTime} milliseconds`);
});

button_4.addEventListener("click", async () => {
  var startTime2 = performance.now();
  console.log("Promise all started");
  const res = await Promise.all([
    axios.get("http://localhost:3000/ap1"),
    axios.get("http://localhost:3000/ap2"),
    axios.get("http://localhost:3000/ap3"),
  ]);
  const [dataApi1, dataApi2, dataApi3] = res.map((res) => res.data).flat();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("Promisse all ended");
  var endTime2 = performance.now();
  alert(`Promisse all Express took ${endTime2 - startTime2} milliseconds`);
});

console.log("Hi from Javascript");

//  flask REST

async function ApiHelperFunction1FlaskRest() {
  const res = await axios.get("http://localhost:8000/ap1");
  console.log("helper function 1", res.data);
  return res.data;
}

async function ApiHelperFunction2FlaskRest() {
  const res = await axios.get("http://localhost:8000/ap2");
  console.log("helper function 2", res.data);
  return res.data;
}

async function ApiHelperFunction3FlaskRest() {
  const res = await axios.get("http://localhost:8000/ap3");
  console.log("helper function 3", res.data);
  return res.data;
}

const button_5 = document.getElementById("button_5");

const button_6 = document.getElementById("button_6");

button_5.addEventListener("click", async () => {
  var startTime = performance.now();
  console.log("Simple method started");
  const dataApi1 = await ApiHelperFunction1FlaskRest();
  const dataApi2 = await ApiHelperFunction2FlaskRest();
  const dataApi3 = await ApiHelperFunction3FlaskRest();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("simple method ended");
  var endTime = performance.now();
  alert(`Simple method Flask Rest took ${endTime - startTime} milliseconds`);
});

button_6.addEventListener("click", async () => {
  var startTime2 = performance.now();
  console.log("Promise all started");
  const res = await Promise.all([
    axios.get("http://localhost:8000/ap1"),
    axios.get("http://localhost:8000/ap2"),
    axios.get("http://localhost:8000/ap3"),
  ]);
  const [dataApi1, dataApi2, dataApi3] = res.map((res) => res.data).flat();
  console.log("data API 1", dataApi1);
  console.log("data API 2", dataApi2);
  console.log("data API 3", dataApi3);
  console.log("Promisse all ended");
  var endTime2 = performance.now();
  alert(`Promisse all FlaskRest took ${endTime2 - startTime2} milliseconds`);
});

// eerror request

async function ErrorRequest() {
  const res = await axios.get("error");
  console.log("Error Request", res.data);
  return res.data;
}

const button_7 = document.getElementById("button_7");

button_7.addEventListener("click", async () => {
  var startTime = performance.now();
  console.log("Simple method started");
  try {
    const err = await ErrorRequest();
    console.log("error object", err);
    console.log("simple method ended");
    var endTime = performance.now();
    alert(`Simple method Flask Rest took ${endTime - startTime} milliseconds`);
  } catch (e) {
    alert(`SError`);
  }
});
