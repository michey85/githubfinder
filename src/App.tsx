import React from 'react';

import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { UserCard } from 'components/UserCard';

const mockUser = {
  "login": "michey85",
  "avatar": "https://avatars.githubusercontent.com/u/36237995?v=4",
  "name": "Mikhail Nepomnyashchiy",
  "company": "EPAM",
  "blog": "mishanep.com",
  "location": "Malaga",
  "bio": "React/Vue developer",
  "twitter_username": "pcgramota",
  "repos": 59,
  "followers": 182,
  "following": 5,
  "created": "2018-02-07T16:18:45Z",
};

function App() {
  return (
    <Container>
      <TheHeader />
      <Search hasError onSubmit={() => {}} />
      <UserCard {...mockUser} />
    </Container>
  );
}

export default App;
