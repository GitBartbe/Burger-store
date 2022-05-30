import React, { useRef, useState } from 'react';
import './message-form.styles.scss';
import emailjs from 'emailjs-com';
import CustomButton from '../custom-button/custom-button';

function MessageForm() {
  const [message, setMessage] = useState({
    name: '',
    email: '',
    content: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMessage((prevValue) => {
      return { prevValue, [name]: value };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'portfolio_service',
        'template_bq7agpf',
        form.current,
        'user_KhGoeDEOpOThimXYA79zH'
      )
      .then(
        (result) => {
          console.log(result.text);

          setMessage({
            name: '',
            email: '',
            content: '',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const { name, email, content } = message;

  return (
    <form className='message-form' ref={form} onSubmit={sendEmail}>
      <label className='form-label'>Name</label>

      <input
        className='form-input'
        type='text'
        name='name'
        onChange={handleChange}
        value={name}
        required
      />
      <label className='form-label'>Email</label>

      <input
        className='form-input'
        type='email'
        name='email'
        onChange={handleChange}
        value={email}
        required
      />
      <label className='form-label'>Message</label>

      <textarea
        className='form-input'
        name='message'
        onChange={handleChange}
        value={content}
        required
      />
      <div className='message-button-container'>
        {' '}
        <CustomButton type='submit' value='Send' className={'red'}>
          Send
        </CustomButton>
      </div>
    </form>
  );
}

export default MessageForm;
