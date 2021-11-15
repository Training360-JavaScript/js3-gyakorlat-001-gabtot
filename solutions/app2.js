const HU = {
    date(date) {
        return new Intl.DateTimeFormat('hu-HU').format(date);
    },
    curreny(value) {
        return new Intl.NumberFormat('hu-HU',{style:'currency',currency:'HUF'}).format(value);
    },
    list(list) {
        return list.reduce( (prev,curr,index,array) => `${prev}${index===0?'':index===array.length-1?' és ':', '}${curr}`, '');
    }
}





export default HU;
