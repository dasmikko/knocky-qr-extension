

async function getJWT () {
  try {
    let {value: jwtToken} = await chrome.cookies.get({
      name: 'knockoutJwt',
      url: 'https://api.knockout.chat'
    })

    var qrcode = new QRCode(document.getElementById("qrcode"), {
      text: jwtToken,
      width: 256,
      height: 256,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  } catch (e) {
    document.getElementById("error").textContent = "You seem to not be logged in on Knockout.chat"
  }
}

getJWT()