import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../../../helpers/validation';
import sprite from '../../../assets/icons/sprite.svg';
import * as s from './ContactForm.styled';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <s.Forma onSubmit={handleSubmit(onSubmit)}>
      <s.Label htmlFor="username">
        * Full name:
        <s.Input
          id="username"
          type="text"
          placeholder="John Rosie"
          {...register('username')}
          autoComplete="given-name"
          $errors={!!errors.username}
        />
        <s.ErrorText>{errors.username?.message}</s.ErrorText>
      </s.Label>
      <s.Label htmlFor="email">
        * E-mail:
        <s.Input
          id="email"
          type="email"
          placeholder="johnrosie@gmail.com"
          {...register('email')}
          autoComplete="email"
          $errors={!!errors.email}
        />
        <s.ErrorText>{errors.email?.message}</s.ErrorText>
      </s.Label>
      <s.Label htmlFor="phone">
        * Phone:
        <s.Input
          id="phone"
          type="tel"
          placeholder="380961234567"
          {...register('phone')}
          autoComplete="tel"
          $errors={!!errors.phone}
        />
        <s.ErrorText>{errors.phone?.message}</s.ErrorText>
      </s.Label>
      <s.Label htmlFor="message">
        Message:
        <s.Message
          id="message"
          type="text"
          placeholder="Your message"
          {...register('message')}
          $errors={!!errors.message}
        />
        <s.ErrorText>{errors.message?.message}</s.ErrorText>
      </s.Label>
      <s.Button type="submit">
        Send
        <svg width="16" height="16">
          <use href={`${sprite}#arrow-right`} />
        </svg>
      </s.Button>
    </s.Forma>
  );
};

export default ContactForm;
