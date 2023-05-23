'use client'

import { useRouter } from 'next/navigation';
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

function Login() {
  const { handleSubmit, register, formState: { errors } } = useForm<LoginFormInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Email</label>
          <input
            type="text"
            {...register('email', { required: 'Email é obrigatório' })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            {...register('password', { required: 'Senha é obrigatória' })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <button type="submit">Enviar</button>
      </form>
      <button type='button' onClick={()=>{ router.push('/register') }}>Cadastrar</button>
    </div>
  );
};

export default Login