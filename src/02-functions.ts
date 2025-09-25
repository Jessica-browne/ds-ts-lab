import { friends, colleagues } from './01-basics'
import {Friend, Colleague,EmailContact } from './myTypes'



function older(f: Friend) : string {
     f.age += 1
     return `${f.name} is now ${f.age}` 
}

function allOlder(friends : Friend[]): string[] {
const result: string[] = [];
     for(let i = 0; i < friends.length; i++) {
          friends[i].age +=1;
          result.push(`${friends[i].name} is now ${friends[i].age}`);
     }
     return result;
}

//console.log(older(friends[0]))
//console.log(allOlder(friends));

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // Inferred retun type
  const result = cs.sort(
    (c1, c2) => c1.contact.extension - c2.contact.extension
  );
  return result[cs.length - 1];
}

//console.log(highestExtension(colleagues.current));

function addColleague(cs: Colleague[], name :string, department: string, email: string) : void {
           const currentHigh = highestExtension(cs)
           const newHigh =  currentHigh.contact.extension +1;
           const newColleague: Colleague = {
               name: name,
               department: department,
               contact: {
                    email: email,
                    extension: newHigh, 
               } 
           };
     cs.push(newColleague);   
     }

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
//console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

/*
function sortColleagues(
  colleagues: Colleague[],
  sorter: (c1: Colleague, c2: Colleague) => number,
  max : number
): EmailContact[] {
*/
function sortColleagues(colleagues: Colleague[],sorter: (c1: Colleague, c2: Colleague) => number,max? : number): EmailContact[] {
  let end = colleagues.length;
  if (max !== undefined) {
     end = max < 2 ? 1 : max
  }
  const sorted = colleagues.sort(sorter);
  const fullResult =  sorted.map((ce) => ({ name: ce.name, email: ce.contact.email }));
  return fullResult.slice(0,end)
}
// Test invocations
//console.log(sortColleagues(colleagues.current, (a, b) => (a.contact.extension - b.contact.extension),3));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length),1));
//console.log(sortColleagues(colleagues.current, (a, b) => (a.name.length - b.name.length))); // NEW

//console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
//console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

//didint get\ to figure this out
//function findFriends(friends:Friend[],sorter: (f1: Friend, f2:Friend) => ): {}
//console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
//console.log(findFriends(friends, (friend) => friend.age < 35));


function addInterest(friend: Friend, interest:string):string[] {
     if (friend.interests === undefined) {
          friend.interests= [];
     }
     friend.interests.push(interest);
     return friend.interests;
}


console.log(addInterest(friends[1], 'Politics'))


// run commad
//npx ts-node  src/02-functions.ts 
