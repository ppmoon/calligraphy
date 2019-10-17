class calligraphy_manager {
    paper;
    x;
    y;
    constructor(id,x,y){
        this.paper = Raphael(id,1280, 200);
        this.x = x;
        this.y = y;
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
    draw_copy_book(text){
        
    }
}