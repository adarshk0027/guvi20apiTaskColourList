async function GetData(){
    try{
        const result=await fetch("https://x-colors.herokuapp.com/api/random?number=10")
        const data=await result.json()
        console.log(data);
        return data
    }
    catch{
        console.log("error");
    }
    
}

const Tbody=document.querySelector('.TBODY')

let SetTable=async()=>{
const Datas=await GetData()

Datas.map(async(item,index)=>{
    const Tr=document.createElement('tr')
    const div=document.createElement('div')
    Tbody.append(Tr)
    //hexacode setup
    const Td=document.createElement('td')
    Tr.append(Td)
    Td.innerText=item.hex
    //rgb setup
    const Td1=document.createElement('td')
    Tr.append(Td1)
    Td1.innerText=item.rgb
    //huv
    const Td2=document.createElement('td')
    Tr.append(Td2)
    Td2.innerText=item.hsl
    //color
    let Td3=document.createElement('td')
    Td3.classList.add("color"+index)
    Tr.append(Td3)
     document.querySelector(".color"+index).style.backgroundColor = item.hex;
    
    
    
})

}
SetTable();