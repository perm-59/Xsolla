let data = [
    {
        "id": "01",
        "name": "Rave Autumn",
        "date": "14.09.2019",
        "city": "Amsterdam",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    },
    {
        "id": "02",
        "name": "Best of 2019",
        "date": "20.09.2019",
        "city": "Berlin",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/ec3917285ef4db8532c8a9cd9a2112ce.png"
    },
    {
        "id": "03",
        "name": "Faderhead",
        "date": "10.11.2019",
        "city": "Rim",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/53486baba5ec9d256ce20816a3e54e51.png"
    },
    {
        "id": "04",
        "name": "Purple Fog Side",
        "date": "05.06.2019",
        "city": "Berlin",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/e1baa378009391210cc0e64f65c7784e.png"
    },
    {
        "id": "05",
        "name": "Carbon based Liveform",
        "date": "14.02.2019",
        "city": "Sr.Petersburg",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/b1f06edaf618c3e3ad19c159eb5aa036.jpeg"
    },
    {
        "id": "06",
        "name": "Neuroticfish",
        "date": "25.05.2019",
        "city": "Sr.Petersburg",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/49705480ff397085ad34685c4181c1ab.jpeg"
    },
    {
        "id": "07",
        "name": "Faderhead",
        "date": "20.11.2019",
        "city": "Rim",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/de9f4b49cc5ba737911b0db30f082fff.jpeg"
    },
    {
        "id": "08",
        "name": "Rave Winter",
        "date": "15.02.2019",
        "city": "Berlin",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/826adbf1a19ba19e6ba9af9308d2b309.png"
    },
    {
        "id": "09",
        "name": "Not a Robot",
        "date": "22.06.2019",
        "city": "Rim",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/14bce6211e055410a043e02a22cec69b.jpeg"
    },
    {
        "id": "10",
        "name": "Carbon Based lifeforms",
        "date": "22.09.2019",
        "city": "Berlin",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/7d655ea8b13f5fdda4469fb0035bd7a3.jpeg"
    },
    {
        "id": "11",
        "name": "Icon of Coil",
        "date": "19.05.2019",
        "city": "Rim",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/8c76c770ded42cea343dbf2d8523791e.jpeg"
    },
    {
        "id": "12",
        "name": "Solar Fields",
        "date": "20.06.2019",
        "city": "Sr.Petersburg",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/9ddae28837d2e4217e5c2e99bbd6f3a0.jpeg"
    },
    {
        "id": "13",
        "name": "Apoptygma Berzerk",
        "date": "14.11.2019",
        "city": "Amsterdam",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/720e3b29bf238cd40785ffe157b1151a.jpeg"
    },
    {
        "id": "14",
        "name": "Mental Discipline",
        "date": "16.11.2019",
        "city": "Rim",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/76372b51ab7408e826a191577abcd79d.jpeg"
    },
    {
        "id": "15",
        "name": "Apoptygma Berzerk",
        "date": "25.02.2019",
        "city": "Berlin",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/aec8583caa5bbe34b2c5695e2546ea3b.jpeg"
    },
    {
        "id": "16",
        "name": "Solar Fields",
        "date": "14.02.2019",
        "city": "Amsterdam",
        "genre": "Electronic",
        "image": "https://cdn3.xsolla.com/files/uploaded/113250/0662c0df7663f71831e83be091228413.jpeg"
    }
];

let maps = [
    {
        month: '01',
        remonth: 'January'
    },
    {
        month: '02',
        remonth: 'February'
    },
    {
        month: '03',
        remonth: 'March'
    },
    {
        month: '04',
        remonth: 'April'
    },
    {
        month: '05',
        remonth: 'May'
    },
    {
        month: '06',
        remonth: 'June'
    },
    {
        month: '06',
        remonth: 'July'
    },
    {
        month: '07',
        remonth: 'August'
    },
    {
        month: '08',
        remonth: 'September'
    },
    {
        month: '09',
        remonth: 'October'
    },
    {
        month: '10',
        remonth: 'November'
    },
    {
        month: '11',
        remonth: 'December'
    }]
let distinctCity = [];
let distinctMonth = [];


function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

data.forEach(response => {
    distinctCity.push(response.city);
    distinctMonth.push(response.date);
});

/** уникальные города и даты */
distinctCity = distinctCity.filter(onlyUnique).sort();
distinctMonth = distinctMonth.filter(onlyUnique);

/** города */
let outputSelectCity = "<div class='box-sel-city-flex'><h4 class='box-sel-city-flex__text'>City: </h4><select onchange = 'testFunction()' id='City'>"
outputSelectCity += "<option>"
distinctCity.forEach(data => {
    outputSelectCity += "<option>" + data + "</option>";
})
outputSelectCity += "</select> </div>"

/** маппинг дат */
let allMonth = [];
data.forEach(dat => {
    let spliceData = dat.date.split('.');
    maps.forEach(dats => {
        if (spliceData[1] === dats.month) {
            allMonth.push(dats.remonth);
        }
    })
})
let uniqueAllMonth = allMonth.filter(onlyUnique).sort();


/** даты */
let outputSelectMonth = "<div class='box-sel-city-flex'><h4 class='box-sel-city-flex__text'>Month: </h4><select onchange = 'testFunction()' id='Month'>"
outputSelectMonth += "<option>"
uniqueAllMonth.forEach(data => {
    outputSelectMonth += "<option>" + data + "</option>";
})
outputSelectMonth += "</select> </div>"

/** изображения и др. */
let output = "<div class='flex-container'>";
data.forEach(data => {
    output += "<div class='flex-container-position'>" + "<img class='tab' src=" + data.image + ">" +
        "<p class='tab_number'>" + data.id + "</p> <p class='tab__name'> " + data.name + "</p>" + "</div>";
    output += "<br>";
})
output += "</div>";


document.getElementById("box").innerHTML = output;
document.getElementById("box-sel-city").innerHTML = outputSelectCity;
document.getElementById("box-sel-month").innerHTML = outputSelectMonth;


/**
 * Search
 */
function testFunction() {
    var xCity = document.getElementById("City").value;
    var xMonth = document.getElementById("Month").value;
    let reMontg;
    if (xMonth && xMonth !== '') {
        reMontg = maps.find(datas => datas.remonth === xMonth);
    }
    /** изображения и др. */
    let output = "<div class='flex-container'>";
    if (xCity || xMonth) {
        data.forEach(data => {
            if ((data.city === xCity || xCity === '') && (xMonth === '' || data.date.split('.')[1] === reMontg.month )) {
                output += "<div class='flex-container-position'>" + "<img class='tab' src=" + data.image + ">" +
                    "<p class='tab_number'>" + data.id + "</p> <p class='tab__name'> " + data.name + "</p>" + "</div>";
                output += "<br>";
            }
        })
    } else {
        data.forEach(data => {
            output += "<div class='flex-container-position'>" + "<img class='tab' src=" + data.image + ">" +
                "<p class='tab_number'>" + data.id + "</p> <p class='tab__name'> " + data.name + "</p>" + "</div>";
            output += "<br>";
        })
    }
    output += "</div>";
    document.getElementById("box").innerHTML = output;
}

