export default [
  {
    url: '/api/getUsers',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        message: 'ok',
        data: ['tom', 'jerry'],
      };
    },
  },
];
