import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { IconList } from 'staticData';

const CharacterList = () => {
  return (
    <ul css={characterStyle}>
      {IconList.map(icon => (
        <li key={icon.id}>
          <Link to={icon.link}>
            <img css={avatarStyle} src={icon.imagePath} alt={icon.name} />
            <p>{icon.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const characterStyle = css`
  display: flex;
  justify-content: space-between;

  a {
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    text-align: center;
  }

  p {
    margin-top: 0.7rem;
    font-size: 1.2rem;
  }
`;

const avatarStyle = css`
  width: 5rem;
`;

export default CharacterList;
