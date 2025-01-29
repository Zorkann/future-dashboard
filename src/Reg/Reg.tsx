import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';
import axios from 'axios';

type FormValues = {
  email: string;
  password: string;
};

export const Reg = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    console.log('Form submmited', data);

    try {
      const response = await axios.post('http://localhost:3000/users', data);
      if (response.status === 201 || response.status === 200) {
        console.log('Data successfully sent to JSON Server');
      } else {
        console.error('Failed to send data to JSON Server');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-xs">
        <h2 className="text-center text-2xl font-bold mb-6">LoginPage2</h2>
        <form
          className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              type="email"
              id="email"
              {...register('email', {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email format',
                },
              })}
            />
            <p className="text-red-500">{errors.email?.message}</p>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
              type="password"
              id="password"
              {...register('password', {
                required: {
                  value: true,
                  message: 'Password is required',
                },
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
                maxLength: {
                  value: 24,
                  message: 'Password must be no more than 24 characters',
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%]).{8,24}$/,
                  message:
                    'Password must include upper and lower case letters, and one special character (@, !, #, $, %)',
                },
              })}
            />

            <p className="text-red-500 text-xs italic">
              {errors.password?.message}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};
