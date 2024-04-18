// 定义Snake类
class Snake {
    // 蛇头
    head: HTMLElement
    // 蛇身(包括蛇头)
    body: HTMLCollection
    element: HTMLElement

    constructor(){
        this.head = document.querySelector("#snake>div")!
        this.element = document.getElementById("snake")!
        this.body = this.element.getElementsByTagName("div")
    }

    // 获取蛇头坐标的方法
    get X(){
        return this.head.offsetLeft
    }
    get Y(){
        return this.head.offsetTop
    }
    // 设置蛇头坐标的方法
    set X(value:number){
        if(this.X === value) return 
        if(this.X < 0 || this.X > 290) throw new Error("蛇撞墙了")

        // 蛇头在移动时无法掉头,且身子不能少于两节
        // 如何判断是否掉头？  看蛇头的坐标是否与第二个身体坐标一样，一样则说明掉头了
        if(this.body[1] && (this.body[1] as HTMLElement).offsetLeft === value){
            // 如果出现了掉头行为，应该让蛇头向反方向移动/保持原方向移动
            if(value > this.X){
                // 向右走
                value = this.X - 10;
            }else{
                // 向左走
                value = this.X + 10;
            }
        }

        // 移动身体
        this.moveBody()

        this.head.style.left = value + "px"
        
        // 检查是否碰到自己
        this.checkHeadBody()
    }
    set Y(value:number){
        if(this.Y === value) return
        if(this.Y < 0 || this.Y > 290) throw new Error("蛇撞墙了")

        // 蛇头在移动时无法掉头,且身子不能少于两节
        // 如何判断是否掉头？  看蛇头的坐标是否与第二个身体坐标一样，一样则说明掉头了
        if(this.body[1] && (this.body[1] as HTMLElement).offsetTop === value){
            // 如果出现了掉头行为，应该让蛇头向反方向移动/保持原方向移动
            if(value > this.Y){
                // 向下走
                value = this.Y - 10;
            }else{
                // 向上走
                value = this.Y + 10;
            }
        }

        // 移动身体
        this.moveBody()


        this.head.style.top = value + "px"
        
        // 检查是否碰到自己
        this.checkHeadBody()
    }

    // 蛇增加身体的方法
    addBody(){
        this.element.insertAdjacentHTML("beforeend","<div></div>")
    }

    // 蛇身一起动的方法
    moveBody(){
        for(let i = this.body.length-1; i>0; i--){
            let X = (this.body[i-1] as HTMLElement).offsetLeft;
            let Y = (this.body[i-1] as HTMLElement).offsetTop;

            // 将这些值赋值到当前的身体上
            (this.body[i] as HTMLElement).style.left = X + "px";
            (this.body[i] as HTMLElement).style.top = Y + "px"

        }
    }

    // 蛇头不能和蛇身接触
    checkHeadBody(){
        for(let i=1; i<this.body.length; i++){
            if(this.X === (this.body[i] as HTMLElement).offsetLeft && this.Y === (this.body[i] as HTMLElement).offsetTop){
                throw new Error("碰到身体了！！！")
            }
        }
    }
}

export default Snake