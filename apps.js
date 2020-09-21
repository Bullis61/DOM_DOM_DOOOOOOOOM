document.addEventListener('DOMContentLoaded', function () {

    function random_bg_color() {
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
        let bgColor = "rgb(" + x + "," + y + "," + z + ")";
        return bgColor
    }
    let button = document.createElement('button')
    button.innerText = 'Add Square'
    document.body.appendChild(button)

    let squareTrapID = 0
    let squareTrap = document.createElement('div')
    squareTrap.classList.add('container')
    document.body.appendChild(squareTrap)

    button.addEventListener('click', function () {
        let anotherDiv = document.createElement('div')

        anotherDiv.classList.add('square')
        anotherDiv.setAttribute('id', squareTrapID)
        let idExhibit = document.createElement('span')
        idExhibit.classList.add('idExhibit')
        idExhibit.innerText = squareTrapID
        squareTrapID++

        anotherDiv.appendChild(idExhibit)

        squareTrap.appendChild(anotherDiv)

        anotherDiv.addEventListener('click', function () {
            let randomColor = random_bg_color()
            anotherDiv.style.backgroundColor = randomColor

            anotherDiv.addEventListener('dblclick', function () {
                let anotherDivID = parseInt(anotherDiv.id, 10)

                if (anotherDivID % 2 === 0) {
                    let itemRemove = document.getElementById(anotherDivID - 1)
                    if (document.body.contains(itemRemove)) {
                        squareTrap.removeChild(itemRemove)
                    } else {
                        alert('el doesnt exsist it is gone forever')
                    }
                }
            })
        })
    })
})