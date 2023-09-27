import axios from 'axios'

//duvetsize
const ENDURL = 'https://-default-rtdb.firebaseio.com/'

export async function storeItem(itemData) {
    try {
        const response = await axios.post(
            ENDURL + 'duvetsize.json', itemData);
        const id = response.data.id;
        return id;
    } catch (err) {
        console.log(err);
        return id == 0;
    }

}



export async function fetchItems() {
    try {

        const response = await axios.get(ENDURL + '/duvetsize.json');
        const myItems = [];

        for (const key in response.data) {
            const sizeItemObj = {
                id: key,
                name: response.data[key].name,
                width: response.data[key].width,
                length: response.data[key].length,
                unit: response.data[key].unit
            }
            myItems.push(sizeItemObj);
        }
        return myItems;
    }
    catch (error) {
        console.log(error);
        return [];
    }
}