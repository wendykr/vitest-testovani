import { getBirthday } from "../../utils/birthdays";

interface BirthdayProps {
  name: string;
}

export const Birthday = ({ name }: BirthdayProps) => {
  return (
    <div>
      <h2>
        {getBirthday(name)
          ? `${name} má narozeniny ${getBirthday(name)}`
          : `Nevíme, kdy má ${name} narozeniny`}
      </h2>
    </div>
  );
};
