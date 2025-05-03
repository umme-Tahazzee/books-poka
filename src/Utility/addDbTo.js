// For Read btn

import { toast } from "react-toastify";

const getStoreReadList = () => {
  //read list
  const storedListStr = localStorage.getItem("read-list");
  if (storedListStr) {
    const storedList = JSON.parse(storedListStr);
    return storedList;
  } else {
    return [];
  }
};

const addToStoreReadList = (id) => {
  const storedList = getStoreReadList();
  if (storedList.includes(id)) {
   
  } else {
    storedList.push(id);
    const storeListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storeListStr)
    // ideally trigger toast from the component
    toast('This book is added to your read list')
  }
};

//wish list 
const getStoreWishList = () => {
 const storedWishListStr = localStorage.getItem("Wish-list");
 if (storedWishListStr) {
   const storedWishList = JSON.parse(storedWishListStr);
   return storedWishList;
 } else {
   return [];
 }
}
const addToStoreWishList = (id) => {
  const storedWishList = getStoreWishList();
  if(storedWishList.includes(id)){
     console.log(id, 'wish list already exits');
     
  }else{
   storedWishList.push(id);
   const storeWishListStr = JSON.stringify(storedWishList);
    localStorage.setItem('Wish-list',storeWishListStr)
  }
}

export {addToStoreReadList, addToStoreWishList, getStoreReadList}


// For wish List

