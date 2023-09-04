'use client';

import { FormEvent, useState } from 'react';
import Input from '../../components/Input/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { callback } from 'next-auth/core/routes';

interface InitialStateProps {
  email: string;
  password: string;
}

const initialState: InitialStateProps = {
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
    signIn('credentials', {
      ...state,
      redirect: false
    }).then(callback => {
      if (callback?.ok) {
        router.refresh();
      }
      if (callback?.error) {
        throw new Error('Wrong Credentials');
      }
    });
    router.push('/');
  };

  return (
    <form className='text-center' onSubmit={onSubmit}>
      <div className='flex flex-col justify-center h-[450px] w-[350px] m-auto gap-2'>
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

      <div>
        <p>
          Haven't you got an account yet? <Link href='/register'>Register</Link>
        </p>
      </div>
    </form>
  );
};

export default Page;
