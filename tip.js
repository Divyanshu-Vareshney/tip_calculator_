function totall () {
    let amo = parseInt(document.getElementById('myname').value);
    console.log(amo);
    // alert(amo);
    let am = parseInt(document.getElementById('my').value);
    console.log(am);
    // alert(am);
    let amou = parseInt(document.getElementById('three').value);
    console.log(amou);
    // alert(amou);
    let total=(am/100)*amo;
    let totall=total*amou;
    let totalll=totall+amo;

    document.getElementById('thr').value = totall;
    // console.log(total);
    document.getElementById('th').value = totalll;
}