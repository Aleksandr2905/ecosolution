import { text } from '../../../data/contact';
import * as s from './ContactBlock.styled';
import sprite from '../../../assets/icons/sprite.svg';
import Social from '../../Social/Social';

const ContactBlock = () => {
  const { tel1, tel2, email, address } = text.info;
  return (
    <s.Wrapper>
      <li>
        <s.Label>Phone:</s.Label>
        <s.Link href={`tel:+${tel1.replace(/\s|\(|\)/g, '')}`}>
          <svg width="24" height="24">
            <use href={`${sprite}#phone`} />
          </svg>
          {tel1}
        </s.Link>
        <s.SecondPhone href={`tel:+${tel2.replace(/\s|\(|\)/g, '')}`}>
          <svg width="24" height="24">
            <use href={`${sprite}#phone`} />
          </svg>
          {tel2}
        </s.SecondPhone>
      </li>
      <li>
        <s.Label>E-mail:</s.Label>
        <s.Link href={`mailto:${email}`}>
          <svg width="24" height="24">
            <use href={`${sprite}#email`} />
          </svg>
          {email}
        </s.Link>
      </li>
      <li>
        <s.Label>Address:</s.Label>
        <s.Link
          href={`https://www.google.com/maps/?q=${address}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="40" height="40">
            <use href={`${sprite}#map`} />
          </svg>
          {address}
        </s.Link>
      </li>
      <li>
        <s.Label>Social Networks:</s.Label>
        <Social contactStyle="ContactWrapper" />
      </li>
    </s.Wrapper>
  );
};

export default ContactBlock;
