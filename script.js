//      Array
const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

    storeItems.forEach((el, i) => {
        if(el.inStock === true){
            //This line serves to organize everything and still leave it in an editable state, albeit in a longer form.
          $(`<div class = "divToggle" id = "organizer">
          <p class = 'inStockPrice'>$${el.price}</p>
          <p class = 'inStockItem'>${el.name}</p>
          <p class = 'inStockDesc'>${el.details}</p>
          </div>`).appendTo('#ListRow');
        } //nothing happens for not in stock, it is excluded by default
    });

$("#lightDark").click(function() {
    $('.ToggleLD').toggleClass('darkMode');
    $('.divToggle').toggleClass('darkDiv')
    $('.headToggle').toggleClass('darkHeader')
    $('.line').toggleClass('darkMHeader')
    $('#lightDark').toggleClass('darkPress')
})
