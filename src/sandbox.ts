
type StringOrNum = string | number;
type ObjWithName = { name: string, uid: StringOrNum }

let myVar: StringOrNum;

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`Item has a uid of ${uid}`);
}

const greet = (user: ObjWithName) => {
    console.log(`${user.name} says hello`);
}