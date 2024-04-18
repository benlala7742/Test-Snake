import Food from "./Food";
import ScorePanel from "./ScorePanel";
import Snake from "./Snake";

class GameControl {
    food: Food
    scorePanel: ScorePanel
    snake: Snake
    // 创建一个属性来存储蛇的移动方向
    direction: string = "ArrowRight"
    // 判断蛇是否为活跃状态
    isLive = true

    constructor(){
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.snake = new Snake()

        // 游戏初始化
        this.init()
    }

    // 初始化方法
    init(){
        // 绑定键盘按键按下的事件
        document.addEventListener("keydown",(event:KeyboardEvent)=>{
            // console.log(event.key);
            this.direction = event.key
        })

        // 调用蛇移动的方法
        this.isLive && this.run()

        
    }

    // 蛇移动的方法
    run(){
        // 获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break;
            case "ArrowDown":
                Y += 10
                break;
            case "ArrowLeft":
                X -= 10
                break;
            case "ArrowRight":
                X += 10
                break;
        }

        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (error:any) {
            alert(error.message+"游戏结束")
            this.isLive = false
        }

        // 调用蛇吃食的方法
        this.eatFood(X,Y)

        setTimeout(this.run.bind(this),500-((this.scorePanel.level-1)*30))

        
        
    }

    // 判断是否吃到食物
    eatFood(x:number,y:number){
        if(x === this.food.X && y === this.food.Y){
            // 蛇身增加
            this.snake.addBody()
            // 积分单加分
            this.scorePanel.addScore()
            // 食物刷新
            this.food.change()
            
        }
    }
}

export default GameControl