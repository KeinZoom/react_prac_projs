async function getAnswer() {
  return new Promise((resolve, reject) => {
    console.log("getAnswer start");
    const rd = Math.floor(Math.random() * 2);
    if (rd === 1) {
      resolve("resolve OK"); // resolved or rejected firstly, then enqueue to the microTask queue
    } else {
      reject(new Error("reject not Ok"));
    }
  });
}

async function catchAnswer() {
  try {
    console.log("catchAnswer start");
    const result = await getAnswer();
    console.log(result);
    return "OK";
  } catch (error) {
    console.log(error.message);
    return "Error";
  }
}

catchAnswer()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

console.log("start");

catchAnswer()
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
