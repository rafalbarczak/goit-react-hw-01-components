import user from './Profile/user.json';
import { Profile } from './Profile/profile';
import data from './Statistics/data.json';
import { Statistics } from './Statistics/statistics';
import friends from './Friendlist/friends.json';
import { FriendList } from './Friendlist/friendlist';
import transactions from './TransactionHistory/transactions.json';
import { TransactionHistory } from './TransactionHistory/transactionhistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
