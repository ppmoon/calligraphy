class calligraphy_paper {
    paper;
    x;
    y;
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    new_paper(id,w,h){
        this.paper = Raphael(id,w, h);
    }
    draw_rice_character (x,y,font) {
        // 画一个方框
        let rect = this.paper.rect(this.get_x(x), this.get_y(y), 100, 100);
        rect.attr("stroke", "#FF0000");
        // 画米字格
        this.draw_dotted_line(x + 0,y + 0,x + 100,y + 100);
        this.draw_dotted_line(x + 0,y + 50,x + 100,y + 50);
        this.draw_dotted_line(x + 100,y + 0,x + 0,y + 100);
        this.draw_dotted_line(x + 50,y + 0,x + 50,y + 100);
        // 画字
        this.draw_font(x + 50,y + 47,font)
    }
    get_x(x){
        return this.x + x;
    }
    get_y(y){
        return this.y + y;
    }
    draw_dotted_line(mx,my,lx,ly) {
        let l = "M " + this.get_x(mx) + "," + this.get_y(my) + " L " + this.get_x(lx) + "," + this.get_y(ly);
        let dotted_line = this.paper.path(l);
        dotted_line.attr("stroke","#FF0000");
        dotted_line.attr("stroke-dasharray","-");
    }
    draw_font(x,y,font){
        let text = this.paper.text(this.get_x(x),this.get_y(y),font);
        text.attr("font-size",100 * 0.90);
        text.attr("font-family","STKaiti");
    }
    // 每张纸
    draw_copy_book(text){
        console.log("绘制文字");
        let texts = text.split("");
        // 行数
        let line_number = 10;
        for (let i = 0; i < texts.length; i++) {
            let y = parseInt(i/line_number) * 100;
            let x = i * 100 - parseInt(i/line_number) * line_number * 100;
            this.draw_rice_character(x ,y,texts[i])
        }
    }
    // 清理画布
    clear_paper(){
        this.paper.clear();
    }
}