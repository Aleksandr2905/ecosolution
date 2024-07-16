import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Report } from 'notiflix/build/notiflix-report-aio';
import schema from '../../helpers/validation';
import sprite from '../../assets/icons/sprite.svg';
import * as s from './ContactForm.styled';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    const storageData = localStorage.getItem('formData');
    if (storageData) {
      const parsedData = JSON.parse(storageData);
      reset(parsedData);
    }
  }, [reset]);

  const data = watch();
  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(data));
  }, [data]);

  const onSubmit = (data) => {
    try {
      const { username, email, phone } = data;
      document.body.classList.add('no-scroll');
      setTimeout(() => {
        Report.success(
          'Successfully sent!',
          `${username}, We will contact you shortly at the specified phone number ${phone} and send additional information by email ${email}.`,
          'Ok',
          () => {
            document.body.classList.remove('no-scroll');
          }
        );
      }, 1000);

      reset();
      localStorage.removeItem('formData');
    } catch (error) {
      document.body.classList.add('no-scroll');
      setTimeout(() => {
        Report.failure(
          'Error!',
          'Something went wrong, try again.',
          'Ok',
          () => {
            document.body.classList.remove('no-scroll');
          }
        );
      }, 1000);
    }
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
      <s.Textarea htmlFor="message">
        Message:
        <s.Message
          id="message"
          type="text"
          placeholder="Your message"
          {...register('message')}
          $errors={!!errors.message}
        />
      </s.Textarea>
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
