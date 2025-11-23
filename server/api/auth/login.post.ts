import { z } from 'zod';

interface User {
  email: string;
  password: string;
}

const invalidCredentialsError = createError({
  statusCode: 401,
  // This message is intentionally vague to prevent user enumeration attacks.
  message: 'Invalid credentials',
});

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(
    event,
    z.object({
      email: z.email(),
      password: z.string(),
    }).parse,
  );

  const user: User = {
    email: 'user01@gmail.com',
    password: '12345678',
  };

  if (email !== user.email || password !== user.password) {
    throw invalidCredentialsError;
  }

  await setUserSession(event, {
    user: {
      email,
    },
    loggedInAt: Date.now(),
  });

  return setResponseStatus(event, 201);
});
