'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';

type UserFormInputs = {
  name: string;
  lastName: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

const RegisterFormInput = z.object({
  name: z.string().nonempty({ message: 'Nome é obrigatório' }),
  lastName: z.string().nonempty({ message: 'Sobrenome é obrigatório' }),
  email: z.string().email({ message: 'Email inválido' }),
  confirmEmail: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
  confirmPassword: z.string().min(6, { message: 'A senha deve ter no mínimo 6 caracteres' }),
});

const schema = RegisterFormInput.refine((data) => {
  return (
    data.password === data.confirmPassword && data.email === data.confirmEmail
  );
}, {
  message: 'As senhas ou os emails não conferem',
  path: ['confirmPassword'], // Path of error
});

const Register = () => {
  const router = useRouter();
  const { handleSubmit, register, formState: { errors } } = useForm<UserFormInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: UserFormInputs) => {
    console.log(data);
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Nome</label>
        <input type="text" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <div>
        <label>Sobrenome</label>
        <input type="text" {...register('lastName')} />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </div>

      <div>
        <label>Email</label>
        <input type="text" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <label>Repita seu Email</label>
        <input type="text" {...register('confirmEmail')} />
        {errors.confirmEmail && <p>{errors.confirmEmail.message}</p>}
      </div>

      <div>
        <label>Senha</label>
        <input type="password" {...register('password')} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <label>Repita sua Senha</label>
        <input type="password" {...register('confirmPassword')} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default Register;

