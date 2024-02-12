// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  test('should create instance with provided base url', async () => {
    const axiosCreate = jest.spyOn(axios, 'create');
    jest.spyOn(axios.Axios.prototype, 'get').mockResolvedValue({});

    await throttledGetDataFromApi('todos');

    jest.runAllTimers();

    expect(axiosCreate.mock.calls[0]?.[0]).toStrictEqual({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const axiosGet = jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValue({});

    await throttledGetDataFromApi('todos');

    jest.runAllTimers();

    expect(axiosGet.mock.calls[0]?.[0]).toBe('todos');
  });

  test('should return response data', async () => {
    const resData = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
    ];
    jest
      .spyOn(axios.Axios.prototype, 'get')
      .mockResolvedValue({ data: resData });

    const result = await throttledGetDataFromApi('todos');

    jest.runAllTimers();

    expect(result).toStrictEqual(resData);
  });
});
