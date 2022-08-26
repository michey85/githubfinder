import classes from './UserTitle.module.scss';

export interface UserTitleProps {
  login: string,
  name: string,
  created: string,
}

const localDate = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
});

export const UserTitle = ({
  login,
  name,
  created,
}: UserTitleProps) => {
  const joinedDate = localDate.format(new Date(created));

  return (
    <div className={classes.userTitle}>
      <h2>{name}</h2>
      <h3>{login}</h3>
      <span>{joinedDate}</span>
    </div>
  );
};
