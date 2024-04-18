// 定义Food类
class Food {
    element: HTMLElement

    constructor(){
        this.element = document.getElementById("food")!
    }

    // 获取Food的位置
    // X轴
    get X(){
        return this.element.offsetLeft
    }
    // Y轴
    get Y(){
        return this.element.offsetTop
    }

    // 改变Food位置
    change(){
        let left = Math.round(Math.random() * 29) * 10
        let top = Math.round(Math.random() * 29) * 10
        this.element.style.left = left + "px"
        this.element.style.top = top + "px"
    }
}

export default Food