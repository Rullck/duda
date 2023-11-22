function fuja(){
    alert(" voce nao tem essa opção, bobona");
    var bnao = document.getElementById("nao");

    var largura = window.innerWidth;
    var altura = window.innerHeight;

    var max = largura - bnao.offsetWidth;
    var maxa = altura - bnao.offsetHeight;


    var aleatorio = Math.floor(Math.random()* max);
    var aleatorioa = Math.floor(Math.random * maxa);


    bnao.style.position = "absolute";
    bnao.style.left =  aleatorio + "px";
    bnao.style.top =  aleatorioa + "px";
    
}
function amor(){
    alert("Te amo");
}
