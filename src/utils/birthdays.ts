interface Birthday {
  name: string;
  birthday: string;
}

export const birthdays: Birthday[] = [
  {
    name: "Jana",
    birthday: "17. 3. 1996",
  },
  {
    name: "Petr",
    birthday: "21. 9. 2001",
  },
  {
    name: "Alena",
    birthday: "4. 5. 1983",
  },
];

export const getBirthday = (name: string): string | undefined => {
  const person = birthdays.find((birthday) => birthday.name === name);
  return person ? person.birthday : undefined;
};
