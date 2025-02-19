function getRandomName(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

const names = ['Dylan', 'Gavin', 'Easton', 'Max', 'Jacob', 'Josh', 'Avery', 'Alex', 'Jack', 'Steve'];
const randomName = getRandomName(names);
