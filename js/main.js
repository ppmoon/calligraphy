let cm = new calligraphy_manager("raphael",10,10);
let input = document.getElementById("input");
render();
// 实时渲染
function render() {
    cm.clear_paper();
    cm.draw_copy_book(input.value);
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