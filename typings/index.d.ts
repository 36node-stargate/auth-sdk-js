declare class SDK {
  constructor(opts?: Options);

  base: string;
  token: string | (() => string);
  auth: string;

  scope: ScopeAPI;
  provider: ProviderAPI;
  app: AppAPI;
  namespace: NamespaceAPI;
  user: UserAPI;
  github: GithubAPI;
  session: SessionAPI;
  validation: ValidationAPI;
  invitation: InvitationAPI;
  captcha: CaptchaAPI;
}

export interface Options {
  base?: string;
  token?: string | (() => string);
}

export interface ScopeAPI {
  /**
   * Create scope
   */
  createScope(req: CreateScopeRequest): Promise<CreateScopeResponse>;
  /**
   * List scopes
   */
  listScopes(req: ListScopesRequest): Promise<ListScopesResponse>;
  /**
   * Get scope by id
   */
  getScope(req: GetScopeRequest): Promise<GetScopeResponse>;
  /**
   * Update scope
   */
  updateScope(req: UpdateScopeRequest): Promise<UpdateScopeResponse>;
  /**
   * delete scope
   */
  deleteScope(req: DeleteScopeRequest): Promise<void>;
  /**
   * Create scope role
   */
  createScopeRole(req: CreateScopeRoleRequest): Promise<CreateScopeRoleResponse>;
  /**
   * List scope&#x27;s roles
   */
  listScopeRoles(req: ListScopeRolesRequest): Promise<ListScopeRolesResponse>;
  /**
   * Get role by scopeId &amp; roleId
   */
  getScopeRole(req: GetScopeRoleRequest): Promise<GetScopeRoleResponse>;
  /**
   * Update scope&#x27;s role
   */
  updateScopeRole(req: UpdateScopeRoleRequest): Promise<UpdateScopeRoleResponse>;
  /**
   * delete role
   */
  deleteScopeRole(req: DeleteScopeRoleRequest): Promise<void>;
  /**
   * Get scope&#x27;s sms config
   */
  getScopeSms(req: GetScopeSmsRequest): Promise<GetScopeSmsResponse>;
  /**
   * Update scope&#x27;s sms config
   */
  updateScopeSms(req: UpdateScopeSmsRequest): Promise<UpdateScopeSmsResponse>;
  /**
   * Get scope&#x27;s email config
   */
  getScopeEmail(req: GetScopeEmailRequest): Promise<GetScopeEmailResponse>;
  /**
   * Update scope&#x27;s email config
   */
  updateScopeEmail(req: UpdateScopeEmailRequest): Promise<UpdateScopeEmailResponse>;
  /**
   * List scope&#x27;s email templates
   */
  listScopeEmailtpls(req: ListScopeEmailtplsRequest): Promise<ListScopeEmailtplsResponse>;
  /**
   * Get emailtpl by id
   */
  getScopeEmailtpl(req: GetScopeEmailtplRequest): Promise<GetScopeEmailtplResponse>;
  /**
   * Update scope&#x27;s emailtpl
   */
  updateScopeEmailtpl(req: UpdateScopeEmailtplRequest): Promise<UpdateScopeEmailtplResponse>;
  /**
   * Get scope&#x27;s security config
   */
  getScopeSecurity(req: GetScopeSecurityRequest): Promise<GetScopeSecurityResponse>;
  /**
   * Update scope&#x27;s security config
   */
  updateScopeSecurity(req: UpdateScopeSecurityRequest): Promise<UpdateScopeSecurityResponse>;
  /**
   * list scope&#x27;s register form items
   */
  listScopeRegisterItems(
    req: ListScopeRegisterItemsRequest
  ): Promise<ListScopeRegisterItemsResponse>;
  /**
   * create or update scope&#x27;s register form item
   */
  upsertScopeRegisterItem(
    req: UpsertScopeRegisterItemRequest
  ): Promise<UpsertScopeRegisterItemResponse>;
  /**
   * delete scope&#x27;s register form item
   */
  deleteScopeRegisterItem(req: DeleteScopeRegisterItemRequest): Promise<void>;
  /**
   * list scope&#x27;s profile form items
   */
  listScopeProfileItems(req: ListScopeProfileItemsRequest): Promise<ListScopeProfileItemsResponse>;
  /**
   * create or update scope&#x27;s profile form item
   */
  upsertScopeProfileItem(
    req: UpsertScopeProfileItemRequest
  ): Promise<UpsertScopeProfileItemResponse>;
  /**
   * delete scope&#x27;s profile form item
   */
  deleteScopeProfileItem(req: DeleteScopeProfileItemRequest): Promise<void>;
  /**
   * list profile form items
   */
  listProfileItems(req: ListProfileItemsRequest): Promise<ListProfileItemsResponse>;
  /**
   * Get some config of scope
   */
  getConfigs(req: GetConfigsRequest): Promise<GetConfigsResponse>;
  /**
   * Update some config of scope
   */
  updateConfigs(req: UpdateConfigsRequest): Promise<UpdateConfigsResponse>;
}
export interface ProviderAPI {
  /**
   * Create scope provider
   */
  createScopeProvider(req: CreateScopeProviderRequest): Promise<CreateScopeProviderResponse>;
  /**
   * List scope providers
   */
  listScopeProviders(req: ListScopeProvidersRequest): Promise<ListScopeProvidersResponse>;
  /**
   * Get provider by id
   */
  getScopeProvider(req: GetScopeProviderRequest): Promise<GetScopeProviderResponse>;
  /**
   * Update provider
   */
  updateScopeProvider(req: UpdateScopeProviderRequest): Promise<UpdateScopeProviderResponse>;
  /**
   * delete provider
   */
  deleteScopeProvider(req: DeleteScopeProviderRequest): Promise<void>;
  /**
   * List providers without token
   */
  listProviders(req: ListProvidersRequest): Promise<ListProvidersResponse>;
  /**
   * list scope profiles by provider id
   */
  listScopeProfiles(req: ListScopeProfilesRequest): Promise<ListScopeProfilesResponse>;
}
export interface AppAPI {
  /**
   * Create scope app
   */
  createScopeApp(req: CreateScopeAppRequest): Promise<CreateScopeAppResponse>;
  /**
   * List scope apps
   */
  listScopeApps(req: ListScopeAppsRequest): Promise<ListScopeAppsResponse>;
  /**
   * Get scope app by id
   */
  getScopeApp(req: GetScopeAppRequest): Promise<GetScopeAppResponse>;
  /**
   * Update scope app
   */
  updateScopeApp(req: UpdateScopeAppRequest): Promise<UpdateScopeAppResponse>;
  /**
   * delete scope app
   */
  deleteScopeApp(req: DeleteScopeAppRequest): Promise<void>;
  /**
   * Get app by id
   */
  getApp(req: GetAppRequest): Promise<GetAppResponse>;
}
export interface NamespaceAPI {
  /**
   * Create scope namespace
   */
  createScopeNamespace(req: CreateScopeNamespaceRequest): Promise<CreateScopeNamespaceResponse>;
  /**
   * List scope namespaces
   */
  listScopeNamespaces(req: ListScopeNamespacesRequest): Promise<ListScopeNamespacesResponse>;
  /**
   * Get Scope namespace by id
   */
  getScopeNamespace(req: GetScopeNamespaceRequest): Promise<GetScopeNamespaceResponse>;
  /**
   * Update scope namespace
   */
  updateScopeNamespace(req: UpdateScopeNamespaceRequest): Promise<UpdateScopeNamespaceResponse>;
  /**
   * delete Scope namespace
   */
  deleteScopeNamespace(req: DeleteScopeNamespaceRequest): Promise<void>;
  /**
   * Create namespace
   */
  createNamespace(req: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
  /**
   * List namespaces
   */
  listNamespaces(req: ListNamespacesRequest): Promise<ListNamespacesResponse>;
  /**
   * Get namespace by id
   */
  getNamespace(req: GetNamespaceRequest): Promise<GetNamespaceResponse>;
  /**
   * Update namespace
   */
  updateNamespace(req: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse>;
  /**
   * delete namespace
   */
  deleteNamespace(req: DeleteNamespaceRequest): Promise<void>;
}
export interface UserAPI {
  /**
   * Create scope user
   */
  createScopeUser(req: CreateScopeUserRequest): Promise<CreateScopeUserResponse>;
  /**
   * List scope users
   */
  listScopeUsers(req: ListScopeUsersRequest): Promise<ListScopeUsersResponse>;
  /**
   * Get Scope user by id
   */
  getScopeUser(req: GetScopeUserRequest): Promise<GetScopeUserResponse>;
  /**
   * Update Scope user
   */
  updateScopeUser(req: UpdateScopeUserRequest): Promise<UpdateScopeUserResponse>;
  /**
   * delete Scope user
   */
  deleteScopeUser(req: DeleteScopeUserRequest): Promise<void>;
  /**
   * Create user
   */
  createUser(req: CreateUserRequest): Promise<CreateUserResponse>;
  /**
   * List users
   */
  listUsers(req: ListUsersRequest): Promise<ListUsersResponse>;
  /**
   * Get user by id
   */
  getUser(req: GetUserRequest): Promise<GetUserResponse>;
  /**
   * Update user
   */
  updateUser(req: UpdateUserRequest): Promise<UpdateUserResponse>;
  /**
   * delete user
   */
  deleteUser(req: DeleteUserRequest): Promise<void>;
  /**
   * Update user password
   */
  updateUserPassword(req: UpdateUserPasswordRequest): Promise<UpdateUserPasswordResponse>;
  /**
   * register user
   */
  registerUser(req: RegisterUserRequest): Promise<RegisterUserResponse>;
  /**
   * third register user
   */
  thirdRegisterUser(req: ThirdRegisterUserRequest): Promise<ThirdRegisterUserResponse>;
  /**
   * bind user
   */
  bindUser(req: BindUserRequest): Promise<BindUserResponse>;
  /**
   * reset password
   */
  resetPassword(req: ResetPasswordRequest): Promise<ResetPasswordResponse>;
}
export interface GithubAPI {
  /**
   * List githubs
   */
  listGithubs(req: ListGithubsRequest): Promise<ListGithubsResponse>;
}
export interface SessionAPI {
  /**
   * List scope sessions
   */
  listScopeSessions(req: ListScopeSessionsRequest): Promise<ListScopeSessionsResponse>;
  /**
   * Get Scope session
   */
  getScopeSession(req: GetScopeSessionRequest): Promise<GetScopeSessionResponse>;
  /**
   * Update Scope session
   */
  updateScopeSession(req: UpdateScopeSessionRequest): Promise<UpdateScopeSessionResponse>;
  /**
   * Delete Scope session
   */
  deleteScopeSession(req: DeleteScopeSessionRequest): Promise<void>;
  /**
   * Create session
   */
  createSession(req: CreateSessionRequest): Promise<CreateSessionResponse>;
  /**
   * Get session and auto refresh it if need
   */
  getSession(req: GetSessionRequest): Promise<GetSessionResponse>;
  /**
   * Deletes a session
   */
  deleteSession(req: DeleteSessionRequest): Promise<void>;
}
export interface ValidationAPI {
  /**
   * Create validation 发送验证码
   */
  createValidation(req: CreateValidationRequest): Promise<CreateValidationResponse>;
}
export interface InvitationAPI {
  /**
   * Create Scope invitation 生成邀请码
   */
  createScopeInvitation(req: CreateScopeInvitationRequest): Promise<CreateScopeInvitationResponse>;
  /**
   * List Scope invitations
   */
  listScopeInvitations(req: ListScopeInvitationsRequest): Promise<ListScopeInvitationsResponse>;
  /**
   * Get Scope invitation
   */
  getScopeInvitation(req: GetScopeInvitationRequest): Promise<GetScopeInvitationResponse>;
  /**
   * Update Scope invitation
   */
  updateScopeInvitation(req: UpdateScopeInvitationRequest): Promise<UpdateScopeInvitationResponse>;
  /**
   * Delete Scope invitation
   */
  deleteScopeInvitation(req: DeleteScopeInvitationRequest): Promise<void>;
  /**
   * Get invitation 验证邀请码是否可用
   */
  getInvitation(req: GetInvitationRequest): Promise<GetInvitationResponse>;
}
export interface CaptchaAPI {
  /**
   * 根据key获取验证码
   */
  getCaptcha(req: GetCaptchaRequest): Promise<void>;
}

export interface CreateScopeRequest {
  body: {
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    /**
     * scope id 唯一的英文名，不能重复 /^(\w+)*$/i
     */
    id: string;
  };
}
export interface CreateScopeResponse {
  body: {
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    owner?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    _populate?: string[] | string;
    name_like?: string;
    type?: "OWNER" | "COLLABORATOR";
  };
}
export interface ListScopesResponse {
  body: ({
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    owner?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeRequest {
  scopeId: string;
}
export interface GetScopeResponse {
  body: {
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    owner?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeRequest {
  scopeId: string;
  body: {
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  };
}
export interface UpdateScopeResponse {
  body: {
    /**
     * 用户池的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 用户池描述
     */
    desc?: string;
    owner?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    collaborators?: (
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string
    )[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeRequest {
  scopeId: string;
}
export interface CreateScopeRoleRequest {
  scopeId: string;
  body: {
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色描述
     */
    desc?: string;
  } & {
    name: string;
    type: string;
  };
}
export interface CreateScopeRoleResponse {
  /**
   * 角色配置
   */
  body: {
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色类型
     */
    type?: string;
    /**
     * 角色描述
     */
    desc?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeRolesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
  };
  scopeId: string;
}
export interface ListScopeRolesResponse {
  body: ({
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色类型
     */
    type?: string;
    /**
     * 角色描述
     */
    desc?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeRoleRequest {
  scopeId: string;
  roleId: string;
}
export interface GetScopeRoleResponse {
  /**
   * 角色配置
   */
  body: {
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色类型
     */
    type?: string;
    /**
     * 角色描述
     */
    desc?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeRoleRequest {
  scopeId: string;
  roleId: string;
  /**
   * 角色配置
   */
  body: {
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色描述
     */
    desc?: string;
  };
}
export interface UpdateScopeRoleResponse {
  /**
   * 角色配置
   */
  body: {
    /**
     * 角色名称
     */
    name?: string;
    /**
     * 角色类型
     */
    type?: string;
    /**
     * 角色描述
     */
    desc?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeRoleRequest {
  scopeId: string;
  roleId: string;
}
export interface GetScopeSmsRequest {
  scopeId: string;
}
export interface GetScopeSmsResponse {
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 属于 阿里云 腾讯云
     */
    provider?: "ALI" | "TENCENT";
    /**
     * id
     */
    keyId?: string;
    /**
     * secret
     */
    keySecret?: string;
    /**
     * 验证码 模板ID
     */
    tplId?: string;
    /**
     * 验证码 模板签名
     */
    sign?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeSmsRequest {
  scopeId: string;
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 属于 阿里云 腾讯云
     */
    provider?: "ALI" | "TENCENT";
    /**
     * id
     */
    keyId?: string;
    /**
     * secret
     */
    keySecret?: string;
    /**
     * 验证码 模板ID
     */
    tplId?: string;
    /**
     * 验证码 模板签名
     */
    sign?: string;
  } & {
    custom: boolean;
  };
}
export interface UpdateScopeSmsResponse {
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 属于 阿里云 腾讯云
     */
    provider?: "ALI" | "TENCENT";
    /**
     * id
     */
    keyId?: string;
    /**
     * secret
     */
    keySecret?: string;
    /**
     * 验证码 模板ID
     */
    tplId?: string;
    /**
     * 验证码 模板签名
     */
    sign?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetScopeEmailRequest {
  scopeId: string;
}
export interface GetScopeEmailResponse {
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 邮箱服务器地址
     */
    host?: string;
    /**
     * 邮箱服务器端口
     */
    port?: number;
    /**
     * 是否开启tls
     */
    tls?: boolean;
    /**
     * tls开启后是否验证
     */
    authorize?: boolean;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 密码
     */
    from?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeEmailRequest {
  scopeId: string;
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 邮箱服务器地址
     */
    host?: string;
    /**
     * 邮箱服务器端口
     */
    port?: number;
    /**
     * 是否开启tls
     */
    tls?: boolean;
    /**
     * tls开启后是否验证
     */
    authorize?: boolean;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 密码
     */
    from?: string;
  } & {
    custom: boolean;
  };
}
export interface UpdateScopeEmailResponse {
  body: {
    /**
     * 验证码过期时间 分钟
     */
    expire?: number;
    /**
     * 开启自定义
     */
    custom?: boolean;
    /**
     * 邮箱服务器地址
     */
    host?: string;
    /**
     * 邮箱服务器端口
     */
    port?: number;
    /**
     * 是否开启tls
     */
    tls?: boolean;
    /**
     * tls开启后是否验证
     */
    authorize?: boolean;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 密码
     */
    from?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeEmailtplsRequest {
  scopeId: string;
}
export interface ListScopeEmailtplsResponse {
  body: ({
    /**
     * 模板类型
     */
    type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
    /**
     * 是否启用
     */
    custom?: boolean;
    /**
     * 邮件主题
     */
    subject?: string;
    /**
     * 邮件正文模板
     */
    content?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeEmailtplRequest {
  scopeId: string;
  emailtplId: string;
}
export interface GetScopeEmailtplResponse {
  /**
   * 邮件模板配置
   */
  body: {
    /**
     * 模板类型
     */
    type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
    /**
     * 是否启用
     */
    custom?: boolean;
    /**
     * 邮件主题
     */
    subject?: string;
    /**
     * 邮件正文模板
     */
    content?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeEmailtplRequest {
  scopeId: string;
  emailtplId: string;
  body: {
    /**
     * 模板类型
     */
    type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
    /**
     * 是否启用
     */
    custom?: boolean;
    /**
     * 邮件主题
     */
    subject?: string;
    /**
     * 邮件正文模板
     */
    content?: string;
  } & {
    custom: boolean;
  };
}
export interface UpdateScopeEmailtplResponse {
  /**
   * 邮件模板配置
   */
  body: {
    /**
     * 模板类型
     */
    type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
    /**
     * 是否启用
     */
    custom?: boolean;
    /**
     * 邮件主题
     */
    subject?: string;
    /**
     * 邮件正文模板
     */
    content?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetScopeSecurityRequest {
  scopeId: string;
}
export interface GetScopeSecurityResponse {
  /**
   * scope 安全配置
   */
  body: {
    /**
     * jwt过期时间/秒
     */
    jwtExpire?: number;
    /**
     * session过期时间/秒
     */
    sessionExpire?: number;
    /**
     * 是否支持账号注册
     */
    account?: boolean;
    /**
     * 是否支持三方登录
     */
    thirdParty?: boolean;
    /**
     * 是否开启频繁注册限制
     */
    frequentRegister?: boolean;
    /**
     * 频繁注册限制时长/秒
     */
    frDuration?: number;
    /**
     * 频繁注册限制次数
     */
    frTimes?: number;
    /**
     * 是否开启登录失败限制
     */
    loginFail?: boolean;
    /**
     * 登录失败限制时长/秒
     */
    lfDuration?: number;
    /**
     * 登录失败限制次数
     */
    lfTimes?: number;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeSecurityRequest {
  scopeId: string;
  /**
   * scope 安全配置
   */
  body: {
    /**
     * jwt过期时间/秒
     */
    jwtExpire?: number;
    /**
     * session过期时间/秒
     */
    sessionExpire?: number;
    /**
     * 是否支持账号注册
     */
    account?: boolean;
    /**
     * 是否支持三方登录
     */
    thirdParty?: boolean;
    /**
     * 是否开启频繁注册限制
     */
    frequentRegister?: boolean;
    /**
     * 频繁注册限制时长/秒
     */
    frDuration?: number;
    /**
     * 频繁注册限制次数
     */
    frTimes?: number;
    /**
     * 是否开启登录失败限制
     */
    loginFail?: boolean;
    /**
     * 登录失败限制时长/秒
     */
    lfDuration?: number;
    /**
     * 登录失败限制次数
     */
    lfTimes?: number;
  };
}
export interface UpdateScopeSecurityResponse {
  /**
   * scope 安全配置
   */
  body: {
    /**
     * jwt过期时间/秒
     */
    jwtExpire?: number;
    /**
     * session过期时间/秒
     */
    sessionExpire?: number;
    /**
     * 是否支持账号注册
     */
    account?: boolean;
    /**
     * 是否支持三方登录
     */
    thirdParty?: boolean;
    /**
     * 是否开启频繁注册限制
     */
    frequentRegister?: boolean;
    /**
     * 频繁注册限制时长/秒
     */
    frDuration?: number;
    /**
     * 频繁注册限制次数
     */
    frTimes?: number;
    /**
     * 是否开启登录失败限制
     */
    loginFail?: boolean;
    /**
     * 登录失败限制时长/秒
     */
    lfDuration?: number;
    /**
     * 登录失败限制次数
     */
    lfTimes?: number;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeRegisterItemsRequest {
  scopeId: string;
}
export interface ListScopeRegisterItemsResponse {
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface UpsertScopeRegisterItemRequest {
  scopeId: string;
  /**
   * scope register form item 注册配置项
   */
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  };
}
export interface UpsertScopeRegisterItemResponse {
  /**
   * scope register form item 注册配置项
   */
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  };
}
export interface DeleteScopeRegisterItemRequest {
  scopeId: string;
  name: string;
}
export interface ListScopeProfileItemsRequest {
  scopeId: string;
}
export interface ListScopeProfileItemsResponse {
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface UpsertScopeProfileItemRequest {
  scopeId: string;
  /**
   * scope profile form item 个人中心配置项
   */
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  };
}
export interface UpsertScopeProfileItemResponse {
  /**
   * scope profile form item 个人中心配置项
   */
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  };
}
export interface DeleteScopeProfileItemRequest {
  scopeId: string;
  name: string;
}
export interface ListProfileItemsResponse {
  body: {
    /**
     * item name
     */
    name: string;
    /**
     * 必填 or 选填
     */
    must: boolean;
  }[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetConfigsResponse {
  /**
   * 用户池部分设置，主要用于小程序同步，避免经常修改
   */
  body: {
    /**
     * 子项 关键字
     */
    key?: string;
    /**
     * 子项 值
     */
    value?: string;
    /**
     * 子项 描述
     */
    desc?: string;
  }[];
}
export interface UpdateConfigsRequest {
  /**
   * 用户池部分设置修改
   */
  body: {
    data?: {
      /**
       * 子项 关键字
       */
      key?: string;
      /**
       * 子项 值
       */
      value?: string;
      /**
       * 子项 描述
       */
      desc?: string;
    }[];
  };
}
export interface UpdateConfigsResponse {
  /**
   * 用户池部分设置，主要用于小程序同步，避免经常修改
   */
  body: {
    /**
     * 子项 关键字
     */
    key?: string;
    /**
     * 子项 值
     */
    value?: string;
    /**
     * 子项 描述
     */
    desc?: string;
  }[];
}
export interface CreateScopeProviderRequest {
  scopeId: string;
  body: {
    /**
     * 描述
     */
    name?: string;
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    type: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WXQY" | "GITHUB";
  };
}
export interface CreateScopeProviderResponse {
  body: {
    /**
     * 描述
     */
    name?: string;
    /**
     * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
     */
    type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeProvidersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
  };
  scopeId: string;
}
export interface ListScopeProvidersResponse {
  body: ({
    /**
     * 描述
     */
    name?: string;
    /**
     * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
     */
    type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeProviderRequest {
  scopeId: string;
  providerId: string;
}
export interface GetScopeProviderResponse {
  body: {
    /**
     * 描述
     */
    name?: string;
    /**
     * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
     */
    type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeProviderRequest {
  scopeId: string;
  providerId: string;
  /**
   * 验证方式 例如 微信 验证
   */
  body: {
    /**
     * 描述
     */
    name?: string;
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  };
}
export interface UpdateScopeProviderResponse {
  body: {
    /**
     * 描述
     */
    name?: string;
    /**
     * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
     */
    type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeProviderRequest {
  scopeId: string;
  providerId: string;
}
export interface ListProvidersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    scope: string;
  };
}
export interface ListProvidersResponse {
  body: ({
    /**
     * 描述
     */
    name?: string;
    /**
     * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
     */
    type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
    /**
     * app id
     */
    appId?: string;
    /**
     * app secret
     */
    appSecret?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 是否自动更新用户数据
     */
    update?: boolean;
    /**
     * 是否绑定用户
     */
    bind?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListScopeProfilesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    _populate?: string;
  };
  scopeId: string;
  providerId: string;
}
export interface ListScopeProfilesResponse {
  body: (
    | ({
        /**
         * github 用户名
         */
        username?: string;
        /**
         * github id
         */
        githubId?: string;
        /**
         * github 头像
         */
        avatar?: string;
        /**
         * github 姓名
         */
        name?: string;
        /**
         * 公司
         */
        company?: string;
        /**
         * 博客
         */
        blog?: string;
        /**
         * 所在地
         */
        location?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 最近登录的provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
        /**
         * github access token
         */
        token?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | ({
        /**
         * wechat 昵称
         */
        nickname?: string;
        /**
         * union id
         */
        unionid?: string;
        /**
         * open id
         */
        openid?: string;
        /**
         * appId
         */
        appId?: string;
        /**
         * client id
         */
        clientId?: string;
        /**
         * 微信 头像
         */
        headimgurl?: string;
        /**
         * provider id
         */
        provider?: string;
        /**
         * 绑定 user id
         */
        user?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
  )[];
}
export interface CreateScopeAppRequest {
  scopeId: string;
  /**
   * app 配置
   */
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  };
}
export interface CreateScopeAppResponse {
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeAppsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
  };
  scopeId: string;
}
export interface ListScopeAppsResponse {
  body: ({
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeAppRequest {
  scopeId: string;
  appId: string;
}
export interface GetScopeAppResponse {
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeAppRequest {
  scopeId: string;
  appId: string;
  /**
   * app 配置
   */
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  };
}
export interface UpdateScopeAppResponse {
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeAppRequest {
  scopeId: string;
  appId: string;
}
export interface GetAppRequest {
  appId: string;
}
export interface GetAppResponse {
  body: {
    /**
     * 名称
     */
    name?: string;
    /**
     * app 类型
     */
    type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
    /**
     * 回调地址
     */
    redirectUri?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateScopeNamespaceRequest {
  scopeId: string;
  body: {
    /**
     * 唯一的英文名，不能重复
     */
    id: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  };
}
export interface CreateScopeNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeNamespacesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    id_like: string;
    labels?: string[] | string;
  };
  scopeId: string;
}
export interface ListScopeNamespacesResponse {
  body: ({
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeNamespaceRequest {
  scopeId: string;
  namespaceId: string;
}
export interface GetScopeNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeNamespaceRequest {
  scopeId: string;
  namespaceId: string;
  body: {
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  };
}
export interface UpdateScopeNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeNamespaceRequest {
  scopeId: string;
  namespaceId: string;
}
export interface CreateNamespaceRequest {
  body: {
    /**
     * 唯一的英文名，不能重复
     */
    id: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  };
}
export interface CreateNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListNamespacesRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    id_like: string;
    name_like?: string;
    labels?: string[] | string;
  };
}
export interface ListNamespacesResponse {
  body: ({
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetNamespaceRequest {
  namespaceId: string;
}
export interface GetNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateNamespaceRequest {
  namespaceId: string;
  body: {
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  };
}
export interface UpdateNamespaceResponse {
  body: {
    /**
     * 父空间
     */
    parent?: string;
    /**
     * 命名空间的名称，例如`百世诺`
     */
    name?: string;
    /**
     * 空间描述
     */
    desc?: string;
    labels?: string[];
    /**
     * 用户自定义数据
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteNamespaceRequest {
  namespaceId: string;
}
export interface CreateScopeUserRequest {
  scopeId: string;
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    ns: string;
    username?: string;
    /**
     * 密码
     */
    password: string;
  };
}
export interface CreateScopeUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeUsersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    active?: boolean;
    lock?: boolean;
    ns?: string[] | string;
    ns_like?: string;
    roles?: string[] | string;
  };
  scopeId: string;
}
export interface ListScopeUsersResponse {
  body: ({
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeUserRequest {
  scopeId: string;
  userId: string;
}
export interface GetScopeUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeUserRequest {
  scopeId: string;
  userId: string;
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 密码
     */
    password?: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
  };
}
export interface UpdateScopeUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeUserRequest {
  scopeId: string;
  userId: string;
}
export interface CreateUserRequest {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    ns: string;
    username?: string;
    /**
     * 密码
     */
    password: string;
  };
}
export interface CreateUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListUsersRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    active?: boolean;
    ns?: string[] | string;
    ns_like?: string;
    roles?: string[] | string;
    id_like?: string;
    username_like?: string;
    name_like?: string;
    nickname_like?: string;
    phone?: string[] | string;
    q?: string;
    labels?: string[] | string;
    labels_ne?: string;
    type?: string[] | string;
    type_ne?: string;
  };
}
export interface ListUsersResponse {
  body: ({
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetUserRequest {
  userId: string;
}
export interface GetUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateUserRequest {
  userId: string;
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 密码
     */
    password?: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
  };
}
export interface UpdateUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteUserRequest {
  userId: string;
}
export interface UpdateUserPasswordRequest {
  userId: string;
  /**
   * 用户修改个人密码
   */
  body: {
    /**
     * 原密码
     */
    oldPassword: string;
    /**
     * 新密码
     */
    password: string;
  };
}
export interface UpdateUserPasswordResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface RegisterUserRequest {
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    /**
     * scope id
     */
    scope: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
    /**
     * 邀请码
     */
    inviteCode?: string;
  };
}
export interface RegisterUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ThirdRegisterUserRequest {
  body: {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 密码
     */
    password: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
    /**
     * 邀请码
     */
    inviteCode?: string;
  };
}
export interface ThirdRegisterUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface BindUserRequest {
  /**
   * 绑定现有账户所需的参数
   */
  body: {
    /**
     * 验证方式 ( provider id )
     */
    provider: string;
    /**
     * 用户名/邮箱/手机号
     */
    username: string;
    /**
     * 密码
     */
    password: string;
  };
}
export interface BindUserResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ResetPasswordRequest {
  body: {
    /**
     * provider id
     */
    provider: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
    /**
     * 密码
     */
    password: string;
  };
}
export interface ResetPasswordResponse {
  body: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListGithubsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    ns_like: string;
    user_like?: string;
  };
}
export interface ListGithubsResponse {
  body: ({
    /**
     * github 用户名
     */
    username?: string;
    /**
     * github id
     */
    githubId?: string;
    /**
     * github 头像
     */
    avatar?: string;
    /**
     * github 姓名
     */
    name?: string;
    /**
     * 公司
     */
    company?: string;
    /**
     * 博客
     */
    blog?: string;
    /**
     * 所在地
     */
    location?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 最近登录的provider id
     */
    provider?: string;
    /**
     * 绑定 user id
     */
    user?: string;
    /**
     * github access token
     */
    token?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface ListScopeSessionsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    _populate?: string;
    ns?: string;
    ns_like?: string;
    user?: string;
    active?: boolean;
  };
  scopeId: string;
}
export interface ListScopeSessionsResponse {
  body: ({
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * user
     */
    user?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    /**
     * 会话过期时间
     */
    expireAt?: Date;
    /**
     * token过期时间
     */
    tokenExpireAt?: Date;
    /**
     * 是否可用
     */
    active?: boolean;
    /**
     * session belongs to ns
     */
    ns?: string;
    /**
     * 是否可用
     */
    provider?: string;
  })[];
  headers: {
    "x-total-count"?: string;
  };
}
export interface GetScopeSessionRequest {
  scopeId: string;
  sessionId: string;
}
export interface GetScopeSessionResponse {
  body: {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * user
     */
    user?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    /**
     * 会话过期时间
     */
    expireAt?: Date;
    /**
     * token过期时间
     */
    tokenExpireAt?: Date;
    /**
     * 是否可用
     */
    active?: boolean;
    /**
     * session belongs to ns
     */
    ns?: string;
    /**
     * 是否可用
     */
    provider?: string;
  };
}
export interface UpdateScopeSessionRequest {
  scopeId: string;
  sessionId: string;
  /**
   * 修改 session 的参数
   */
  body: {
    /**
     * 是否可用
     */
    active: boolean;
  };
}
export interface UpdateScopeSessionResponse {
  body: {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * user
     */
    user?:
      | ({
          /**
           * 所在的ns
           */
          ns?: string;
          /**
           * 用户名
           */
          username?: string;
          /**
           * 电话
           */
          phone?: string;
          /**
           * 邮箱
           */
          email?: string;
          /**
           * 角色
           */
          roles?: string[];
          /**
           * 是否锁定
           */
          lock?: boolean;
          /**
           * 是否激活
           */
          active?: boolean;
          /**
           * 过期时间
           */
          expireAt?: Date;
          /**
           * 用户来源
           */
          source?:
            | "DEFAULT"
            | "PHONE"
            | "EMAIL"
            | "PASSWORD"
            | "GITHUB"
            | "WX"
            | "WXAPP"
            | "WXCORP_INSEDE"
            | "WXCORP_OUTSIDE";
          labels?: string[];
          /**
           * 用户类型
           */
          type?: string;
        } & {
          /**
           * 头像
           */
          avatar?: string;
          /**
           * 昵称
           */
          nickname?: string;
          /**
           * 身份证号
           */
          idnumber?: string;
          /**
           * QQ号
           */
          qq?: string;
          /**
           * 微信号
           */
          wechat?: string;
          /**
           * 个人简介
           */
          personalinfo?: string;
          /**
           * 出生日期
           */
          birthday?: Date;
          /**
           * 兴趣爱好
           */
          hobby?: string;
          /**
           * 地址
           */
          address?: string;
          /**
           * 国家
           */
          country?: string;
          /**
           * 性别
           */
          gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
          /**
           * 公司名
           */
          company?: string;
          /**
           * 工号
           */
          worknumber?: string;
          /**
           * 工龄
           */
          wordyear?: string;
          /**
           * 资质
           */
          credential?: string;
          /**
           * 职位
           */
          position?: string;
          /**
           * 毕业院校
           */
          school?: string;
          /**
           * 专业
           */
          major?: string;
          /**
           * 学历
           */
          education?: string;
          /**
           * 班级
           */
          class?: string;
          /**
           * 导师
           */
          teacher?: string;
          /**
           * 开户行
           */
          bank?: string;
          /**
           * 银行卡号
           */
          bankcardnumber?: string;
          /**
           * 自定义信息
           */
          data?: string;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    /**
     * 会话过期时间
     */
    expireAt?: Date;
    /**
     * token过期时间
     */
    tokenExpireAt?: Date;
    /**
     * 是否可用
     */
    active?: boolean;
    /**
     * session belongs to ns
     */
    ns?: string;
    /**
     * 是否可用
     */
    provider?: string;
  };
}
export interface DeleteScopeSessionRequest {
  scopeId: string;
  sessionId: string;
}
export interface CreateSessionRequest {
  body: {
    /**
     * 验证方式 ( provider id )
     */
    provider: string;
    /**
     * 用户名/邮箱/手机号
     */
    username?: string;
    /**
     * 密码
     */
    password?: string;
    /**
     * 手机号 用于手机号登陆
     */
    phone?: string;
    /**
     * 邮箱 用于忘记密码
     */
    email?: string;
    /**
     * 各种授权code
     */
    code?: string;
    /**
     * 手机验证码
     */
    phoneCode?: string;
    /**
     * 邮箱验证码
     */
    emailCode?: string;
    /**
     * 微信小程序登陆时的用户加密数据
     */
    encryptedData?: string;
    /**
     * 微信小程序登陆时的解密iv
     */
    iv?: string;
    /**
     * 验证码key
     */
    captchaKey?: string;
    /**
     * 验证码key
     */
    captchaCode?: string;
  };
}
export interface CreateSessionResponse {
  body: {
    /**
     * 会话过期时间
     */
    expireAt?: Date;
    /**
     * token过期时间
     */
    tokenExpireAt?: Date;
    /**
     * session belongs to ns
     */
    ns?: string;
    provider?:
      | ({
          /**
           * 描述
           */
          name?: string;
          /**
           * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
           */
          type?:
            | "PASSWORD"
            | "EMAIL"
            | "PHONE"
            | "WECHAT"
            | "WXAPP"
            | "WECHAT_PHONE"
            | "WXQY"
            | "GITHUB";
          /**
           * app id
           */
          appId?: string;
          /**
           * app secret
           */
          appSecret?: string;
          /**
           * client id
           */
          clientId?: string;
          /**
           * 是否自动更新用户数据
           */
          update?: boolean;
          /**
           * 是否绑定用户
           */
          bind?: boolean;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    /**
     * 角色
     */
    roles?: string[];
    user?: {
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 是否锁定
       */
      lock?: boolean;
      /**
       * 是否激活
       */
      active?: boolean;
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
      labels?: string[];
      /**
       * 用户类型
       */
      type?: string;
    } & {
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 出生日期
       */
      birthday?: Date;
      /**
       * 兴趣爱好
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    github?: {
      /**
       * github 用户名
       */
      username?: string;
      /**
       * github id
       */
      githubId?: string;
      /**
       * github 头像
       */
      avatar?: string;
      /**
       * github 姓名
       */
      name?: string;
      /**
       * 公司
       */
      company?: string;
      /**
       * 博客
       */
      blog?: string;
      /**
       * 所在地
       */
      location?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 最近登录的provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
      /**
       * github access token
       */
      token?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    wechat?: {
      /**
       * wechat 昵称
       */
      nickname?: string;
      /**
       * union id
       */
      unionid?: string;
      /**
       * open id
       */
      openid?: string;
      /**
       * appId
       */
      appId?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 微信 头像
       */
      headimgurl?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 是否可用
     */
    active?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * token
     */
    token: string;
  };
}
export interface GetSessionRequest {
  sessionId: string;
}
export interface GetSessionResponse {
  body: {
    /**
     * 会话过期时间
     */
    expireAt?: Date;
    /**
     * token过期时间
     */
    tokenExpireAt?: Date;
    /**
     * session belongs to ns
     */
    ns?: string;
    provider?:
      | ({
          /**
           * 描述
           */
          name?: string;
          /**
           * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
           */
          type?:
            | "PASSWORD"
            | "EMAIL"
            | "PHONE"
            | "WECHAT"
            | "WXAPP"
            | "WECHAT_PHONE"
            | "WXQY"
            | "GITHUB";
          /**
           * app id
           */
          appId?: string;
          /**
           * app secret
           */
          appSecret?: string;
          /**
           * client id
           */
          clientId?: string;
          /**
           * 是否自动更新用户数据
           */
          update?: boolean;
          /**
           * 是否绑定用户
           */
          bind?: boolean;
        } & {
          id: string;
          updateAt?: Date;
          updateBy?: string;
          createAt?: Date;
          createBy?: string;
        })
      | string;
    /**
     * 角色
     */
    roles?: string[];
    user?: {
      /**
       * 所在的ns
       */
      ns?: string;
      /**
       * 用户名
       */
      username?: string;
      /**
       * 电话
       */
      phone?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 角色
       */
      roles?: string[];
      /**
       * 是否锁定
       */
      lock?: boolean;
      /**
       * 是否激活
       */
      active?: boolean;
      /**
       * 过期时间
       */
      expireAt?: Date;
      /**
       * 用户来源
       */
      source?:
        | "DEFAULT"
        | "PHONE"
        | "EMAIL"
        | "PASSWORD"
        | "GITHUB"
        | "WX"
        | "WXAPP"
        | "WXCORP_INSEDE"
        | "WXCORP_OUTSIDE";
      labels?: string[];
      /**
       * 用户类型
       */
      type?: string;
    } & {
      /**
       * 头像
       */
      avatar?: string;
      /**
       * 昵称
       */
      nickname?: string;
      /**
       * 身份证号
       */
      idnumber?: string;
      /**
       * QQ号
       */
      qq?: string;
      /**
       * 微信号
       */
      wechat?: string;
      /**
       * 个人简介
       */
      personalinfo?: string;
      /**
       * 出生日期
       */
      birthday?: Date;
      /**
       * 兴趣爱好
       */
      hobby?: string;
      /**
       * 地址
       */
      address?: string;
      /**
       * 国家
       */
      country?: string;
      /**
       * 性别
       */
      gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
      /**
       * 公司名
       */
      company?: string;
      /**
       * 工号
       */
      worknumber?: string;
      /**
       * 工龄
       */
      wordyear?: string;
      /**
       * 资质
       */
      credential?: string;
      /**
       * 职位
       */
      position?: string;
      /**
       * 毕业院校
       */
      school?: string;
      /**
       * 专业
       */
      major?: string;
      /**
       * 学历
       */
      education?: string;
      /**
       * 班级
       */
      class?: string;
      /**
       * 导师
       */
      teacher?: string;
      /**
       * 开户行
       */
      bank?: string;
      /**
       * 银行卡号
       */
      bankcardnumber?: string;
      /**
       * 自定义信息
       */
      data?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    github?: {
      /**
       * github 用户名
       */
      username?: string;
      /**
       * github id
       */
      githubId?: string;
      /**
       * github 头像
       */
      avatar?: string;
      /**
       * github 姓名
       */
      name?: string;
      /**
       * 公司
       */
      company?: string;
      /**
       * 博客
       */
      blog?: string;
      /**
       * 所在地
       */
      location?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 最近登录的provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
      /**
       * github access token
       */
      token?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    wechat?: {
      /**
       * wechat 昵称
       */
      nickname?: string;
      /**
       * union id
       */
      unionid?: string;
      /**
       * open id
       */
      openid?: string;
      /**
       * appId
       */
      appId?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 微信 头像
       */
      headimgurl?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    };
    /**
     * 是否可用
     */
    active?: boolean;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  } & {
    /**
     * token
     */
    token: string;
  };
}
export interface DeleteSessionRequest {
  sessionId: string;
}
export interface CreateValidationRequest {
  /**
   * 创建验证码需要的参数
   */
  body: {
    scope: string;
    phone?: string;
    email?: string;
    kind?: "BIND_VALID" | "RESETPWD_VALID";
  };
}
export interface CreateValidationResponse {
  body: {
    /**
     * 所属的 scope
     */
    scope?: string;
    email?: string;
    phone?: string;
    /**
     * 验证码过期时间
     */
    expireAt?: Date;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 验证码使用时间
     */
    usedAt?: Date;
    /**
     * 验证码属于手机或者邮箱
     */
    type?: "PHONE" | "EMAIL";
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface CreateScopeInvitationRequest {
  scopeId: string;
  /**
   * 创建邀请码需要的参数
   */
  body: {
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    code: string;
  };
}
export interface CreateScopeInvitationResponse {
  body: {
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface ListScopeInvitationsRequest {
  query?: {
    _limit?: number;
    _offset?: number;
    _select?: string;
    _sort?: string;
    code?: string;
    active?: boolean;
    reuse?: boolean;
    source_like?: string;
  };
  scopeId: string;
}
export interface ListScopeInvitationsResponse {
  body: ({
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  })[];
  headers: {
    "x-total-count"?: number;
  };
}
export interface GetScopeInvitationRequest {
  scopeId: string;
  invitationId: string;
}
export interface GetScopeInvitationResponse {
  body: {
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface UpdateScopeInvitationRequest {
  scopeId: string;
  invitationId: string;
  /**
   * 邀请码
   */
  body: {
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  };
}
export interface UpdateScopeInvitationResponse {
  body: {
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface DeleteScopeInvitationRequest {
  scopeId: string;
  invitationId: string;
}
export interface GetInvitationRequest {
  code: string;
  query?: {
    ns: string;
  };
}
export interface GetInvitationResponse {
  body: {
    /**
     * 邀请码
     */
    code?: string;
    /**
     * 来源
     */
    source?: string;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 是否重复使用
     */
    reuse?: boolean;
    /**
     * 是否已经使用
     */
    used?: boolean;
    /**
     * 邀请码使用时间
     */
    usedAt?: Date;
    /**
     * 邀请码关联邮箱
     */
    email?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
}
export interface GetCaptchaRequest {
  key: string;
}
export interface ScopeDoc {
  /**
   * 用户池的名称，例如`百世诺`
   */
  name?: string;
  /**
   * 用户池描述
   */
  desc?: string;
  owner?:
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  collaborators?: (
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string
  )[];
  /**
   * 用户自定义数据
   */
  data?: string;
}

export type ScopeCreateDoc = {
  /**
   * 用户池的名称，例如`百世诺`
   */
  name?: string;
  /**
   * 用户池描述
   */
  desc?: string;
  owner?:
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  collaborators?: (
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string
  )[];
  /**
   * 用户自定义数据
   */
  data?: string;
} & {
  /**
   * scope id 唯一的英文名，不能重复 /^(\w+)*$/i
   */
  id: string;
};

export type Scope = {
  /**
   * 用户池的名称，例如`百世诺`
   */
  name?: string;
  /**
   * 用户池描述
   */
  desc?: string;
  owner?:
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  collaborators?: (
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string
  )[];
  /**
   * 用户自定义数据
   */
  data?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 角色配置
 */
export interface ScopeRoleDoc {
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 角色类型
   */
  type?: string;
  /**
   * 角色描述
   */
  desc?: string;
}

export type ScopeRoleCreateBody = {
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 角色类型
   */
  type?: string;
  /**
   * 角色描述
   */
  desc?: string;
} & {
  name: string;
  type: string;
};

/**
 * 角色配置
 */
export type ScopeRole = {
  /**
   * 角色名称
   */
  name?: string;
  /**
   * 角色类型
   */
  type?: string;
  /**
   * 角色描述
   */
  desc?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 手机短信配置
 */
export interface ScopeSmsDoc {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 属于 阿里云 腾讯云
   */
  provider?: "ALI" | "TENCENT";
  /**
   * id
   */
  keyId?: string;
  /**
   * secret
   */
  keySecret?: string;
  /**
   * 验证码 模板ID
   */
  tplId?: string;
  /**
   * 验证码 模板签名
   */
  sign?: string;
}

export type ScopeSmsUpdateBody = {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 属于 阿里云 腾讯云
   */
  provider?: "ALI" | "TENCENT";
  /**
   * id
   */
  keyId?: string;
  /**
   * secret
   */
  keySecret?: string;
  /**
   * 验证码 模板ID
   */
  tplId?: string;
  /**
   * 验证码 模板签名
   */
  sign?: string;
} & {
  custom: boolean;
};

export type ScopeSms = {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 属于 阿里云 腾讯云
   */
  provider?: "ALI" | "TENCENT";
  /**
   * id
   */
  keyId?: string;
  /**
   * secret
   */
  keySecret?: string;
  /**
   * 验证码 模板ID
   */
  tplId?: string;
  /**
   * 验证码 模板签名
   */
  sign?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 邮箱配置
 */
export interface ScopeEmailDoc {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 邮箱服务器地址
   */
  host?: string;
  /**
   * 邮箱服务器端口
   */
  port?: number;
  /**
   * 是否开启tls
   */
  tls?: boolean;
  /**
   * tls开启后是否验证
   */
  authorize?: boolean;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 密码
   */
  from?: string;
}

export type ScopeEmailUpdateBody = {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 邮箱服务器地址
   */
  host?: string;
  /**
   * 邮箱服务器端口
   */
  port?: number;
  /**
   * 是否开启tls
   */
  tls?: boolean;
  /**
   * tls开启后是否验证
   */
  authorize?: boolean;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 密码
   */
  from?: string;
} & {
  custom: boolean;
};

export type ScopeEmail = {
  /**
   * 验证码过期时间 分钟
   */
  expire?: number;
  /**
   * 开启自定义
   */
  custom?: boolean;
  /**
   * 邮箱服务器地址
   */
  host?: string;
  /**
   * 邮箱服务器端口
   */
  port?: number;
  /**
   * 是否开启tls
   */
  tls?: boolean;
  /**
   * tls开启后是否验证
   */
  authorize?: boolean;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 密码
   */
  from?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 邮件模板配置
 */
export interface ScopeEmailtplDoc {
  /**
   * 模板类型
   */
  type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
  /**
   * 是否启用
   */
  custom?: boolean;
  /**
   * 邮件主题
   */
  subject?: string;
  /**
   * 邮件正文模板
   */
  content?: string;
}

export type ScopeEmailtplUpdateBody = {
  /**
   * 模板类型
   */
  type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
  /**
   * 是否启用
   */
  custom?: boolean;
  /**
   * 邮件主题
   */
  subject?: string;
  /**
   * 邮件正文模板
   */
  content?: string;
} & {
  custom: boolean;
};

/**
 * 邮件模板配置
 */
export type ScopeEmailtpl = {
  /**
   * 模板类型
   */
  type?: "WELCOME" | "BIND_VALID" | "UNBIND" | "RESETPWD_VALID" | "CHANGEPWD";
  /**
   * 是否启用
   */
  custom?: boolean;
  /**
   * 邮件主题
   */
  subject?: string;
  /**
   * 邮件正文模板
   */
  content?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * scope 安全配置
 */
export interface ScopeSecurityDoc {
  /**
   * jwt过期时间/秒
   */
  jwtExpire?: number;
  /**
   * session过期时间/秒
   */
  sessionExpire?: number;
  /**
   * 是否支持账号注册
   */
  account?: boolean;
  /**
   * 是否支持三方登录
   */
  thirdParty?: boolean;
  /**
   * 是否开启频繁注册限制
   */
  frequentRegister?: boolean;
  /**
   * 频繁注册限制时长/秒
   */
  frDuration?: number;
  /**
   * 频繁注册限制次数
   */
  frTimes?: number;
  /**
   * 是否开启登录失败限制
   */
  loginFail?: boolean;
  /**
   * 登录失败限制时长/秒
   */
  lfDuration?: number;
  /**
   * 登录失败限制次数
   */
  lfTimes?: number;
}

/**
 * scope 安全配置
 */
export type ScopeSecurity = {
  /**
   * jwt过期时间/秒
   */
  jwtExpire?: number;
  /**
   * session过期时间/秒
   */
  sessionExpire?: number;
  /**
   * 是否支持账号注册
   */
  account?: boolean;
  /**
   * 是否支持三方登录
   */
  thirdParty?: boolean;
  /**
   * 是否开启频繁注册限制
   */
  frequentRegister?: boolean;
  /**
   * 频繁注册限制时长/秒
   */
  frDuration?: number;
  /**
   * 频繁注册限制次数
   */
  frTimes?: number;
  /**
   * 是否开启登录失败限制
   */
  loginFail?: boolean;
  /**
   * 登录失败限制时长/秒
   */
  lfDuration?: number;
  /**
   * 登录失败限制次数
   */
  lfTimes?: number;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * scope register form item 注册配置项
 */
export interface ScopeRegisterItem {
  /**
   * item name
   */
  name: string;
  /**
   * 必填 or 选填
   */
  must: boolean;
}

/**
 * scope profile form item 个人中心配置项
 */
export interface ScopeProfileItem {
  /**
   * item name
   */
  name: string;
  /**
   * 必填 or 选填
   */
  must: boolean;
}

/**
 * scope config 子项
 */
export interface ScopeConfigItem {
  /**
   * 子项 关键字
   */
  key?: string;
  /**
   * 子项 值
   */
  value?: string;
  /**
   * 子项 描述
   */
  desc?: string;
}

/**
 * 用户池部分设置，主要用于小程序同步，避免经常修改
 */
export type ScopeConfig = {
  /**
   * 子项 关键字
   */
  key?: string;
  /**
   * 子项 值
   */
  value?: string;
  /**
   * 子项 描述
   */
  desc?: string;
}[];

/**
 * 用户池部分设置修改
 */
export interface ScopeConfigUpdateBody {
  data?: {
    /**
     * 子项 关键字
     */
    key?: string;
    /**
     * 子项 值
     */
    value?: string;
    /**
     * 子项 描述
     */
    desc?: string;
  }[];
}

/**
 * 验证方式 例如 微信 验证
 */
export interface ProviderDoc {
  /**
   * 描述
   */
  name?: string;
  /**
   * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
   */
  type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
  /**
   * app id
   */
  appId?: string;
  /**
   * app secret
   */
  appSecret?: string;
  /**
   * client id
   */
  clientId?: string;
  /**
   * 是否自动更新用户数据
   */
  update?: boolean;
  /**
   * 是否绑定用户
   */
  bind?: boolean;
}

export type Provider = {
  /**
   * 描述
   */
  name?: string;
  /**
   * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
   */
  type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
  /**
   * app id
   */
  appId?: string;
  /**
   * app secret
   */
  appSecret?: string;
  /**
   * client id
   */
  clientId?: string;
  /**
   * 是否自动更新用户数据
   */
  update?: boolean;
  /**
   * 是否绑定用户
   */
  bind?: boolean;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export type ProviderCreateBody = {
  /**
   * 描述
   */
  name?: string;
  /**
   * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
   */
  type?: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WECHAT_PHONE" | "WXQY" | "GITHUB";
  /**
   * app id
   */
  appId?: string;
  /**
   * app secret
   */
  appSecret?: string;
  /**
   * client id
   */
  clientId?: string;
  /**
   * 是否自动更新用户数据
   */
  update?: boolean;
  /**
   * 是否绑定用户
   */
  bind?: boolean;
} & {
  type: "PASSWORD" | "EMAIL" | "PHONE" | "WECHAT" | "WXAPP" | "WXQY" | "GITHUB";
};

/**
 * Github用户属性
 */
export interface GithubDoc {
  /**
   * github 用户名
   */
  username?: string;
  /**
   * github id
   */
  githubId?: string;
  /**
   * github 头像
   */
  avatar?: string;
  /**
   * github 姓名
   */
  name?: string;
  /**
   * 公司
   */
  company?: string;
  /**
   * 博客
   */
  blog?: string;
  /**
   * 所在地
   */
  location?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 最近登录的provider id
   */
  provider?: string;
  /**
   * 绑定 user id
   */
  user?: string;
  /**
   * github access token
   */
  token?: string;
}

export type Github = {
  /**
   * github 用户名
   */
  username?: string;
  /**
   * github id
   */
  githubId?: string;
  /**
   * github 头像
   */
  avatar?: string;
  /**
   * github 姓名
   */
  name?: string;
  /**
   * 公司
   */
  company?: string;
  /**
   * 博客
   */
  blog?: string;
  /**
   * 所在地
   */
  location?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 最近登录的provider id
   */
  provider?: string;
  /**
   * 绑定 user id
   */
  user?: string;
  /**
   * github access token
   */
  token?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * wechat 用户属性
 */
export interface WechatDoc {
  /**
   * wechat 昵称
   */
  nickname?: string;
  /**
   * union id
   */
  unionid?: string;
  /**
   * open id
   */
  openid?: string;
  /**
   * appId
   */
  appId?: string;
  /**
   * client id
   */
  clientId?: string;
  /**
   * 微信 头像
   */
  headimgurl?: string;
  /**
   * provider id
   */
  provider?: string;
  /**
   * 绑定 user id
   */
  user?: string;
}

export type Wechat = {
  /**
   * wechat 昵称
   */
  nickname?: string;
  /**
   * union id
   */
  unionid?: string;
  /**
   * open id
   */
  openid?: string;
  /**
   * appId
   */
  appId?: string;
  /**
   * client id
   */
  clientId?: string;
  /**
   * 微信 头像
   */
  headimgurl?: string;
  /**
   * provider id
   */
  provider?: string;
  /**
   * 绑定 user id
   */
  user?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 三方登录记录
 */
export type Profile =
  | ({
      /**
       * github 用户名
       */
      username?: string;
      /**
       * github id
       */
      githubId?: string;
      /**
       * github 头像
       */
      avatar?: string;
      /**
       * github 姓名
       */
      name?: string;
      /**
       * 公司
       */
      company?: string;
      /**
       * 博客
       */
      blog?: string;
      /**
       * 所在地
       */
      location?: string;
      /**
       * 邮箱
       */
      email?: string;
      /**
       * 最近登录的provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
      /**
       * github access token
       */
      token?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    })
  | ({
      /**
       * wechat 昵称
       */
      nickname?: string;
      /**
       * union id
       */
      unionid?: string;
      /**
       * open id
       */
      openid?: string;
      /**
       * appId
       */
      appId?: string;
      /**
       * client id
       */
      clientId?: string;
      /**
       * 微信 头像
       */
      headimgurl?: string;
      /**
       * provider id
       */
      provider?: string;
      /**
       * 绑定 user id
       */
      user?: string;
    } & {
      id: string;
      updateAt?: Date;
      updateBy?: string;
      createAt?: Date;
      createBy?: string;
    });

/**
 * app 配置
 */
export interface AppDoc {
  /**
   * 名称
   */
  name?: string;
  /**
   * app 类型
   */
  type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
  /**
   * 回调地址
   */
  redirectUri?: string;
}

export type App = {
  /**
   * 名称
   */
  name?: string;
  /**
   * app 类型
   */
  type?: "WEB" | "ANDROID" | "IOS" | "WXAPP";
  /**
   * 回调地址
   */
  redirectUri?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface NamespaceDoc {
  /**
   * 父空间
   */
  parent?: string;
  /**
   * 命名空间的名称，例如`百世诺`
   */
  name?: string;
  /**
   * 空间描述
   */
  desc?: string;
  labels?: string[];
  /**
   * 用户自定义数据
   */
  data?: string;
}

export type Namespace = {
  /**
   * 父空间
   */
  parent?: string;
  /**
   * 命名空间的名称，例如`百世诺`
   */
  name?: string;
  /**
   * 空间描述
   */
  desc?: string;
  labels?: string[];
  /**
   * 用户自定义数据
   */
  data?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export interface NamespaceCreateBody {
  /**
   * 唯一的英文名，不能重复
   */
  id: string;
  /**
   * 命名空间的名称，例如`百世诺`
   */
  name: string;
  /**
   * 空间描述
   */
  desc?: string;
  labels?: string[];
  /**
   * 用户自定义数据
   */
  data?: string;
}

/**
 * 用户一般属性
 */
export interface UserCommonPropDoc {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
}

/**
 * 用户通用属性
 */
export interface UserDefaultPropDoc {
  /**
   * 所在的ns
   */
  ns?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 角色
   */
  roles?: string[];
  /**
   * 是否锁定
   */
  lock?: boolean;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 用户来源
   */
  source?:
    | "DEFAULT"
    | "PHONE"
    | "EMAIL"
    | "PASSWORD"
    | "GITHUB"
    | "WX"
    | "WXAPP"
    | "WXCORP_INSEDE"
    | "WXCORP_OUTSIDE";
  labels?: string[];
  /**
   * 用户类型
   */
  type?: string;
}

export type User = {
  /**
   * 所在的ns
   */
  ns?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 角色
   */
  roles?: string[];
  /**
   * 是否锁定
   */
  lock?: boolean;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 用户来源
   */
  source?:
    | "DEFAULT"
    | "PHONE"
    | "EMAIL"
    | "PASSWORD"
    | "GITHUB"
    | "WX"
    | "WXAPP"
    | "WXCORP_INSEDE"
    | "WXCORP_OUTSIDE";
  labels?: string[];
  /**
   * 用户类型
   */
  type?: string;
} & {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

export type UserCreateBody = {
  /**
   * 所在的ns
   */
  ns?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 角色
   */
  roles?: string[];
  /**
   * 是否锁定
   */
  lock?: boolean;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 用户来源
   */
  source?:
    | "DEFAULT"
    | "PHONE"
    | "EMAIL"
    | "PASSWORD"
    | "GITHUB"
    | "WX"
    | "WXAPP"
    | "WXCORP_INSEDE"
    | "WXCORP_OUTSIDE";
  labels?: string[];
  /**
   * 用户类型
   */
  type?: string;
} & {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
} & {
  ns: string;
  username?: string;
  /**
   * 密码
   */
  password: string;
};

export type UserUpdateBody = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
} & {
  /**
   * 所在的ns
   */
  ns?: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 角色
   */
  roles?: string[];
  /**
   * 是否锁定
   */
  lock?: boolean;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 用户来源
   */
  source?:
    | "DEFAULT"
    | "PHONE"
    | "EMAIL"
    | "PASSWORD"
    | "GITHUB"
    | "WX"
    | "WXAPP"
    | "WXCORP_INSEDE"
    | "WXCORP_OUTSIDE";
  labels?: string[];
  /**
   * 用户类型
   */
  type?: string;
} & {
  /**
   * 密码
   */
  password?: string;
  /**
   * 手机验证码
   */
  phoneCode?: string;
  /**
   * 邮箱验证码
   */
  emailCode?: string;
};

/**
 * 用户修改个人密码
 */
export interface UserUpdatePasswordBody {
  /**
   * 原密码
   */
  oldPassword: string;
  /**
   * 新密码
   */
  password: string;
}

export type UserRegisterBody = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
} & {
  /**
   * scope id
   */
  scope: string;
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 手机验证码
   */
  phoneCode?: string;
  /**
   * 邮箱验证码
   */
  emailCode?: string;
  /**
   * 邀请码
   */
  inviteCode?: string;
};

export type UserThirdRegisterBody = {
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 昵称
   */
  nickname?: string;
  /**
   * 身份证号
   */
  idnumber?: string;
  /**
   * QQ号
   */
  qq?: string;
  /**
   * 微信号
   */
  wechat?: string;
  /**
   * 个人简介
   */
  personalinfo?: string;
  /**
   * 出生日期
   */
  birthday?: Date;
  /**
   * 兴趣爱好
   */
  hobby?: string;
  /**
   * 地址
   */
  address?: string;
  /**
   * 国家
   */
  country?: string;
  /**
   * 性别
   */
  gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
  /**
   * 公司名
   */
  company?: string;
  /**
   * 工号
   */
  worknumber?: string;
  /**
   * 工龄
   */
  wordyear?: string;
  /**
   * 资质
   */
  credential?: string;
  /**
   * 职位
   */
  position?: string;
  /**
   * 毕业院校
   */
  school?: string;
  /**
   * 专业
   */
  major?: string;
  /**
   * 学历
   */
  education?: string;
  /**
   * 班级
   */
  class?: string;
  /**
   * 导师
   */
  teacher?: string;
  /**
   * 开户行
   */
  bank?: string;
  /**
   * 银行卡号
   */
  bankcardnumber?: string;
  /**
   * 自定义信息
   */
  data?: string;
} & {
  /**
   * 用户名
   */
  username?: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 手机验证码
   */
  phoneCode?: string;
  /**
   * 邮箱验证码
   */
  emailCode?: string;
  /**
   * 邀请码
   */
  inviteCode?: string;
};

export interface UserPasswordResetBody {
  /**
   * provider id
   */
  provider: string;
  /**
   * 电话
   */
  phone?: string;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 手机验证码
   */
  phoneCode?: string;
  /**
   * 邮箱验证码
   */
  emailCode?: string;
  /**
   * 密码
   */
  password: string;
}

/**
 * 绑定现有账户所需的参数
 */
export interface UserBindBody {
  /**
   * 验证方式 ( provider id )
   */
  provider: string;
  /**
   * 用户名/邮箱/手机号
   */
  username: string;
  /**
   * 密码
   */
  password: string;
}

/**
 * auth会话信息
 */
export interface SessionDoc {
  /**
   * 会话过期时间
   */
  expireAt?: Date;
  /**
   * token过期时间
   */
  tokenExpireAt?: Date;
  /**
   * session belongs to ns
   */
  ns?: string;
  provider?:
    | ({
        /**
         * 描述
         */
        name?: string;
        /**
         * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
         */
        type?:
          | "PASSWORD"
          | "EMAIL"
          | "PHONE"
          | "WECHAT"
          | "WXAPP"
          | "WECHAT_PHONE"
          | "WXQY"
          | "GITHUB";
        /**
         * app id
         */
        appId?: string;
        /**
         * app secret
         */
        appSecret?: string;
        /**
         * client id
         */
        clientId?: string;
        /**
         * 是否自动更新用户数据
         */
        update?: boolean;
        /**
         * 是否绑定用户
         */
        bind?: boolean;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  /**
   * 角色
   */
  roles?: string[];
  user?: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  github?: {
    /**
     * github 用户名
     */
    username?: string;
    /**
     * github id
     */
    githubId?: string;
    /**
     * github 头像
     */
    avatar?: string;
    /**
     * github 姓名
     */
    name?: string;
    /**
     * 公司
     */
    company?: string;
    /**
     * 博客
     */
    blog?: string;
    /**
     * 所在地
     */
    location?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 最近登录的provider id
     */
    provider?: string;
    /**
     * 绑定 user id
     */
    user?: string;
    /**
     * github access token
     */
    token?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  wechat?: {
    /**
     * wechat 昵称
     */
    nickname?: string;
    /**
     * union id
     */
    unionid?: string;
    /**
     * open id
     */
    openid?: string;
    /**
     * appId
     */
    appId?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 微信 头像
     */
    headimgurl?: string;
    /**
     * provider id
     */
    provider?: string;
    /**
     * 绑定 user id
     */
    user?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  /**
   * 是否可用
   */
  active?: boolean;
}

export type Session = {
  /**
   * 会话过期时间
   */
  expireAt?: Date;
  /**
   * token过期时间
   */
  tokenExpireAt?: Date;
  /**
   * session belongs to ns
   */
  ns?: string;
  provider?:
    | ({
        /**
         * 描述
         */
        name?: string;
        /**
         * 密码验证，邮箱验证，手机验证，微信公众号，微信小程序，微信企业号，GITHUB
         */
        type?:
          | "PASSWORD"
          | "EMAIL"
          | "PHONE"
          | "WECHAT"
          | "WXAPP"
          | "WECHAT_PHONE"
          | "WXQY"
          | "GITHUB";
        /**
         * app id
         */
        appId?: string;
        /**
         * app secret
         */
        appSecret?: string;
        /**
         * client id
         */
        clientId?: string;
        /**
         * 是否自动更新用户数据
         */
        update?: boolean;
        /**
         * 是否绑定用户
         */
        bind?: boolean;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  /**
   * 角色
   */
  roles?: string[];
  user?: {
    /**
     * 所在的ns
     */
    ns?: string;
    /**
     * 用户名
     */
    username?: string;
    /**
     * 电话
     */
    phone?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 角色
     */
    roles?: string[];
    /**
     * 是否锁定
     */
    lock?: boolean;
    /**
     * 是否激活
     */
    active?: boolean;
    /**
     * 过期时间
     */
    expireAt?: Date;
    /**
     * 用户来源
     */
    source?:
      | "DEFAULT"
      | "PHONE"
      | "EMAIL"
      | "PASSWORD"
      | "GITHUB"
      | "WX"
      | "WXAPP"
      | "WXCORP_INSEDE"
      | "WXCORP_OUTSIDE";
    labels?: string[];
    /**
     * 用户类型
     */
    type?: string;
  } & {
    /**
     * 头像
     */
    avatar?: string;
    /**
     * 昵称
     */
    nickname?: string;
    /**
     * 身份证号
     */
    idnumber?: string;
    /**
     * QQ号
     */
    qq?: string;
    /**
     * 微信号
     */
    wechat?: string;
    /**
     * 个人简介
     */
    personalinfo?: string;
    /**
     * 出生日期
     */
    birthday?: Date;
    /**
     * 兴趣爱好
     */
    hobby?: string;
    /**
     * 地址
     */
    address?: string;
    /**
     * 国家
     */
    country?: string;
    /**
     * 性别
     */
    gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
    /**
     * 公司名
     */
    company?: string;
    /**
     * 工号
     */
    worknumber?: string;
    /**
     * 工龄
     */
    wordyear?: string;
    /**
     * 资质
     */
    credential?: string;
    /**
     * 职位
     */
    position?: string;
    /**
     * 毕业院校
     */
    school?: string;
    /**
     * 专业
     */
    major?: string;
    /**
     * 学历
     */
    education?: string;
    /**
     * 班级
     */
    class?: string;
    /**
     * 导师
     */
    teacher?: string;
    /**
     * 开户行
     */
    bank?: string;
    /**
     * 银行卡号
     */
    bankcardnumber?: string;
    /**
     * 自定义信息
     */
    data?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  github?: {
    /**
     * github 用户名
     */
    username?: string;
    /**
     * github id
     */
    githubId?: string;
    /**
     * github 头像
     */
    avatar?: string;
    /**
     * github 姓名
     */
    name?: string;
    /**
     * 公司
     */
    company?: string;
    /**
     * 博客
     */
    blog?: string;
    /**
     * 所在地
     */
    location?: string;
    /**
     * 邮箱
     */
    email?: string;
    /**
     * 最近登录的provider id
     */
    provider?: string;
    /**
     * 绑定 user id
     */
    user?: string;
    /**
     * github access token
     */
    token?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  wechat?: {
    /**
     * wechat 昵称
     */
    nickname?: string;
    /**
     * union id
     */
    unionid?: string;
    /**
     * open id
     */
    openid?: string;
    /**
     * appId
     */
    appId?: string;
    /**
     * client id
     */
    clientId?: string;
    /**
     * 微信 头像
     */
    headimgurl?: string;
    /**
     * provider id
     */
    provider?: string;
    /**
     * 绑定 user id
     */
    user?: string;
  } & {
    id: string;
    updateAt?: Date;
    updateBy?: string;
    createAt?: Date;
    createBy?: string;
  };
  /**
   * 是否可用
   */
  active?: boolean;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * token
   */
  token: string;
};

export type SessionCreateBody = {
  /**
   * 验证方式 ( provider id )
   */
  provider: string;
  /**
   * 用户名/邮箱/手机号
   */
  username?: string;
  /**
   * 密码
   */
  password?: string;
  /**
   * 手机号 用于手机号登陆
   */
  phone?: string;
  /**
   * 邮箱 用于忘记密码
   */
  email?: string;
  /**
   * 各种授权code
   */
  code?: string;
  /**
   * 手机验证码
   */
  phoneCode?: string;
  /**
   * 邮箱验证码
   */
  emailCode?: string;
  /**
   * 微信小程序登陆时的用户加密数据
   */
  encryptedData?: string;
  /**
   * 微信小程序登陆时的解密iv
   */
  iv?: string;
  /**
   * 验证码key
   */
  captchaKey?: string;
  /**
   * 验证码key
   */
  captchaCode?: string;
};

export type ScopeSession = {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
} & {
  /**
   * user
   */
  user?:
    | ({
        /**
         * 所在的ns
         */
        ns?: string;
        /**
         * 用户名
         */
        username?: string;
        /**
         * 电话
         */
        phone?: string;
        /**
         * 邮箱
         */
        email?: string;
        /**
         * 角色
         */
        roles?: string[];
        /**
         * 是否锁定
         */
        lock?: boolean;
        /**
         * 是否激活
         */
        active?: boolean;
        /**
         * 过期时间
         */
        expireAt?: Date;
        /**
         * 用户来源
         */
        source?:
          | "DEFAULT"
          | "PHONE"
          | "EMAIL"
          | "PASSWORD"
          | "GITHUB"
          | "WX"
          | "WXAPP"
          | "WXCORP_INSEDE"
          | "WXCORP_OUTSIDE";
        labels?: string[];
        /**
         * 用户类型
         */
        type?: string;
      } & {
        /**
         * 头像
         */
        avatar?: string;
        /**
         * 昵称
         */
        nickname?: string;
        /**
         * 身份证号
         */
        idnumber?: string;
        /**
         * QQ号
         */
        qq?: string;
        /**
         * 微信号
         */
        wechat?: string;
        /**
         * 个人简介
         */
        personalinfo?: string;
        /**
         * 出生日期
         */
        birthday?: Date;
        /**
         * 兴趣爱好
         */
        hobby?: string;
        /**
         * 地址
         */
        address?: string;
        /**
         * 国家
         */
        country?: string;
        /**
         * 性别
         */
        gender?: "UNKOWN" | "MALE" | "FEMALE" | "OTHER";
        /**
         * 公司名
         */
        company?: string;
        /**
         * 工号
         */
        worknumber?: string;
        /**
         * 工龄
         */
        wordyear?: string;
        /**
         * 资质
         */
        credential?: string;
        /**
         * 职位
         */
        position?: string;
        /**
         * 毕业院校
         */
        school?: string;
        /**
         * 专业
         */
        major?: string;
        /**
         * 学历
         */
        education?: string;
        /**
         * 班级
         */
        class?: string;
        /**
         * 导师
         */
        teacher?: string;
        /**
         * 开户行
         */
        bank?: string;
        /**
         * 银行卡号
         */
        bankcardnumber?: string;
        /**
         * 自定义信息
         */
        data?: string;
      } & {
        id: string;
        updateAt?: Date;
        updateBy?: string;
        createAt?: Date;
        createBy?: string;
      })
    | string;
  /**
   * 会话过期时间
   */
  expireAt?: Date;
  /**
   * token过期时间
   */
  tokenExpireAt?: Date;
  /**
   * 是否可用
   */
  active?: boolean;
  /**
   * session belongs to ns
   */
  ns?: string;
  /**
   * 是否可用
   */
  provider?: string;
};

/**
 * 修改 session 的参数
 */
export interface SessionUpdateBody {
  /**
   * 是否可用
   */
  active: boolean;
}

/**
 * 验证码，用于发送手机或邮箱验证码
 */
export interface ValidationDoc {
  /**
   * 所属的 scope
   */
  scope?: string;
  email?: string;
  phone?: string;
  /**
   * 验证码过期时间
   */
  expireAt?: Date;
  /**
   * 是否已经使用
   */
  used?: boolean;
  /**
   * 验证码使用时间
   */
  usedAt?: Date;
  /**
   * 验证码属于手机或者邮箱
   */
  type?: "PHONE" | "EMAIL";
}

export type Validation = {
  /**
   * 所属的 scope
   */
  scope?: string;
  email?: string;
  phone?: string;
  /**
   * 验证码过期时间
   */
  expireAt?: Date;
  /**
   * 是否已经使用
   */
  used?: boolean;
  /**
   * 验证码使用时间
   */
  usedAt?: Date;
  /**
   * 验证码属于手机或者邮箱
   */
  type?: "PHONE" | "EMAIL";
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 创建验证码需要的参数
 */
export interface CreateValidationBody {
  scope: string;
  phone?: string;
  email?: string;
  kind?: "BIND_VALID" | "RESETPWD_VALID";
}

/**
 * 邀请码
 */
export interface InvitationDoc {
  /**
   * 邀请码
   */
  code?: string;
  /**
   * 来源
   */
  source?: string;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 是否重复使用
   */
  reuse?: boolean;
  /**
   * 是否已经使用
   */
  used?: boolean;
  /**
   * 邀请码使用时间
   */
  usedAt?: Date;
  /**
   * 邀请码关联邮箱
   */
  email?: string;
}

export type Invitation = {
  /**
   * 邀请码
   */
  code?: string;
  /**
   * 来源
   */
  source?: string;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 是否重复使用
   */
  reuse?: boolean;
  /**
   * 是否已经使用
   */
  used?: boolean;
  /**
   * 邀请码使用时间
   */
  usedAt?: Date;
  /**
   * 邀请码关联邮箱
   */
  email?: string;
} & {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
};

/**
 * 创建邀请码需要的参数
 */
export type InvitationCreateBody = {
  /**
   * 邀请码
   */
  code?: string;
  /**
   * 来源
   */
  source?: string;
  /**
   * 过期时间
   */
  expireAt?: Date;
  /**
   * 是否激活
   */
  active?: boolean;
  /**
   * 是否重复使用
   */
  reuse?: boolean;
  /**
   * 是否已经使用
   */
  used?: boolean;
  /**
   * 邀请码使用时间
   */
  usedAt?: Date;
  /**
   * 邀请码关联邮箱
   */
  email?: string;
} & {
  code: string;
};

export interface MongoDefault {
  id: string;
  updateAt?: Date;
  updateBy?: string;
  createAt?: Date;
  createBy?: string;
}

export interface Err {
  code?: string;
  type?: string;
  message: boolean;
  name: string;
  details?: {
    keyword?: string;
    message?: string;
    path?: string;
    value?: string;
  }[];
}

export = SDK;
