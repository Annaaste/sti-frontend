function age(){
    var xhr = new XMLHttpRequest()
    //xhr.open("Get", "/js/data.json")
    //xhr.open("Get", "http://localhost:3001/football")
    xhr.open("Get", "https://annaaste-backend.herokuapp.com/football")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data){
    var appElement = document.getElementById("app")
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name, data[0].points))
    aTable.appendChild(createRow(data[1].name, data[1].points))
    aTable.appendChild(createRow(data[2].name, data[2].points))
    aTable.appendChild(createRow(data[3].name, data[3].points))
}

function createRow(name, points){
    var aRow = document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    aRow.appendChild(createCellWithImage("http://bild"))
    return aRow
}

function createCell(content){
    var aCell = document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}

function createCellWithImage(url){
    var aCell = document.createElement("td")
    var anImage = document.createElement("img")
    anImage.src = url
    anImage.classList.add("logo")
    aCell.appendChild(anImage)
    return aCell;
}

age()