let cm = new calligraphy_manager("raphael",10,10);
let input = document.getElementById("input");
function render() {
    console.log(input.value);
    cm.draw_copy_book(input.value);
}
