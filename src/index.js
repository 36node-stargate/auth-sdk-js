//@ts-check
import fetch from "@36node/fetch";

export default class SDK {
  /**@type {string} **/
  base;
  /**@type {string} **/
  token;

  /**
   * Sdk auth
   *
   * @returns {string} auth header
   * */
  get auth() {
    let token = this.token;
    // @ts-ignore
    if (typeof token === "function") token = token();
    if (token) return `Bearer ${token}`;

    return "";
  }

  /**
   * Init store sdk
   *
   * @param {Object} opt
   * @param {string} opt.base  base url
   * @param {string} opt.token token for authorization
   */
  constructor(opt = { base: "", token: "" }) {
    this.base = opt.base;
    this.token = opt.token;
  }

  /**
   * namespace's methods
   */
  namespace = {
    /**
     * Create namespace
     *
     * @param {CreateNamespaceRequest} req createNamespace request
     * @returns {Promise<CreateNamespaceResponse>} The namespace created
     */
    createNamespace: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createNamespace");

      return fetch(`${this.base}/namespaces`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List namespaces
     *
     * @param {ListNamespacesRequest} req listNamespaces request
     * @returns {Promise<ListNamespacesResponse>} A paged array of namespaces
     */
    listNamespaces: req => {
      const { query } = req || {};

      return fetch(`${this.base}/namespaces`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get namespace by id
     *
     * @param {GetNamespaceRequest} req getNamespace request
     * @returns {Promise<GetNamespaceResponse>} The namespace with given id
     */
    getNamespace: req => {
      const { namespaceId } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for getNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update namespace
     *
     * @param {UpdateNamespaceRequest} req updateNamespace request
     * @returns {Promise<UpdateNamespaceResponse>} The namespace
     */
    updateNamespace: req => {
      const { namespaceId, body } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for updateNamespace");
      if (!body) throw new Error("requetBody is required for updateNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete namespace
     *
     * @param {DeleteNamespaceRequest} req deleteNamespace request
     */
    deleteNamespace: req => {
      const { namespaceId } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for deleteNamespace");

      return fetch(`${this.base}/namespaces/${namespaceId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get register onfig by ns id
     *
     * @param {GetConfigRequest} req getConfig request
     * @returns {Promise<GetConfigResponse>} The register config with given ns id
     */
    getConfig: req => {
      const { namespaceId } = req || {};

      if (!namespaceId)
        throw new Error("namespaceId is required for getConfig");

      return fetch(`${this.base}/config/${namespaceId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * session's methods
   */
  session = {
    /**
     * Create session
     *
     * @param {CreateSessionRequest} req createSession request
     * @returns {Promise<CreateSessionResponse>} The session created
     */
    createSession: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createSession");

      return fetch(`${this.base}/sessions`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List sessions
     *
     * @param {ListSessionsRequest} req listSessions request
     * @returns {Promise<ListSessionsResponse>} A paged array of session
     */
    listSessions: req => {
      const { query } = req || {};

      return fetch(`${this.base}/sessions`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get session and auto refresh it if need
     *
     * @param {GetSessionRequest} req getSession request
     * @returns {Promise<GetSessionResponse>} The session
     */
    getSession: req => {
      const { sessionId } = req || {};

      if (!sessionId) throw new Error("sessionId is required for getSession");

      return fetch(`${this.base}/sessions/${sessionId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Deletes a session
     *
     * @param {DeleteSessionRequest} req deleteSession request
     */
    deleteSession: req => {
      const { sessionId } = req || {};

      if (!sessionId)
        throw new Error("sessionId is required for deleteSession");

      return fetch(`${this.base}/sessions/${sessionId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Create temp token
     *
     * @param {CreateTokenRequest} req createToken request
     * @returns {Promise<CreateTokenResponse>} The code created
     */
    createToken: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createToken");

      return fetch(`${this.base}/test`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * bind user
     *
     * @param {BindUserRequest} req bindUser request
     * @returns {Promise<BindUserResponse>} The session created
     */
    bindUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for bindUser");

      return fetch(`${this.base}/bind`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * validation's methods
   */
  validation = {
    /**
     * Create validation 发送验证码
     *
     * @param {CreateValidationRequest} req createValidation request
     * @returns {Promise<CreateValidationResponse>} The validation created
     */
    createValidation: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createValidation");

      return fetch(`${this.base}/validation`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * provider's methods
   */
  provider = {
    /**
     * Create provider
     *
     * @param {CreateProviderRequest} req createProvider request
     * @returns {Promise<CreateProviderResponse>} The provider created
     */
    createProvider: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createProvider");

      return fetch(`${this.base}/providers`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List providers
     *
     * @param {ListProvidersRequest} req listProviders request
     * @returns {Promise<ListProvidersResponse>} A paged array of providers
     */
    listProviders: req => {
      const { query } = req || {};

      return fetch(`${this.base}/providers`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get provider by id
     *
     * @param {GetProviderRequest} req getProvider request
     * @returns {Promise<GetProviderResponse>} The provider with given id
     */
    getProvider: req => {
      const { providerId } = req || {};

      if (!providerId)
        throw new Error("providerId is required for getProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update provider
     *
     * @param {UpdateProviderRequest} req updateProvider request
     * @returns {Promise<UpdateProviderResponse>} The provider
     */
    updateProvider: req => {
      const { providerId, body } = req || {};

      if (!providerId)
        throw new Error("providerId is required for updateProvider");
      if (!body) throw new Error("requetBody is required for updateProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete provider
     *
     * @param {DeleteProviderRequest} req deleteProvider request
     */
    deleteProvider: req => {
      const { providerId } = req || {};

      if (!providerId)
        throw new Error("providerId is required for deleteProvider");

      return fetch(`${this.base}/providers/${providerId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * user's methods
   */
  user = {
    /**
     * Create user
     *
     * @param {CreateUserRequest} req createUser request
     * @returns {Promise<CreateUserResponse>} The user created
     */
    createUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createUser");

      return fetch(`${this.base}/users`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List users
     *
     * @param {ListUsersRequest} req listUsers request
     * @returns {Promise<ListUsersResponse>} A paged array of users
     */
    listUsers: req => {
      const { query } = req || {};

      return fetch(`${this.base}/users`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get user by id
     *
     * @param {GetUserRequest} req getUser request
     * @returns {Promise<GetUserResponse>} The user with given id
     */
    getUser: req => {
      const { userId } = req || {};

      if (!userId) throw new Error("userId is required for getUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update user
     *
     * @param {UpdateUserRequest} req updateUser request
     * @returns {Promise<UpdateUserResponse>} The user
     */
    updateUser: req => {
      const { userId, body } = req || {};

      if (!userId) throw new Error("userId is required for updateUser");
      if (!body) throw new Error("requetBody is required for updateUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete user
     *
     * @param {DeleteUserRequest} req deleteUser request
     */
    deleteUser: req => {
      const { userId } = req || {};

      if (!userId) throw new Error("userId is required for deleteUser");

      return fetch(`${this.base}/users/${userId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * register user
     *
     * @param {RegisterUserRequest} req registerUser request
     * @returns {Promise<RegisterUserResponse>} The user register
     */
    registerUser: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for registerUser");

      return fetch(`${this.base}/register`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * code's methods
   */
  code = {
    /**
     * Create code
     *
     * @param {CreateCodeRequest} req createCode request
     * @returns {Promise<CreateCodeResponse>} The code created
     */
    createCode: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createCode");

      return fetch(`${this.base}/code`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
  };
  /**
   * app's methods
   */
  app = {
    /**
     * Create app
     *
     * @param {CreateAppRequest} req createApp request
     * @returns {Promise<CreateAppResponse>} The provider created
     */
    createApp: req => {
      const { body } = req || {};

      if (!body) throw new Error("requetBody is required for createApp");

      return fetch(`${this.base}/apps`, {
        method: "POST",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * List apps
     *
     * @param {ListAppsRequest} req listApps request
     * @returns {Promise<ListAppsResponse>} A paged array of apps
     */
    listApps: req => {
      const { query } = req || {};

      return fetch(`${this.base}/apps`, {
        method: "GET",
        query,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Get app by id
     *
     * @param {GetAppRequest} req getApp request
     * @returns {Promise<GetAppResponse>} The app with given id
     */
    getApp: req => {
      const { appId } = req || {};

      if (!appId) throw new Error("appId is required for getApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "GET",
        headers: { Authorization: this.auth },
      });
    },
    /**
     * Update app
     *
     * @param {UpdateAppRequest} req updateApp request
     * @returns {Promise<UpdateAppResponse>} The provider
     */
    updateApp: req => {
      const { appId, body } = req || {};

      if (!appId) throw new Error("appId is required for updateApp");
      if (!body) throw new Error("requetBody is required for updateApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "PUT",
        body,
        headers: { Authorization: this.auth },
      });
    },
    /**
     * delete app
     *
     * @param {DeleteAppRequest} req deleteApp request
     */
    deleteApp: req => {
      const { appId } = req || {};

      if (!appId) throw new Error("appId is required for deleteApp");

      return fetch(`${this.base}/apps/${appId}`, {
        method: "DELETE",
        headers: { Authorization: this.auth },
      });
    },
  };
}
