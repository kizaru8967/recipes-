const recipes = [
  {
    title: "Паста Карбонара",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3"
  },
  {
    title: "Омлет с овощами",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141"
  }
];

function loadRecipes(list) {
  const container = document.getElementById("recipes");
  container.innerHTML = "";

  list.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${recipe.image}">
      <h3>${recipe.title}</h3>
    `;
    container.appendChild(card);
  });
}

document.getElementById("search").addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(value)
  );
  loadRecipes(filtered);
});

loadRecipes(recipes);
