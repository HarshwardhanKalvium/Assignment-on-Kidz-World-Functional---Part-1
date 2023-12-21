// Array of items with their details
//We could also use parseFloat function converts a string representation of a number into a floating-point number but i'm not aware about it's use that why we created a arry
let items = [
  { 
    name: "This was our pact", 
    quantity: 0, 
    dollars: 7, 
    cents: 49 
},
  { 
    name: "The famous five", 
    quantity: 0, 
    dollars: 4, 
    cents: 59 
  },
  { 
    name: "Matilda", 
    quantity: 0, 
    dollars: 6, 
    cents: 80 },
  { 
    name: "Harry Potter", 
    quantity: 0, 
    dollars: 10, 
    cents: 0 
  },
  { 
    name: "For Young Readers", 
    quantity: 0, 
    dollars: 7, 
    cents: 29 
  },
  { 
    name: "Wimpy Kid - DIY", 
    quantity: 0, 
    dollars: 4, 
    cents: 99 
  },
  { 
    name: "Dart Board", 
    quantity: 0, 
    dollars: 17, 
    cents: 49 
  },
  { 
    name: "Connect Four", 
    quantity: 0, 
    dollars: 19, 
    cents: 99 
  },
  { 
    name: "Jenga", 
    quantity: 0, 
    dollars: 20, 
    cents: 99 
  },
  { 
    name: "Monopoly", 
    quantity: 0, 
    dollars: 19, 
    cents: 49 
  },
  { 
    name: "Bookmarks", 
    quantity: 0, 
    dollars: 12, 
    cents: 49 
  },
  { 
    name: "Birthday Card", 
    quantity: 0, 
    dollars: 19, 
    cents: 99 
  },
  { 
    name: "Stuffed toys", 
    quantity: 0, 
    dollars: 15, 
    cents: 99 
  },
  { 
    name: "Dream catcher drawing", 
    quantity: 0, 
    dollars: 18, 
    cents: 49 
  },
];


let addButtons = document.getElementsByClassName("button");
// I  Added onclick event to each button by using forloop
for (let i = 0; i < addButtons.length; i++) {
  addButtons[i].onclick = () => {
    items[i].quantity++;
    updateCart();
    // console.log("hello")
  };
};



// Function to print items which are greater then zero quantity to the console
function printItems() {
  items.forEach((item) => {
    if (item.quantity > 0) {
      console.log(`Item name: ${item.name} - Quantity: ${item.quantity}`);
    }
  });
}

// Added onclick event listener to the "cart" button
let cartButton = document.getElementById("cart");
// Added onclick event to the "cart" button which is actually div tag in our html
cartButton.onclick = () => {
  updatePrice();
  printItems();
  console.log(`The total amount is ${finalDollars}$ and ${finalCents} cents`);
};

let cartValue = document.getElementById("cart-value");
// This is the function to update the cart where we calculate the total quantity of items in the cart and Update the cart quantity
function updateCart() {
  let cart = items.reduce((total, item) => total + item.quantity, 0);
  cartValue.innerHTML = cart;
}


// This is the function to update the total price and cents
function updatePrice() {
// Calculate the total price in cents
  let totalPriceInCents = items.reduce(
    (total, item) => total + item.quantity * (item.dollars * 100 + item.cents),
    0
  );
// Convert total price to dollars and cents
  finalDollars = Math.floor(totalPriceInCents / 100);
  finalCents = totalPriceInCents % 100;
}