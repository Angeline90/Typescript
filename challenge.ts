// challenge.ts
import { UserInterface } from "./user.interface";

const calculatedAge = (birthday: string | Date): number => {
  const birthDate =
    typeof birthday === "string" ? new Date(birthday) : birthday;
  const currentDate = new Date();

  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDiff = currentDate.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const prettyPrintWilder = (users: UserInterface[]) => {
  users.map((user) => {
    const age =
      user.age !== undefined
        ? user.age
        : user.birthday
        ? calculatedAge(user.birthday)
        : undefined;
    console.log(
      `${user.name} is ${age !== undefined ? age : "unknown"} years old`
    );
  });
};

const wilders: UserInterface[] = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
