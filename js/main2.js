
var trendingMovies = [];
var lis = document.querySelectorAll('ul li');
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('click', function (e) {
        var MediaType = e.target.innerText;
        getMoive(MediaType);
    })
}

async function getMoive(MediaType) {

    var res = await fetch(`https://api.themoviedb.org/3/trending/${MediaType}//day?api_key=48a4c9633eb6aa61cca1c01a40d7c393`);
    var FinalResults = await res.json()
    console.log(FinalResults);
    trendingMovies = FinalResults.results;
    DisplayMovies();
}
(async function () {
    await getMoive('all');
})
// function getMoive(MediaType) {
//     var http = new XMLHttpRequest();
//     http.open('Get', `https://api.themoviedb.org/3/trending/all//day?api_key=48a4c9633eb6aa61cca1c01a40d7c393`)
//     http.open('Get', `https://api.themoviedb.org/3/trending/${MediaType}//day?api_key=48a4c9633eb6aa61cca1c01a40d7c393`);
//     http.send();
//     http.addEventListener('readystatechange', function () {
//         if (http.readyState == 4 && http.status == 200) {
//             trendingMovies = JSON.parse(http.response).results;
//             console.log(trendingMovies);
//             DisplayMovies()
//         }
//     })
// }

function DisplayMovies() {
    var cartona = ``
    for (var i = 0; i < trendingMovies.length; i++) {
        cartona += `
        <div class="sec2 col-4" >
        <div class="sec2-img w-100">
            <img src="https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path}" alt="12" class="w-100">
        </div>
        <div class="sec2-content w-100">
            <span>${trendingMovies[i].title ? trendingMovies[i].title : trendingMovies[i].name}</span>
            <p>${trendingMovies[i].overview}</p>
                <p>rate ${trendingMovies[i].vote_average}</p>
                <p>rate ${trendingMovies[i].release_date}</p>
                </div> </div>`
    }
    document.getElementById('mydata').innerHTML = cartona;
}

let divwidth = $('.sidebarA').innerWidth();
$('.sidebar').css('left', `-${divwidth}`);
$('.sidebarB i').click(function () {

    if ($('.sidebar').css('left') == '0px') {
        $('.sidebarA li').eq(0).animate({ marginTop: '70px' }, 2000)
        $('.sidebarA li').eq(1).animate({ marginTop: '70px' }, 2000)
        $('.sidebarA li').eq(2).animate({ marginTop: '70px' }, 2000)
        $('.sidebarA li').eq(3).animate({ marginTop: '70px' }, 2000)
        $('.sidebarA li').eq(4).animate({ marginTop: '70px' }, 2000)
        $('.sidebar').animate({ left: `-${divwidth}` }, 1000)
    } else {
        $('.sidebarA li').eq(0).animate({ marginTop: '10px' }, 2000)
        $('.sidebarA li').eq(1).animate({ marginTop: '10px' }, 2000)
        $('.sidebarA li').eq(2).animate({ marginTop: '10px' }, 2000)
        $('.sidebarA li').eq(3).animate({ marginTop: '10px' }, 2000)
        $('.sidebarA li').eq(4).animate({ marginTop: '10px' }, 2000)
        $('.sidebar').animate({ left: `0px` }, 1000)
    }
})
///////////////////////////////////sec4//////////////////////////
var NameInp = document.getElementById("NameInp");
var EmailInp = document.getElementById("EmailInp");
var PhoneInp = document.getElementById("PhoneInp");
var AgeInp = document.getElementById("AgeInp");
var PassInp = document.getElementById("PassInp");
var Pass2Inp = document.getElementById("Pass2Inp");

x.test('ahmed')


function validate() {
    if (validName()) { } else {
        alert("Name not valid");
    }
    if (validEmail()) { } else {
        alert("Email not valid");
    }
    if (validPhone()) { } else {
        alert("Phone not valid");
    }
    if (validAge()) { } else {
        alert("Age not valid");
    }
    if (validPass()) { } else {
        alert("Password not valid");
    }
    if (valid2Pass()) { } else {
        alert("Password doesn't match");
    }
}

function validName() {
    var regx = / ^[A-Z][a-z]{1,15}$/
    if (regx.test(NameInp.value) == true) {
        return true;
    } else {
        return false;

    }
}
function validEmail() {
    var regx = / ^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    if (regx.test(EmailInp.value) == true) {
        return true;
    } else {
        return false;

    }
}
function validPhone() {
    var regx = /^(201|01)[0125][0-9]{8}$/
    if (regx.test(PhoneInp.value) == true) {
        return true;
    } else {
        return false;

    }
}
function validAge() {
    var regx = /^[1-9][0-9]{0,1}$/
    if (regx.test(AgeInp.value) == true) {
        return true;
    } else {
        return false;

    }
}
function validPass() {
    var regx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (regx.test(PassInp.value) == true) {
        return true;
    } else {
        return false;

    }
}
function valid2Pass() {
    if (PassInp.value == Pass2Inp.value) {
        return true;
    } else {
        return false;
    }
}