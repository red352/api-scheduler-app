// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 删除api POST /api/v1/api/delete */
export async function deleteApi(body: API.ModApi, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/api/v1/api/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取api列表 POST /api/v1/api/list */
export async function listApi(body: API.QueryApi, options?: { [key: string]: any }) {
  return request<API.ResultPageApi>('/api/v1/api/list', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 添加api POST /api/v1/api/save */
export async function saveApi(body: API.ModApi, options?: { [key: string]: any }) {
  return request<API.ResultApi>('/api/v1/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更新api POST /api/v1/api/update */
export async function updateApi(body: API.ModApi, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/api/v1/api/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
