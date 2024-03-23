const getCurrentDate = ()=>{
    let curr = new Date();
    curr.setDate(curr.getDate());
    let date = curr.toISOString().substring(0,10);
    return date;
};

export default getCurrentDate;