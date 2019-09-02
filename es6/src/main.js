// import axios from "axios";

// class Api {
//   static async getUserInfo(username) {
//     try {
//       const response = await axios.get(
//         `https://api.github.com/users/${username}`
//       );

//       console.log(response);
//     } catch (err) {
//       console.warn("Erro na API");
//     }
//   }
// }

// Api.getUserInfo("mateusmiguel");
// Api.getUserInfo("mateusmiguelxxpto");

const delay = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

const umPorSegundo = async () => {
  console.log(await delay(console.log("1s")));
  console.log(await delay(console.log("2s")));
  console.log(await delay(console.log("3s")));
};

umPorSegundo();
