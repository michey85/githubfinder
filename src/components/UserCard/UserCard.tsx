import { UserStat, UserStatProps } from 'components/UserStat';
import styles from './UserCard.module.scss';

interface UserCardProps extends UserStatProps {
  avatar: string,
  login: string,
  name: string,
  created: string,
  company?: string,
  location?: string,
  twitter?: string,
  blog?: string,
  bio?: string,
}

const UserCard = (props: UserCardProps) => (
  <div className={styles.userCard}>
    <UserStat repos={props.repos} followers={props.followers} following={props.following} />
  </div>
);

export {UserCard};
