// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 添加触发器 POST /api/v1/apiTrigger/add */
export async function saveApiTrigger(body: API.ApiTriggerVo, options?: { [key: string]: any }) {
  return request<API.ResultApiTrigger>('/api/v1/apiTrigger/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取触发器列表 POST /api/v1/apiTrigger/list */
export async function listApiTrigger(options?: { [key: string]: any }) {
  return request<API.ResultListApiTriggerVo>('/api/v1/apiTrigger/list', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 修改触发器 POST /api/v1/apiTrigger/update */
export async function updateApiTrigger1(body: API.ApiTriggerVo, options?: { [key: string]: any }) {
  return request<API.ResultVoid>('/api/v1/apiTrigger/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 更改触发器状态 PUT /api/v1/apiTrigger/updateStatus */
export async function updateApiTrigger(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateApiTriggerParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultVoid>('/api/v1/apiTrigger/updateStatus', {
    method: 'PUT',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
