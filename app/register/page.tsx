'use client';

import { useState } from 'react';
import Input from '../../components/Input/Input';

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
  const [state, setState] = useState(initialState);
  const handleChange = (e: any) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <form className='text-center'>
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
      </div>
    </form>
  );
};

export default Page;
