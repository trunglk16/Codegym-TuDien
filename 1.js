var eng = ["cat","dog","car","red"];
var vie = ["mèo","chó","xe ô tô","màu đỏ"];
var word ;
var show = document.getElementById("vietnam");
function dich() {
    for ( var  i = 0;i <eng.length;i++){

        if (document.getElementById("english").value === eng[i]) {
            word = vie[i];
            show.innerHTML = word;
            break;

        }else{
            show.innerHTML = "Từ của bạn cần tìm không có trong từ điển";
        }


    }

}


