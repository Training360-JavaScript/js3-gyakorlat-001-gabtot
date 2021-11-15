
const removeDuplicatesFromArray = array => array.filter( ( value, index, array ) => array.indexOf(value) === index );

export default removeDuplicatesFromArray;
