const loadNav = () => {
  document.getElementById("Order").innerText += "Order";
  document.getElementById("Home").innerText += "Home";
  document.getElementById("About").innerText += "About";
  document.getElementById("Contact").innerText += "Contact";
  document.getElementById("Order").addEventListener("click", loadform);
  document.getElementById("Home").addEventListener("click", loadHome);
  document.getElementById("Contact").addEventListener("click", loadContact);
  document.getElementById("About").addEventListener("click", loadAbout);
};
const loadHome = () => {
  clearClicks();
  document.getElementById("main").innerHTML += `
    <img id="header" src="https://previews.dropbox.com/p/thumb/ABEyfODQJa9qdb6inGwS-O3xcAtFX3P0j-Y-vkHuZmwrRmY5wdcGcCyaVea3GNmpe_o5JYqZf1PhnN8fSTy_E8W-jh7mnK-yeHXhOgaIKCAh27uCeYHFsiAg720afJN2eYqbBHvEKjXFUjOllgEndujK6vT9cMxZGmFbb_WYubCL7w4aMZBwAavEQ3idejt7Kh6T1vSM0glJ6Jg-EaMwhna2jg8BKagHDEnAvj1gtq0WdBgAZtC-GgtVH3WxjKtF7Z_8UGZXG6rj_0bUwVvG6MiHWedXH5JUjmcqH4DOvyyFUUtcAi6L6R1Eo5T80AWhbZM_AFId2gkZIBI53OFf7baROO6NSEYw4Z_GINRSAz-rJQ/p.jpeg?fv_content=true&size_mode=5" alt=""/>
    `;
};
const loadContact = () => {};
const loadAbout = () => {};

document.addEventListener("DOMContentLoaded", loadNav);
