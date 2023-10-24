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

  type ModApi = {
    id: number;
    name: string;
    url: string;
    method?: string;
    responseType: number;
    params?: Record<string, any>;
    body?: string;
    headers?: Record<string, any>;
  };

  type PageableObject = {
    offset?: number;
    sort?: SortObject;
    pageNumber?: number;
    pageSize?: number;
    paged?: boolean;
    unpaged?: boolean;
  };

  type PageApi = {
    totalPages?: number;
    totalElements?: number;
    size?: number;
    content?: Api[];
    number?: number;
    sort?: SortObject;
    numberOfElements?: number;
    first?: boolean;
    last?: boolean;
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

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}
