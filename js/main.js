let cp = new calligraphy_paper(0,0);
let input = document.getElementById("input");
render();
// 实时渲染
function render() {
    if (cp.paper != null) {
        let raphael = document.getElementById("raphael");
        while (raphael.firstChild) {
            raphael.removeChild(raphael.firstChild);
        }
    }
    let text = input.value.trim()
        .replace(/<\/?[^>]*>/g,'')
        .replace(/[ | ]*\n/g,'\n')
        .replace(/\n[\s| | ]*\r/g,'\n')
        .replace(/ /ig,'')
        .replace(/^[\s　]+|[\s　]+$/g, "")
        .replace(/[\r\n]/g,"");
    // 判断下 text 的数量如果大于140就插入一个新的div
    let page = parseInt(text.length/140) + 1;
    let div;
    for (i = 0; i < page; i++) {
        let id = "raphael" + i;
        if (!document.getElementById(id)) {
            div = document.createElement("div");
        } else {
            div = document.getElementById(id);
        }
        document.getElementById("raphael").appendChild(div);
        div.setAttribute("id", id);
        div.setAttribute("class","a4");
        let text_slice = text.slice(i * 140, (i + 1) * 140);
        drawA4(id, text_slice);
    }
}
function drawA4(id,text) {
    console.log("绘制一页"+id);
    if (text.length > 140) {
        alert("单张A4纸张的字符串不能超过140个，标点符号也算,请重新输入");
        return
    }
    cp.new_paper(id,1011,1400);
    cp.draw_copy_book(text);
}
// 唤起打印机
function printPage() {
    console.log("执行打印");
    //获取当前页的html代码
    let body_html = window.document.body.innerHTML;
    //设置打印开始区域、结束区域
    let startFlag = "<!--startprint-->";
    let endFlag = "<!--endprint-->";
    // 要打印的部分
    let print_html = body_html.substring(body_html.indexOf(startFlag),
        body_html.indexOf(endFlag));
    // 生成并打印iframe
    let f = document.getElementById('print');
    f.contentDocument.write(print_html);
    f.contentDocument.close();
    f.contentWindow.print();
}