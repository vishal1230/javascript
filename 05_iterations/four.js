//for in

const  myObject={
    js:'javascript',
    cpp:'c++',
    py:'python'
}

for(const key in myObject){
    console.log(` keys are ${key} and values are ${myObject[key]}`)
}

const programming=['c++','python','java','ruby','swift','javascript']
for( const item in programming){
    console.log(programming[item])
}