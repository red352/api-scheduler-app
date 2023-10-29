declare namespace API {
  type Api = {
    id?: number;
    name?: string;
    url?: string;
    method?: string;
    params?: string;
    body?: string;
    headers?: string;
    responseType?: number;
    createTime?: string;
  };

  type ApiTrigger = {
    id?: number;
    apiId?: number;
    userId?: number;
    cron?: string;
    lastExec?: string;
    triggerType?: number;
    expectData?: string;
    status?: number;
    execType?: string;
    expectedMail?: string;
    expectedSubject?: string;
    expectedText?: string;
    expectedVar?: string;
    createTime?: string;
  };

  type ApiTriggerVo = {
    id?: number;
    apiId?: number;
    userId?: number;
    cron?: string;
    lastExec?: string;
    triggerType?: number;
    expectData?: string;
    status?: number;
    execType?: string;
    expectedMail?: string;
    expectedSubject?: string;
    expectedText?: string;
    expectedVar?: string;
    createTime?: string;
    cronModel?: CronModel;
    expectDataCopy?: Record<string, any>;
    api?: Api;
  };

  type CronModel = {
    type: 'SEC_IN_MIN' | 'MIN_IN_HOUR' | 'HOUR_IN_DAY' | 'TIME_IN_DAY';
    time: LocalTime;
  };

  type LocalTime = {
    hour?: number;
    minute?: number;
    second?: number;
    nano?: number;
  };

  type ModApi = {
    id: number;
    name: string;
    url: string;
    method?: string;
    responseType: number;
    params?: string;
    body?: string;
    headers?: string;
  };

  type PageableObject = {
    offset?: number;
    sort?: SortObject;
    pageSize?: number;
    pageNumber?: number;
    paged?: boolean;
    unpaged?: boolean;
  };

  type PageApi = {
    totalElements?: number;
    totalPages?: number;
    size?: number;
    content?: Api[];
    number?: number;
    sort?: SortObject;
    first?: boolean;
    last?: boolean;
    numberOfElements?: number;
    pageable?: PageableObject;
    empty?: boolean;
  };

  type QueryApi = {
    /** 接口名称 */
    name?: string;
    /** 接口地址 */
    url?: string;
    /** 创建时间-最小值 */
    startTime?: string;
    /** 创建时间-最大值 */
    endTime?: string;
    requestPage?: RequestPage;
  };

  type RequestPage = {
    pageNum: number;
    pageSize: number;
  };

  type ResultApi = {
    /** 返回码 */
    code?: number;
    data?: Api;
    /** 返回消息 */
    msg?: string;
    /** 返回提示 */
    tips?: string;
    /** 返回属性 */
    properties?: Record<string, any>;
  };

  type ResultApiTrigger = {
    /** 返回码 */
    code?: number;
    data?: ApiTrigger;
    /** 返回消息 */
    msg?: string;
    /** 返回提示 */
    tips?: string;
    /** 返回属性 */
    properties?: Record<string, any>;
  };

  type ResultListApiTriggerVo = {
    /** 返回码 */
    code?: number;
    /** 返回数据 */
    data?: ApiTriggerVo[];
    /** 返回消息 */
    msg?: string;
    /** 返回提示 */
    tips?: string;
    /** 返回属性 */
    properties?: Record<string, any>;
  };

  type ResultPageApi = {
    /** 返回码 */
    code?: number;
    data?: PageApi;
    /** 返回消息 */
    msg?: string;
    /** 返回提示 */
    tips?: string;
    /** 返回属性 */
    properties?: Record<string, any>;
  };

  type ResultVoid = {
    /** 返回码 */
    code?: number;
    /** 返回数据 */
    data?: Record<string, any>;
    /** 返回消息 */
    msg?: string;
    /** 返回提示 */
    tips?: string;
    /** 返回属性 */
    properties?: Record<string, any>;
  };

  type SortObject = {
    empty?: boolean;
    sorted?: boolean;
    unsorted?: boolean;
  };

  type updateApiTriggerParams = {
    id: number;
    status: 'OFF' | 'ON';
  };
}
