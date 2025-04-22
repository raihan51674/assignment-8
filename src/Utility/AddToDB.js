const GetStoreBook=()=>{
  const storedBookSTR=localStorage.getItem("readList")
  if(storedBookSTR){
    const storeBookData= JSON.parse(storedBookSTR)
    return storeBookData

  }else {
    return [];
  }

};



const AddToStoredDB=(id)=>{

 const storeBookData=GetStoreBook();
 if(storeBookData.includes(id)){
  alert("id already exit")
 }
 
 else{
  storeBookData.push(id);
  const data =JSON.stringify(storeBookData);
  localStorage.setItem("readList",data)
  console.log(data);
  
 }
}



//delate LocalStorage
const DeleteFromStoredDB = (id) => {
  const storedBookData = GetStoreBook(); 
  
  const updatedBookData = storedBookData.filter((bookId) => bookId !== String(id));
  
  const data = JSON.stringify(updatedBookData);
  localStorage.setItem("readList", data);
  console.log("Updated read list:", data);
};










export {AddToStoredDB,GetStoreBook,DeleteFromStoredDB};