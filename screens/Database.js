import AsyncStorage from '@react-native-async-storage/async-storage';

//acesso aos dados e lida com eles, salvando corretamente
async function saveItem(listItem){
    listItem.id = new Date().getTime();
    let savedItems = [];
    const response = await AsyncStorage.getItem('items');
    
    if(response) savedItems = JSON.parse(response);
    savedItems.push(listItem);
    
    return AsyncStorage.setItem('items', JSON.stringify(savedItems));
}

//pega todos os itens do AsyncStorage e retorna em forma de array através de uma promise
function getItems(){
    return AsyncStorage.getItem('items')
            .then(response => {
                if(response)
                    return Promise.resolve(JSON.parse(response));
                else
                    return Promise.resolve([]);
            })
}

module.exports = {
    saveItem,
    getItems
}