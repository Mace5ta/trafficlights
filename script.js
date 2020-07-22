class TrafficLight {
    constructor(root) {
        this.root = root
        this.currentLight = -1
        this.listCircles = []
    }
    render = () => {
        const divWrapper = document.createElement("div")
        divWrapper.className = "wrapper"

        const container = document.createElement("div")
        container.className = "container"

        const button = document.createElement("button")
        button.className = "my-button"
        button.innerText = "Нажми"
        button.addEventListener('click', this.toggle)

        const arrAttrb = ['red', 'yellow', 'green']

        arrAttrb.forEach(attrb => {
            const circle = document.createElement("div")
            circle.className = "circle"
            circle.setAttribute('data-color', attrb)
            container.appendChild(circle)
            this.listCircles.push(circle)
        })


        // container.appendChild(circle)

        divWrapper.appendChild(container)
        divWrapper.appendChild(button)
        this.root.appendChild(divWrapper)
    }
    toggle = () => {
        this.currentLight++
        if (this.currentLight > 2) {
            this.currentLight = 0
        }
        this.listCircles.forEach((circle, index) => {
            if (index === this.currentLight) {
                circle.classList.add(circle.dataset.color)
            } else {
                circle.classList.remove(circle.dataset.color)
            }
        })
    }
    bySetInterval = (timing) => {
        setInterval(this.toggle, timing)
    }
    bySetTimeout = (timing) => { //рекурсивный вызов
        setTimeout(() => {
            this.toggle()
            this.bySetTimeout(timing)
        }, timing)
    }
    bySetTimeout2 = (t1, t2, t3) => {
        // this.toggle()
        // const times = [t1, t2, t3]
        // if (this.listCircles[0] = 'red') {
        //     setInterval(this.toggle, t1)
        // }
        // } else if (circle.dataset.color = 'yellow') {
        //     setInterval(this.toggle, t2)
        // } else {
        //     setInterval(this.toggle, t3)
        // }
    }

}

const $root = document.querySelector('.app')
const myTraf = new TrafficLight($root)
myTraf.render()
myTraf.bySetInterval(1500)
// myTraf.bySetTimeout(3500)

// myTraf.bySetTimeout2(1000, 3000, 1000)


// const $root2 = document.querySelector('.app2')
// const myTraf2 = new TrafficLight($root2)
// myTraf2.render()

// const data = [{ id: 0, title: 'купить пивка', done: false }, { id: 1, title: 'выпить пивка', done: false }]
// const toDo = new ToDo(data)
// toDo.render() //Должны отобразиться все мои задачи и чекбоксы
// toDo.add({ id: 2, title: 'выкинуть банку', done: false }) //Добавть {id:0, title:'купить пивка', done:false}
// toDo.remove(1) //Первая задача удаляется