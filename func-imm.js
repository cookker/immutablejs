function rename(person){
    person = Object.assign({}, person)
    person.name = 'lee'
    return person;
}

o1 = {name:`kim`}
o2 = rename(o1)

console.log(o1, o2);