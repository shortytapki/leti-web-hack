import { AppLink } from '@shared/ui';

const devs: { link: string; username: string }[] = [
  { username: '@shortytapki', link: 'https://t.me/shortytapki' },
  { username: '@gmotrych', link: 'https://t.me/gmotrych' },
  { username: '@kirywabublik', link: 'https://t.me/kirywabublik' },
  { username: '@nazar_shatilo', link: 'https://t.me/nazar_shatilo' },
];

const DevsPage = () => {
  return (
    <div>
      {devs.map((dev) => (
        <p key={dev.username}>
          <AppLink to={dev.link}>{dev.username}</AppLink>
        </p>
      ))}
    </div>
  );
};

export default DevsPage;
