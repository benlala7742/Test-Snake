// 定义积分表类
class ScorePanel {
    score = 0
    level = 1
    scoreElement: HTMLElement
    levelElement: HTMLElement
    Maxlevel: number

    constructor(MaxLevel:number = 10){
        this.scoreElement = document.getElementById("score")!
        this.levelElement = document.getElementById("level")!
        this.Maxlevel = MaxLevel
    }

    // 加分方法
    addScore(){
        this.score++
        this.scoreElement.innerHTML = this.score + '' 

        // 判断升级要求分数
        if(this.score === this.level * 10){
            this.score = 0
            this.levelUp()
        }
    }

    // 升级方法
    levelUp(){
        if(this.level < this.Maxlevel){
            // 每次升级把分数归0
            this.level++
            this.levelElement.innerHTML = this.level + ''
        }
    }
}

export default ScorePanel