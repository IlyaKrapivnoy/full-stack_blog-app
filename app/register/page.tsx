'use client';

import { FormEvent, useState } from 'react';
import Input from '../../components/Input/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface InitialStateProps {
  name: string;
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
  name: '',
  email: '',
  password: ''
};
const Page = () => {
  const router = useRouter();
  const [state, setState] = useState(initialState);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post('/api/register', state)
      .then(() => {
        router.refresh();
      })
      .then(() => {
        setTimeout(() => {
          router.push('/login');
        }, 2500);
      })
      .catch((err: any) => {});
  };

  return (
    <form className='text-center' onSubmit={onSubmit}>
      <div className='flex flex-col justify-center h-[450px] w-[350px] m-auto gap-2'>
        <Input
          id='name'
          type='text'
          name='name'
          value={state.name}
          placeholder='Name'
          onChange={handleChange}
        />
        <Input
          id='email'
          type='email'
          name='email'
          value={state.email}
          placeholder='Email'
          onChange={handleChange}
        />
        <Input
          id='password'
          type='password'
          name='password'
          value={state.password}
          placeholder='Password'
          onChange={handleChange}
        />
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
};

export default Page;
