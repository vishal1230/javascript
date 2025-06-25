// For of

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i)
}

const greet='hello world'
for( const i of greet){
    console.log(i)
}

const map= new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STAETS OF AMERICA')
map.set('UK','UNITED KINGDOM')
 console.log(map)

for(const [key,value] of map){
    console.log(`${key} :- ${value}`)
}