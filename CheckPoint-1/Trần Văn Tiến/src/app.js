const foodContainer = document.querySelector(".food-container")

const renderFoodList = (foodList) => {

    if (foodList) {

      let htmls = foodList.map((foodItem) => {
        // literial string
        return `
          <div class='food-item m-[12px] w-full rounded-lg flex'>
            <div class="w-2/3">
              <h3 class='food-title'>${foodItem.title}</h3>
              <p>${foodItem.description}</p>
            </div>
            <img class='class="w-1/3"' src='${foodItem.imagePath}'>
          </div>
        `;
      });
  
      console.log(htmls);
      foodContainer.innerHTML = htmls.join("");
    }
  };
const handleGetFoodList = () => {
  fetch("https://65ed29e30ddee626c9b13384.mockapi.io/api/v1/foodlist")
    .then((data) => {
      return data.json();
    })
    .then((food) => {
      console.log(food);

      // render food
      renderFoodList(food);
    })
    .catch((error) => {
      console.warn(error);
    });
};

handleGetFoodList()











