function loadform() {
  //   clearPage();
  //   loadNav();
  const index = document.getElementById("main");

  // let id = event.target.dataset.id;
  //  let cardFormDiv = document.getElementById("name-form");
  let html = `
        <form>
            Name: <input type="text" id="name" placeholder="Jane Doe">
            <br/>
           Email: <input type="text" id="email" placeholder="JaneDoe@example.com">
             <br> 
            Phone: <input type="text" id="phone" placeholder="555-555-5555">
               <br> 
            Style: <input type="text" id="style" placeholder="Braids">
               <br> 
            Photo: <input type="text" id="photo" placeholder="Braids">

            <br> 
            Length:<select id="length">
                <option>Shoulder</option>
                <option>Mid Back</option>
                <option>Waist</option>
                <option>Thigh</option>
            <select>
             <br> 
            Size:<select id="size">
                <option>Small</option>
                <option>Medium </option>
                <option>Large</option>
            <select>
             <br> 
            Accessories:<select id="accessories">
                <option>Hair String</option>
                <option>Clamps </option>
                <option>Beads</option>
            <select>
             <br> 
            Travel:<select id="Travel">
                <option>Travel to me</option>
                <option>Travel to you(travel fee 25$)</option>
                <option>Beads</option>
            <select>
              <br> 
            <input type="submit"> 
        </form>
        `;
  index.innerHTML += html;
  document.querySelector("form").addEventListener("submit", () => {
      createNew()
  });

const createNew = () => {
    event.preventDefault()
    const Appt = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            style: document.getElementById("stlye").value,
            photo: document.getElementById("photo").value,
            length: document.getElementById("length").value,
            size: document.getElementById("size").value,
            accessories: document.getElementById("accessories").value,
            travel: document.getElementById("travel").value,

    }
}


  const
  //  document.querySelector("form").addEventListener("submit", () => {
  //    createChore(event, id);
  //  }
  //  );
}
