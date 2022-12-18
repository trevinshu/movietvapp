//Draw Message For Search Result
function resultMsg(className, msg) {
  let resultMsg = `<h2 class="${className}">${msg}</h2>`;
  msgContainer.innerHTML = resultMsg;
}

export default resultMsg;
