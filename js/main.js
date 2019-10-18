let cp = new calligraphy_paper(10,10);
let input = document.getElementById("input");
render();
// 实时渲染
function render() {
    if (cp.paper != null) {
        cp.clear_paper();
    }
    drawA4(input.value)
}
function drawA4(text) {
    if (text.length > 140) {
        alert("单张A4纸张的字符串不能超过140个，标点符号也算,请重新输入");

        return
    }
    cp.new_paper("raphael",1280,1414);
    cp.draw_copy_book(text);
}
// 唤起打印机
function printPage() {
    console.log("执行打印");
    //获取当前页的html代码
    var bodyhtml = window.document.body.innerHTML;
    //设置打印开始区域、结束区域
    var startFlag = "<!--startprint-->";
    var endFlag = "<!--endprint-->";
    // 要打印的部分
    var printhtml = bodyhtml.substring(bodyhtml.indexOf(startFlag),
        bodyhtml.indexOf(endFlag));
    // 生成并打印ifrme
    var f = document.getElementById('printf');
    f.contentDocument.write(printhtml);
    f.contentDocument.close();
    f.contentWindow.print();
}