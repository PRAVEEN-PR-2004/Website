// const attendance = () =>
//     {
//         for(let i=0; i<5;i++)
//         {
//             console.log(i);
//         }
//     }
// attendance()
const balance = 1000;
function available() {
  console.log("balance is available");
}
function notavailable() {
  console.log("balance is not available");
}

function bankstatus(data, result) {
  if (data < 0) {
    console.log(`error`);
  }
  result(data);
}
function result(data) {
  if (data > balance) {
    notavailable();
  } else {
    available();
  }
}
bankstatus(500, result);

async function api() {
  const response = await fetch("https://66e526d45cc7f9b6273c69b3.mockapi.io/register")
   const data = await response.json();

  return data
}
async function apidata() {
    const childapi = await api();
    const activeuseronly =  childapi.filter(user=> user.isActive)
    console.log(activeuseronly)
    const eachele = childapi.map((data)=> console.log(data))
    console.log(eachele)
} 
apidata();
