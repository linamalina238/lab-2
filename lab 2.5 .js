const users = [
{ name: 'Alina Malina', phone: '+380123456789'},
{ name: 'Edward Cullen',phone: '+380987654321'},
{ name:'Jacob Black',phone: '+380135798642'},
{ name:'Esme Cullen',phone:'+380246897531'}
];
const findPhoneByName = (name) => {
    for (let i = 0; i < users.length; i++) {
        if (users[i].name === name){
            return users[i].phone;
        }
    }
}

const phoneHash = {
    'Alina Malina': '+380123456789',
    'Edward Cullen': '+380987654321',
    'Jacob Black': '+380135798642',
    'Esme Cullen': '+380246897531'
};
const findPhoneByNameHash = (name) => phoneHash[name];

console.log(findPhoneByNameHash('Edward Cullen'));