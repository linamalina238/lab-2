const obj1 = {name: 'Edward'};
let obj2 = {name:'Edward'};

obj1.name = 'Cullen';
obj2.name = 'Cullen';

obj2 = {name: 'Edward Cullen' };

const createUser = (name, city) =>{
    return {name, city}
};

console.log(createUser('Edward Cullen','Forks'));