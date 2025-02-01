




function roll(){
    const num=document.getElementById("n").value;
    const result=document.getElementById("result");
    const img=document.getElementById("img");
    const values=[];
    const images=[];
    for(let i=0;i<num;i++){
        const random=Math.floor(Math.random()*6)+1;
        values.push(random);
        images.push(`<img src="${random}.png"/>`);
    }
    result.textContent=`dies: ${values.join(", ")}`;
    img.innerHTML=images.join(" ");
    

    



    
}