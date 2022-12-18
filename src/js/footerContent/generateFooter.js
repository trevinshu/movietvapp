let footer = document.getElementById('footer');

//Generate Footer Content
function generateFooter() {
  let date = new Date().getFullYear();

  footer.innerHTML = `
        <p>Designed & Developed by Trevin Shu &copy; ${date}</p>
      `;
}

export default generateFooter;
