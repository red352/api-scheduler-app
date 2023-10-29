// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 测试请求 GET / */
export async function test1(options?: { [key: string]: any }) {
  return request<string>('/', {
    method: 'GET',
    ...(options || {}),
  });
}
