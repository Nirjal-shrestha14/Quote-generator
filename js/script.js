// 1. Quotes data
const quotes = [
    { text: "The only way to do great work is to love what you do.", category: "inspirational" },
    { text: "You miss 100% of the shots you don’t take.", category: "inspirational" },
    { text: "Believe you can and you’re halfway there.", category: "inspirational" },
    { text: "Life is what happens when you're busy making other plans.", category: "inspirational" },
    { text: "If I have seen further it is by standing on the shoulders of Giants.", category: "science" },
    { text: "The important thing is to never stop questioning.", category: "science" },
    { text: "Research is what I’m doing when I don’t know what I’m doing.", category: "science" },
    { text: "Science is a way of thinking much more than it is a body of knowledge.", category: "science" }
  ];
  
  // 2. DOM elements
  const categorySelect = document.getElementById("categorySelect");
  const quoteDisplay   = document.getElementById("quoteDisplay");
  const prevBtn        = document.getElementById("prevBtn");
  const nextBtn        = document.getElementById("nextBtn");
  const randomBtn      = document.getElementById("randomBtn");
  const modeToggle     = document.getElementById("modeToggle");
  const increaseFont   = document.getElementById("increaseFont");
  const decreaseFont   = document.getElementById("decreaseFont");
  
  let filteredQuotes = quotes.slice();
  let currentIndex = 0;
  
  // 3. Render quote
  function render() {
    const q = filteredQuotes[currentIndex];
    quoteDisplay.textContent = q ? q.text : "No quotes available.";
  }
  
  // 4. Filter by category
  categorySelect.addEventListener("change", () => {
    const cat = categorySelect.value;
    filteredQuotes = cat === "all"
      ? quotes.slice()
      : quotes.filter(q => q.category === cat);
    currentIndex = 0;
    render();
  });
  
  // 5. Navigation
  prevBtn.addEventListener("click", () => {
    if (filteredQuotes.length === 0) return;
    currentIndex = (currentIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    render();
  });
  nextBtn.addEventListener("click", () => {
    if (filteredQuotes.length === 0) return;
    currentIndex = (currentIndex + 1) % filteredQuotes.length;
    render();
  });
  randomBtn.addEventListener("click", () => {
    if (filteredQuotes.length === 0) return;
    currentIndex = Math.floor(Math.random() * filteredQuotes.length);
    render();
  });
  
  // 6. Dark / Light mode
  modeToggle.addEventListener("change", () => {
    document.documentElement.setAttribute(
      "data-theme",
      modeToggle.checked ? "dark" : "light"
    );
  });
  
  // 7. Font size controls
  let fontSize = 1.2; // rem
  increaseFont.addEventListener("click", () => {
    fontSize = Math.min(fontSize + 0.1, 3);
    quoteDisplay.style.fontSize = fontSize + "rem";
  });
  decreaseFont.addEventListener("click", () => {
    fontSize = Math.max(fontSize - 0.1, 0.8);
    quoteDisplay.style.fontSize = fontSize + "rem";
  });
  
  // 8. Initialize
  render();
  