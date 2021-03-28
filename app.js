function navLinks() {
  // document.getElementById("Appt").innerText += "Order";
  // document.getElementById("Home").innerText += "Home";
  // document.getElementById("About").innerText += "About";
  // document.getElementById("Contact").innerText += "Contact";
  document.getElementById("Appt").addEventListener("click", loadform);
  document.getElementById("Home").addEventListener("click", loadHome);
  document.getElementById("Contact").addEventListener("click", loadContact);
  // document.getElementById("About").addEventListener("click", loadAbout);
}
const appt = () => {
  document.getElementById("navv").innerHTML += `
      <i
      class="fas fa-calendar-alt"
      onclick="loadform()"
      style="font-size: 24px"
    ></i>`;
};
function loadHome() {
  clearClicks();
  navLinks();
  document.getElementById("main").innerHTML += `
    
  <img id="header" src="https://previews.dropbox.com/p/thumb/ABHtHyHAbYS0sUdijDozjb8zh_bflRhwjp_vwKc21p2SHSZRLkgvQNHDXvYdSrXpxnzY7DTmNxgH_nz-N276aQMIi9eQRWK8xyl7dfJLrjrLSDDUO3ev4YT-JgeRrdKxUMh9vaD_aLTXFijmJ3D31NiaSp0-cCKjNvJ5F1pIEcfE1Dv8mN6BI33Km0_ps0mgIo-RfWCYUNxY6ZckchXA-N8o7T8aJfb8c3FtWJS5UOPIljO2Ey-WLMBERfzM0tvlaR-UbnjwMKQyJhd62BFLOv0E6M8WqbTcXOyPpPHjDUHuW73Dj0CSpeTI22Y9iFIU-n5QJGxBjSP_3OEoH59rsmo1vaNNjcStKZxNZKLnpfMzbg/p.png?fv_content=true&size_mode=5" alt=""/>
  <div class="contianer">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABEDeVWi_HsksRao7DeEyzeEOd-i7U9Ti0ES8cKl0p--I91nILWT1h8BybIlbHoBOhHURRRq_FpcTeHOyfiAXbiVacQu58EHZVr0Hfm0xMmWLoaj5-TVIMhi-Q_rEIIPpt4C6F8T5Q72sKGnIbytVXKLfI55q3A8BiIle7nKDYRQMqmqCjwF2fK8eO7YTuskLptDv75YFuM40LTt4yJLo2Nswitq0Sn5QkOWfsIZqTId-StVlqzVy_WmsO2Kgxh9spvXbUiPr1hYb0_zwmI8B5K85uwDCJd8S1B5TX-eo-Y16aVdVe6Ei3owfecVrk2CDAPYSAqg_E4XkeOVwOq4n3U9ldjyo_tPC5o-zXCvtBOoQA/p.jpeg?fv_content=true&size_mode=5">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABH2Y8FspjJnvijGs1EN7hfB_3ZKGib21mCsEpMMRI_ard5nVmt2nBpn_hTyXmcbuI7uKU8NFh1c6xLyIWcBrhbFplcktW7VTHMrStf3fAA8b2OihNcp-q9hP4AA7VsN5KIMGuXdBl_2rvAcijILtkjkXoLATpPrrL0GyPeAJl6NezmbuGtc6wcYUR9w67LmToXhWkf2DxbCtG0pQtdkFPTXgqW68Sf39lc554Ysfqp1SIY1KRKQmu0SMZ41DUfmDB1P5iQkukOvuqzSoyftJuez8jSHZsxJGsq_7hUWyvMtOYvg9qzLXuTWL2UA-QtPxVdqFOvmpCip_0LxVzehwNk22T5lRSjd28IG-4MlN9ck0A/p.jpeg?fv_content=true&size_mode=5">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABFpxKgTj7GaKfse7NRqbPw0eWjsn4X4c2kdS9yepWYhXCRWbN2Z_JEBtv6aKLiPrSsmYJw4G4TQ2MIUiS_d5-0GGf_iB4SC9XFcb4uYUPYiFo4NXXCNvjWL1OsEm40FspAia_n_oKtPhe30Txv8PFIjKG9zkeDhtJA5O0X1SIxVDVgYVFKENdOhhlBMAY0N5bDjkn__higTCTqWTzTnBXb_IV1ceR8h3_c_IG0AZWM6AhujjcCLOa75wu30RpjpNTysp7k8WRxSkjfJ-nJ1gLUYEb4L7UQ4rY1vG9gmEfhk6mVQeizjVEf2KRc5nPspa163oLCtuIKF6v5FQyFNm12cSpH6-D8WVCT-Fyv4YXR7_g/p.jpeg?fv_content=true&size_mode=5">
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABH1dL1b8RyGK0nDIKdaZO7Sd619NoCOFLUdKXwu3n-f7uIL5PCuIK4DpMGRDIW4D2ds2BY42UYAu3PABRGVUFcpt6_GsKbWyGuioBhCTm3QufPLi-F6PMTb1k9PA1yI_qFUeUDwSWE-EU6auX3ypcgDLjPlMl6R9NAxnuUGR4yyc72Fs-tAGZlptJ0u2-egb5zFBxkzOYbQuFxfjcrvFgqJDZIFKZxX1rt3C2KhB-5EQMbZdTAwga_nMVsBK1zgwk5TZaOykp9x5TjZPVNpC_hWItwiKfXh6-Z8g5gKXhjU4PbSiys4zJSJK2OVKCHJ8YfmdoLGGhZNehNT8AF4KB4uDldHrxYskS0HaqMFF3txsw/p.jpeg?fv_content=true&size_mode=5">
        <img id="pic" src="https://previews.dropbox.com/p/thumb/ABHIDewlEyQ4J9vh5epC9yqYSN4fVlzvEIbx6Oqzg2FT9Iyp4bNvfdLxks6MGjUaCdbotc7A_l8euHKgszL9axt9NRmkKgUnoqWcID7MA_h2zs705ZHLw4V2MIwQDj4rcYQUJSUm6hdObQI3a0CCEftoueVKOJUlNEFBsTeu9pBLQTHRQmVh8-iwSWYG3e7JPKUVq6yqMPty1s2sOaaIZrtQZgeNLBrQDq9VqWFkCzsmyPMyIUUj8RVP5PEUNBS5nFCLZA6YE9Hg_luuHm1pwdjxw1foWkY29bITUxE27tENnGN-Qwz1nVFQfjU8hGLgAR-fxaDKnAzcA2eVvNpg1BY7CYINT86lWq5TPLCE7Mu9IQ/p.jpeg?fv_content=true&size_mode=5">
   
    <img id="pic" src="https://previews.dropbox.com/p/thumb/ABE_okVUN77u-3u8yiDA8JNq-AwUyoXIjDHrbEthaamzYDAYj6aDwWvWfthIYINj0kkXwgzDI71gBoIEiKF-P1Z6SLdv9Y93Nur-pBZlzNvGXznUBMbocJMhB9UpThwRiFcp1OHHrfweHCePkivkvkavfK8wb_CdZ42xAF-5amqY0fqyXmu169ZxInXWyrmVYmwWyEp8-ZGnYu8bfa9YKfMf2KkarHlgE8BcnErhaMyL5GbxmlHss7wC2FwMPBEVh7oFJkndbxvb17RpLRGFkIxlo5o4vEC3VqV1YWGhOegmD_iOI6Qqk2a7KCrj_DU_iFhD3M3vZwkFGrXeVnjMz-ErZfjz-XYvpsy0u4d42FTvXw/p.jpeg?fv_content=true&size_mode=5">

    </div>
    `;
}
function loadContact() {}
function loadAbout() {}

document.addEventListener("DOMContentLoaded", () => {
  appt();
  loadHome();
});
