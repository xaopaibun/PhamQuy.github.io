function GuiDi(){
    var Name = document.getElementById('txtHoTen').value;
    var Email = document.getElementById('txtEmail').value;
    var SDT = document.getElementById('txtSDT').value;
    if(Name == "" || Email == "" || SDT ==""){
        alert("Bạn Chưa Nhạp Đủ Thông Tin !");

    }
    else{
        alert("Bạn Đã Gửi Thông Tin Thành Công ");
    }
}
function TimKiem(){
    var Temp = document.getElementById('TimKiem').value;
    if(Temp ==''){
        alert("Bạn Chưa Nhạp Thông Tin Nên Không Ra Kết Qủa !");
    }
}
function DangNhap(){
    var name = document.getElementById('email').value;
    alert("Bạn Đã Đăng Nhập Với Tài Khoản Email Là :  "+ name);
}


$(document).ready(function(){ 
    console.log('pham jin');
    console.log($('.NoiDung'));
    $('.BackToTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    });
    $('.active').click(function(){
        $(this).next().slideUp();
    });
    var Status = false;
    var Status2 = false;
    var Status3 = false;
    var Status4 = true;
    $(window).scroll(function (event) { 
        var vitribody = $('html, body').scrollTop();
        console.log(vitribody);
        if(vitribody >= 400 && Status == false){
            $('.KhoiSanPham').addClass('HienRa');
            Status = true;
        }
        else if(vitribody < 400 && Status == true ){
            $('.KhoiSanPham').removeClass('HienRa');
            Status = false;
        }
        if(vitribody >=240 && Status2 == false){
            $('.BackToTop').addClass('Show');
            Status2 = true;
        }
        else if(vitribody < 240  && Status2 == true){
            $('.BackToTop').removeClass('Show');
            Status2 =false;
        }
        if(vitribody >=400 && vitribody < 1500  && Status3 == false){
            $('.khoimenuc1').addClass('Green');
             $('.TopHeader').addClass('White');
            Status3 = true;
        }
        else if(vitribody < 400 || vitribody > 1500 && Status3 == true){
            $('.khoimenuc1').removeClass('Green');
             $('.TopHeader').removeClass('White');
            Status3 = false;
        }
        if(vitribody >=2550 && Status4 == true){
            $('._Cot').addClass('Show');
            Status4 = false;
        }
        else if(vitribody < 2500 && Status4 == false){
            $('._Cot').removeClass('Show');
            Status4 = true;
        }
    }); 
 });
 
// document.addEventListener("DOMContentLoaded",function(){
//     var ViTriND = document.querySelector('.NoiDung');
//     window.addEventListener("scroll", function(){
//         var ViTriBody = window.offsetTop;
//         var ViTriND = ViTriND.offsetTop;
//         console.log("Vi Tri Body : "+ ViTriBody +" ; Vi Tri ND : "+ ViTriND);
//     });
// }); Loi
// var Index = 1;
// function ChuyenAnh(){
//     var IMG = ["IMG/Banner.png","IMG/panner02.jpg","IMG/banner03.jpg","IMG/banner04.jpg","IMG/panner05.png"];
//     document.getElementById('IMG').src = IMG[Index];
//     Index++;
//     if(Index==5){
//         Index = 0;
//     }        
// }
//  setInterval(ChuyenAnh, 3000);
